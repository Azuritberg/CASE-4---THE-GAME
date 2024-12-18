const socket = new WebSocket("http://localhost:8000")

let myID = null;

socket.addEventListener("open", (event) =>{
    console.log("Connected!")
})

socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    if(data.message === "returningInitializeLobbyJoin"){
        console.log("we should now initialize", data);     
        renderLobbyPlayer(JSON.stringify(data.data));
    }else if (data.message === "returningInitializeLobbyCreate"){
        console.log("recived this data from server: ", data, ":3");
        renderLobbyHost(JSON.stringify(data.data));
    }else if(data.message === "YOU HAVE BEEN NOTIFIED"){
        console.log(data.message);      
    }else if(data.message === "playerJoinedYourLobby"){
        if(data.data.hostID === myID){
            renderLobbyHost(JSON.stringify(data.data));
            console.log("jag är host")
        } else {
            console.log("jag är INTE host")
            renderLobbyPlayer(JSON.stringify(data.data));
        }     
        console.log("a new player joined our lobby!!!",myID);
        
    }else if(data.message === "playerLeftRoom"){
        console.log("a player left our room, let's render this lobby anew!!!")
        console.log(data.newRoom.players);
        if(data.newRoom.hostID === myID){
            renderLobbyHost(JSON.stringify(data.newRoom));
            console.log("jag är host")
        } else {
            console.log("jag är INTE host")
            renderLobbyPlayer(JSON.stringify(data.newRoom));
        }
    }else if(data.message === "hostLeftRoom"){
        startApp();
        window.alert("host seems to have disconnected from our server u_u very sorry")
    }else if (data.connection !== undefined) {
        myID = data.connection.myID; // Store the assigned connection ID
    }
    else if(data.message==="returningStartGame")
        {
            console.log(data.data.players)
            for (let i = 0; i < data.data.players.length; i++) {
                if (data.data.players[i].id===myID) {
                    if (data.data.players[i].turn===true) {
                        makeField(JSON.stringify(data.data));
                    } else 
                    {                  
                        renderLeaderboard(JSON.stringify(data.data))
                    }
                }          
            }
        }
    else if(data.message==="returningHandleTurn")
        {

            console.log("handleTurn")

            for (let i = 0; i < data.data.players.length; i++) {
                if (data.data.players[i].id===myID) {
                    if (data.data.players[i].turn===true) {
                        makeField(JSON.stringify(data.data));
                    } else 
                    {
                        
                        renderLeaderboard(JSON.stringify(data.data))
                    }
                }
                
            }
            
          
        }
        else if(data.message==="returningGetCards")
            {
                console.log(data)
              fetchCard(data.data, data.input, data.lobbyData)
            }
 
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

 function getCards(modifier, inputValue, lobbyData){
    let data = {
        message : modifier,
        input : inputValue,
        lobbyData : lobbyData
       
    }
    console.log(data);
    socket.send(JSON.stringify(data));
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
async function renderLobbyPlayer(lobbyData) {
    document.querySelector("main").innerHTML = "";
    //the lobby should be rendered here based on players in the room

    let nameDiv = document.createElement("div")

   
    let parsedData=JSON.parse(lobbyData)
    

    for (let i = 0; i < parsedData.players.length; i++) {

        let div = document.createElement("div")
        div.textContent=parsedData.players[i].name + " " + parsedData.players[i].turn
        nameDiv.appendChild(div);
        
    }
    main.appendChild(nameDiv)
    
}

async function renderLobbyHost(lobbyData) {
    document.querySelector("main").innerHTML = "";
    //the lobby should be rendered here based on players in the room

    let nameDiv = document.createElement("div")

    
    let btnStart = document.createElement("button")
    btnStart.id="btnStart"
    btnStart.textContent="Start"
    
    
    
    
    
    let parsedData=JSON.parse(lobbyData)
    console.log(parsedData)
    
    btnStart.addEventListener("click",()=>{startGame("startGame",parsedData)})


    

    for (let i = 0; i < parsedData.players.length; i++) {

        

        let div = document.createElement("div")
        div.textContent=parsedData.players[i].name + " " + parsedData.players[i].turn
        nameDiv.appendChild(div);
        
    }
    main.appendChild(btnStart)
    main.appendChild(nameDiv)
    
}

function startGame(modifier,room){
    let data = {
        message : modifier,
        room : room
        
   
    }

    socket.send(JSON.stringify(data));
}

function handleTurn(modifier, players, roomID) {
    let data = {
        message : modifier,
        players : players,
        roomID  : roomID
        
   
    }

    socket.send(JSON.stringify(data));
}
function makeField(lobbyData) {
    main.innerHTML = `
        <input type="text" id="input" placeholder="Enter ID" />
        <p id="feedback"></p>
    `;
    let btnNext = document.createElement("button")
    btnNext.id="btnNext"
    btnNext.textContent="Next"
    let parsedData=JSON.parse(lobbyData)
    btnNext.addEventListener("click",()=>{handleTurn("handleTurn", parsedData.players, parsedData.id)})
    main.appendChild(btnNext)
    let inputField = document.querySelector("#input");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const inputValue = inputField.value.trim();
            if (!inputValue) {
                displayFeedback("Please enter a valid ID.");
                return;
            }
            getCards("getCards", inputValue, lobbyData)
        }
    });
}

