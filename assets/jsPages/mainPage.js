"use strict";
export {renderMainPage}

function renderMainPage() {

    // Hämta body
    const body = document.body;

    // Töm body
    body.innerHTML = "";

    // Main container
    const main = document.createElement("main");
    main.id = "mainPage-main";

    // Graphic container
    const graphic = document.createElement("div");
    graphic.id = "graphic";

    // Top bar with text and icon
    const topBar = document.createElement("div");
    topBar.classList.add("top-bar");

    const mainText = document.createElement("h2");
    mainText.classList.add("main-text");
    mainText.textContent = "Den försvunna";

    const infoIcon = document.createElement("div");
    infoIcon.classList.add("info-icon");
    const iconImage = document.createElement("img");
    iconImage.src = "/static/icons/info.svg";
    iconImage.alt = "info";
    infoIcon.appendChild(iconImage);

    // Add elements to the top bar
    topBar.appendChild(mainText);
    topBar.appendChild(infoIcon);

    graphic.appendChild(topBar);

    // SVG container
    const svgContainer = document.createElement("div");
    svgContainer.classList.add("svg-main-page");
    svgContainer.innerHTML = `
    <!-- SVG content -->
        <svg width="393" height="418" viewBox="0 0 393 418" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L393 1" stroke="#BB3B4E" stroke-width="2"/>
            <path d="M0 417L393 417" stroke="#BB3B4E" stroke-width="2"/>
            <path d="M0 278L393 278" stroke="#BB3B4E" stroke-width="2"/>
            <path d="M-1 140L393 140" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="122" y1="418" x2="122" y2="279" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="140" y1="418" x2="140" y2="279" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="156" y1="418" x2="156" y2="279" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="173" y1="418" x2="173" y2="279" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="255" y1="278" x2="255" y2="140" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="271" y1="278" x2="271" y2="140" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="287" y1="278" x2="287" y2="140" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="302" y1="278" x2="302" y2="140" stroke="#BB3B4E" stroke-width="2"/>
            <line x1="260" y1="140" x2="260" y2="1" stroke="#BB3B4E" stroke-width="2"/>
            <path d="M6.51613 240V236.415C9.64194 236.292 11.971 236.047 13.5032 235.679C15.0355 235.311 16.0468 234.576 16.5371 233.473C17.0274 232.369 17.2726 230.715 17.2726 228.508V186.402C17.2726 184.195 17.0274 182.571 16.5371 181.529C16.0468 180.426 15.0355 179.66 13.5032 179.231C11.971 178.802 9.64194 178.556 6.51613 178.495V174.91C7.80323 174.971 9.70323 175.032 12.2161 175.094C14.729 175.094 17.7323 175.094 21.2258 175.094C24.5355 175.094 27.5694 175.063 30.3274 175.002C33.0855 174.94 35.0468 174.91 36.2113 174.91C42.7694 174.91 47.8564 176.227 51.4726 178.863C55.15 181.498 56.9887 185.206 56.9887 189.987C56.9887 193.848 55.671 197.127 53.0355 199.824C50.4 202.46 46.7226 204.329 42.0032 205.432V205.524C48.5613 206.198 53.5258 207.915 56.8968 210.673C60.329 213.431 62.0452 217.139 62.0452 221.797C62.0452 227.435 59.9306 231.879 55.7016 235.127C51.4726 238.376 45.65 240 38.2339 240C37.2532 240 35.9355 239.969 34.2806 239.908C32.6871 239.847 30.7871 239.816 28.5806 239.816C26.4355 239.755 24.0145 239.724 21.3177 239.724C17.7629 239.724 14.6984 239.755 12.1242 239.816C9.61129 239.816 7.74194 239.877 6.51613 240ZM34.1887 236.231C40.1952 236.231 44.6694 235.005 47.6113 232.553C50.6145 230.102 52.1161 226.394 52.1161 221.429C52.1161 216.894 50.7065 213.523 47.8871 211.316C45.129 209.048 40.9306 207.915 35.2919 207.915H24.6274V204.513H33.3613C38.0194 204.513 41.5129 203.379 43.8419 201.111C46.2323 198.782 47.4274 195.442 47.4274 191.09C47.4274 186.739 46.3242 183.552 44.1177 181.529C41.9726 179.445 38.6016 178.434 34.0048 178.495H26.5581V228.6C26.5581 230.745 26.7419 232.369 27.1097 233.473C27.4774 234.576 28.2129 235.311 29.3161 235.679C30.4194 236.047 32.0435 236.231 34.1887 236.231ZM65.0237 261.973V258.479C69.1915 258.295 72.4705 257.498 74.8608 256.089C77.2511 254.679 78.9366 252.381 79.9173 249.194C80.9592 246.006 81.4802 241.685 81.4802 236.231V186.402C81.4802 184.195 81.2044 182.571 80.6528 181.529C80.1011 180.426 78.9673 179.66 77.2511 179.231C75.5963 178.802 73.0834 178.556 69.7124 178.495V174.91C72.7157 175.094 78.1092 175.185 85.8931 175.185C93.1866 175.185 98.427 175.094 101.614 174.91V178.495C98.4882 178.556 96.1592 178.802 94.627 179.231C93.0947 179.66 92.0528 180.426 91.5011 181.529C91.0108 182.571 90.7657 184.195 90.7657 186.402V232.094C90.7657 239.326 89.9076 245.148 88.1915 249.561C86.5366 253.974 83.8092 257.131 80.0092 259.031C76.2705 260.992 71.2753 261.973 65.0237 261.973ZM141.672 241.287C135.359 241.287 129.874 239.969 125.216 237.334C120.558 234.637 116.941 230.806 114.367 225.842C111.793 220.816 110.506 214.84 110.506 207.915C110.506 201.05 111.824 195.044 114.459 189.895C117.095 184.747 120.741 180.763 125.399 177.944C130.119 175.063 135.574 173.623 141.764 173.623C148.016 173.623 153.47 174.971 158.129 177.668C162.848 180.303 166.464 184.103 168.977 189.068C171.551 194.032 172.838 200.008 172.838 206.995C172.838 213.86 171.52 219.866 168.885 225.015C166.311 230.163 162.664 234.177 157.945 237.058C153.287 239.877 147.862 241.287 141.672 241.287ZM141.948 237.885C146.177 237.885 149.854 236.598 152.98 234.024C156.167 231.45 158.619 227.865 160.335 223.268C162.051 218.671 162.909 213.339 162.909 207.271C162.909 201.081 161.959 195.748 160.059 191.274C158.22 186.739 155.677 183.245 152.429 180.794C149.18 178.281 145.533 177.024 141.488 177.024C137.259 177.024 133.551 178.311 130.364 180.885C127.238 183.46 124.787 187.045 123.009 191.642C121.293 196.239 120.435 201.571 120.435 207.639C120.435 213.768 121.385 219.1 123.285 223.635C125.185 228.171 127.759 231.695 131.008 234.208C134.256 236.66 137.903 237.885 141.948 237.885ZM152.153 169.394C150.437 169.394 148.996 168.842 147.832 167.739C146.729 166.574 146.177 165.165 146.177 163.51C146.177 161.855 146.729 160.476 147.832 159.373C148.996 158.269 150.437 157.718 152.153 157.718C153.808 157.718 155.187 158.269 156.29 159.373C157.454 160.476 158.037 161.855 158.037 163.51C158.037 165.165 157.454 166.574 156.29 167.739C155.187 168.842 153.808 169.394 152.153 169.394ZM131.008 169.394C129.353 169.394 127.943 168.842 126.779 167.739C125.675 166.574 125.124 165.165 125.124 163.51C125.124 161.855 125.675 160.476 126.779 159.373C127.943 158.269 129.353 157.718 131.008 157.718C132.724 157.718 134.133 158.269 135.237 159.373C136.401 160.476 136.983 161.855 136.983 163.51C136.983 165.165 136.401 166.574 135.237 167.739C134.133 168.842 132.724 169.394 131.008 169.394ZM184.418 240V236.415C187.544 236.292 189.873 236.047 191.406 235.679C192.938 235.25 193.949 234.484 194.439 233.381C194.93 232.277 195.175 230.653 195.175 228.508V186.402C195.175 184.195 194.93 182.571 194.439 181.529C193.949 180.426 192.938 179.66 191.406 179.231C189.873 178.802 187.544 178.556 184.418 178.495V174.91C185.767 174.971 187.667 175.032 190.118 175.094C192.57 175.094 195.543 175.094 199.036 175.094C200.691 175.094 202.285 175.094 203.817 175.094C205.349 175.094 206.759 175.094 208.046 175.094C209.394 175.032 210.589 175.002 211.631 175.002C212.673 174.94 213.501 174.91 214.114 174.91C221.53 174.91 227.322 176.381 231.489 179.323C235.657 182.265 237.741 186.31 237.741 191.458C237.741 195.013 236.668 198.139 234.523 200.835C232.378 203.471 229.375 205.524 225.514 206.995C221.714 208.466 217.239 209.202 212.091 209.202H200.231V206.444H211.723C217.239 206.444 221.315 205.31 223.951 203.042C226.586 200.713 227.904 197.189 227.904 192.469C227.904 187.75 226.586 184.256 223.951 181.989C221.315 179.66 217.301 178.495 211.907 178.495H204.46V228.508C204.46 230.653 204.706 232.277 205.196 233.381C205.748 234.484 206.789 235.25 208.322 235.679C209.854 236.047 212.183 236.292 215.309 236.415V240C212.489 239.816 207.341 239.724 199.864 239.724C192.509 239.724 187.36 239.816 184.418 240ZM238.017 241.287C235.136 241.287 232.807 240.49 231.03 238.897C229.314 237.242 228.057 234.637 227.26 231.082L224.778 220.51C224.165 217.752 223.368 215.637 222.388 214.166C221.407 212.634 220.12 211.561 218.527 210.948C216.994 210.274 214.91 209.937 212.275 209.937H200.783V207.547H211.356C216.627 207.547 220.794 207.976 223.859 208.834C226.923 209.631 229.252 211.102 230.846 213.247C232.501 215.331 233.788 218.334 234.707 222.256L236.546 229.427C237.098 231.756 237.772 233.411 238.568 234.392C239.365 235.311 240.468 235.771 241.878 235.771C242.675 235.771 243.41 235.587 244.085 235.219C244.82 234.79 245.617 234.085 246.475 233.105L248.498 235.495C247.027 237.518 245.464 238.989 243.809 239.908C242.154 240.827 240.223 241.287 238.017 241.287Z" fill="#BB3B4E"/>
            <path d="M268.8 314.6C271.733 314.6 274.033 315.4 275.7 317C277.433 318.6 278.3 320.633 278.3 323.1C278.3 325.7 277.433 327.867 275.7 329.6C273.967 331.333 271.8 332.2 269.2 332.2C267 332.2 265.3 331.667 264.1 330.6C262.9 329.467 262.3 328 262.3 326.2C262.3 324 263 322.067 264.4 320.4C265.8 318.733 267.6 317.567 269.8 316.9C269.533 316.633 269 316.5 268.2 316.5C265 316.5 262.2 318.267 259.8 321.8C256.867 326.2 253.8 333.967 250.6 345.1C247.4 356.167 243.767 371.3 239.7 390.5H237.5L212.7 336.2C209.833 350.333 207.1 362.233 204.5 371.9C201.967 381.567 199.5 387.967 197.1 391.1C195.633 393.033 194.067 394.567 192.4 395.7C190.8 396.833 188.8 397.4 186.4 397.4C183.467 397.4 181.167 396.6 179.5 395C177.833 393.4 177 391.367 177 388.9C177 386.3 177.867 384.133 179.6 382.4C181.267 380.667 183.433 379.8 186.1 379.8C188.233 379.8 189.9 380.367 191.1 381.5C192.367 382.567 193 384 193 385.8C193 388 192.267 389.933 190.8 391.6C189.4 393.267 187.6 394.433 185.4 395.1C185.733 395.367 186.3 395.5 187.1 395.5C190.5 395.5 193.3 393.7 195.5 390.1C197.967 386.167 200.533 379.133 203.2 369C205.867 358.867 208.767 345.8 211.9 329.8C212.3 327.867 212.5 326.367 212.5 325.3C212.5 323.7 211.967 322.667 210.9 322.2C209.833 321.667 207.8 321.333 204.8 321.2L205.3 319.2C207.433 319.4 210.4 319.5 214.2 319.5C217.267 319.5 219.967 319.4 222.3 319.2L243 366.6C248.6 342.667 253.6 327.467 258 321C260.933 316.733 264.533 314.6 268.8 314.6ZM314.32 319.5C323.786 319.5 330.553 319.4 334.62 319.2C332.753 324.267 331.486 328.2 330.82 331C330.486 332.467 330.053 334.533 329.52 337.2H327.32C327.386 336.333 327.42 335.133 327.42 333.6C327.42 329.133 326.586 326 324.92 324.2C323.253 322.4 320.386 321.5 316.32 321.5H313.22C310.886 321.5 309.12 321.7 307.92 322.1C306.786 322.433 305.853 323.167 305.12 324.3C304.453 325.433 303.786 327.267 303.12 329.8L296.82 353.4H300.52C303.853 353.4 306.653 352.233 308.92 349.9C311.186 347.567 312.953 344.733 314.22 341.4H316.52C315.253 345.2 314.22 348.7 313.42 351.9L312.82 354.4C312.02 357.533 311.053 361.867 309.92 367.4H307.72C307.786 366.933 307.82 366.2 307.82 365.2C307.82 358.667 305.02 355.4 299.42 355.4H296.32L289.92 379.4C289.32 381.467 289.02 383.1 289.02 384.3C289.02 385.7 289.486 386.633 290.42 387.1C291.42 387.5 293.153 387.7 295.62 387.7H299.32C302.92 387.7 305.953 387.167 308.42 386.1C310.886 384.967 313.086 383.133 315.02 380.6C316.953 378.067 318.92 374.533 320.92 370H323.22C322.486 371.933 321.753 374.333 321.02 377.2C319.886 381.133 319.02 385.4 318.42 390C313.886 389.8 306.32 389.7 295.72 389.7C281.32 389.7 270.486 389.8 263.22 390L263.72 388C266.12 387.867 267.886 387.6 269.02 387.2C270.22 386.8 271.186 386.033 271.92 384.9C272.653 383.767 273.353 381.933 274.02 379.4L287.22 329.8C287.753 327.533 288.02 325.933 288.02 325C288.02 323.533 287.52 322.567 286.52 322.1C285.586 321.633 283.853 321.333 281.32 321.2L281.82 319.2C289.086 319.4 299.92 319.5 314.32 319.5ZM413.917 314.6C416.851 314.6 419.151 315.4 420.817 317C422.551 318.6 423.417 320.633 423.417 323.1C423.417 325.7 422.551 327.867 420.817 329.6C419.084 331.333 416.917 332.2 414.317 332.2C412.117 332.2 410.417 331.667 409.217 330.6C408.017 329.467 407.417 328 407.417 326.2C407.417 324 408.117 322.067 409.517 320.4C410.917 318.733 412.717 317.567 414.917 316.9C414.651 316.633 414.117 316.5 413.317 316.5C410.117 316.5 407.317 318.267 404.917 321.8C401.984 326.2 398.917 333.967 395.717 345.1C392.517 356.167 388.884 371.3 384.817 390.5H382.617L357.817 336.2C354.951 350.333 352.217 362.233 349.617 371.9C347.084 381.567 344.617 387.967 342.217 391.1C340.751 393.033 339.184 394.567 337.517 395.7C335.917 396.833 333.917 397.4 331.517 397.4C328.584 397.4 326.284 396.6 324.617 395C322.951 393.4 322.117 391.367 322.117 388.9C322.117 386.3 322.984 384.133 324.717 382.4C326.384 380.667 328.551 379.8 331.217 379.8C333.351 379.8 335.017 380.367 336.217 381.5C337.484 382.567 338.117 384 338.117 385.8C338.117 388 337.384 389.933 335.917 391.6C334.517 393.267 332.717 394.433 330.517 395.1C330.851 395.367 331.417 395.5 332.217 395.5C335.617 395.5 338.417 393.7 340.617 390.1C343.084 386.167 345.651 379.133 348.317 369C350.984 358.867 353.884 345.8 357.017 329.8C357.417 327.867 357.617 326.367 357.617 325.3C357.617 323.7 357.084 322.667 356.017 322.2C354.951 321.667 352.917 321.333 349.917 321.2L350.417 319.2C352.551 319.4 355.517 319.5 359.317 319.5C362.384 319.5 365.084 319.4 367.417 319.2L388.117 366.6C393.717 342.667 398.717 327.467 403.117 321C406.051 316.733 409.651 314.6 413.917 314.6Z" fill="#BB3B4E"/>
            <path d="M357.087 221.509L358.479 222.433L358.635 220.769L365.348 149.5L410.19 153.724L407.797 179.132L377.57 176.285L376.575 176.191L376.481 177.187L370.03 245.684C369.349 252.907 365.852 258.818 359.445 263.454C353.033 268.093 345.675 270.027 337.316 269.24C328.957 268.453 322.09 265.179 316.657 259.424C311.228 253.673 308.896 247.213 309.577 239.99C310.257 232.767 313.754 226.856 320.161 222.22C326.573 217.581 333.931 215.646 342.29 216.434C345.213 216.709 347.867 217.268 350.258 218.105C352.656 218.944 354.932 220.078 357.087 221.509Z" fill="#4B815B" stroke="#BB3B4E" stroke-width="2"/>
            <rect x="21" y="289" width="34.375" height="118" fill="#F9E396" stroke="#BB3B4E" stroke-width="2"/>
            <rect x="69.375" y="289" width="34.375" height="118" fill="#F9E396" stroke="#BB3B4E" stroke-width="2"/>
            <path d="M303 86.4469H281.75V53.1969H303H303.322L303.544 52.9633L329.75 25.3675V114.276L303.544 86.6804L303.322 86.4469H303ZM320.25 51.5781V49.6992L318.956 51.0617L307.353 63.2802H292H291.25V64.0302V75.6135V76.3635H292H307.353L318.956 88.5821L320.25 89.9445V88.0656V51.5781ZM342.25 30.321V19.9579C353.024 22.7237 361.826 28.6064 368.678 37.6251C375.725 46.9009 379.25 57.5754 379.25 69.6771C379.25 81.7788 375.725 92.4533 368.678 101.729C361.826 110.748 353.024 116.631 342.25 119.396V109.033C350.416 106.43 357.023 101.558 362.05 94.4346C367.185 87.16 369.75 78.8993 369.75 69.6771C369.75 60.4548 367.185 52.1942 362.05 44.9196C357.023 37.7963 350.416 32.9239 342.25 30.321ZM350.957 83.1291C348.809 86.8425 345.909 89.712 342.25 91.7489V47.6058C345.907 49.6454 348.806 52.5372 350.955 56.2942C353.318 60.425 354.5 64.9295 354.5 69.8219C354.5 74.615 353.319 79.0461 350.957 83.1291Z" fill="#F9E396" stroke="#BB3B4E" stroke-width="1.5"/>
            <path d="M35.19 95.142H37.444L37.052 96.416C35.8107 100.532 34.014 103.57 31.662 105.53C29.31 107.425 26.1087 108.372 22.058 108.372C18.0727 108.372 15.0673 107.523 13.042 105.824C11.082 104.125 10.102 101.806 10.102 98.866C10.102 98.0167 10.1347 97.396 10.2 97.004L11.67 85.832C11.8007 84.264 11.866 83.186 11.866 82.598C11.866 79.5927 10.9187 77.404 9.024 76.032C7.19467 74.5947 3.86267 73.8107 -0.971999 73.68L-7.048 96.612C-7.70133 98.8987 -8.028 100.499 -8.028 101.414C-8.028 102.655 -7.538 103.57 -6.558 104.158C-5.578 104.681 -3.84667 104.975 -1.364 105.04L-1.756 107C-5.676 106.804 -10.772 106.706 -17.044 106.706C-24.296 106.706 -29.6533 106.804 -33.116 107L-32.724 105.04C-30.372 104.909 -28.608 104.648 -27.432 104.256C-26.256 103.864 -25.3413 103.113 -24.688 102.002C-23.9693 100.891 -23.2833 99.0947 -22.63 96.612L-9.792 48.004C-9.204 45.652 -8.91 44.1167 -8.91 43.398C-8.91 42.0913 -9.4 41.144 -10.38 40.556C-11.2947 39.968 -12.9933 39.6413 -15.476 39.576L-14.986 37.616C-11.654 37.812 -6.72133 37.91 -0.188 37.91L8.24 37.812C9.74267 37.7467 11.8333 37.714 14.512 37.714C22.4827 37.714 28.3627 38.8247 32.152 41.046C36.0067 43.2673 37.934 46.6973 37.934 51.336C37.934 57.0853 35.3207 61.92 30.094 65.84C24.9327 69.6947 17.942 72.112 9.122 73.092C15.0673 73.68 19.5753 74.758 22.646 76.326C25.7167 77.894 27.252 80.6053 27.252 84.46C27.252 84.852 27.1867 85.5707 27.056 86.616L25.684 96.71C25.6187 97.2327 25.586 97.9513 25.586 98.866C25.586 102.002 26.6313 103.57 28.722 103.57C29.9633 103.57 31.0413 103.015 31.956 101.904C32.8707 100.728 33.7853 98.9313 34.7 96.514L35.19 95.142ZM-0.579998 71.916H0.204001C6.80267 71.916 12.0947 69.9887 16.08 66.134C20.1307 62.214 22.156 56.7913 22.156 49.866C22.156 46.338 21.4047 43.7573 19.902 42.124C18.3993 40.4253 16.1127 39.576 13.042 39.576C11.082 39.576 9.612 40.0333 8.632 40.948C7.71733 41.7973 6.93333 43.496 6.28 46.044L-0.579998 71.916ZM44.7879 84.852C44.7879 77.4693 46.6499 69.9887 50.3739 62.41C54.1632 54.8313 59.4552 48.592 66.2499 43.692C73.0445 38.7267 80.6885 36.244 89.1819 36.244C97.5445 36.244 104.078 38.302 108.782 42.418C113.486 46.534 115.838 52.3487 115.838 59.862C115.838 67.2447 113.943 74.7253 110.154 82.304C106.365 89.8173 101.073 96.0567 94.2779 101.022C87.4832 105.922 79.8392 108.372 71.3459 108.372C62.9832 108.372 56.4499 106.314 51.7459 102.198C47.1072 98.082 44.7879 92.3 44.7879 84.852ZM88.2999 38.008C83.8572 38.008 79.5779 40.36 75.4619 45.064C71.3459 49.768 68.0139 55.844 65.4659 63.292C62.9179 70.74 61.6439 78.3513 61.6439 86.126C61.6439 92.4633 62.6239 97.4613 64.5839 101.12C66.5439 104.779 69.0919 106.608 72.2279 106.608C76.6705 106.608 80.9499 104.256 85.0659 99.552C89.1819 94.848 92.5139 88.772 95.0619 81.324C97.6099 73.876 98.8839 66.2647 98.8839 58.49C98.8839 52.1527 97.9039 47.1547 95.9439 43.496C93.9839 39.8373 91.4359 38.008 88.2999 38.008ZM189.96 37.616C187.804 43.2347 185.713 50.748 183.688 60.156H181.532C182.054 57.1507 182.316 54.57 182.316 52.414C182.316 49.4087 181.76 46.926 180.65 44.966C178.363 40.7193 174.508 38.596 169.086 38.596C163.859 38.596 158.861 40.9153 154.092 45.554C149.388 50.1273 145.598 56.1053 142.724 63.488C139.914 70.8053 138.51 78.3187 138.51 86.028C138.51 92.496 139.653 97.3633 141.94 100.63C144.292 103.831 147.558 105.432 151.74 105.432C154.222 105.432 156.803 104.877 159.482 103.766C162.16 102.59 164.48 100.989 166.44 98.964C168.138 97.1347 169.608 95.1093 170.85 92.888C172.156 90.6013 173.626 87.4653 175.26 83.48H177.416C174.345 94.7827 172.418 102.623 171.634 107H169.478C169.674 105.628 169.772 104.517 169.772 103.668C169.772 101.969 169.347 101.12 168.498 101.12C167.975 101.12 167.322 101.414 166.538 102.002C163.532 104.027 160.527 105.595 157.522 106.706C154.516 107.817 151.119 108.372 147.33 108.372C138.575 108.372 132.009 106.281 127.632 102.1C123.254 97.9187 121.066 91.908 121.066 84.068C121.066 76.3587 123.091 68.8127 127.142 61.43C131.258 53.982 136.909 47.9387 144.096 43.3C151.282 38.596 159.22 36.244 167.91 36.244C171.568 36.244 174.443 36.7993 176.534 37.91C178.69 39.0207 180.682 40.5887 182.512 42.614C183.034 43.202 183.524 43.496 183.982 43.496C185.158 43.496 186.464 41.536 187.902 37.616H189.96ZM251.539 36.244C254.348 36.244 256.569 37.0607 258.203 38.694C259.901 40.262 260.751 42.3527 260.751 44.966C260.751 47.3833 259.934 49.6047 258.301 51.63C256.733 53.6553 254.577 54.668 251.833 54.668C250.003 54.668 248.468 54.1127 247.227 53.002C245.985 51.826 245.365 50.258 245.365 48.298C245.365 46.338 246.018 44.4433 247.325 42.614C248.631 40.7847 250.395 39.38 252.617 38.4C252.225 38.204 251.702 38.106 251.049 38.106C249.873 38.106 248.925 38.302 248.207 38.694C247.488 39.0207 246.769 39.5433 246.051 40.262C245.005 41.438 244.091 42.9407 243.307 44.77C242.523 46.5993 241.673 48.984 240.759 51.924C239.648 55.452 238.603 58.392 237.623 60.744C236.708 63.0307 235.401 65.0887 233.703 66.918C232.004 68.7473 229.848 69.956 227.235 70.544C232.265 71.0667 235.826 72.308 237.917 74.268C240.073 76.228 241.151 79.2987 241.151 83.48C241.151 84.1987 241.085 85.4727 240.955 87.302L239.877 97.592C239.681 100.009 240.497 101.218 242.327 101.218C243.568 101.218 244.613 100.761 245.463 99.846C246.312 98.866 247.096 97.3633 247.815 95.338L249.481 90.34H251.441L248.893 97.886C247.717 101.414 245.985 104.06 243.699 105.824C241.412 107.523 238.766 108.372 235.761 108.372C232.037 108.372 229.195 107.49 227.235 105.726C225.34 103.962 224.393 101.512 224.393 98.376C224.393 97.8533 224.458 97.0693 224.589 96.024L226.451 82.304C226.647 80.736 226.745 79.364 226.745 78.188C226.745 76.5547 226.549 75.248 226.157 74.268C225.765 73.288 225.111 72.4713 224.197 71.818C221.322 72.5367 219.329 72.896 218.219 72.896C216.585 72.896 215.769 72.3407 215.769 71.23C215.769 69.662 216.716 68.878 218.611 68.878C220.048 68.878 221.975 69.2047 224.393 69.858C227.333 69.466 229.685 68.388 231.449 66.624C233.278 64.86 234.683 62.8673 235.663 60.646C236.643 58.4247 237.721 55.4193 238.897 51.63C239.877 48.298 240.759 45.6847 241.543 43.79C242.327 41.8953 243.339 40.3273 244.581 39.086C246.475 37.1913 248.795 36.244 251.539 36.244ZM206.753 96.612C206.165 99.0947 205.871 100.695 205.871 101.414C205.871 102.786 206.328 103.701 207.243 104.158C208.223 104.615 209.987 104.909 212.535 105.04L212.143 107C208.549 106.804 203.421 106.706 196.757 106.706C189.635 106.706 184.311 106.804 180.783 107L181.273 105.04C183.559 104.909 185.258 104.648 186.369 104.256C187.545 103.864 188.459 103.113 189.113 102.002C189.831 100.826 190.517 99.0293 191.171 96.612L204.107 48.004C204.629 45.7827 204.891 44.2147 204.891 43.3C204.891 41.8627 204.401 40.9153 203.421 40.458C202.506 40.0007 200.807 39.7067 198.325 39.576L198.815 37.616C202.147 37.812 207.471 37.91 214.789 37.91C221.061 37.91 226.222 37.812 230.273 37.616L229.783 39.576C227.365 39.7067 225.569 39.968 224.393 40.36C223.282 40.752 222.367 41.5033 221.649 42.614C220.995 43.7247 220.342 45.5213 219.689 48.004L206.753 96.612Z" fill="#BB3B4E"/>
        </svg>
    `;

    // Append the text and SVG to the graphic container
    graphic.appendChild(svgContainer);

    // Buttons container
    const buttonContent = document.createElement("div");
    buttonContent.classList.add("button-content");

    // Create "Skapa ett rum" button
    const btnMakeRoom = document.createElement("button");
    btnMakeRoom.id = "btnMakeRoom";
    btnMakeRoom.textContent = "Skapa ett rum";

    // Create "Gå med i ett rum" button
    const btnJoinRoom = document.createElement("button");
    btnJoinRoom.id = "btnJoinRoom";
    btnJoinRoom.textContent = "Gå med i ett rum";

    // Append buttons to the button content container
    buttonContent.appendChild(btnMakeRoom);
    buttonContent.appendChild(btnJoinRoom);

    // Append graphic and button content to the main container
    main.appendChild(graphic);
    main.appendChild(buttonContent);

    // Append the main container to the body
    body.appendChild(main);

    // Add functionality to the buttons

    /*
    btnMakeRoom.addEventListener("click", () => {
        alert("Skapa ett rum");
    });

    btnJoinRoom.addEventListener("click", () => {
        alert("Gå med i ett rum");
    });
    */
    return({btnMakeRoom, btnJoinRoom});
}

renderMainPage();