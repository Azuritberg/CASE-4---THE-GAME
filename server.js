import {serveDir, serveFile} from "jsr:@std/http/file-server";


const jsonData = await Deno.readTextFile("./database.json")
const DATA = JSON.parse(jsonData)
let CARDS = DATA.cards
let GAMES = DATA.games
let STATE = {
    games: [
        {
            "id": 1,
            "hostName": "rere",
            "name": "bibi",
            "hostID": 1,
            "isActive": false,
            "players": [
              
            ]
          }
    ]
}

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
        
            // Generate a new ID
            const newId = GAMES.reduce((acc, next) => (next.id > acc ? next.id : acc), 0) + 1;
        
            // Create a new object with the "id" key first
            const game = {
                id: newId,
                ...requestData // Spread the remaining keys from the request
            };
        
            GAMES.push(game);
        
            // Write the updated data back to the JSON file
            DATA.games = GAMES; // Update the main data structure
            await Deno.writeTextFile("./database.json", JSON.stringify(DATA, null, 2));
        
            return new Response(JSON.stringify(game), options);
        }
        
        

        if (request.method == "DELETE") {
            DATA.games = []; // Reassign to an empty array
            await Deno.writeTextFile("./database.json", JSON.stringify(DATA, null, 2)); // Save the change
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

    socket.addEventListener("open", (event) =>{
        console.log(`Connection ${myID} connected`)
        connections[myID] = socket
        socket.send(JSON.stringify({ myID }));
        //console.log("CONNECTIONS",connections);
    })

    socket.addEventListener("message", (event) =>{
        const data = JSON.parse(event.data);
        //console.log("CONNECTIONS",connections);
        
        if(data.message = "initalizeLobbyJoin"){
            console.log(`user:${data.userID} joining game ${data.gameName}`);
            for(let i=0; i<STATE.games.length; i++){
                if(STATE.games[i].name === data.gameName){
                    STATE.games[i].players.push({
                        id: data.userID,
                        "name": "example",
                        "points": 0,
                        "turn": true
                    });
                    let returnData = JSON.stringify({
                        message: "returningInitializeLobbyJoin",
                        data: STATE.games[i]
                    });
                    //console.log("going to send", returnData);
                    socket.send(returnData);
                    //send to all other users connected to this game
                    //console.log(STATE.games[i]);
                    let players = STATE.games[i].players;
                    for(let j=0; j<players.length; j++){
                        console.log("notifying: ", connections[String(players[j].id)]);
                        let notification = {
                            message: "YOU HAVE BEEN NOTIFIED"
                        }

                        connections[String(players[j].id)].send(JSON.stringify(notification));
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
        let user = connections[myID];
        console.log(user);
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