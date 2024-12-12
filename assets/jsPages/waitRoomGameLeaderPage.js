"use strict";
export {renderWaitRoomGameLeaderPage}

function renderWaitRoomGameLeaderPage(lobbyData) {
    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudcontainer
    const main = document.createElement('main');
    main.id = 'waitRoomGameLeaderPage-main';

    // Skapa toppen (Game PIN-sektion)
    const topContainer = document.createElement('div');
    topContainer.className = 'game-PIN-topContainer';

    // Skapa tillbaka-knappen och rubriken
    const backArrowContainer = document.createElement('div');
    backArrowContainer.id = 'back-arrow';

    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    const backArrow = document.createElement('div');
    backArrow.className = 'info-icon-back';

    const backArrowImg = document.createElement('img');
    backArrowImg.src = '/static/icons/whitebackarrow.svg';
    backArrowImg.alt = 'Back Arrow';
    backArrow.appendChild(backArrowImg);

    topBar.appendChild(backArrow);
    backArrowContainer.appendChild(topBar);

    // Lägg till rubriken i toppen
    const topTitle = document.createElement('h2');
    topTitle.innerHTML = 'Starta spelet!';
    backArrowContainer.appendChild(topTitle);

    topContainer.appendChild(backArrowContainer);
    main.appendChild(topContainer);

    // Skapa huvudinnehållet
    const contentContainer = document.createElement('div');
    contentContainer.className = 'waitRoomGameLeaderPage-container';

    // Game PIN container
    const gamePinContainer = document.createElement('div');
    gamePinContainer.className = 'game-pin-container';

    const gamePinText = document.createElement('p');
    gamePinText.textContent = 'Game PIN:';
    gamePinContainer.appendChild(gamePinText);

    const gamePinNumber = document.createElement('p');
    gamePinNumber.className = 'pin-number';
    gamePinNumber.textContent = lobbyData.name;
    gamePinContainer.appendChild(gamePinNumber);

    contentContainer.appendChild(gamePinContainer);

    // Skapa ikon och antal spelare
    const playerIconContainer = document.createElement('div');
    playerIconContainer.className = 'icon-number';

    const personIcon = document.createElement('div');
    personIcon.className = 'icon-person';
    const personIconImg = document.createElement('img');
    personIconImg.src = '/static/icons/person.svg';
    personIconImg.alt = 'Person Icon';
    personIcon.appendChild(personIconImg);

    const personNumber = document.createElement('p');
    personNumber.className = 'person-number';
    personNumber.textContent = lobbyData.players.length;

    playerIconContainer.appendChild(personIcon);
    playerIconContainer.appendChild(personNumber);
    contentContainer.appendChild(playerIconContainer);

    main.appendChild(contentContainer);

    // Skapa spelare-sektionen
    const playersContainer = document.createElement('div');
    playersContainer.id = 'new-players';

    const players = lobbyData.players;
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'all-players';

        const playerName = document.createElement('p');
        playerName.className = 'player';
        playerName.textContent = player.name;

        playerDiv.appendChild(playerName);
        playersContainer.appendChild(playerDiv);
    });

    main.appendChild(playersContainer);

    // Skapa "Waiting for players"-sektionen
    const waitingPlayersContainer = document.createElement('div');
    waitingPlayersContainer.className = 'waiting-players';

    const waitingText = document.createElement('p');
    waitingText.textContent = 'Waiting for players...';
    waitingPlayersContainer.appendChild(waitingText);
    main.appendChild(waitingPlayersContainer);

    // Skapa knappen "Starta spelet"
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'waitRoomGameLeaderPage-button';

    const button = document.createElement('div');
    button.id = 'active';
    button.className = 'button-green';

    const buttonText = document.createElement('p');
    buttonText.className = 'button-text';
    buttonText.textContent = 'Starta spelet';
    button.appendChild(buttonText);

    buttonContainer.appendChild(button);
    main.appendChild(buttonContainer);

    // Lägg till huvudcontainern i body
    body.appendChild(main);
    //return buttons
    return({backArrowImg, button});
}

// Anropa funktionen för att rendera sidan
//renderWaitRoomGameLeaderPage();




















// OBS!!! den gamla koden innan ändringarna i figgma

/*
"use strict";

function renderWaitRoomGameLeaderPage() {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudcontainer
    const main = document.createElement('main');
    main.id = 'waitRoomGameLeaderPage-main';

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
    contentContainer.className = 'waitRoomGameLeaderPage-container';

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
    personNumber.textContent = '5';

    playerIconContainer.appendChild(personIcon);
    playerIconContainer.appendChild(personNumber);
    contentContainer.appendChild(playerIconContainer);

    main.appendChild(contentContainer);

    // Skapa spelare-sektionen
    const playersContainer = document.createElement('div');
    playersContainer.id = 'new-players';

    const players = ['Linnsan123', 'Vanessa74', 'Johannes80', 'Bojan9', 'Ronja20'];
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'all-players';

        const playerName = document.createElement('p');
        playerName.className = 'player';
        playerName.textContent = player;

        playerDiv.appendChild(playerName);
        playersContainer.appendChild(playerDiv);
    });

    main.appendChild(playersContainer);

    // Skapa "Waiting for players"-sektionen
    const waitingPlayersContainer = document.createElement('div');
    waitingPlayersContainer.className = 'waiting-players';

    const waitingText = document.createElement('p');
    waitingText.textContent = 'Waiting for players...';
    waitingPlayersContainer.appendChild(waitingText);
    main.appendChild(waitingPlayersContainer);

    // Skapa knappen "Starta spelet"
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'waitRoomGameLeaderPage-button';

    const button = document.createElement('div');
    button.id = 'active';
    button.className = 'button-green';

    const buttonText = document.createElement('p');
    buttonText.className = 'button-text';
    buttonText.textContent = 'Starta spelet';
    button.appendChild(buttonText);

    buttonContainer.appendChild(button);
    main.appendChild(buttonContainer);

    // Lägg till huvudcontainern i body
    body.appendChild(main);
}

// Anropa funktionen för att rendera sidan
renderWaitRoomGameLeaderPage();

*/