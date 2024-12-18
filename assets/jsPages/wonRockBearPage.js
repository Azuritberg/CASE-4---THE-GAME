"use strict";
export {renderWonRockBearPage}

function renderWonRockBearPage(points) {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Main container
    const main = document.createElement("main");
    main.id = "wonRockBearPage-main";

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
    progressTextBig.className = "progress-text-big";
    progressTextBig.innerHTML = `
            <svg width="58" height="94" viewBox="0 0 58 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.4325 93H7.58144C7.72315 92.7408 7.89666 92.4899 8.31168 91.8959L8.35015 91.8408L8.38091 91.7811C9.49769 89.6129 9.47213 87.6509 9.44493 85.563C9.44375 85.473 9.44258 85.3828 9.44149 85.2923C9.44147 85.291 9.44146 85.2897 9.44144 85.2883L9.43642 83.9609L9.43639 83.9519L9.43619 83.9429C9.35841 80.3831 8.58102 77.3464 7.55485 74.0556C6.74327 70.9318 6.90621 67.5835 7.07258 64.165C7.1024 63.5522 7.13233 62.9372 7.15678 62.3208C7.15805 62.2902 7.15936 62.2598 7.16066 62.2294C7.17914 61.7994 7.19669 61.3909 7.08765 60.984C6.99068 60.6222 6.79897 60.2842 6.57878 59.9121C5.99991 54.8393 7.66753 50.6445 10.7172 46.4075L10.722 46.4008L10.7267 46.394C11.5995 45.1382 12.135 44.0028 12.4485 42.7826C12.756 41.5859 12.8376 40.3529 12.8572 38.9326L12.9872 37.0601L12.9874 37.0566L12.9988 36.9012C13.1465 34.8776 13.235 33.666 13.0141 32.5236C12.7921 31.3754 12.2632 30.3249 11.3886 28.5879L11.3194 28.4503L11.236 28.2847L11.1076 28.1679C10.2643 27.3637 10.2268 27.3304 9.38039 26.6711C7.44804 24.8976 6.18553 23.1103 6.02438 20.6268L5.99236 19.5936L5.9916 19.5691L5.98963 19.5446C5.93075 18.8111 5.85871 18.1675 5.59035 17.5663C5.31405 16.9472 4.87406 16.4653 4.28845 15.9306L4.2493 15.8949L4.20658 15.8635L3.06138 15.0214C2.38329 14.4858 1.98763 14.153 1.69152 13.782C1.42897 13.4531 1.21649 13.0555 1.01474 12.3777C0.897683 9.58377 1.45824 7.54165 3.20164 5.44142C3.70156 5.11212 4.01701 5.00297 4.30839 4.96316C4.65949 4.91518 5.05802 4.95255 5.81483 5.05216L6.95601 5.3356L6.99906 5.3463L7.04288 5.35313L8.05959 5.51179L8.5617 5.59015L8.92099 5.23074L9.62788 4.52363C11.2159 4.69106 12.6275 4.96669 14.1441 5.4724L14.8449 5.70609L15.2743 5.10487L15.9131 4.21021C16.6029 3.32306 17.1021 2.68161 17.5073 2.20394C17.9181 1.71962 18.1847 1.46201 18.3978 1.31031C18.735 1.07029 18.9846 1.03203 20.1425 1.00147C24.151 1.47098 28.0183 4.00558 31.6045 6.39716L31.7859 6.51811L32.0011 6.5526C33.3243 6.76456 33.3691 6.76862 34.8363 6.82041L36.4685 6.91908L36.4718 6.91926L38.2129 7.01885C44.7231 7.46781 47.8407 7.68658 49.7034 8.12184C50.5918 8.32944 51.1374 8.5756 51.6097 8.8974C52.0852 9.22134 52.5182 9.64044 53.1699 10.2888C53.4074 10.757 53.4182 10.8175 53.422 10.9C53.4299 11.0662 53.3802 11.3152 53.1574 12.2247L52.5502 14.111L52.5161 14.2168L52.5061 14.3276L52.501 14.3845C52.4187 15.2963 52.3714 15.8207 52.3714 16.3217C52.3714 16.8284 52.4198 17.3038 52.502 18.1121L52.5072 18.1636L52.5432 18.5177L52.7949 18.7694L53.5194 19.4942C53.323 22.1693 52.3385 24.3877 51.0449 26.9903L51.042 26.9963L50.3676 28.3762C49.4078 29.6491 48.4898 30.3465 47.0424 31.1062C45.6753 31.0096 44.7544 30.7943 43.5383 30.1861L43.4094 30.1216L43.2674 30.0961C41.1258 29.7122 38.9436 29.5067 36.7808 30.9752L36.7059 31.026L36.6414 31.0895C35.0482 32.656 33.868 34.1418 33.0775 35.8361C32.2849 37.5346 31.914 39.3774 31.8433 41.6188L31.7897 42.78L31.7897 42.781C31.7468 43.7313 31.7127 44.6807 31.6804 45.6265L31.6556 46.3548L32.3413 46.6015L33.0959 46.873C34.5555 47.7651 35.558 48.9651 36.7669 50.4121C36.8718 50.5377 36.9783 50.6652 37.0868 50.7945L37.0868 50.7946L37.0952 50.8044L37.9473 51.7935C37.9483 51.7947 37.9492 51.7958 37.9502 51.797C39.3494 53.4492 40.4338 54.919 41.3034 56.8169L41.3201 56.8533L41.3396 56.8883C41.8021 57.7158 42.2361 58.309 42.8745 58.752C43.4666 59.1628 44.176 59.3957 45.0015 59.6667L45.0219 59.6734L45.0591 59.6856L45.0971 59.6949C46.1381 59.9485 47.1793 60.1777 48.2162 60.3999C51.9491 61.2578 54.0718 63.2064 56.2679 66.4398C58.35 73.1968 55.6406 79.7878 52.5674 86.2754C52.427 86.5283 52.394 86.7928 52.3805 86.923C52.3606 87.1143 52.3597 87.322 52.3655 87.5175C52.3768 87.8978 52.4183 88.3504 52.4562 88.7643L52.4596 88.8016C52.5002 89.2454 52.5361 89.6451 52.5444 89.9619C52.5482 90.1079 52.5453 90.2102 52.5393 90.2752C52.3643 90.6124 52.2389 90.7471 52.1837 90.7982C52.1345 90.8436 52.1287 90.8465 52.1057 90.8579C52.0817 90.8699 52.0391 90.8912 51.9088 90.9799C51.7952 91.0573 51.6153 91.1992 51.4841 91.443C51.3582 91.6771 51.3283 91.9096 51.324 92.0858C51.3179 92.3366 51.3646 92.6455 51.4325 93ZM52.5313 90.332C52.5311 90.3315 52.532 90.3253 52.5347 90.3146C52.5329 90.3271 52.5315 90.3325 52.5313 90.332Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="2"/>
            </svg>

    `;

    let wonRockBearTextContent = "";
    let buttonText = "";
    let canPickUp = false;
    if(points < 20) {
        wonRockBearTextContent = "Du har tyvärr inte 20 kändis poäng och kan därför inte plocka upp Rockbjörnen"
        buttonText = "Jag kan inte plocka upp och får gå vidare :("

    } else {
        wonRockBearTextContent = "Du har över 20 kändis poäng och kan därför plocka upp björnen!"
        canPickUp = true;
        buttonText = "Plocka upp och vinn björnen";
    }

    // Append SVG och text i progress-container
    progressContainer.appendChild(svgIconBig);
    progressContainer.appendChild(progressTextBig);

    // Text Section
    const wonRockBearText = document.createElement("div");
    wonRockBearText.className = "wonRockBearPage-text";
    wonRockBearText.innerHTML = `
    <h2>Du har hittat Rockbjörnen!</h2>
    <p>${wonRockBearTextContent}</p>
    `;

    // Button Section
    const wonRockBearButton = document.createElement("div");
    wonRockBearButton.id = "wonRockBearPage-button";

    const greenButton = document.createElement("div");
    greenButton.id = "green";
    greenButton.className = "buttons";
    greenButton.innerHTML = `<p class="button-text">${buttonText}</p>`;

    /*
    const redButton = document.createElement("div");
    redButton.id = "red";
    redButton.className = "buttons";
    redButton.innerHTML = `<p class="button-text">Jag hatar att vinna, ingen björn!</p>`;
     */

    // Append buttons to the button container
    wonRockBearButton.appendChild(greenButton);
    //wonRockBearButton.appendChild(redButton);

    // Footer
    const footer = document.createElement("footer");
    const footerP = document.createElement("div");
    footerP.className = "footer-p";
    footerP.innerHTML = `<p>©rockbjörnen</p>`;
    footer.appendChild(footerP);

    // Append everything to the main container
    main.appendChild(progressContainer);
    main.appendChild(wonRockBearText);
    main.appendChild(wonRockBearButton);
    main.appendChild(footer);

    // Append main to body
    body.appendChild(main);

    // Eventlyssnare på knapparna
    /*
    greenButton.addEventListener("click", () => {
        alert("Grattis! Du har valt Rockbjörnen!");
    });*/
    return ({canPickUp, wonRockBearText, greenButton});
    /*
    redButton.addEventListener("click", () => {
        alert("Oj! Du valde att inte ta Rockbjörnen.");
    });
     */
}

//renderWonRockBearPage();