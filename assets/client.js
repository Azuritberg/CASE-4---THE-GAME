import {renderMainPage} from "./jsPages/mainPage.js";
import {renderMakeRoomPage} from "./jsPages/makeRoomPage.js";
import {renderInfoPage} from "./jsPages/infoPage.js";
import {renderPopUpPage} from "./jsPages/popUpPage.js";
import {renderJoinRoomPage} from "./jsPages/joinRoomPage.js";
import {renderWaitRoomAllPlayersPage} from "./jsPages/waitRoomAllPlayerPage.js";
import {renderWaitRoomGameLeaderPage} from "./jsPages/waitRoomGameLeaderPage.js";

import {renderQuestionPage} from "./jsPages/questionPage.js";
import {renderWaitYourTurnPage} from "./jsPages/waitYourTurnPage.js";
import {renderResultViewPage} from "./jsPages/resultViewPage.js";
import {renderLeaderboardPage} from "./jsPages/leaderboardPage.js";

import {renderWaitingViewRockBearPage} from "./jsPages/waitingViewRockBearPage.js";
import {renderWonRockBearPage} from "./jsPages/wonRockBearPage.js";
import {renderWonTheGamePage} from "./jsPages/wonTheGamePage.js";


const socket = new WebSocket("http://localhost:8000")

let myID = null;
let music = [];
for(let i = 0; i < 22; i++){
    let audio = new Audio("/static/ljud/" + i + ".mp3");
    music.push(audio);
}

socket.addEventListener("open", (event) =>{
    console.log("Connected!")
})

// Listen for messages from the server to retrieve myID
socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data);
    if(data.message === "returningInitializeLobbyJoin"){
        console.log("we should now initialize", data);
        
        //here we should render the game data
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
    
        
    } else if(data.message === "hostLeftRoom"){
        startApp();
        window.alert("host seems to have disconnected from our server u_u very sorry")
    } else if (data.connection !== undefined) {
        myID = data.connection.myID; // Store the assigned connection ID
    }

    else if (data.message==="returningStartGame") {
            console.log(data.data.players)
            for (let i = 0; i < data.data.players.length; i++) {
                if (data.data.players[i].id===myID) {
                    if (data.data.players[i].turn===true) {
                        makeField(JSON.stringify(data.data));
                    } else {
                        renderLeaderboard(JSON.stringify(data.data))
                    }
                }          
            }
        }

    else if(data.message==="returningHandleTurn"){
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

    else if (data.message==="returningGetCards") {
        console.log(data)
        console.log("returingGetCards");
        fetchCard(data.data, data.input, data.lobbyData)
    }
    else if (data.message === "returningGetCards_TurnFalse") {
        //call a function that renders the waiting view.
        console.log("returningGetCards_TurnFalse");
        renderWaitYourTurnPage(data.currentPlayer.name, data.currentPlayer.points);
    } else if (data.message === "returningPointUpdate"){
        if (data.turn === true){
            renderResultViewPage(data.activePlayer.name, true, data.points);
            setTimeout(()=>{
                renderLeaderboard(data.data);
                setTimeout(()=>{
                    //handleTurn
                    console.log("Time is up!");
                    handleTurn("handleTurn", data.data.players, data.data.id);
                }, 3000);
            },2000); // ändra tiden för att css sidan 2000
            // vänta 2 sekunder
            //renderLeaderboard
            //visa leaderboard
            //efter 3 sekunder
            //handleturn
        } else {
            renderResultViewPage(data.activePlayer.name, false, data.points);
            setTimeout(()=>{
                renderLeaderboard(data.data);
            },2000);   // ändra tiden för att css sidan 2000
            //active player handlesTurn
        }

    } else if (data.message === "playerLeftRoom"){

    } else if (data.message === "returningFoundRockBear"){
        if (data.isMe) {
            //renderRockBearFound();
            let returnElements = renderWonRockBearPage(data.activePlayer.points);
            returnElements.greenButton.addEventListener("click", ()=>{
                if (returnElements.canPickUp){
                    let interactionElements = renderWonTheGamePage(data.activePlayer.name);
                    interactionElements.greenButton.addEventListener("click", ()=>{
                        //play again
                        //reset lobby 
                        //go back to lobby view for all players
                        socket.send(JSON.stringify({
                            message: "playAgain",
                            data: data.lobbyData
                        }));
                    });
                    interactionElements.redButton.addEventListener("click", () => {
                        //delete lobby, take all players back to home view
                        socket.send(JSON.stringify({
                            message: "stopPlaying",
                            data: data.lobbyData
                        }));
                    })
                } else {
                    handleTurn("handleTurn", data.lobbyData.players, data.lobbyData.id);
                }
            });

            //returns: knappar om att vinna eller inte
            //if jag vill vinna ==> wonTheGamePage();
            //if jag vill inte vinna ==> enter game loop again
        } else {
            //renderOtherPlayerFoundBear();
            console.log("renderWaitingViewRockBearPage()");
            renderWaitingViewRockBearPage(data.activePlayer.name, data.activePlayer.points);
        }
    } else if (data.message === "returningStopPlaying"){
        startApp();
    }

});

