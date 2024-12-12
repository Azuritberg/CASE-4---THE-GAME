"use strict";

function renderWaitRoomAllPlayersPage() {
    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudcontainer
    const main = document.createElement('main');
    main.id = 'waitRoomAllPlayerPage-main';

    // Skapa toppen (Game PIN-sektion)
    const topContainer = document.createElement('div');
    topContainer.className = 'game-PIN-topContainer';

    // Skapa tillbaka-knappen
    const backArrowContainer = document.createElement('div');
    backArrowContainer.id = 'back-arrow';

    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    const backArrow = document.createElement('div');
    backArrow.className = 'info-icon';

    const backArrowImg = document.createElement('img');
    backArrowImg.src = '../icons/whitebackarrow.svg';
    backArrowImg.alt = 'Back Arrow';
    backArrow.appendChild(backArrowImg);

    topBar.appendChild(backArrow);

    // Lägg till rubriken i toppen
    const topTitle = document.createElement('h2');
    topTitle.innerHTML = 'Spelet startar <br>Strax...';
    backArrowContainer.appendChild(topBar);
    backArrowContainer.appendChild(topTitle);

    topContainer.appendChild(backArrowContainer);
    main.appendChild(topContainer);

    // Skapa huvudinnehållet
    const contentContainer = document.createElement('div');
    contentContainer.className = 'waitRoomAllPlayerPage-container';

    // Game PIN container
    const gamePinContainer = document.createElement('div');
    gamePinContainer.className = 'game-pin-container';

    const gamePinText = document.createElement('p');
    gamePinText.textContent = 'Game PIN:';
    gamePinContainer.appendChild(gamePinText);

    const gamePinNumber = document.createElement('p');
    gamePinNumber.className = 'pin-number';
    gamePinNumber.textContent = '305 1742';
    gamePinContainer.appendChild(gamePinNumber);

    contentContainer.appendChild(gamePinContainer);

    // Skapa ikon och antal spelare
    const playerIconContainer = document.createElement('div');
    playerIconContainer.className = 'icon-number';

    const personIcon = document.createElement('div');
    personIcon.className = 'icon-person';
    const personIconImg = document.createElement('img');
    personIconImg.src = '../icons/person.svg';
    personIconImg.alt = 'Person Icon';
    personIcon.appendChild(personIconImg);

    const personNumber = document.createElement('p');
    personNumber.className = 'person-number';
    personNumber.textContent = '0';

    playerIconContainer.appendChild(personIcon);
    playerIconContainer.appendChild(personNumber);
    contentContainer.appendChild(playerIconContainer);

    main.appendChild(contentContainer);

    // Skapa "Waiting for players"-sektionen
    const waitingPlayersContainer = document.createElement('div');
    waitingPlayersContainer.className = 'waiting-player';

    const waitingText = document.createElement('p');
    waitingText.textContent = 'Waiting for players...';
    waitingPlayersContainer.appendChild(waitingText);
    main.appendChild(waitingPlayersContainer);

    // Skapa knappen "Starta spelet"
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'waitRoomAllPlayerPage-button';

    const button = document.createElement('div');
    button.id = 'inactive';
    button.className = 'button';

    const buttonText = document.createElement('p');
    buttonText.className = 'button-text';
    buttonText.textContent = 'Starta spelet';
    button.appendChild(buttonText);

    buttonContainer.appendChild(button);
    main.appendChild(buttonContainer);


    /*
// Skapa footer
const footer = document.createElement('footer');
const footerTextContainer = document.createElement('div');
footerTextContainer.className = 'footer-p';

const footerText = document.createElement('p');
footerText.textContent = '©rockbjörnen';
footerTextContainer.appendChild(footerText);

footer.appendChild(footerTextContainer);
main.appendChild(footer);
*/


    // Lägg till huvudcontainern i body
    body.appendChild(main);
}

// Anropa funktionen för att rendera sidan
renderWaitRoomAllPlayersPage();