async function fetchCard(CARDS,index, lobbyData) {
    
        
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
        let points;

        for (let i = 0; i < CARDS.length; i++) {
            if (CARDS[i].id === parseInt(index)) {
                type.textContent = `Type: ${CARDS[i].type}`;
                questions.textContent = `Question: ${CARDS[i].question}`;
                child0.textContent = CARDS[i].alternatives[0];
                child1.textContent = CARDS[i].alternatives[1];
                child2.textContent = CARDS[i].alternatives[2];
                child3.textContent = CARDS[i].alternatives[3];
                correct = CARDS[i].correct
                points= CARDS[i].points
                
                found = true;

                
                break; // Exit the loop after finding a match
            }

            
        }

        child0.addEventListener("click", ()=>{correctChoise(child0.id, correct, lobbyData, points)})
        child1.addEventListener("click", ()=>{correctChoise(child1.id, correct, lobbyData, points)})
        child2.addEventListener("click", ()=>{correctChoise(child2.id, correct, lobbyData, points)})
        child3.addEventListener("click", ()=>{correctChoise(child3.id, correct, lobbyData, points)})
       

        if (!found) {
            console.log("No card found with this id", CARDS)
        }
    } 
       
    
    function correctChoise(id, correct, lobbyData, points ) {
        let parsedData=JSON.parse(lobbyData)
        
        const alternatives = document.querySelectorAll("#alternatives > button");
        
        const selectedNumber = id.replace("alternative", ""); // Remove the "alternative" part
        if (selectedNumber === correct.toString()) { // Compare only the numeric part
            console.log(selectedNumber, correct)
            socket.send(JSON.stringify( {
                message: "pointUpdate",
                points: points,
                playerId: myID,
                lobbyData: lobbyData
            }));
            let p = document.createElement("p");
            p.textContent = "YOU GOT IT!!!";
            let cont = document.createElement("button")
            cont.textContent="Continue"
            cont.addEventListener("click",()=>
                {
                    handleTurn("handleTurn", parsedData.players, parsedData.id
                       
                    )})
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
            cont.addEventListener("click",()=>
                {
                handleTurn("handleTurn", parsedData.players, parsedData.id
                

            )})
            main.appendChild(p);
            main.appendChild(cont)
            alternatives.forEach(button => {
                button.disabled = true
            });
        }
    }
    
    function renderLeaderboard(lobbyData)
    {
        document.querySelector("main").innerHTML = "";

        let playerDiv=document.createElement("div")
        let parsedData=JSON.parse(lobbyData)

        parsedData.players.sort((a, b) => b.points - a.points);

        for (let i = 0; i < parsedData.players.length; i++) {
            let div = document.createElement("div")
            div.id="player" + i
            div.textContent=parsedData.players[i].name + " " + "points: " + parsedData.players[i].points
            playerDiv.appendChild(div)
    
        }

       

        main.appendChild(playerDiv)
    }

 



startApp()





