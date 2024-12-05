import {serveDir, serveFile} from "jsr:@std/http/file-server";


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
        //console.log("CONNECTIONS",connections);
        
        if(data.message = "initalizeLobbyJoin"){
            console.log(`user:${data.userID} joining game ${data.gameName}`);
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
                    //console.log("going to send", returnData);
                    socket.send(returnData);
                    //send to all other users connected to this game
                    //console.log(GAMES.rooms[i]);
                    let players = GAMES.rooms[i].players;
                    
                    for(let j=0; j<players.length; j++){
                        console.log("notifying: ", connections[String(players[j].id)]);
                        let notification = {
                            message: "YOU HAVE BEEN NOTIFIED"
                        }
                        //console.log("PLAYERS",String(players[j].id),"PLAYERS");
                        //console.log("HERE->>",connections["1"],"END",);
                        connections[String(players[j].id)].socket.send(JSON.stringify(notification));
                    }
                    //console.log("these players shhould be notified", STATE.games[i].players);
                }
            }
            //save new user
            //add user to game room
            //send room info back to user for rendering

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