"use strict";
export {renderLeaderboardPage}

//add parameter that is an array of the players in the game :)
function renderLeaderboardPage(lobbyData) {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Main container
    const main = document.createElement("main");
    main.id = "leaderboardPage-main";

    // Progress container
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    const svgIcon = document.createElement("div");
    svgIcon.className = "svg-icon";
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

    const progressText = document.createElement("div");
    progressText.className = "progress-text";
    progressText.innerHTML = `
    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_370_795" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-1" y="-1" width="67" height="67">
            <rect x="-0.5" y="-0.5" width="65.4688" height="65.4688" fill="#F9E396" stroke="#BB3B4E"/>
        </mask>
        <g mask="url(#mask0_370_795)">
            <path d="M18.8034 56.4101V51.0377H29.5482V42.7105C27.3544 42.218 25.3958 41.289 23.6721 39.9236C21.9485 38.5581 20.6837 36.8456 19.8779 34.7862C16.5201 34.3833 13.7108 32.9171 11.4499 30.3876C9.18904 27.858 8.05859 24.892 8.05859 21.4895V18.8033C8.05859 17.3259 8.58464 16.0612 9.63674 15.0091C10.6888 13.957 11.9536 13.4309 13.431 13.4309H18.8034V8.05853H45.6654V13.4309H51.0378C52.5152 13.4309 53.7799 13.957 54.832 15.0091C55.8841 16.0612 56.4102 17.3259 56.4102 18.8033V21.4895C56.4102 24.892 55.2797 27.858 53.0188 30.3876C50.758 32.9171 47.9486 34.3833 44.5909 34.7862C43.785 36.8456 42.5203 38.5581 40.7966 39.9236C39.073 41.289 37.1143 42.218 34.9206 42.7105V51.0377H45.6654V56.4101H18.8034ZM18.8034 29.0109V18.8033H13.431V21.4895C13.431 23.1908 13.9235 24.7242 14.9084 26.0896C15.8933 27.4551 17.1917 28.4289 18.8034 29.0109ZM32.2344 37.6067C34.4729 37.6067 36.3756 36.8232 37.9425 35.2563C39.5095 33.6893 40.293 31.7866 40.293 29.5481V13.4309H24.1758V29.5481C24.1758 31.7866 24.9593 33.6893 26.5262 35.2563C28.0932 36.8232 29.9959 37.6067 32.2344 37.6067ZM45.6654 29.0109C47.2771 28.4289 48.5754 27.4551 49.5604 26.0896C50.5453 24.7242 51.0378 23.1908 51.0378 21.4895V18.8033H45.6654V29.0109Z" fill="#F9E396" stroke="#BB3B4E"/>
        </g>
    </svg>
    `;

    // Append elements to progress container
    progressContainer.appendChild(svgIcon);
    progressContainer.appendChild(progressText);

    // Leaderboard text
    const leaderboardText = document.createElement("div");
    leaderboardText.className = "leaderboardPage-text";
    leaderboardText.innerHTML = "<h2>LEADERBOARD</h2>";

    // Leaderboard cards
    const leaderboardCard = document.createElement("div");
    leaderboardCard.id = "leaderboardPage-card";


    //CHANGE
    //this should not be placeholder, instead loop through the parameter players[]
    //and create elements for each player based on their points
    const players = lobbyData.players;
    console.log(lobbyData);


    //players should also be assigned a color here
    //color is not attached to specific players but rather their position so
    //this is quite trivial to implement.
    players.forEach(player => {
        const card = document.createElement("div");
        card.className = "cards-score";

        const cardIcon = document.createElement("div");
        cardIcon.className = "card-icon";
        cardIcon.textContent = player.id;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = player.name;

        //const cardPlace = document.createElement("p");
        //cardPlace.className = "card-place";
        //cardPlace.textContent = player.place;

        const cardPoints = document.createElement("p");
        cardPoints.className = "card-points";
        cardPoints.textContent = player.points;

        // Append all elements to the card
        card.appendChild(cardIcon);
        card.appendChild(cardText);
        //card.appendChild(cardPlace);
        card.appendChild(cardPoints);

        // Append card to leaderboard
        leaderboardCard.appendChild(card);
    });

    // Footer
    const footer = document.createElement("footer");
    const footerP = document.createElement("div");
    footerP.className = "footer-p";
    footerP.innerHTML = "<p>©rockbjörnen</p>";
    footer.appendChild(footerP);

    // Append everything to the main
    main.appendChild(progressContainer);
    main.appendChild(leaderboardText);
    main.appendChild(leaderboardCard);
    main.appendChild(footer);

    // Append main to the body
    body.appendChild(main);
    //this view has no interactive elements and needs no return statement.
}

//renderLeaderboardPage();