import {serveDir, serveFile} from "jsr:@std/http/file-server";

// Alla spel QUESTION CARDS till spelet
const questionCard = [ {
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
},{
    "question": "...",
    "answers": [
        "...",
        "...",
        "...",
        "..."
    ],
    "cardCode": "...",
    "correctAnswer": 2
}]





const jsonData = await Deno.readTextFile("./database.json")
const DATA = JSON.parse(jsonData)
let CARDS = DATA.cards
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
        
            // Write the updated data back to the JSON file
            // DATA.games = GAMES; 
            // await Deno.writeTextFile("./database.json", JSON.stringify(DATA, null, 2));
        
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
                        "name": "example",
                        "points": 0,
                        "turn": true
                    });
                    let returnData = JSON.stringify({
                        message: "returningInitializeLobbyJoin",
                        data: GAMES.rooms[i]
                    });
                    socket.send(returnData);
                    
                    //send to all other users connected to this game
                    let players = GAMES.rooms[i].players;
                    
                    for(let j=0; j<players.length; j++){
                        let notification = {
                            message: "YOU HAVE BEEN NOTIFIED"
                        }
                        connections[String(players[j].id)].socket.send(JSON.stringify(notification));
                    }
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
                        turn:false
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
        } else if(data.message === "gameStartRequestByHost"){
            //get the game info from hostID
            //set the game to active
            //select starting player
            //send info back to clients to render the needed
            //game views
            //return "newTurn"? "turnStarted"? to clients
            //turn {nr: 1, question: {question info}, yourTurn: false/true}
        }
    })

    socket.addEventListener("close", (event) =>{
        console.log(`Connection ${myID} disconnected`)
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