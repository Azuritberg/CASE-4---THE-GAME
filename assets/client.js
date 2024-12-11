const socket = new WebSocket("http://localhost:8000")

let myID = null;


socket.addEventListener("open", (event) =>{
    console.log("Connected!")
})

// Listen for messages from the server to retrieve myID
socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    if(data.message === "returningInitializeLobbyJoin"){
        console.log("we should now initialize", data);
        //here we should render the game data
        renderLobby(JSON.stringify(data.data));
    }else if (data.message === "returningInitializeLobbyCreate"){
        console.log("recived this data from server: ", data, ":3");
        renderLobby(JSON.stringify(data.data));
    }else if(data.message === "YOU HAVE BEEN NOTIFIED"){
        console.log(data.message);
        
    }else if(data.message === "playerJoinedYourLobby"){
        console.log("a new player joined our lobby!!!");
        renderLobby(JSON.stringify(data.data));
    }else if(data.message === "playerLeftRoom"){
        console.log("a player left our room, let's render this lobby anew!!!")
        console.log(data.newRoom);
        renderLobby(JSON.stringify(data.newRoom));
    }else if(data.message === "hostLeftRoom"){
        startApp();
        window.alert("host seems to have disconnected from our server u_u very sorry")
    }else if (data.connection !== undefined) {
        myID = data.connection.myID; // Store the assigned connection ID
    }
    
    //else if(data.messsage === "new turn"){
    //  if(data.data.yourTurn){it's my turn!! do my turn}
    //  else {other players turn render waiting room}
    //}
});

console.log(socket)


socket.addEventListener("close", (event) =>{
    //deal with closed tab
    //remove users and such
    console.log("Disconnected!")
})

let main = document.querySelector("main");

async function startApp() 
{
   main.innerHTML= `<button id="btnCreateForm">Create Game</button>
                    <button id="btnJoinForm">Join Game</button>`

   let btnCreateForm = document.querySelector("#btnCreateForm");
   let btnJoinForm = document.querySelector("#btnJoinForm");

btnCreateForm.addEventListener("click", createGame);
btnJoinForm.addEventListener("click", joinGame);
}
function startGame(){
    //starting the game from client side
    //send by socket that game is started
}
function startAppError() 
{
    main.innerHTML= `<button id="btnStart">Start</button>
                    <p id = errorMsg> No card found with this ID. </p>`
 
    let btn = document.querySelector("#btnStart");
 
 btn.addEventListener("click", makeField);
 }

 

function createGame() 
{
     main.innerHTML= `<input type="text" id="hostName" name="hostName" placeholder=" Enter your name">
                        <input type="text" id="gameName" name="name" placeholder=" Enter game code">
                        <button id="btnCreateGame">Create Game</button> 
                        <button id="btnBack">back</button> 
                      <p id="feedback"></p>`

    let btnBack = document.querySelector("#btnBack");
    btnBack.addEventListener("click", startApp);
    let btnCreate = document.querySelector("#btnCreateGame");
    btnCreate.addEventListener("click", () => {
        let gameName = document.querySelector("#gameName").value;
        let hostName = document.querySelector("#hostName").value;
        initializeLobby("initalizeLobbyCreate", gameName, hostName);
        console.log("HEJ")
    })


    /* const createGameForm = document.querySelector("#createGameForm")
    createGameForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const formData= new FormData(createGameForm)
        const game = {}
        formData.forEach((value, key)=>{game[key]=value}) 
        // game.hostID

        game.hostID = myID;
        game.players = [{id: myID, name:game.hostName, points: 0, turn:true}]

        const request = new Request("/api/cards",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(game)
        })
        const response = await fetch(request)

        if(response.ok)
            {
                const data = await response.json()
                console.log(data)
            }
            createGameForm.reset()
    }) */
    
    
}