// OBS!!!  - Gamla koden här under

/*

"use strict";

function renderWaitRoomAllPlayersPage() {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudcontainer
    const main = document.createElement('main');
    main.id = 'waitRoomAllPlayerPage-main';

    // Skapa toppen (Game PIN-sektion)
    const topContainer = document.createElement('div');
    topContainer.className = 'game-PIN-topContainer';

    // Skapa tillbaka-knappen
    const backArrowContainer = document.createElement('div');
    backArrowContainer.id = 'back-arrow';

    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    const backArrow = document.createElement('div');
    backArrow.className = 'info-icon';

    const backArrowImg = document.createElement('img');
    backArrowImg.src = '../icons/whitebackarrow.svg';
    backArrowImg.alt = 'Back Arrow';
    backArrow.appendChild(backArrowImg);

    topBar.appendChild(backArrow);
    backArrowContainer.appendChild(topBar);

    // Skapa Game PIN-container
    const gamePinContainer = document.createElement('div');
    gamePinContainer.className = 'game-pin-container';

    const gamePinText = document.createElement('p');
    gamePinText.textContent = 'Game PIN:';
    gamePinContainer.appendChild(gamePinText);

    const gamePinNumber = document.createElement('p');
    gamePinNumber.className = 'pin-number';
    gamePinNumber.textContent = '305 1742';
    gamePinContainer.appendChild(gamePinNumber);

    backArrowContainer.appendChild(gamePinContainer);
    topContainer.appendChild(backArrowContainer);
    main.appendChild(topContainer);

    // Skapa huvudinnehållet
    const contentContainer = document.createElement('div');
    contentContainer.className = 'waitRoomAllPlayerPage-container';

    const title = document.createElement('h2');
    title.innerHTML = 'Den försvunna <br>Rockbjörnen';
    contentContainer.appendChild(title);

    // Skapa ikon och antal spelare
    const playerIconContainer = document.createElement('div');
    playerIconContainer.className = 'icon-number';

    const personIcon = document.createElement('div');
    personIcon.className = 'icon-person';
    const personIconImg = document.createElement('img');
    personIconImg.src = '../icons/person.svg';
    personIconImg.alt = 'Person Icon';
    personIcon.appendChild(personIconImg);

    const personNumber = document.createElement('p');
    personNumber.className = 'person-number';
    personNumber.textContent = '0';

    playerIconContainer.appendChild(personIcon);
    playerIconContainer.appendChild(personNumber);
    contentContainer.appendChild(playerIconContainer);

    main.appendChild(contentContainer);

    // Skapa "Waiting for players"-sektionen
    const waitingPlayersContainer = document.createElement('div');
    waitingPlayersContainer.className = 'waiting-player';

    const waitingText = document.createElement('p');
    waitingText.textContent = 'Waiting for players...';
    waitingPlayersContainer.appendChild(waitingText);
    main.appendChild(waitingPlayersContainer);

    // Skapa knappen "Starta spelet"
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'waitRoomAllPlayerPage-button';

    const button = document.createElement('div');
    button.id = 'inactive';
    button.className = 'button';

    const buttonText = document.createElement('p');
    buttonText.className = 'button-text';
    buttonText.textContent = 'Starta spelet';
    button.appendChild(buttonText);

    buttonContainer.appendChild(button);
    main.appendChild(buttonContainer);

    /*
    // Skapa footer
    const footer = document.createElement('footer');
    const footerTextContainer = document.createElement('div');
    footerTextContainer.className = 'footer-p';

    const footerText = document.createElement('p');
    footerText.textContent = '©rockbjörnen';
    footerTextContainer.appendChild(footerText);

    footer.appendChild(footerTextContainer);
    main.appendChild(footer);


// Lägg till huvudcontainern i body
body.appendChild(main);
}

// Anropa funktionen för att rendera sidan
renderWaitRoomAllPlayersPage();
*/