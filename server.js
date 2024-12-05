import {serveDir, serveFile} from "jsr:@std/http/file-server";


const jsonData = await Deno.readTextFile("./database.json")
const DATA = JSON.parse(jsonData)
let CARDS = DATA.cards
let GAMES = {rooms:[]}


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