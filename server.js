import {serveDir, serveFile} from "jsr:@std/http/file-server";


const jsonData = await Deno.readTextFile("./database.json")
const DATA = JSON.parse(jsonData)
let CARDS = DATA.cards
let GAMES = DATA.games


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