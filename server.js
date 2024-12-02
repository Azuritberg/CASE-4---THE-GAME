import {serveDir, serveFile} from "jsr:@std/http/file-server";

let CARDS = []

const cardsData = await Deno.readTextFile("./database.json")
CARDS = JSON.parse(cardsData)

function handleRequest(request)
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
            
        }

        if (request.method == "DELETE") {
            
        }
    }
    

    return serveFile(request, "./index.html")
}

Deno.serve(handleRequest)