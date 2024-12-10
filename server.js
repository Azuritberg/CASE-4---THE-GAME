import {serveDir, serveFile} from "jsr:@std/http/file-server";

// Alla spel QUESTION CARDS till spelet - det saknad svårighetsgran på frågorna som vi ska lägga till för att spelaren ska få poäng
const questionCard = [ {
    "question": "Gissa artist och låt?",
    "answers": [
        "ABBA - The Winner Takes It All",
        "Bee Gees - How Deep Is Your Love",
        "Fleetwood Mac - Go Your Own Way",
        "Blondie - Heart of Glass"
    ],
    "cardCode": 1,
    "correctAnswer": 1
},{
    "question": "Fyll i låttexten...",
    "answers": [
        "Wake me up when it's all over",
        "Wake me in the morning sun",
        "Wake me to see the sky so blue",
        "Wake me and bring me home again"
    ],
    "cardCode": 2,
    "correctAnswer": 1
},{
    "question": "Gissa artisten?",
    "answers": [
        "Danny Saucedo",
        "Robin Bengtsson",
        "Måns Zelmerlöw",
        "Eric Saade"
    ],
    "cardCode": 3,
    "correctAnswer": 3
},{
    "question": "Fyll i låttexten... \"Everyday people do...\"",
    "answers": [
        "... things that we can't see",
        "... extraordinary things",
        "... the same old things",
        "... what they're told to do"
    ],
    "cardCode": 4,
    "correctAnswer": 2
},{
    "question": "Gissa de korrekta låttexten?",
    "answers": [
        "Crashing into the dark in my black car",
        "Running red lights in my black car",
        "In my black car, where we collide",
        "Driving fast in my black car tonight"
    ],
    "cardCode": 5,
    "correctAnswer": 4
},{
    "question": "Gissa artisten?",
    "answers": [
        "Felix Sandman",
        "Benjamin Ingrosso",
        "Darin",
        "Oscar Zia"
    ],
    "cardCode": 6,
    "correctAnswer": 2
},{
    "question": "Fyll i låttexten... \"Oh, sometimes I get a...\"?",
    "answers": [
        "... little bit higher",
        "... good feeling",
        "... feeling I’m free",
        "... rush of adrenaline"
    ],
    "cardCode": 7,
    "correctAnswer": 2
},{
    "question": "Gissa låtiteln?",
    "answers": [
        "Lush Life",
        "Never Forget You",
        "Symphony",
        "Ruin My Life"
    ],
    "cardCode": 8,
    "correctAnswer": 1
},{
    "question": "Gissa artisten?",
    "answers": [
        "The Cardigans",
        "Roxette",
        "Ace of Base",
        "ABBA"
    ],
    "cardCode": 9,
    "correctAnswer": 1
},{
    "question": "Gissa låtiteln?",
    "answers": [
        "My Silver Lining",
        "Fireworks",
        "Stay Gold",
        "Emmylou"
    ],
    "cardCode": 10,
    "correctAnswer": 1
},{
    "question": "Gissa artisten?",
    "answers": [
        "Miss Li",
        "Miriam Bryant",
        "Veronica Maggio",
        "Laleh"
    ],
    "cardCode": 11,
    "correctAnswer": 3
},{
    "question": "Gissa låtiteln?",
    "answers": [
        "Without You",
        "Wake Me Up",
        "Levels",
        "The Nights"
    ],
    "cardCode": 12,
    "correctAnswer": 4
},{
    "question": "Gissa artist/band?",
    "answers": [
        "Roger Pontare",
        "Hammerfall",
        "Riddarna",
        "The virtues"
    ],
    "cardCode": 13,
    "correctAnswer": 2
},{
    "question": "Gissa låten?",
    "answers": [
        "Aiming for the sky",
        "Walking through the sky",
        "Keep on Walking",
        "Keep aiming"
    ],
    "cardCode": 14,
    "correctAnswer": 3
},{
    "question": "När kom låten ut?",
    "answers": [
        "2010",
        "2012",
        "2009",
        "2011"
    ],
    "cardCode": 15,
    "correctAnswer": 2
},{
    "question": "Gissa artist/band?",
    "answers": [
        "Sarah Klang",
        "Sarah Dawn Finer",
        "Sabina Ddumba",
        "Zara Larsson"
    ],
    "cardCode": 16,
    "correctAnswer": 3
},{
    "question": "När kom låten ut?",
    "answers": [
        "1989",
        "1986",
        "1984",
        "1990"
    ],
    "cardCode": 17,
    "correctAnswer": 3
},{
    "question": "Fyll i låttexten...",
    "answers": [
        "Lips as sweet as candy",
        "Girl, you got me thirsty",
        "Got a bug from you girl",
        "All the good love"
    ],
    "cardCode": 18,
    "correctAnswer": 1
},{
    "question": "Gissa låten?",
    "answers": [
        "Måndag morgon",
        "I natt",
        "Är det du, är det jag",
        "Inget stoppar oss nu"
    ],
    "cardCode": 19,
    "correctAnswer": 4
},{
    "question": "När kom låten ut?",
    "answers": [
        "2010",
        "2012",
        "2009",
        "2011"
    ],
    "cardCode": 20,
    "correctAnswer": 4
},{
    "question": "Fyll i låttexten...",
    "answers": [
        "Sunga na-na-na-na",
        "Dricka hemkört och cola i en uppblåsbar pool",
        "Ingen sommar utan ragga",
        "Ja, Jag sa raggae"
    ],
    "cardCode": 21,
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