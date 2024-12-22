import { serveDir, serveFile } from "jsr:@std/http/file-server";

// Alla spel QUESTION CARDS till spelet - det saknad svårighetsgran på frågorna som vi ska lägga till för att spelaren ska få poäng
const CARDS = [ {
    "question": "Gissa artist och låt?",
    "answers": [
        "ABBA - The Winner Takes It All",
        "Bee Gees - How Deep Is Your Love",
        "Fleetwood Mac - Go Your Own Way",
        "Blondie - Heart of Glass"
    ],
    "id": 0,
    "correct": 1,
    "points": 10
},{
    "question": "Fyll i låttexten...",
    "answers": [
        "Wake me up when it's all over",
        "Wake me in the morning sun",
        "Wake me to see the sky so blue",
        "Wake me and bring me home again"
    ],
    "id": 1,
    "correct": 1,
    "points": 30
},{
    "question": "Gissa artisten?",
    "answers": [
        "Danny Saucedo",
        "Robin Bengtsson",
        "Måns Zelmerlöw",
        "Eric Saade"
    ],
    "id": 2,
    "correct": 3,
    "points": 20,
},{
    "question": "Fyll i låttexten... \"Everyday people do...\"",
    "answers": [
        "... things that we can't see",
        "... extraordinary things",
        "... the same old things",
        "... what they're told to do"
    ],
    "id": 3,
    "correct": 2,
    "points": 30
},{
    "question": "Gissa de korrekta låttexten?",
    "answers": [
        "Crashing into the dark in my black car",
        "Running red lights in my black car",
        "In my black car, where we collide",
        "Driving fast in my black car tonight"
    ],
    "id": 4,
    "correct": 4,
    "points": 100
},{
    "question": "Gissa artisten?",
    "answers": [
        "Felix Sandman",
        "Benjamin Ingrosso",
        "Darin",
        "Oscar Zia"
    ],
    "id": 5,
    "correct": 2,
    "points": 20
},{
    "question": "Fyll i låttexten... \"Oh, sometimes I get a...\"?",
    "answers": [
        "... little bit higher",
        "... good feeling",
        "... feeling I’m free",
        "... rush of adrenaline"
    ],
    "id": 6,
    "correct": 2,
    "points": 30
},{
    "question": "Gissa låtiteln?",
    "answers": [
        "Lush Life",
        "Never Forget You",
        "Symphony",
        "Ruin My Life"
    ],
    "id": 7,
    "correct": 1,
    "points": 30
},{
    "question": "Gissa artisten?",
    "answers": [
        "The Cardigans",
        "Roxette",
        "Ace of Base",
        "ABBA"
    ],
    "id": 8,
    "correct": 1,
    "points": 10
},{
    "question": "Gissa låtiteln?",
    "answers": [
        "My Silver Lining",
        "Fireworks",
        "Stay Gold",
        "Emmylou"
    ],
    "id": 9,
    "correct": 1,
    "points": 20
},{
    "question": "Gissa artisten?",
    "answers": [
        "Miss Li",
        "Miriam Bryant",
        "Veronica Maggio",
        "Laleh"
    ],
    "id": 10,
    "correct": 3,
    "points": 30
},{
    "question": "Gissa låtiteln?",
    "answers": [
        "Without You",
        "Wake Me Up",
        "Levels",
        "The Nights"
    ],
    "id": 11,
    "correct": 4,
    "points": 10
},{
    "question": "Gissa artist/band?",
    "answers": [
        "Roger Pontare",
        "Hammerfall",
        "Riddarna",
        "The virtues"
    ],
    "id": 12,
    "correct": 2,
    "points": 20
},{
    "question": "Gissa låten?",
    "answers": [
        "Aiming for the sky",
        "Walking through the sky",
        "Keep on Walking",
        "Keep aiming"
    ],
    "id": 13,
    "correct": 3,
    "points": 10
},{
    "question": "När kom låten ut?",
    "answers": [
        "2010",
        "2012",
        "2009",
        "2011"
    ],
    "id": 14,
    "correct": 2,
    "points": 30
},{
    "question": "Gissa artist/band?",
    "answers": [
        "Sarah Klang",
        "Sarah Dawn Finer",
        "Sabina Ddumba",
        "Zara Larsson"
    ],
    "id": 15,
    "correct": 3,
    "points": 20
},{
    "question": "När kom låten ut?",
    "answers": [
        "1989",
        "1986",
        "1984",
        "1990"
    ],
    "id": 16,
    "correct": 3,
    "points": 30
},{
    "question": "Fyll i låttexten...",
    "answers": [
        "Lips as sweet as candy",
        "Girl, you got me thirsty",
        "Got a bug from you girl",
        "All the good love"
    ],
    "id": 17,
    "correct": 1,
    "points": 20
},{
    "question": "Gissa låten?",
    "answers": [
        "Måndag morgon",
        "I natt",
        "Är det du, är det jag",
        "Inget stoppar oss nu"
    ],
    "id": 18,
    "correct": 4,
    "points": 10
},{
    "question": "När kom låten ut?",
    "answers": [
        "2010",
        "2012",
        "2009",
        "2011"
    ],
    "id": 19,
    "correct": 4,
    "points": 30
},{
    "question": "Fyll i låttexten...",
    "answers": [
        "Sunga na-na-na-na",
        "Dricka hemkört och cola i en uppblåsbar pool",
        "Ingen sommar utan ragga",
        "Ja, Jag sa raggae"
    ],
    "id": 20,
    "correct": 2,
    "points": 20
}/*,{
    "question": "rockbjörnen",
    "answers": [undefined, undefined, undefined, undefined],
    "id": 22,
    "correct": undefined,
    "points": undefined
}*/]








