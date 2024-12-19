"use strict";
export {renderWonTheGamePage}

function renderWonTheGamePage(name) {

   //Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Main container
    const main = document.createElement("main");
    main.id = "wonTheGamePage-main";

    // Progress container
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container-big";

    // SVG icon
    const svgIconBig = document.createElement("div");
    svgIconBig.className = "svg-icon-big";
    svgIconBig.innerHTML = `
     <svg width="309" height="251" viewBox="0 0 309 251" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M161.188 38.2927V55.4309" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M148.867 38.2927V55.4309" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M181.699 18.3281L173.506 57.4473" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="58.9387" y2="-1" transform="matrix(-0.383224 0.923655 -0.928461 -0.371431 205.336 6.03235)" stroke="#BB3B4E" stroke-width="2"/>
                <path d="M232.9 2.52697L194.039 65.5122" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="86.6067" y2="-1" transform="matrix(-0.640137 0.768261 -0.779571 -0.626313 258.723 6.03235)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="96.8037" y2="-1" transform="matrix(-0.763609 0.645679 -0.659333 -0.751851 285.412 18.1302)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="91.5448" y2="-1" transform="matrix(-0.874765 0.484547 -0.49813 -0.867102 299.785 46.3578)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="86.334" y2="-1" transform="matrix(-0.927563 0.373667 -0.385507 -0.922705 308 74.5854)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="74.9036" y2="-1" transform="matrix(-0.986871 0.161508 -0.167338 -0.9859 303.895 108.862)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="59.6832" y2="-1" transform="matrix(-0.997715 -0.0675654 0.0700612 -0.997543 291.576 139.106)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="51.2614" y2="-1" transform="matrix(-0.96135 -0.27533 0.284735 -0.958606 279.252 163.301)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="43.0272" y2="-1" transform="matrix(-0.906716 -0.421741 0.434484 -0.90068 262.826 181.447)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="31.8381" y2="-1" transform="matrix(-0.773918 -0.633286 0.647054 -0.762444 240.242 197.577)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="33.2965" y2="-1" transform="matrix(-0.616683 -0.787211 0.79795 -0.602724 223.812 215.724)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="32.6594" y2="-1" transform="matrix(-0.50297 -0.864304 0.872093 -0.48934 207.387 225.805)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="37.7169" y2="-1" transform="matrix(-0.272204 -0.96224 0.964755 -0.263148 186.854 239.919)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="44.4052" y2="-1" transform="matrix(-0.0462409 -0.99893 0.999005 -0.0445893 164.268 250)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="44.4052" y2="-1" transform="matrix(0.0462409 -0.99893 0.999005 0.0445893 145.787 250)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="37.7169" y2="-1" transform="matrix(0.272204 -0.96224 0.964755 0.263148 123.199 239.919)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="32.6594" y2="-1" transform="matrix(0.50297 -0.864304 0.872093 0.48934 102.668 225.805)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="31.7336" y2="-1" transform="matrix(0.647054 -0.762444 0.773918 0.633286 86.2402 215.724)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="30.601" y2="-1" transform="matrix(0.805204 -0.592998 0.606992 0.794708 69.8125 197.577)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="40.3265" y2="-1" transform="matrix(0.916521 -0.399987 0.412347 0.911027 47.2246 181.447)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="48.7516" y2="-1" transform="matrix(0.968722 -0.248147 0.25676 0.966475 30.8008 161.285)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="61.6332" y2="-1" transform="matrix(0.999465 -0.0327139 0.0339268 0.999424 16.4277 139.106)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="72.878" y2="-1" transform="matrix(0.986126 0.165998 -0.17198 0.9851 6.16211 108.862)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="86.334" y2="-1" transform="matrix(0.927563 0.373667 -0.385507 0.922705 0 74.5854)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="89.7541" y2="-1" transform="matrix(0.86934 0.494214 -0.50789 0.861422 10.2656 48.3738)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="95.5143" y2="-1" transform="matrix(0.773918 0.633286 -0.647054 0.762444 22.5859 20.1461)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="83.7438" y2="-1" transform="matrix(0.637502 0.770449 -0.781696 0.623659 51.334 8.04871)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="73.6804" y2="-1" transform="matrix(0.529495 0.848313 -0.856798 0.515652 78.0273 2)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="58.1827" y2="-1" transform="matrix(0.352912 0.935656 -0.93978 0.341781 104.723 6.03235)" stroke="#BB3B4E" stroke-width="2"/>
                <line y1="-1" x2="39.6608" y2="-1" transform="matrix(0.258862 0.965914 -0.968197 0.250188 127.309 18.1302)" stroke="#BB3B4E" stroke-width="2"/>
            </svg>
    `;

    // Lägg till text i progress container
    const progressTextBig = document.createElement("div");
    progressTextBig.className = "progress-text-big-win";
    progressTextBig.innerHTML = `
            <svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_515_215" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-2" y="-2" width="102" height="102">
                <rect x="-0.760058" y="-0.760058" width="99.5201" height="99.5201" fill="#F9E396" stroke="#BB3B4E" stroke-width="1.52012"/>
                </mask>
                <g mask="url(#mask0_515_215)">
                <path d="M28.5833 85.7499V77.5833H44.9167V64.9249C41.5819 64.1763 38.6045 62.7642 35.9844 60.6885C33.3642 58.6128 31.4417 56.0097 30.2167 52.8791C25.1125 52.2666 20.842 50.0378 17.4052 46.1926C13.9684 42.3475 12.25 37.8388 12.25 32.6666V28.5833C12.25 26.3374 13.0497 24.4149 14.649 22.8156C16.2483 21.2163 18.1708 20.4166 20.4167 20.4166H28.5833V12.2499H69.4167V20.4166H77.5833C79.8292 20.4166 81.7517 21.2163 83.351 22.8156C84.9503 24.4149 85.75 26.3374 85.75 28.5833V32.6666C85.75 37.8388 84.0316 42.3475 80.5948 46.1926C77.158 50.0378 72.8875 52.2666 67.7833 52.8791C66.5583 56.0097 64.6358 58.6128 62.0156 60.6885C59.3955 62.7642 56.4181 64.1763 53.0833 64.9249V77.5833H69.4167V85.7499H28.5833ZM28.5833 44.0999V28.5833H20.4167V32.6666C20.4167 35.2527 21.1653 37.5836 22.6625 39.6593C24.1597 41.735 26.1333 43.2152 28.5833 44.0999ZM49 57.1666C52.4028 57.1666 55.2951 55.9756 57.6771 53.5937C60.059 51.2117 61.25 48.3194 61.25 44.9166V20.4166H36.75V44.9166C36.75 48.3194 37.941 51.2117 40.3229 53.5937C42.7049 55.9756 45.5972 57.1666 49 57.1666ZM69.4167 44.0999C71.8667 43.2152 73.8403 41.735 75.3375 39.6593C76.8347 37.5836 77.5833 35.2527 77.5833 32.6666V28.5833H69.4167V44.0999Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="1.7"/>
                </g>
            </svg>
    `;

    // Append SVG och text i progress-container
    progressContainer.appendChild(svgIconBig);
    progressContainer.appendChild(progressTextBig);

    // Text Section
    const winnerName = name;

    const wonTheGamePageText = document.createElement("div");
    wonTheGamePageText.className = "wonTheGamePage-text";
    wonTheGamePageText.innerHTML = `
    <h2>GRATTIS!!</h2>
    <h3>${winnerName} har vunnit!</h3>  
    `;
    // Change placeholder ${name} on player that winnes the Game

    // Button Section
    const wonTheGamePageButton = document.createElement("div");
    wonTheGamePageButton.id = "wonTheGamePage-card";

    const greenButton = document.createElement("div");
    greenButton.id = "green-wonGame";
    greenButton.className = "button";
    greenButton.innerHTML = `<p class="button-text">Spela igen</p>`;

    const redButton = document.createElement("div");
    redButton.id = "red-wonGame";
    redButton.className = "button";
    redButton.innerHTML = `<p class="button-text">Avsluta</p>`;

    // Append buttons to the card container
    wonTheGamePageButton.appendChild(greenButton);
    wonTheGamePageButton.appendChild(redButton);

    // Footer
    const footer = document.createElement("footer");
    const footerP = document.createElement("div");
    footerP.className = "footer-p";
    footerP.innerHTML = `<p>©rockbjörnen</p>`;
    footer.appendChild(footerP);

    // Append everything to the main container
    main.appendChild(progressContainer);
    main.appendChild(wonTheGamePageText);
    main.appendChild(wonTheGamePageButton);
    main.appendChild(footer);

    // Append main to body
    body.appendChild(main);

    /*
    // Eventlyssnare på knapparna - vet inte om vi ska ha något liknande
    greenButton.addEventListener("click", () => {
        alert("Grattis! Du har valt Rockbjörnen!");
    });

    redButton.addEventListener("click", () => {
        alert("Oj! Du valde att inte ta Rockbjörnen.");
    });
    */
}
renderWonTheGamePage();