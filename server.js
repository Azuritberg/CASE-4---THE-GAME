import {serveDir, serveFile} from "jsr:@std/http/file-server";

let CARDS = 
[
    {
        "id": 1,
        "type": "Finish the lyric",
        "question": "Hit me baby...",
        "alternatives": [
          "\"...one more time\"",
          "\"...one last time\"",
          "\"...one time\"",
          "\"...one one time\""
        ],
        "correct": 0,
        "difficulty": "EASY",
        "points": 10
      },
      {
        "id": 2,
        "type": "Guess the artist",
        "question": "Who made this song?",
        "alternatives": [
          "Metallica",
          "ACDC",
          "Red Hot Chilli Peppers",
          "Nirvana"
        ],
        "correct": 3,
        "difficulty": "MEDIUM",
        "points": 20
      }

    
]


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


async function handleHTTPRequest(request)
{
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
            headers: {"Content-Type" : "application/json"}
        }
        

        if (request.method=="GET") {
            
            return new Response(JSON.stringify(CARDS), options)
        }

        if (request.method == "POST") {
            const requestData = await request.json();
            console.log(requestData);
        
            let roomID = GAMES.rooms.length +1
            
        
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

function handleWebSocketRequest(request)
{
    const {socket, response} = Deno.upgradeWebSocket(request)
    let myID = connectionID++
    let userName
    let roomID
    let connection={myID,userName,roomID,socket}

    socket.addEventListener("open", (event) =>{
        console.log(`Connection ${connection.myID} connected`)
        connections[myID] = connection
        socket.send(JSON.stringify({ connection}));
        console.log(connections)
    })

    socket.addEventListener("message", (event) =>{
        const data = JSON.parse(event.data);
        console.log(data.message);

        //###              ###
        //PLAYER JOINING LOBBY
        //###              ###
        if(data.message === "initalizeLobbyJoin"){
            for(let i=0; i<GAMES.rooms.length; i++){
                if(GAMES.rooms[i].name === data.gameName){
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
                    for(let j=0; j<players.length; j++){
                        console.log("heeeeeej", data.userID, players[j]);
                        if(data.userID !== players[j].id)
                            connections[String(players[j].id)].socket.send(JSON.stringify(returnDataOther));
                    }
                    console.log(GAMES.rooms[i])
                }
            }

        //####            ####
        //USER CREATING A GAME
        //####            ####
        } else if (data.message === "initalizeLobbyCreate"){
            //we should now create a game and add the host
            //increment ID for new room
            console.log("TJA");
            let newID = 0;
            for(let i = 0; i < GAMES.rooms.length; i++){
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
                console.log(data.message)
                
                let returnData = JSON.stringify({
                    message: "returningGetCards",
                    data : CARDS,
                    input : data.input,
                    lobbyData : data.lobbyData
                    
                });
                
                socket.send(returnData);
            }
        else if(data.message === "pointUpdate"){
            //select GAMES.rooms from parsed lobby data
            let parsedLobby = JSON.parse(data.lobbyData);
            console.log(GAMES.rooms[parsedLobby.id - 1].players, data.playerId, data);
            for(let i = 0; i < GAMES.rooms[parsedLobby.id - 1].players.length; i++){
                console.log(GAMES.rooms[parsedLobby.id - 1].players[i].name);
                if(GAMES.rooms[parsedLobby.id - 1].players[i].id === data.playerId){
                    GAMES.rooms[parsedLobby.id - 1].players[i].points += data.points;
                }
            }
            console.log(GAMES.rooms[parsedLobby.id - 1], data.points);
        }

    })

    socket.addEventListener("close", (event) =>{
        console.log(`Connection ${myID} disconnected`)
        //find game associated to user
        let leftRoom
        let hostLeave = false;
        for (const room of GAMES.rooms) {
            for(const [index, player] of room.players.entries()){
                if(myID === player.id){
                    leftRoom = room;
                    room.players.splice(index,1);
                    console.log(player, "left room:", leftRoom)
                    if(myID === room.hostID){
                        hostLeave = true;
                    }
                }
            }
        }
        let data;
        if(!hostLeave){
            for(const player of leftRoom.players){
                data = {
                    message: "playerLeftRoom",
                    newRoom: leftRoom 
                }
                console.log("sending", data, "to", connections[String(player.id)]);
                connections[String(player.id)].socket.send(JSON.stringify(data))
            }
        } else {
            for(const player of leftRoom.players){
                data = {
                    message: "hostLeftRoom",
                    newRoom: leftRoom 
                }
                connections[String(player.id)].socket.send(JSON.stringify(data));
            }
            for(let i = 0; i < GAMES.rooms.length; i++){
                console.log(GAMES.rooms[i]);
                if(GAMES.rooms[i].id === data.newRoom.id)
                GAMES.rooms.splice(i,1);
            }
        }
        console.log("hej",GAMES,"hej");
        //delete room if host leaves.
        delete connections[myID]
    })

    return response
}

function handleRequest(request) 
{
    if (request.headers.get("upgrade") == "websocket")
    {
        return handleWebSocketRequest(request)
    } else {return handleHTTPRequest(request)}
}


Deno.serve(handleRequest)