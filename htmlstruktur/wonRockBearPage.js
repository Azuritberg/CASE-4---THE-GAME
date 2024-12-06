"use strict";

function renderWonRockBearPage() {
    const body = document.body;

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
  <svg width="62" height="96" viewBox="0 0 62 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_346_2161)">
                    <path d="M32.1593 5.56519C28.6011 3.19227 24.5046 0.480858 20.1865 0C17.8743 0.0587279 17.8743 0.0587281 15.1111 3.61249L14.4604 4.52375C12.7085 3.93959 11.0936 3.64952 9.25488 3.48231L8.21377 4.52375L7.19706 4.36509L6.00141 4.06812C4.47222 3.86548 3.81325 3.80794 2.5263 4.69054C0.499272 7.08116 -0.128729 9.43257 0.0211274 12.542C0.494402 14.2103 1.10667 14.7523 2.45513 15.8168L3.61418 16.6691C4.72942 17.6874 4.87405 18.1449 4.99284 19.6246L5.02537 20.6742C5.20639 23.5487 6.69391 25.5693 8.73433 27.4354C9.58628 28.099 9.58629 28.099 10.4261 28.8999L10.4261 28.8999C12.3071 32.6367 12.3071 32.6367 11.9898 36.9873L11.8577 38.8912C11.8203 41.7115 11.5385 43.4737 9.90558 45.8233C6.72373 50.2439 4.92168 54.7441 5.611 60.2407C6.20088 61.237 6.20088 61.237 6.15761 62.2802C6.00032 66.2466 5.58037 70.4559 6.59314 74.3306C7.6138 77.6014 8.36155 80.5377 8.43643 83.9647L8.44152 85.3003C8.46822 87.5288 8.5262 89.3151 7.49191 91.3232C6.65211 92.5253 6.65211 92.5253 6.05835 94H52.5985C52.5489 93.6503 52.4999 93.3088 52.461 93.046C52.0686 91.1089 52.5519 92.4636 53.4519 90.6871C53.7748 90.2127 53.1385 87.2046 53.4519 86.7442C56.5371 80.2348 59.4776 73.2407 57.1785 66.0012C54.8702 62.5726 52.5515 60.3682 48.4329 59.4236C47.3965 59.2016 46.3637 58.9742 45.3338 58.7233C43.588 58.1501 43.0821 57.9563 42.2125 56.4004C41.2878 54.3822 40.1371 52.8316 38.7104 51.1472L37.8529 50.1518C36.5089 48.55 35.3359 47.0443 33.5278 45.9657L32.6799 45.6606C32.7121 44.7156 32.746 43.7707 32.7887 42.8261L32.8425 41.6575C32.9769 37.3617 34.2512 34.842 37.3425 31.8025C39.1578 30.57 40.9895 30.7037 43.091 31.0804C44.5351 31.8027 45.635 32.0284 47.2554 32.1219C48.9689 31.2481 50.0767 30.4458 51.2247 28.8999L51.9404 27.4354C53.3081 24.6836 54.4167 22.2037 54.5432 19.1039L53.5021 18.0624C53.3279 16.349 53.3279 16.349 53.5021 14.4174L54.1202 12.4973C54.5432 10.7724 54.5432 10.7724 53.9881 9.69229C51.1973 6.91191 51.1973 6.91191 38.2758 6.02082L36.5289 5.92089L34.8841 5.82148C33.4413 5.77056 33.4413 5.77056 32.1593 5.56519Z" fill="#F9E396"/>
                    <path d="M31.8819 5.98117L31.9726 6.04165L32.0802 6.05889C33.3828 6.26756 33.4053 6.2696 34.8602 6.32095L36.4987 6.41998L36.5003 6.42008L38.2414 6.51963C38.2424 6.5197 38.2434 6.51977 38.2444 6.51983C44.7299 6.96709 47.9038 7.18786 49.8172 7.63496C50.7524 7.85349 51.3579 8.12082 51.8912 8.48418C52.425 8.84781 52.9026 9.31691 53.5793 9.99081C53.8418 10.5034 53.9115 10.6654 53.9215 10.8765C53.9336 11.1343 53.8563 11.4737 53.6389 12.361L53.0261 14.2642L53.0091 14.3171L53.0041 14.3725L53.0013 14.4033C52.9168 15.3399 52.8714 15.8435 52.8714 16.3217C52.8714 16.8028 52.9174 17.2546 53.0018 18.0848L53.0047 18.113L53.0227 18.2901L53.1485 18.4159L54.033 19.3008C53.8697 22.186 52.8244 24.5334 51.4927 27.2129L51.4912 27.2158L50.7959 28.6385C49.7424 30.0468 48.7306 30.7969 47.1489 31.6145C45.654 31.5193 44.6443 31.2983 43.3146 30.6332L43.2502 30.601L43.1792 30.5883C41.0576 30.2079 39.0507 30.0383 37.0616 31.3889L37.0242 31.4143L36.9919 31.446C35.4225 32.9891 34.2867 34.4269 33.5306 36.0475C32.7734 37.6702 32.4119 39.4436 32.3429 41.6382C32.3429 41.6394 32.3428 41.6407 32.3428 41.6419L32.2892 42.8031L32.2892 42.8036C32.2464 43.751 32.2124 44.6982 32.1802 45.6435L32.1678 46.0077L32.5106 46.131L33.3125 46.4196C34.8699 47.3597 35.9321 48.632 37.1414 50.0805C37.2496 50.21 37.3589 50.3409 37.4699 50.4732L37.4698 50.4732L37.4741 50.4781L38.3288 51.4704C38.3292 51.4708 38.3296 51.4713 38.33 51.4717C39.7431 53.1402 40.8608 54.6505 41.758 56.6087L41.7663 56.6269L41.7761 56.6443C42.2247 57.4471 42.6137 57.9624 43.1596 58.3412C43.6847 58.7056 44.3243 58.9181 45.1779 59.1983L45.1965 59.2045L45.2155 59.2091C46.251 59.4614 47.288 59.6897 48.3247 59.9118C52.2499 60.813 54.4706 62.8888 56.7235 66.2207C58.9131 73.2169 56.0906 80.0072 53.0117 86.5054C52.919 86.6648 52.8909 86.8492 52.8778 86.9747C52.8613 87.134 52.8598 87.3163 52.8653 87.5027C52.8762 87.8672 52.9164 88.3066 52.9549 88.727L52.9575 88.756C52.9977 89.1951 53.0354 89.6124 53.0442 89.9487C53.0486 90.1171 53.0453 90.2497 53.0347 90.3458C53.0296 90.3928 53.0238 90.4196 53.0209 90.4317L53.0204 90.4324L53.0059 90.4611C52.8005 90.8666 52.6345 91.0624 52.523 91.1655C52.4409 91.2413 52.3995 91.2652 52.3392 91.3001C52.3017 91.3218 52.2569 91.3478 52.1903 91.3931C52.1105 91.4475 52.0025 91.5348 51.9245 91.6799C51.849 91.8202 51.827 91.9666 51.8239 92.0979C51.8181 92.3357 51.8744 92.6679 51.9683 93.1322C51.9846 93.2429 52.0028 93.3672 52.0219 93.5H6.80103C6.9294 93.1905 7.02139 92.9864 7.12363 92.7954C7.28579 92.4926 7.47595 92.2191 7.9018 91.6095L7.92103 91.582L7.93641 91.5521C8.99504 89.4968 8.97145 87.6482 8.94458 85.5421C8.94354 85.4606 8.94249 85.3787 8.9415 85.2964C8.9415 85.2957 8.94149 85.295 8.94148 85.2943L8.93651 83.9628L8.93631 83.9538C8.85998 80.4603 8.09735 77.4737 7.07396 74.193C6.238 70.9852 6.4063 67.5446 6.57358 64.1248C6.60338 63.5154 6.63316 62.9067 6.65721 62.3L6.65989 62.236C6.67915 61.777 6.69314 61.4435 6.60469 61.1134C6.52017 60.7981 6.34535 60.4993 6.09453 60.0759C5.46096 54.7916 7.19536 50.4446 10.3114 46.1154L10.3114 46.1154L10.3162 46.1086C11.1607 44.8934 11.6679 43.8116 11.9642 42.6582C12.2576 41.5163 12.3383 40.3268 12.3574 38.9119L12.4885 37.0237L12.4886 37.022L12.495 36.9352C12.6475 34.844 12.7313 33.6949 12.5232 32.6185C12.3145 31.5392 11.8152 30.5473 10.9114 28.752L10.8727 28.6751L10.8311 28.5923L10.7669 28.5339C9.9253 27.7314 9.90633 27.7145 9.05726 27.0531C7.07049 25.233 5.696 23.3292 5.52488 20.6506L5.4926 19.6091L5.49222 19.5968L5.49123 19.5846C5.4321 18.848 5.36315 18.284 5.13377 17.7701C4.90041 17.2472 4.52293 16.8218 3.95132 16.2999L3.93174 16.282L3.91038 16.2663L2.75824 15.4191C2.08177 14.885 1.63903 14.5178 1.30073 14.0939C0.97986 13.6919 0.737613 13.2176 0.517857 12.4603C0.384492 9.50724 0.979038 7.31123 2.86418 5.06544C3.43848 4.67865 3.83897 4.52265 4.2407 4.46776C4.67364 4.4086 5.14564 4.45936 5.90806 4.56012L7.07654 4.85035L7.09806 4.85569L7.11997 4.85911L8.13668 5.01777L8.38774 5.05695L8.56738 4.87725L9.44216 4.0022C11.1554 4.16982 12.6685 4.45332 14.3023 4.99808L14.6527 5.11492L14.8673 4.81431L15.5121 3.91135C16.2025 3.02348 16.7111 2.36963 17.126 1.88049C17.5438 1.388 17.8427 1.0917 18.1079 0.90296C18.5922 0.558198 19.0043 0.530497 20.1648 0.500718C24.3278 0.975984 28.3093 3.59871 31.8819 5.98117Z" stroke="#BB3B4E"/>
                </g>
                <defs>
                    <filter id="filter0_d_346_2161" x="0" y="0" width="62" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_346_2161"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_346_2161" result="shape"/>
                    </filter>
                </defs>
            </svg>
`;

// Append SVG och text i progress-container
    progressContainer.appendChild(svgIconBig);
    progressContainer.appendChild(progressTextBig);

// Text Section
    const wonRockBearText = document.createElement("div");
    wonRockBearText.className = "wonRockBearPage-text";
    wonRockBearText.innerHTML = `
    <h2>Du har hittat Rockbjörnen!</h2>
    <p>Du har över 20 kändis poäng och kan därför <br>plocka upp björnen!</p>
`;

// Button Section
    const wonRockBearButton = document.createElement("div");
    wonRockBearButton.id = "wonRockBearPage-button";

    const greenButton = document.createElement("div");
    greenButton.id = "green";
    greenButton.className = "buttons";
    greenButton.innerHTML = `<p class="button-text">Plocka upp och vinn björnen</p>`;

    /*
    const redButton = document.createElement("div");
    redButton.id = "red";
    redButton.className = "buttons";
    redButton.innerHTML = `<p class="button-text">Jag hatar att vinna, ingen björn!</p>`;
     */

// Append buttons to the card container
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

// Eventlyssnare på knapparna - vet inte om vi ska ha något liknande
    greenButton.addEventListener("click", () => {
        alert("Grattis! Du har valt Rockbjörnen!");
    });

    /*
    redButton.addEventListener("click", () => {
        alert("Oj! Du valde att inte ta Rockbjörnen.");
    });
     */
}

renderWonRockBearPage();