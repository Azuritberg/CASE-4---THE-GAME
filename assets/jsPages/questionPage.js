"use strict";
export {renderQuestionPage}
//this fucntion should take a question object as it's parameter
//the object is contructed as such:
//{question[array of questions], song_tied_toquestion, correct answer, questionID}
//most imoportant in this function is the questions other stuff is handled in game logic in
//client.js
function renderQuestionPage(question, questionTexts) {

    // Hämta body
    const body = document.body;

    //Töm body
    body.innerHTML = "";

    // Main container
    const main = document.createElement("main");
    main.id = "questionPage-main";

    // Progress-container
    const progressContainer = document.createElement("div");
    progressContainer.classList.add("progress-container");

    const svgIcon = document.createElement("div");
    svgIcon.classList.add("svg-icon");

    // Add SVG icon here
    svgIcon.innerHTML = `
     <svg width="187" height="155" viewBox="0 0 187 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M97.0078 24.2439V34.748" stroke="#BB3B4E" stroke-width="2"/>
                    <path d="M89.5938 24.2439V34.748" stroke="#BB3B4E" stroke-width="2"/>
                    <path d="M109.354 12.0074L104.422 35.9837" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="124.504" y1="4.84873" x2="110.911" y2="38.2146" stroke="#BB3B4E" stroke-width="2"/>
                    <path d="M140.168 2.32296L116.779 40.9268" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="156.483" y1="5.10467" x2="123.117" y2="45.8852" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="172.424" y1="12.644" x2="127.936" y2="50.9529" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="180.913" y1="30.058" x2="132.718" y2="57.245" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="185.745" y1="47.413" x2="137.55" y2="67.1853" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="183.059" y1="68.4824" x2="138.571" y2="75.897" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="175.412" y1="87.0302" x2="139.574" y2="84.5587" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="167.784" y1="101.822" x2="138.126" y2="93.1713" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="157.75" y1="112.888" x2="134.27" y2="101.766" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="143.946" y1="122.638" x2="129.116" y2="110.28" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="133.907" y1="133.602" x2="121.549" y2="117.536" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="123.944" y1="139.667" x2="114.058" y2="122.366" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="111.492" y1="148.089" x2="105.313" y2="125.845" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="97.8624" y1="154.045" x2="96.6266" y2="126.858" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="86.7413" y1="153.955" x2="87.977" y2="126.768" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="73.183" y1="147.554" x2="79.3618" y2="125.31" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="60.9208" y1="138.675" x2="70.807" y2="121.374" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="51.1341" y1="132.352" x2="63.4918" y2="117.522" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="41.4156" y1="121.07" x2="56.2449" y2="109.948" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="28.0157" y1="111.07" x2="50.2596" y2="101.184" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="18.2847" y1="98.6584" x2="46.7075" y2="91.2437" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="9.8534" y1="85.0331" x2="46.9266" y2="83.7974" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="3.87795" y1="66.5103" x2="47.13" y2="73.925" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="0.379556" y1="45.5626" x2="48.5747" y2="65.335" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="6.67877" y1="29.5573" x2="53.6381" y2="56.7443" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="14.2339" y1="12.3537" x2="58.7217" y2="49.4269" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="31.6706" y1="5.07656" x2="63.8007" y2="44.6213" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="47.8116" y1="1.47744" x2="71.2913" y2="39.7864" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="63.9631" y1="4.12412" x2="76.3209" y2="37.49" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="77.5862" y1="11.6317" x2="83.7651" y2="35.1114" stroke="#BB3B4E" stroke-width="2"/>
                    <circle cx="92.682" cy="81.0895" r="46.9594" fill="#F3F0E7"/>
                </svg>
    `;

    // Intervall till Timer
    let seconds = 10; 

    const progressText = document.createElement("div");
    progressText.classList.add("progress-text");
    progressText.innerHTML = `<p>${seconds}</p>`;

    const interval = setInterval(() => {
        seconds -= 1;
        progressText.innerHTML = `<p>${seconds}</p>`;
        if ( seconds == 0 ) {
            clearInterval(interval);
        }
    },2000)

    progressContainer.appendChild(svgIcon);
    progressContainer.appendChild(progressText);

    // Text under progress
    const questionPageText = document.createElement("div");
    questionPageText.classList.add("questionPage-text");
    questionPageText.innerHTML = `
    <h2>${question}</h2>
    <p>SOUND ON</p>
    `;
    questionPageText.id = "questions";

    // Cards
    const questionContainer = document.createElement("div");
    questionContainer.id = "questionPage-card";

    for (let i = 0; i < questionTexts.length; i++) {
        const question = document.createElement("div");
        question.classList.add("question");
        question.id = "alternative" + i;

        const questionText = document.createElement("p");
        questionText.classList.add("question-text");
        questionText.textContent = questionTexts[i];

        question.appendChild(questionText);
        questionContainer.appendChild(question);

        // Lägg till klickhändelse
        question.addEventListener("click", () => {
            markSelectedQuestion(question);
        });
    }
    /*
    questionTexts.forEach((text) => {
        const question = document.createElement("div");
        question.classList.add("question");

        const questionText = document.createElement("p");
        questionText.classList.add("question-text");
        questionText.textContent = text;

        question.appendChild(questionText);
        questionContainer.appendChild(question);

        // Lägg till klickhändelse
        question.addEventListener("click", () => {
            markSelectedQuestion(question);
        });
    });*/

    // Footer
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <div class="footer-p">
        <p>©rockbjörnen</p>
    </div>
    `;

    // Lägg till alla element i sektionen
    main.appendChild(progressContainer);
    main.appendChild(questionPageText);
    main.appendChild(questionContainer);
    main.appendChild(footer);

    // Lägg till sektionen i body
    body.appendChild(main);
    //return the answer button elemnts with assigned IDs for what answer they represent
}

    // Card Questions Array
    /*const questionTexts = [
        "Hit me baby one more time...",
        "Hit me lady one more time...",
        "Hit me baby two more times...",
        "Hit me baby six more times...",
    ];*/

//renderQuestionPage(questionTexts);