let GAMES = {rooms:[
    {
        "id": 1,
        "hostName": "rere",
        "name": "bibi",
        "hostID": 1,
        "isActive": false,
        "players": [
        ]
      }
]}


async function handleHTTPRequest(request) {
    const pathname = new URL(request.url).pathname

    if (pathname.startsWith("/static")) {
        return serveDir(request,
            {
                fsRoot: "assets",
                urlRoot: "static"
            })
    }

    if (pathname == "/api/cards") {
        const options =
        {
            headers: { "Content-Type": "application/json" }
        }


        if (request.method == "GET") {

            return new Response(JSON.stringify(CARDS), options)
        }

        if (request.method == "POST") {
            const requestData = await request.json();
            console.log(requestData);

            let roomID = GAMES.rooms.length + 1


            // Create a new object with the "id" key first
            const game = {
                roomID,
                ...requestData,


            };

            GAMES.rooms.push(game);
            console.log(GAMES)
        
        
            return new Response(JSON.stringify(game), options);
        }



        if (request.method == "DELETE") {
            GAMES.rooms = []; // Reassign to an empty array

            console.log("GAMES array has been emptied");
        }
    }


    return serveFile(request, "./index.html")
}

let connections = {}
let connectionID = 1

function handleWebSocketRequest(request) {
    const { socket, response } = Deno.upgradeWebSocket(request)
    let myID = connectionID++
    let userName
    let roomID
    let connection = { myID, userName, roomID, socket }

    socket.addEventListener("open", (event) => {
        console.log(`Connection ${connection.myID} connected`)
        connections[myID] = connection
        socket.send(JSON.stringify({ connection }));
        console.log(connections)
    })

    socket.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        console.log("hej22");
        console.log(data);

        //###              ###
        //PLAYER JOINING LOBBY
        //###              ###
        if (data.message === "initalizeLobbyJoin") {
            for (let i = 0; i < GAMES.rooms.length; i++) {
                if (GAMES.rooms[i].name === data.gameName) {
                    GAMES.rooms[i].players.push({
                        id: data.userID,
                        "name": data.userName,
                        "points": 0,
                        "turn": false
                    });
                    let returnDataSelf = JSON.stringify({
                        message: "returningInitializeLobbyJoin",
                        data: GAMES.rooms[i]
                    });
                    socket.send(returnDataSelf);

                    //send to all other users connected to this game
                    let players = GAMES.rooms[i].players;
                    let returnDataOther = {
                        message: "playerJoinedYourLobby",
                        data: GAMES.rooms[i]
                    }
                    for (let j = 0; j < players.length; j++) {
                        console.log("heeeeeej", data.userID, players[j]);
                        if (data.userID !== players[j].id)
                            connections[String(players[j].id)].socket.send(JSON.stringify(returnDataOther));
                    }
                    console.log(GAMES.rooms[i])
                }
            }

            //####            ####
            //USER CREATING A GAME
            //####            ####
        } else if (data.message === "initalizeLobbyCreate") {
            //we should now create a game and add the host
            //increment ID for new room
            console.log("TJA");
            let newID = 0;
            for (let i = 0; i < GAMES.rooms.length; i++) {
                newID = GAMES.rooms[i].id;
            }
            newID++;
            //push new game with host member into GAMES(state)
            let newGame = {
                id: newID,
                hostName: data.userName,
                name: data.gameName,
                hostID: data.userID,
                isActive: false,
                players
                : [
                    {
                        id: data.userID, 
                        name: data.userName, 
                        points: 0, 
                        turn:true
                    }
                ]
            }
            GAMES.rooms.push(newGame);
            let returnData = JSON.stringify({
                message: "returningInitializeLobbyCreate",
                data: newGame
            });
            console.log(GAMES);
            socket.send(returnData);

        }  
        
        else if(data.message==="startGame")
            {
                console.log("startGame")
                
                let returnData = JSON.stringify({
                    message: "returningStartGame",
                    data: data.room
                    
                });
                for (let i = 0; i < data.room.players.length; i++) {
                    connections[data.room.players[i].id].socket.send(returnData);
                }
                
            }

            else if (data.message === "handleTurn") {

            

                // Update player turns
                for (let i = 0; i < data.players.length; i++) {
                    if (data.players[i].turn === true) { // Check for the current player's turn
                        data.players[i].turn = false; // End the current player's turn
                        const nextPlayerIndex = (i + 1) % data.players.length; // Move to the next player, wrapping around
                        data.players[nextPlayerIndex].turn = true; // Start the next player's turn
                        break; // Exit the loop once the turn is updated
                    }
                }
    
               
    
            
                // Update game state in the server
                for (let i = 0; i < GAMES.rooms[data.roomID - 1].players.length; i++) {
                    let player = GAMES.rooms[data.roomID - 1].players[i];
                    console.log("console log player",player)
                    GAMES.rooms[data.roomID - 1].players[i].turn = data.players[i].turn
                    player = GAMES.rooms[data.roomID - 1].players[i]
                    console.log("console log player2:",player)
                }
                //GAMES.rooms[data.roomID - 1].players = data.players; // Update the room with the modified player turns
                const updatedGame = GAMES.rooms[data.roomID - 1];
            
                // Notify all players in the room about the updated game state
                for (const player of updatedGame.players) {
                    const connection = connections[String(player.id)];
                    
                    if (connection && connection.socket) {
                    
                        try {
                            console.log("this is the connection " + connection.socket)
                            connection.socket.send(JSON.stringify({
                                message: "returningHandleTurn",
                                data: updatedGame,
                            }));
                        } catch (error) {
                            console.error(`Failed to send update to player ${player.id}:`, error);
                        }
                    } else {
                        console.warn(`No active connection for player ${player.id}`);
                    }
                }
            
                // No need for additional `socket.send(returnData);`
                console.log("Updated game state sent to all players:", updatedGame);
            }

            else if (data.message ==="getCards")
                {
                    console.log("getCardzzzzzzzz");
                    console.log(data.message)
                    
                    let returnData = JSON.stringify({
                        message: "returningGetCards",
                        data : CARDS,
                        input : data.input,
                        lobbyData : data.lobbyData
                    });
                    let parsedLobby = JSON.parse(data.lobbyData);
                    let players = parsedLobby.players;
                    socket.send(returnData);
                    //we should also send an event to all other players(with turn "false")
                    //in order to show the waiting room view
                    let returnDataa = JSON.stringify({
                        message: "returningGetCards_TurnFalse",
                        currentPlayer: players.find((player) => player.turn === true),
                        lobbyData : data.lobbyData
                    });
                    console.log("players", players);
                    for (let i = 0; i < players.length; i++) {
                        if(players[i].turn === false) {
                            console.log(connections[String(players[i].id)]);

                            connections[String(players[i].id)].socket.send(returnDataa);
                        }
                    }
                }

                else if(data.message === "pointUpdate"){
                    //select GAMES.rooms from parsed lobby data
                    let parsedLobby = JSON.parse(data.lobbyData);
                    let returnLobby;
                    console.log(GAMES.rooms[parsedLobby.id - 1].players, data.playerId, data);
                    for(let i = 0; i < GAMES.rooms[parsedLobby.id - 1].players.length; i++){
                        console.log(GAMES.rooms[parsedLobby.id - 1].players[i].name);
                        if(GAMES.rooms[parsedLobby.id - 1].players[i].id === data.playerId){
                            returnLobby = GAMES.rooms[parsedLobby.id - 1];
                            GAMES.rooms[parsedLobby.id - 1].players[i].points += data.points;

                        }
                    }

                    //send back to players
                    //to show a view for 2 seconds with info on if the question
                    //was answered correctly
                    let activePlayer = "";
                    for(let i = 0; i < parsedLobby.players.length; i++){
                        if(parsedLobby.players[i].turn === true){
                            activePlayer = parsedLobby.players[i];
                        }
                    }
                    let returnDataTurnFalse = {
                        message: "returningPointUpdate",
                        data: returnLobby,
                        turn: false,
                        activePlayer: activePlayer,
                        points: data.points
                    }
                    let returnDataTurnTrue = {
                        message: "returningPointUpdate",
                        data: returnLobby,
                        turn: true,
                        activePlayer: activePlayer,
                        points: data.points
                    }

                    for(let i = 0; i < parsedLobby.players.length; i++){
                        if(parsedLobby.players[i].turn === true)
                            connections[parsedLobby.players[i].id].socket.send(JSON.stringify(returnDataTurnTrue));
                        else
                            connections[parsedLobby.players[i].id].socket.send(JSON.stringify(returnDataTurnFalse));
                    }
                    console.log(GAMES.rooms[parsedLobby.id - 1], data.points);
                }
        
        else if(data.message === "playerLeftRoom"){
            console.log("playerLeftRoooooooom");
            let leftID = data.playerID;
            let leftPlayer = undefined;
            let leftRoom = undefined;
            let returnData;
            let hostLeft = false;
            let index;
            for (let i = 0; i < GAMES.rooms.length; i++) {
                for (let j = 0; j < GAMES.rooms[i].players.length; j++) {
                    console.log("targeted player:", GAMES.rooms[i].players[j].id, "needle:", leftID);
                    if (GAMES.rooms[i].players[j].id === leftID) {
                        //this is the player who has left the room
                        //remove player[j] from room[i]
                        leftPlayer = GAMES.rooms[i].players[j];
                        leftRoom = GAMES.rooms[i];
                        if (leftID === GAMES.rooms[i].hostID) {
                            //the host has left the game sending appropriate message
                            returnData = {
                                message: "hostLeftRoom",
                                newRoom: leftRoom
                            }
                            hostLeft = true;
                            index = i;
                        } else {
                            //non host player has left sending appropriate message
                            returnData = {
                                message: "playerLeftRoom",
                                newRoom: leftRoom
                            }
                        }
                        console.log("player:", leftPlayer, "leftRoom:", leftRoom, "GAMES:", GAMES.rooms[i]);
                        GAMES.rooms[i].players.splice(j, 1);
                        console.log(leftRoom);
                    }
                }
            }
            //inform sockets
            console.log(leftRoom.players);
            for (const player of leftRoom.players) {
                connections[String(player.id)].socket.send(JSON.stringify(returnData));
            }
            GAMES.rooms.splice(index, 1);
            console.log(GAMES.rooms);


            /*
            for(let i = 0; i < connections.length; i++){
                console.log("connection:",connections[i]);
                for (const [index, player] of leftRoom.players) {
                    console.log(player);
                    if (connections[i].id === player.id) {
                        console.log(connections[i].socket);
                        connections[i].socket.send(JSON.stringify(returnData));
                    }
                }
            }*/
        } else if (data.message === "foundRockBear") {
            //player has found rockbear
            //player(active) must render rockbear page
            //players(innactive) must render other player found rockbear page
            console.log("foundRockBear");
            let playerData
            let activePlayer;
            for (const player of data.lobbyData.players) {
                if(data.playerID === player.id){
                    activePlayer = player;

                }
            }
            //this is weird and maybe wrong!
            /*
            for(const player in data.lobbyData.players){
                if(player.turn === false){
                    playerData = {
                        message: "returningFoundRockBear",
                        activePlayer: activePlayer,
                        isMe: false,
                        lobbyData: data.lobbyData
                    }
                } else {
                    playerData = {
                        message: "returningFoundRockBear",
                        activePlayer: activePlayer,
                        isMe: true,
                        lobbyData: data.lobbyData
                    }
                }
            }*/
            playerData = {
                message: "returningFoundRockBear",
                activePlayer: activePlayer,
                isMe: true,
                lobbyData: data.lobbyData
            }
            console.log(playerData);
            socket.send(JSON.stringify(playerData));

            playerData = {
                message: "returningFoundRockBear",
                activePlayer: activePlayer,
                isMe: false,
                lobbyData: data.lobbyData
            }
            for (const player of data.lobbyData.players) {
                if(player.id !== activePlayer.id)
                connections[String(player.id)].socket.send(JSON.stringify(playerData));
            }
        } else if (data.message === "playAgain"){
            //reset lobby points
            //reset turn order
            //tell players what to render
            console.log("PLAY AGAIN DATA: ",data);
            let lData = data.data;
            console.log("lData", lData);
            console.log("TARGET GAME: ",GAMES.rooms, "target id:", lData.id);
            for (let i = 0; i < GAMES.rooms[lData.id - 1].players.length; i++) {
                GAMES.rooms[lData.id - 1].players[i].points = 0;
                if(GAMES.rooms[lData.id - 1].players[i].id === lData.hostID){
                    GAMES.rooms[lData.id - 1].players[i].turn = true;
                    let pID = GAMES.rooms[lData.id - 1].players[i].id;
                    connections[String(pID)].socket.send(JSON.stringify({
                        message: "returningInitializeLobbyCreate",
                        data: lData
                    }));
                } else {
                    let pID = GAMES.rooms[lData.id - 1].players[i].id;
                    GAMES.rooms[lData.id - 1].players[i].turn = false;
                    connections[String(pID)].socket.send(JSON.stringify({
                        message: "returningInitializeLobbyJoin",
                        data: lData
                    }));
                }
            }
            
            //connections[playerID].socket.send()//send command to render correct view
        }else if(data.message === "stopPlaying"){
            let lData = data.data;
            for (let i = 0; i < GAMES.rooms[lData.id - 1].players.length; i++) {
                let pID = GAMES.rooms[lData.id - 1].players[i].id;
                connections[String(pID)].socket.send(JSON.stringify({
                    message: "returningStopPlaying",
                    data: lData
                }));
            }
            GAMES.rooms.splice(lData.id - 1, 1);
        }
    })

    socket.addEventListener("close", (event) => {
        console.log(`Connection ${myID} disconnected`)
        //find game associated to user
        let leftRoom
        let hostLeave = false;
        for (const room of GAMES.rooms) {
            for (const [index, player] of room.players.entries()) {
                if (myID === player.id) {
                    leftRoom = room;
                    room.players.splice(index, 1);
                    console.log(player, "left room:", leftRoom)
                    if (myID === room.hostID) {
                        hostLeave = true;
                    }
                }
            }
        }
        let data;
        if (!hostLeave) {
            for (const player of leftRoom.players) {
                data = {
                    message: "playerLeftRoom",
                    newRoom: leftRoom
                }
                console.log("sending", data, "to", connections[String(player.id)]);
                connections[String(player.id)].socket.send(JSON.stringify(data))
            }
        } else {
            for (const player of leftRoom.players) {
                data = {
                    message: "hostLeftRoom",
                    newRoom: leftRoom
                }
                connections[String(player.id)].socket.send(JSON.stringify(data));
            }
            for (let i = 0; i < GAMES.rooms.length; i++) {
                console.log(GAMES.rooms[i]);
                if (GAMES.rooms[i].id === data.newRoom.id)
                    GAMES.rooms.splice(i, 1);
            }
        }
        console.log("hej", GAMES, "hej");
        //delete room if host leaves.
        delete connections[myID]
    })

    return response
}

function handleRequest(request) {
    if (request.headers.get("upgrade") == "websocket") {
        return handleWebSocketRequest(request)
    } else { return handleHTTPRequest(request) }
}


Deno.serve(handleRequest)