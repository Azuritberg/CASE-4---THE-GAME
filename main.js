let main = document.querySelector("main");

function startApp() {
   main.innerHTML= `<button id="btnStart">Start</button>`

   let btn = document.querySelector("#btnStart");

btn.addEventListener("click", makeField);
}

function startAppError() {
    main.innerHTML= `<button id="btnStart">Start</button>
                    <p id = errorMsg> No card found with this ID. </p>`
 
    let btn = document.querySelector("#btnStart");
 
 btn.addEventListener("click", makeField);
 }





function makeField() {
    main.innerHTML = `
        <input type="text" id="input" placeholder="Enter ID" />
        <p id="feedback" style="color: red;"></p>
    `;

    let inputField = document.querySelector("#input");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const inputValue = inputField.value.trim();
            if (!inputValue) {
                displayFeedback("Please enter a valid ID.");
                return;
            }
            fetchCard(inputValue);
        }
    });
}

async function fetchCard(index) {
    try {
        const response = await fetch("cards.json");
        const data = await response.json();

        let cards = data.cards;
        let found = false;

        main.innerHTML = `
            <div id="type"></div>
            <div id="questions"></div>
            <div id="alternatives">
                <button id="alternative0"></button>
                <button id="alternative1"></button>
                <button id="alternative2"></button>
                <button id="alternative3"></button>
            </div>
        `;

        let type = document.querySelector("#type");
        let questions = document.querySelector("#questions");
        let child0 = document.querySelector("#alternative0");
        let child1 = document.querySelector("#alternative1");
        let child2 = document.querySelector("#alternative2");
        let child3 = document.querySelector("#alternative3");
        let correct;

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id === parseInt(index)) {
                type.textContent = `Type: ${cards[i].type}`;
                questions.textContent = `Question: ${cards[i].question}`;
                child0.textContent = cards[i].alternatives[0];
                child1.textContent = cards[i].alternatives[1];
                child2.textContent = cards[i].alternatives[2];
                child3.textContent = cards[i].alternatives[3];
                correct = cards[i].correct
                
                found = true;

                
                break; // Exit the loop after finding a match
            }

            
        }

        child0.addEventListener("click", correctChoise)
        child1.addEventListener("click", correctChoise)
        child2.addEventListener("click", correctChoise)
        child3.addEventListener("click", correctChoise)

        
        const childDivs = document.querySelectorAll("#alternatives > button");


        function correctChoise(event) {
            const selectedId = event.target.id; // Get the ID of the clicked button
            const selectedNumber = selectedId.replace("alternative", ""); // Remove the "alternative" part
            if (selectedNumber === correct.toString()) { // Compare only the numeric part
                let p = document.createElement("p");
                p.textContent = "YOU GOT IT!!!";
                questions.appendChild(p);
            } else {
                let p = document.createElement("p");
                p.textContent = "Sorry, that's wrong";
                questions.appendChild(p);
            }
        }
        
        

 

      


        

        if (!found) {
            startAppError();
        }
    } catch (error) {
        console.error("Error fetching data:", error);
       
    }
}


startApp()


