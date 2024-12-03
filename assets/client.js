const socket = new WebSocket("http://localhost:8000")

let myID = null;

// Listen for messages from the server to retrieve myID
socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    if (data.myID) {
        myID = data.myID; // Store the assigned connection ID
    }
});

console.log(socket)

socket.addEventListener("open", (event) =>{
  console.log("Connected!")
})

socket.addEventListener("message", (event) =>{
    
})

socket.addEventListener("close", (event) =>{
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

function startAppError() 
{
    main.innerHTML= `<button id="btnStart">Start</button>
                    <p id = errorMsg> No card found with this ID. </p>`
 
    let btn = document.querySelector("#btnStart");
 
 btn.addEventListener("click", makeField);
 }

 

function createGame() 
{
     main.innerHTML= `<form id = createGameForm>
                        <input type="text" name="hostName" placeholder=" Enter your name">
                        <input type="text" name="name" placeholder=" Enter game code">
                        <button id="btnCreateGame" type="submit">Create Game</button> 
                        <button id="btnBack">back</button> 
                      </form>
                      <p id="feedback"></p>`

    let btnBack = document.querySelector("#btnBack")
    btnBack.addEventListener("click", startApp)

    


    const createGameForm = document.querySelector("#createGameForm")
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
    })
    
    
}

function joinGame() 
{
     main.innerHTML= `<input type="text" id="userName" placeholder=" Enter your name" />
                      <input type="text" id="joinGameCode" placeholder=" Enter game code" />
                      <button id="btnJoinGame">Join Game</button>
                      <button id="btnBack">back</button>  
        <p id="feedback"></p>`
     let btnBack = document.querySelector("#btnBack")
     btnBack.addEventListener("click", startApp)
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