function joinGame() 
{
    main.innerHTML= `<input type="text" id="userName" placeholder=" Enter your name" />
        <input type="text" id="joinGameCode" placeholder=" Enter game code" />
        <button id="btnJoinGame">Join Game</button>
        <button id="btnBack">back</button>  
        <p id="feedback"></p>`;
    let btnBack = document.querySelector("#btnBack");
    btnBack.addEventListener("click", startApp);
    let btnJoinGame = document.querySelector("#btnJoinGame");

    btnJoinGame.addEventListener("click", ()=> {
        let gameName = document.querySelector("#joinGameCode").value;
        let userName = document.querySelector("#userName").value;
        initializeLobby("initalizeLobbyJoin", gameName, userName);
    });
}
async function initializeLobby(modifier, gameName, userName){
    let data = {
        message : modifier,
        gameName : gameName,
        userID: myID,
        userName: userName
    }
    console.log(data);
    socket.send(JSON.stringify(data));
}
async function renderLobby(lobbyData) {
    document.querySelector("main").innerHTML = "";
    //the lobby should be rendered here based on players in the room
    document.querySelector("main").append(lobbyData);
}
function makeField() {
    main.innerHTML = `
        <input type="text" id="input" placeholder="Enter ID" />
        <p id="feedback"></p>
    `;

    let inputField = document.querySelector("#input");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const inputValue = inputField.value.trim();
            if (!inputValue) {
                displayFeedback("Please enter a valid ID.");
                return;
            }
            fetchCard(inputValue);
        }
    });
}

async function fetchCard(index) {
    try {
        const response = await fetch("api/cards");
        const data = await response.json();

        let cards = data.cards
        let found = false;

        main.innerHTML = `
            <div id="type"></div>
            <div id="questions"></div>
            <div id="alternatives">
                <button id="alternative0"></button>
                <button id="alternative1"></button>
                <button id="alternative2"></button>
                <button id="alternative3"></button>
            </div>
        `;

        let type = document.querySelector("#type");
        let questions = document.querySelector("#questions");
        let child0 = document.querySelector("#alternative0");
        let child1 = document.querySelector("#alternative1");
        let child2 = document.querySelector("#alternative2");
        let child3 = document.querySelector("#alternative3");
        let correct;

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id === parseInt(index)) {
                type.textContent = `Type: ${cards[i].type}`;
                questions.textContent = `Question: ${cards[i].question}`;
                child0.textContent = cards[i].alternatives[0];
                child1.textContent = cards[i].alternatives[1];
                child2.textContent = cards[i].alternatives[2];
                child3.textContent = cards[i].alternatives[3];
                correct = cards[i].correct
                
                found = true;

                
                break; // Exit the loop after finding a match
            }

            
        }

        child0.addEventListener("click", correctChoise)
        child1.addEventListener("click", correctChoise)
        child2.addEventListener("click", correctChoise)
        child3.addEventListener("click", correctChoise)

        
        const alternatives = document.querySelectorAll("#alternatives > button");
        

        function correctChoise(event) {
            const selectedId = event.target.id; // Get the ID of the clicked button
            const selectedNumber = selectedId.replace("alternative", ""); // Remove the "alternative" part
            if (selectedNumber === correct.toString()) { // Compare only the numeric part
                let p = document.createElement("p");
                p.textContent = "YOU GOT IT!!!";
                let cont = document.createElement("button")
                cont.textContent="Continue"
                cont.addEventListener("click", makeField)
                main.appendChild(p);
                main.appendChild(cont)
                alternatives.forEach(button => {
                    button.disabled = true
                });
                
            } else {
                let p = document.createElement("p");
                p.textContent = "Sorry, that's wrong";
                let cont = document.createElement("button")
                cont.textContent="Continue"
                cont.addEventListener("click", makeField)
                main.appendChild(p);
                main.appendChild(cont)
                alternatives.forEach(button => {
                    button.disabled = true
                });
            }
        }
        
        

 

      


        

        if (!found) {
            startAppError();
        }
    } catch (error) {
        console.error("Error fetching data:", error);
       
    }
}


startApp()


