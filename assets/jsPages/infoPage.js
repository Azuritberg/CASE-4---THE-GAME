"use strict";
export {renderInfoPage}

function renderInfoPage(){

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudcontainer
    const main = document.createElement('main');
    main.id = 'infoPage-main';

    // Skapa sektionen för tillbaka-knappen och grafiken
    const goBackArrow = document.createElement('div');
    goBackArrow.id = 'go-back-arrow';

    // Skapa top bar
    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    // Lägg till ikonen för "backarrow"
    const backArrow = document.createElement('div');
    backArrow.className = 'info-icon';
    const backArrowImg = document.createElement('img');
    backArrowImg.src = '/static/icons/redbackarrow.svg';
    backArrowImg.alt = 'Back Arrow';
    backArrow.appendChild(backArrowImg);
    topBar.appendChild(backArrow);
    goBackArrow.appendChild(topBar);

    // Skapa grafiska linjen
    const infoPageGraphic = document.createElement('div');
    infoPageGraphic.id = 'info-page-graphic';

    const graphicSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    graphicSvg.setAttribute('width', '393');
    graphicSvg.setAttribute('height', '45');
    graphicSvg.setAttribute('viewBox', '0 0 393 45');
    graphicSvg.setAttribute('fill', 'none');
    graphicSvg.innerHTML = `
           <path d="M0 44L393 44" stroke="#BB3B4E" stroke-width="2"/>
           <path d="M0 1L393 1" stroke="#BB3B4E" stroke-width="2"/>
           <line x1="273" y1="44" x2="273" y2="1" stroke="#BB3B4E" stroke-width="2"/>
           <line x1="284" y1="44" x2="284" y2="1" stroke="#BB3B4E" stroke-width="2"/>
           <line x1="294" y1="44" x2="294" y2="1" stroke="#BB3B4E" stroke-width="2"/>
      `;

    infoPageGraphic.appendChild(graphicSvg);
    goBackArrow.appendChild(infoPageGraphic);



    // Skapa innehållssektionen - Reglerna i spelet
    const howToInfoPage = document.createElement('div');
    howToInfoPage.id = 'how-to-info-page';

    // Skapa rubrik
    const heading = document.createElement('h1');
    heading.textContent = 'Hur man spelar';
    howToInfoPage.appendChild(heading);

    // Skapa text
    const paragraph = document.createElement('div'); // Wrapper för textinnehållet

    // Lägg till rubriken
    const title = document.createElement('p');
    title.innerHTML = '<strong>Den försvunna Rockbjörnen</strong> &ndash; Ett musikquizspel';
    paragraph.appendChild(title);

    // Antal spelare
    const playersHeading = document.createElement('h4');
    playersHeading.textContent = 'Antal spelare';
    paragraph.appendChild(playersHeading);

    const playersInfo = document.createElement('p');
    playersInfo.textContent = 'Spelet är för 4–5 spelare.';
    paragraph.appendChild(playersInfo);

    // Mål med spelet
    const goalHeading = document.createElement('h4');
    goalHeading.textContent = 'Mål med spelet';
    paragraph.appendChild(goalHeading);

    const goalInfo = document.createElement('p');
    goalInfo.textContent = 'Första spelaren att nå 100 poäng och samtidigt hitta Rockbjörnen vinner spelet.';
    paragraph.appendChild(goalInfo);


    // Spelupplägg
    const rulesHeading = document.createElement('h4');
    rulesHeading.textContent = 'Spelupplägg';
    paragraph.appendChild(rulesHeading);

    const rulesList = document.createElement('ul');
    const rulesItems = [
        { label: 'Spelplan:', text: 'Spelet spelas på en fysisk karta med olika spelbrickor utplacerade.' },
        { label: 'Tärningskast:', text: 'Varje spelare kastar tärningen i turordning och flyttar sin spelpjäs det antal steg som tärningen visar.' },
        {
            label: 'Stanna på spelbrickor:',
            text: 'Om du landar på en spelbricka:',
            subItems: [
                'Skriv in koden från brickan i appen.',
                'Appen spelar upp en låt och du får en fråga om låten med fyra svarsalternativ.',
                'Du har 10 sekunder på dig att svara.',
            ],
        },
    ];

    rulesItems.forEach(item => {
        const listItem = document.createElement('li');
        const label = document.createElement('b');
        label.textContent = item.label;
        listItem.appendChild(label);

        const text = document.createTextNode(' ' + item.text);
        listItem.appendChild(text);

        if (item.subItems) {
            const subList = document.createElement('ul');
            item.subItems.forEach(subItem => {
                const subListItem = document.createElement('li');
                subListItem.textContent = subItem;
                subList.appendChild(subListItem);
            });
            listItem.appendChild(subList);
        }

        rulesList.appendChild(listItem);
    });
    paragraph.appendChild(rulesList);

    // Poängsystem
    const pointsHeading = document.createElement('h4');
    pointsHeading.textContent = 'Poängsystem';
    paragraph.appendChild(pointsHeading);

    const pointsList = document.createElement('ul');
    const pointsItems = [
        '10 poäng: Lätt fråga',
        '20 poäng: Medelsvår fråga',
        '30 poäng: Svår fråga',
    ];

    pointsItems.forEach(point => {
        const listItem = document.createElement('li');
        const strongText = document.createElement('strong');
        strongText.textContent = point.split(':')[0];
        listItem.appendChild(strongText);

        const text = document.createTextNode(': ' + point.split(':')[1]);
        listItem.appendChild(text);

        pointsList.appendChild(listItem);
    });
    paragraph.appendChild(pointsList);

    // Rockbjörnen - Vinst
    const rockHeading = document.createElement('h3');
    rockHeading.textContent = 'Rockbjörnen';
    paragraph.appendChild(rockHeading);

    const winHeading = document.createElement('h4');
    winHeading.textContent = 'Vinst';
    paragraph.appendChild(winHeading);

    const winInfo = document.createElement('p');
    winInfo.textContent = 'För att vinna spelet måste du:';
    paragraph.appendChild(winInfo);

    const winList = document.createElement('ul');
    const winItems = [
        'Samla minst 100 poäng.',
        'Hitta Rockbjörnen och plocka upp den.',
    ];

    winItems.forEach(winItem => {
        const listItem = document.createElement('li');
        listItem.textContent = winItem;
        winList.appendChild(listItem);
    });
    paragraph.appendChild(winList);

    // Övriga regler
    const otherRulesHeading = document.createElement('h4');
    otherRulesHeading.textContent = 'Övriga regler';
    paragraph.appendChild(otherRulesHeading);

    const otherRulesList = document.createElement('ul');
    const otherRulesItems = [
        'Du kan bara spela om poäng när du landar på en spelbricka.',
        'Endast en spelare åt gången får svara på frågor och samla poäng.',
    ];

    otherRulesItems.forEach(rule => {
        const listItem = document.createElement('li');
        listItem.textContent = rule;
        otherRulesList.appendChild(listItem);
    });
    paragraph.appendChild(otherRulesList);

    howToInfoPage.appendChild(paragraph);
    goBackArrow.appendChild(howToInfoPage);



    /*
    // Skapa text
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `

        <p>Den försvunna Rockbjörnen</strong> &ndash; Ett musikquizspel</p>
    
        <h4>Antal spelare</h4>
        <p>Spelet är för 4&ndash;5 spelare.</p>
    
        <h4>Mål med spelet</h4>
        <p>Första spelaren att nå 100 poäng och samtidigt hitta Rockbjörnen vinner spelet.</p>
    
        <h4>Spelupplägg</h4>
        <ul>
            <li><b>Spelplan:</b> Spelet spelas på en fysisk karta med olika spelbrickor utplacerade.</li>
            <li><b>Tärningskast:</b> Varje spelare kastar tärningen i turordning och flyttar sin spelpjäs det antal steg som tärningen visar.</li>
            <li><b>Stanna på spelbrickor:</b> Om du landar på en spelbricka:
                <ul>
                    <li>Skriv in koden från brickan i appen.</li>
                    <li>Appen spelar upp en låt och du får en fråga om låten med <strong>fyra svarsalternativ</strong>.</li>
                    <li>Du har <strong>10 sekunder</strong> på dig att svara.</li>
                </ul>
            </li>
        </ul>
    
        <h4>Poängsystem</h4>
        <ul>
            <li><strong>10 poäng:</strong> Lätt fråga</li>
            <li><strong>20 poäng:</strong> Medelsvår fråga</li>
            <li><strong>30 poäng:</strong> Svår fråga</li>
        </ul>

        <h3>Rockbjörnen</h3>
    
        <h4>Vinst</h4>
        <p>För att vinna spelet måste du:</p>
        <ul>
            <li>Samla <strong>minst 100 poäng</strong>.</li>
            <li>Hitta <strong>Rockbjörnen</strong> och plocka upp den.</li>
        </ul>
    
        <h4>Övriga regler</h4>
        <ul>
            <li>Du kan bara spela om poäng när du landar på en spelbricka.</li>
            <li>Endast en spelare åt gången får svara på frågor och samla poäng.</li>
        </ul>
    `;

    howToInfoPage.appendChild(paragraph);
    goBackArrow.appendChild(howToInfoPage);
     */

    // Skapa SVG-sektionen längst ner
    const svgInfoPage = document.createElement('div');
    svgInfoPage.className = 'svg-info-page';

    const svgFooter = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgFooter.setAttribute('width', '393');
    svgFooter.setAttribute('height', '140');
    svgFooter.setAttribute('viewBox', '0 0 393 140');
    svgFooter.setAttribute('fill', 'none');
    svgFooter.innerHTML = `
    <path d="M0 1L393 1" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M0 139H393" stroke="#BB3B4E" stroke-width="2"/>
                <line x1="137" y1="140" x2="137" y2="1" stroke="#BB3B4E" stroke-width="2"/>
                <line x1="151" y1="140" x2="151" y2="1" stroke="#BB3B4E" stroke-width="2"/>
                <line x1="166" y1="140" x2="166" y2="1" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M53.1715 87.6703L54.7843 87.887L54.2535 86.3419L36.3147 34.1223L70.4771 22.0099L76.7519 40.2759L53.6628 48.4622L52.7203 48.7964L53.0452 49.7421L70.3567 100.136C72.1534 105.366 71.4933 110.637 68.2767 116.029C65.057 121.427 60.2735 125.262 53.8674 127.534C47.4613 129.805 41.3674 129.826 35.5411 127.636C29.7204 125.448 25.9753 121.738 24.1786 116.508C22.382 111.278 23.042 106.007 26.2586 100.615C29.4784 95.2173 34.2619 91.3817 40.668 89.1104C42.9086 88.3159 45.0401 87.8124 47.0644 87.5915C49.0953 87.3699 51.1304 87.396 53.1715 87.6703Z" fill="#4B815B" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M84.9157 74.9403L86.5284 75.157L85.9976 73.6119L68.0589 21.3924L102.221 9.27996L108.496 27.5459L85.407 35.7322L84.4645 36.0664L84.7894 37.0122L102.101 87.4058C103.898 92.6358 103.237 97.9071 100.021 103.299C96.8011 108.697 92.0176 112.532 85.6115 114.804C79.2054 117.075 73.1116 117.096 67.2852 114.906C61.4646 112.718 57.7194 109.008 55.9228 103.778C54.1261 98.5484 54.7862 93.2771 58.0028 87.8848C61.2225 82.4873 66.006 78.6517 72.4121 76.3804C74.6528 75.586 76.7842 75.0824 78.8086 74.8615C80.8394 74.6399 82.8745 74.666 84.9157 74.9403Z" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="2"/>
                <rect x="304" y="12" width="34.375" height="118" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="2"/>
                <rect x="364.625" y="12" width="34.375" height="118" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M178.016 14.7857C178.008 14.7694 178 14.7533 177.991 14.7374C177.532 13.9024 177.233 13.3434 177.068 12.954C177.16 12.9488 177.267 12.9451 177.392 12.9432C177.714 12.9382 178.066 12.944 178.488 12.951C178.898 12.9577 179.374 12.9656 179.95 12.9656L288.512 12.9656C288.983 12.9656 289.357 12.9657 289.663 12.9773C289.786 12.9819 289.888 12.9882 289.974 12.9956C289.951 13.0595 289.923 13.1336 289.889 13.2192C289.776 13.4985 289.617 13.8465 289.404 14.2899C289.292 14.5247 289.166 14.7838 289.028 15.0681C288.653 15.8391 288.189 16.7954 287.659 17.9551L234.786 125.608C234.04 126.992 233.513 127.938 233.095 128.533C232.955 128.732 232.844 128.867 232.76 128.956C232.669 128.849 232.552 128.686 232.405 128.448C232.08 127.922 231.702 127.186 231.198 126.201C231.103 126.017 231.004 125.823 230.899 125.621L178.016 14.7857ZM290.305 13.0502C290.305 13.0503 290.303 13.0496 290.3 13.0482C290.304 13.0495 290.305 13.0502 290.305 13.0502ZM232.899 129.093C232.899 129.093 232.898 129.093 232.896 129.091C232.898 129.092 232.899 129.093 232.899 129.093Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="1.88297" stroke-linecap="round" stroke-linejoin="round"/>
    `;
    svgInfoPage.appendChild(svgFooter);

    main.appendChild(goBackArrow);
    main.appendChild(svgInfoPage);

    // Lägg till huvudcontainern i body
    body.appendChild(main);

    return backArrow;
}

renderInfoPage();