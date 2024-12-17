"use strict";
export {renderWaitYourTurnPage}
//this funcition must take the current guessing players points and name as parameters
//returns nothing
function renderWaitYourTurnPage() {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Skapa huvudelementet
    const main = document.createElement("main");
    main.id = "waitYourTurnPage-main";

    // Progress Container
    const progressContainer = document.createElement("div");
    progressContainer.className = "progress-container";

    // SVG Icon
    const svgIcon = document.createElement("div");
    svgIcon.classList.add("svg-icon");
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


    // Lägg till SVG i Progress Container
    progressContainer.appendChild(svgIcon);

    // Progress Text
    const progressText = document.createElement("div");
    progressText.className = "progress-text";
    progressText.innerHTML = "<p>20p</p>";
    progressContainer.appendChild(progressText);

    // Lägg till Progress Container i Main
    main.appendChild(progressContainer);

    // Second Page Text
    const waitYourTurnPageText = document.createElement("div");
    waitYourTurnPageText.className = "waitYourTurnPage-text";
    waitYourTurnPageText.innerHTML = `
    <h2>Venni gissar just nu!</h2>
    <p>Det kan bli din tur härnäst</p>
    `;

    main.appendChild(waitYourTurnPageText);

    // Second Page Soundwave
    const soundwave = document.createElement("div");
    soundwave.id = "soundwawe";
    const svgWave = document.createElement("div");
    svgWave.className = "svg-wawe";
    svgWave.innerHTML = `
     <svg width="363" height="159" viewBox="0 0 363 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="86.0449" y1="158.437" x2="86.0449" y2="79.2182" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="1" y1="158.437" x2="1" y2="81.1986" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="10.4492" y1="158.437" x2="10.4492" y2="23.7656" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="19.8984" y1="158.437" x2="19.8984" y2="43.5703" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="29.3496" y1="158.437" x2="29.3496" y2="101.004" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="38.7988" y1="158.437" x2="38.7988" y2="81.1986" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="48.248" y1="158.437" x2="48.248" y2="97.0424" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="57.6992" y1="158.437" x2="57.6992" y2="4.57764e-05" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="67.1465" y1="158.437" x2="67.1465" y2="81.1986" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="76.5977" y1="158.437" x2="76.5977" y2="79.2182" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="95.4922" y1="158.437" x2="95.4922" y2="104.965" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="104.945" y1="158.437" x2="104.945" y2="87.1401" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="86.0449" y1="158.437" x2="86.0449" y2="79.2182" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="114.393" y1="158.437" x2="114.393" y2="130.71" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="123.844" y1="158.437" x2="123.844" y2="87.1401" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="135.182" y1="158.437" x2="135.182" y2="7.92191" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="144.74" y1="55.4536" x2="144.74" y2="158.438" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="152.188" y1="158.437" x2="152.188" y2="85.1596" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="161.641" y1="158.437" x2="161.641" y2="114.866" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="171.092" y1="158.437" x2="171.092" y2="55.453" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="181.484" y1="158.444" x2="181.484" y2="7.91559" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="191.879" y1="158.437" x2="191.879" y2="55.453" stroke="#BB3B4E" stroke-width="2"/>
                    <line y1="-1" x2="114.882" y2="-1" transform="matrix(-0.0164507 -0.999865 0.999837 -0.0180646 202.33 158.437)" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="210.777" y1="158.437" x2="210.777" y2="23.7656" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="220.227" y1="158.437" x2="220.227" y2="69.3163" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="228.732" y1="158.451" x2="228.732" y2="87.1261" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="239.127" y1="158.475" x2="239.127" y2="55.4146" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="248.578" y1="158.437" x2="248.578" y2="130.71" stroke="#BB3B4E" stroke-width="2"/>
                    <line x1="258.137" y1="23.7662" x2="258.137" y2="158.438" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="267.477" y1="158.437" x2="267.477" y2="43.5703" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="276.924" y1="158.437" x2="276.924" y2="69.3163" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="286.373" y1="158.437" x2="286.373" y2="81.1986" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="295.822" y1="158.437" x2="295.822" y2="55.453" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="305.271" y1="158.437" x2="305.271" y2="4.57764e-05" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="314.725" y1="158.437" x2="314.725" y2="79.2182" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="324.174" y1="158.437" x2="324.174" y2="81.1986" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="333.623" y1="158.437" x2="333.623" y2="81.1986" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="343.07" y1="158.437" x2="343.07" y2="112.886" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="352.518" y1="158.437" x2="352.518" y2="106.945" stroke="#CCC5B9" stroke-width="2"/>
                    <line x1="361.969" y1="158.437" x2="361.969" y2="136.652" stroke="#CCC5B9" stroke-width="2"/>
                </svg>
    `;

    soundwave.appendChild(svgWave);

    // Time Text
    const timeText = document.createElement("div");
    timeText.className = "time-text";
    timeText.innerHTML = "<p>00:10</p>";
    soundwave.appendChild(timeText);

    // Lägg till Soundwave i Main
    main.appendChild(soundwave);

    // Footer
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <div class="footer-p">
        <p>©rockbjörnen</p>
    </div>
    `;

    // Lägg till Footer i Main
    main.appendChild(footer);

    // Lägg till Main i Body
    body.appendChild(main);
    //document.body.appendChild(main);

}

renderWaitYourTurnPage();