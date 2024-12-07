"use strict";

function renderMakeRoomPage() {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudcontainer
    const main = document.createElement('main');
    main.id = 'makeRoomPage-main';

    // Skapa "go-back-info"-container
    const goBackInfo = document.createElement('div');
    goBackInfo.id = 'go-back-info';

    // Skapa "top-bar"-container
    const topBar = document.createElement('div');
    topBar.className = 'top-bar';

    const goBack = document.createElement('div');
    goBack.className = 'go-back';

    const goBackImg = document.createElement('img');
    goBackImg.src = '../icons/redbackarrow.svg';
    goBackImg.alt = 'Back';
    goBack.appendChild(goBackImg);

    const iconInfo = document.createElement('div');
    iconInfo.className = 'icon-info';

    const iconInfoImg = document.createElement('img');
    iconInfoImg.src = '../icons/info.svg';
    iconInfoImg.alt = 'Info';
    iconInfo.appendChild(iconInfoImg);

    topBar.appendChild(goBack);
    topBar.appendChild(iconInfo);

    goBackInfo.appendChild(topBar);

    // Lägg till "go-back-info" som första element i "main"
    main.insertBefore(goBackInfo, main.firstChild);


    // Skapa header med SVG
    const header = document.createElement('div');
    header.className = 'svg-header';

    const svgHeader = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgHeader.classList = 'svg-icon-loginPage';
    svgHeader.setAttribute('width', '393');
    svgHeader.setAttribute('height', '317');
    svgHeader.setAttribute('viewBox', '0 0 393 317');
    svgHeader.setAttribute('fill', 'none');

    // Lägg till SVG-paths
    svgHeader.innerHTML = `
      <path d="M0 1L393 1" stroke="#BB3B4E" stroke-width="2"/>
          <path d="M-1 278L393 278" stroke="#BB3B4E" stroke-width="2"/>
          <path d="M-1 140L393 140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="246" y1="140" x2="246" y2="1" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="207" y1="278" x2="207" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="223" y1="278" x2="223" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="239" y1="278" x2="239" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="255" y1="278" x2="255" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="271" y1="278" x2="271" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="286" y1="278" x2="286" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="302" y1="278" x2="302" y2="140" stroke="#BB3B4E" stroke-width="2"/>
          <line x1="260" y1="140" x2="260" y2="1" stroke="#BB3B4E" stroke-width="2"/>
          <path d="M354.084 219.213L355.444 220.03L355.608 218.441L362.257 154.102L407.108 157.952L404.754 180.734L374.521 178.138L373.525 178.053L373.422 179.048L367.022 240.976C366.354 247.438 362.9 252.751 356.498 256.936C350.091 261.125 342.719 262.877 334.332 262.157C325.946 261.437 319.063 258.461 313.626 253.256C308.195 248.055 305.889 242.247 306.557 235.785C307.224 229.322 310.679 224.009 317.081 219.824C323.488 215.635 330.86 213.884 339.246 214.604C342.177 214.855 344.839 215.364 347.238 216.125C349.644 216.887 351.925 217.916 354.084 219.213Z" fill="#4B815B" stroke="#BB3B4E" stroke-width="2"/>
          <path d="M299.005 86.6732H277.5V55.9926H299.005H299.206L299.351 55.8533L326.011 30.265V112.401L299.351 86.8125L299.206 86.6732H299.005ZM316.009 54.7006V53.5276L315.163 54.3398L303.48 65.5528H288.003H287.503V66.0528V76.613V77.113H288.003H303.48L315.163 88.3259L316.009 89.1381V87.9652V54.7006ZM338.014 35.4456V25.6234C349.002 28.1278 357.961 33.5484 364.911 41.8864C371.988 50.3767 375.523 60.1416 375.523 71.2009C375.523 82.2602 371.988 92.0251 364.911 100.515C357.961 108.853 349.002 114.274 338.014 116.778V106.956C346.196 104.612 352.815 100.188 357.851 93.6834C362.962 87.0833 365.52 79.5833 365.52 71.2009C365.52 62.8184 362.962 55.3185 357.851 48.7183C352.815 42.2142 346.196 37.7893 338.014 35.4456ZM347.2 83.5392C344.959 87.0703 341.901 89.779 338.014 91.6678V50.7342C341.899 52.6245 344.957 55.3542 347.199 58.9264C349.579 62.7187 350.767 66.8507 350.767 71.3329C350.767 75.725 349.58 79.7903 347.2 83.5392Z" fill="#BB3B4E" stroke="#BB3B4E"/>
          <rect x="-11" y="12" width="34.375" height="118" fill="#4B815B" stroke="#BB3B4E" stroke-width="2"/>
          <rect x="49.625" y="12" width="34.375" height="118" fill="#4B815B" stroke="#BB3B4E" stroke-width="2"/>
          <path d="M172 12.2142L186.092 55.2615L186.318 55.9504H187.042H232.624L195.754 82.5382L195.161 82.9657L195.389 83.6604L209.476 126.693L172.585 100.09L172 99.6679L171.415 100.09L134.524 126.693L148.611 83.6604L148.839 82.9657L148.246 82.5382L111.376 55.9504H156.958H157.682L157.908 55.2615L172 12.2142Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="2"/>
          <path d="M-29.7795 152.742C-29.7888 152.725 -29.7986 152.708 -29.8089 152.692C-30.3116 151.888 -30.6437 151.343 -30.8339 150.96C-30.7023 150.951 -30.544 150.946 -30.3541 150.943C-29.9879 150.938 -29.5798 150.944 -29.0948 150.951C-28.6256 150.958 -28.0844 150.966 -27.4398 150.966H96.0818C96.9462 150.966 97.5021 150.969 97.862 151.004C97.8406 151.056 97.8154 151.114 97.7856 151.179C97.6587 151.456 97.4774 151.803 97.236 152.246C97.1082 152.481 96.9651 152.74 96.808 153.024C96.3819 153.795 95.8531 154.752 95.2502 155.911L35.0917 263.563C34.2437 264.946 33.6445 265.891 33.1688 266.487C32.9306 266.785 32.7626 266.944 32.6513 267.023C32.6469 267.026 32.6427 267.029 32.6388 267.031C32.6273 267.022 32.614 267.012 32.5989 266.998C32.4805 266.896 32.3192 266.711 32.1016 266.401C31.733 265.876 31.3039 265.141 30.7293 264.157C30.6216 263.972 30.5088 263.779 30.3903 263.577L-29.7795 152.742ZM98.2132 151.067C98.2132 151.067 98.2114 151.066 98.2082 151.065C98.2117 151.066 98.2133 151.067 98.2132 151.067ZM32.5796 267.065C32.5796 267.065 32.5803 267.065 32.5817 267.064C32.5803 267.065 32.5796 267.065 32.5796 267.065ZM32.6944 267.068C32.6957 267.069 32.6964 267.069 32.6964 267.069C32.6964 267.069 32.6957 267.069 32.6944 267.068Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="1.88297" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M198.377 265.384C198.379 265.389 198.382 265.393 198.384 265.398C198.387 265.402 198.389 265.405 198.391 265.409C198.971 266.335 199.347 266.954 199.53 267.38C199.614 267.576 199.637 267.686 199.639 267.74C199.602 267.759 199.519 267.79 199.353 267.815C199.155 267.845 198.891 267.859 198.543 267.864C198.179 267.869 197.761 267.863 197.269 267.856C196.799 267.85 196.261 267.842 195.639 267.842H72.8143C71.7338 267.842 71.0695 267.839 70.6793 267.754C70.5433 267.725 70.4874 267.694 70.4689 267.681C70.4673 267.667 70.4668 267.639 70.4739 267.592C70.4933 267.462 70.5583 267.265 70.6945 266.967C70.828 266.675 71.015 266.319 71.2556 265.877C71.3845 265.64 71.5281 265.38 71.6851 265.096C72.1091 264.329 72.6314 263.384 73.2292 262.234L133.056 155.175C133.898 153.802 134.511 152.833 135.007 152.213C135.255 151.902 135.454 151.705 135.617 151.589C135.775 151.478 135.869 151.465 135.925 151.469C135.986 151.473 136.087 151.505 136.246 151.643C136.406 151.782 136.592 152.001 136.817 152.321C137.195 152.861 137.634 153.613 138.205 154.591C138.313 154.775 138.425 154.968 138.543 155.168L198.377 265.384ZM70.4718 267.694C70.4716 267.694 70.4708 267.693 70.47 267.689C70.4716 267.692 70.472 267.694 70.4718 267.694Z" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="0.936171" stroke-linecap="round" stroke-linejoin="round"/>
`;

    header.appendChild(svgHeader);
    main.appendChild(header);

    // Skapa innehåll
    const content = document.createElement('div');
    content.className = 'content';

    // Inputfält för spelnamn
    const inputField1 = document.createElement('div');
    inputField1.className = 'input-field';

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = 'Ditt spelnamn';
    inputField1.appendChild(input1);
    content.appendChild(inputField1);

    // Inputfält för rummets namn
    const inputField2 = document.createElement('div');
    inputField2.className = 'input-field';

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = 'Rummets namn';
    inputField2.appendChild(input2);
    content.appendChild(inputField2);

    // Knapp för att skapa rum
    const button = document.createElement('button');
    button.id = 'btnMakeRoom';
    button.textContent = 'Skapa rum';

    button.addEventListener('click', () => {
        const playerName = input1.value.trim();
        const roomName = input2.value.trim();

        if (!playerName || !roomName) {
            alert('Vänligen fyll i både spelnamn och rummets namn.');
        } else {
            alert(`Rum skapat!\nSpelarnamn: ${playerName}\nRumsnamn: ${roomName}`);
        }
    });

    content.appendChild(button);
    main.appendChild(content);

    // Skapa footer med SVG
    const footer = document.createElement('div');
    footer.className = 'footer';

    const svgFooter = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgFooter.classList = 'svg-icon-footer';
    svgFooter.setAttribute('width', '393');
    svgFooter.setAttribute('height', '168');
    svgFooter.setAttribute('viewBox', '0 0 393 168');
    svgFooter.setAttribute('fill', 'none');

    // Lägg till SVG-paths
    svgFooter.innerHTML = `
        <path d="M-1 29H393.5" stroke="#BB3B4E" stroke-width="2"/>
        <path d="M-2 167H392.5" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="136" y1="168.004" x2="136" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="136" y1="168.004" x2="136" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="150" y1="168.004" x2="150" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="165" y1="168.004" x2="165" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="136" y1="168.004" x2="136" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="150" y1="168.004" x2="150" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <line x1="165" y1="168.004" x2="165" y2="29.0001" stroke="#BB3B4E" stroke-width="2"/>
        <rect x="304" y="39" width="34.375" height="118" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="2"/>
        <rect x="364.625" y="39" width="34.375" height="118" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="2"/>
        <path d="M56.1715 117.67L57.7843 117.887L57.2535 116.342L39.3147 64.1223L73.4771 52.0099L79.7519 70.2759L56.6628 78.4622L55.7203 78.7964L56.0452 79.7421L73.3567 130.136C75.1534 135.366 74.4933 140.637 71.2767 146.029C68.057 151.427 63.2735 155.262 56.8674 157.534C50.4613 159.805 44.3674 159.826 38.5411 157.636C32.7204 155.448 28.9753 151.738 27.1786 146.508C25.382 141.278 26.042 136.007 29.2586 130.615C32.4784 125.217 37.2619 121.382 43.668 119.11C45.9086 118.316 48.0401 117.812 50.0644 117.591C52.0953 117.37 54.1304 117.396 56.1715 117.67Z" fill="#4B815B" stroke="#BB3B4E" stroke-width="2"/>
        <path d="M87.9157 104.94L89.5284 105.157L88.9976 103.612L71.0589 51.3924L105.221 39.28L111.496 57.5459L88.407 65.7322L87.4645 66.0664L87.7894 67.0122L105.101 117.406C106.898 122.636 106.237 127.907 103.021 133.299C99.8011 138.697 95.0176 142.532 88.6115 144.804C82.2054 147.075 76.1116 147.096 70.2852 144.906C64.4646 142.718 60.7194 139.008 58.9228 133.778C57.1261 128.548 57.7862 123.277 61.0028 117.885C64.2225 112.487 69.006 108.652 75.4121 106.38C77.6528 105.586 79.7842 105.082 81.8086 104.862C83.8394 104.64 85.8745 104.666 87.9157 104.94Z" fill="#BB3B4E" stroke="#BB3B4E" stroke-width="2"/>
        <path d="M290.276 40.5L233 155.753L175.724 40.5L290.276 40.5Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="2"/>
`;

    footer.appendChild(svgFooter);
    main.appendChild(footer);

    body.appendChild(main);

}

renderMakeRoomPage();