console.log(socket)


socket.addEventListener("close", (event) =>{
    //deal with closed tab
    //remove users and such
    console.log("Disconnected!")
})

let main = document.querySelector("main");

async function startApp() {
    //rendera första sidan
    /*
   main.innerHTML= `<button id="btnCreateForm">Create Game</button>
                    <button id="btnJoinForm">Join Game</button>`

   let btnCreateForm = document.querySelector("#btnCreateForm");
   let btnJoinForm = document.querySelector("#btnJoinForm");
    */
    let buttons = renderMainPage();
    buttons.btnMakeRoom.addEventListener("click", createGame);
    buttons.btnJoinRoom.addEventListener("click", joinGame);
    buttons.infoIcon.addEventListener("click", () => {
        let backArrowInfoPage = renderInfoPage();
        backArrowInfoPage.addEventListener("click", () => {
            startApp();
        })
    })
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


 

function createGame() {
    /*
     main.innerHTML= `<input type="text" id="hostName" name="hostName" placeholder=" Enter your name">
                        <input type="text" id="gameName" name="name" placeholder=" Enter game code">
                        <button id="btnCreateGame">Create Game</button> 
                        <button id="btnBack">back</button> 
                      <p id="feedback"></p>`*/


    let buttons = renderMakeRoomPage();
    //let btnBack = document.querySelector("#btnBack");
    buttons.goBackImg.addEventListener("click", startApp);
    //let btnCreate = document.querySelector("#btnCreateGame");
    buttons.button.addEventListener("click", () => {
        let gameName = document.querySelector("#roomCode").value;
        let hostName = document.querySelector("#hostName").value;
        initializeLobby("initalizeLobbyCreate", gameName, hostName);
        console.log("HEJ");
    });


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

function joinGame() {
    /*main.innerHTML= `<input type="text" id="userName" placeholder=" Enter your name" />
        <input type="text" id="joinGameCode" placeholder=" Enter game code" />
        <button id="btnJoinGame">Join Game</button>
        <button id="btnBack">back</button>  
        <p id="feedback"></p>`;*/
    //let btnBack = document.querySelector("#btnBack");


    let buttons = renderJoinRoomPage();
    buttons.goBackImg.addEventListener("click", startApp);
    //let btnJoinGame = document.querySelector("#btnJoinGame");

    buttons.button.addEventListener("click", ()=> {
        let gameName = document.querySelector("#roomCode").value;
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
    //document.querySelector("main").innerHTML = "";
    //the lobby should be rendered here based on players in the room

    //let nameDiv = document.createElement("div")

   
    let parsedData=JSON.parse(lobbyData)
    let backBtn = renderWaitRoomAllPlayersPage(parsedData);
    backBtn.addEventListener("click", () =>{
        socket.send(JSON.stringify({
            message : "playerLeftRoom",
            playerID : myID
        }));
        startApp();
    });
    /*
    for (let i = 0; i < parsedData.players.length; i++) {

        let div = document.createElement("div")
        div.textContent=parsedData.players[i].name + " " + parsedData.players[i].turn
        nameDiv.appendChild(div);
        
    }*/
    //main.appendChild(nameDiv)
    
}


async function renderLobbyHost(lobbyData) {
    /*
    document.querySelector("main").innerHTML = "";
    //the lobby should be rendered here based on players in the room

    let nameDiv = document.createElement("div")

    
    let btnStart = document.createElement("button")
    btnStart.id="btnStart"
    btnStart.textContent="Start Game"
    */

    let parsedData=JSON.parse(lobbyData)
    let buttons = renderWaitRoomGameLeaderPage(parsedData);
    buttons.backArrowImg.addEventListener("click", () =>{
        socket.send(JSON.stringify({
            message : "playerLeftRoom",
            playerID : myID
        }))
        startApp();

    });
    buttons.button.addEventListener("click",()=>{startGame("startGame",parsedData)})




    /*
    for (let i = 0; i < parsedData.players.length; i++) {

        let div = document.createElement("div")
        div.textContent=parsedData.players[i].name + " " + parsedData.players[i].turn
        nameDiv.appendChild(div);
        
    }
    main.appendChild(btnStart)
    main.appendChild(nameDiv)
    */
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

    document.querySelectorAll('main > div').forEach(div => div.remove());
    document.querySelectorAll('main > button').forEach(button => button.remove());
    //renderLeaderboard(lobbyData);
    let returnElements = renderPopUpPage();
    /*
    let input = document.createElement("input")
    input.type="text"
    input.id="input"
    input.placeholder="Enter ID"
    */
    /*^
    let btnNext = document.createElement("button")
    btnNext.id="btnNext"
    btnNext.textContent="Next"
    */
    let parsedData=JSON.parse(lobbyData)
    /*
    btnNext.addEventListener("click",()=>{handleTurn("handleTurn", parsedData.players, parsedData.id)})
    document.querySelector("main").appendChild(btnNext)
    document.querySelector("main").appendChild(input)
    */

    let inputField = returnElements.inputField;
    let btnNext = returnElements.backButton;
    let btnBack = returnElements.button
    console.log(returnElements)

    btnNext.addEventListener("click", () =>  {
        

            const inputValue = inputField.value.trim();
            console.log(inputValue);
            if (!inputValue) {
                displayFeedback("Please enter a valid ID.");
                return;
            }
            if(inputValue === "22"){
                //now rockbear should happen
                let foundRockBearData = {
                    message : "foundRockBear",
                    playerID : myID,
                    lobbyData : JSON.parse(lobbyData)
                }
                console.log(foundRockBearData);
                socket.send(JSON.stringify(foundRockBearData))
            } else {
                getCards("getCards", inputValue, lobbyData);
            

        }
    });

btnBack.addEventListener("click", () =>{
    console.log(lobbyData)
    handleTurn("handleTurn", parsedData.players, parsedData.id)
} )

}


//add timer, if the timer goes of before an answer has been chosen
//send to server that the answer was wrong.
//we should play the associated audio file.
async function fetchCard(CARDS,index, lobbyData) {
    
        
    let found = false;

    /*document.querySelector("main").innerHTML = `
        <div id="type"></div>
        <div id="questions"></div>
        <div id="alternatives">
            <button id="alternative0"></button>
            <button id="alternative1"></button>
            <button id="alternative2"></button>
            <button id="alternative3"></button>
        </div>
    `;*/
    /*
    for(let i=0; i<CARDS.length; i++){
        if(CARDS[i].id === parseInt(index)){
            console.log("found card", CARDS[i]);
            renderQuestionPage(CARDS[i].question, CARDS[i].answers);
            break;
        }
    }*/
    music[index].load();
    music[index].play();
    let musicTimer = setTimeout(() => {
        music[index].pause();
        music[index].currentTime = 0;
    }, 10000);

    renderQuestionPage(CARDS[index].question, CARDS[index].answers);

    
    //let questions = document.querySelector("#questions");
    let child0 = document.querySelector("#alternative0");
    let child1 = document.querySelector("#alternative1");
    let child2 = document.querySelector("#alternative2");
    let child3 = document.querySelector("#alternative3");
    let correct;
    let points;

    for (let i = 0; i < CARDS.length; i++) {
        if (CARDS[i].id === parseInt(index)) {
            
            //questions.textContent = `Question: ${CARDS[i].question}`;
            //child0.textContent = CARDS[i].answers[0];
            //child1.textContent = CARDS[i].answers[1];
            //child2.textContent = CARDS[i].answers[2];
            //child3.textContent = CARDS[i].answers[3];
            correct = CARDS[i].correct - 1;
            points= CARDS[i].points
            
            found = true;

            break; // Exit the loop after finding a match
        }
    }

    child0.enabled=true
    child1.enabled=true
    child2.enabled=true
    child3.enabled=true
    let timer = setTimeout(()=>{
        correctChoise(child1.id, 999, lobbyData, points);
    }, 14000);
    child0.addEventListener("click", ()=>{
        clearInterval(timer);
        music[index].pause();
        music[index].currentTime = 0;
        clearInterval(musicTimer);

        correctChoise(child0.id, correct, lobbyData, points);
    });
    child1.addEventListener("click", ()=>{
        clearInterval(timer);
        music[index].pause();
        music[index].currentTime = 0;
        clearInterval(musicTimer);
        correctChoise(child1.id, correct, lobbyData, points);
    });
    child2.addEventListener("click", ()=>{
        clearInterval(timer);
        music[index].pause();
        music[index].currentTime = 0;
        clearInterval(musicTimer);
        correctChoise(child2.id, correct, lobbyData, points);
    });
    child3.addEventListener("click", ()=>{
        clearInterval(timer);
        music[index].pause();
        music[index].currentTime = 0;
        clearInterval(musicTimer);
        correctChoise(child3.id, correct, lobbyData, points)
    });


    if (!found) {
        console.log("No card found with this id", CARDS)
    }
} 



function correctChoise(id, correct, lobbyData, points ) {
    let parsedData=JSON.parse(lobbyData)
    
    const alternatives = document.querySelectorAll("#alternatives > button");
    console.log("ID:",id, "CORRECT",correct,"POINTS", points);
    const selectedNumber = id.replace("alternative", ""); // Remove the "alternative" part
    if (selectedNumber === correct.toString()) { // Compare only the numeric part
        console.log(selectedNumber, correct)
        socket.send(JSON.stringify( {
            message: "pointUpdate",
            points: points,
            playerId: myID,
            lobbyData: lobbyData
        }));
        /*
        let p = document.createElement("p");
        p.textContent = "YOU GOT IT!!!";
        //setTimeOut(2s); ==> skicka till server
        let cont = document.createElement("button")
        cont.textContent="Continue"
        cont.addEventListener("click",()=>
            {
                handleTurn("handleTurn", parsedData.players, parsedData.id
                   
                )})
        document.querySelector("main").appendChild(p);
        document.querySelector("main").appendChild(cont)
        alternatives.forEach(button => {
            button.disabled = true
        });*/
        
    } else {
        let p = document.createElement("p");
        socket.send(JSON.stringify( {
            message: "pointUpdate",
            points: 0,
            playerId: myID,
            lobbyData: lobbyData
        }));
        /*
        p.textContent = "Sorry, that's wrong";
        let cont = document.createElement("button")
        cont.textContent="Continue"
        cont.addEventListener("click",()=>
            {
            handleTurn("handleTurn", parsedData.players, parsedData.id
            

        )})
        document.querySelector("main").appendChild(p);
        document.querySelector("main").appendChild(cont)
        alternatives.forEach(button => {
            button.disabled = true
        });*/
    }
}



    
function renderLeaderboard(lobbyData) {

    document.querySelectorAll('main > div').forEach(div => div.remove());
    document.querySelectorAll('main > p').forEach(p => p.remove());
    document.querySelectorAll('main > button').forEach(button => button.remove());

    //let playerDiv=document.createElement("div")
    let parsedData = lobbyData;
    if(typeof parsedData === "string"){
        parsedData = JSON.parse(parsedData);
    }
    renderLeaderboardPage(parsedData);
    console.log("PARSED DATA!!!",parsedData,"PARSED DATA OVER!!!");
    //let parsedData=JSON.parse(lobbyData)

    //parsedData.players.sort((a, b) => b.points - a.points);
    /*
    for (let i = 0; i < parsedData.players.length; i++) {
        let div = document.createElement("div")
        div.id="player" + i
        div.textContent=parsedData.players[i].name + " " + "points: " + parsedData.players[i].points
        playerDiv.appendChild(div)
    }
    */
    //document.querySelector("main").appendChild(playerDiv)
}


startApp()


