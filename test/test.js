"use strict";

function renderHowToInfoPage() {

    // Hämta body och töm det
    const body = document.body;
    body.innerHTML = "";
  
    // Skapa main-container
    const main = document.createElement("main");
    body.appendChild(main);

  // Skapa huvudcontainer
  const howToInfoPage = document.createElement("div");
  howToInfoPage.id = "how-to-info-page";

  // Wrapper för all text
  const infoPageText = document.createElement("div");
  infoPageText.className = "infoPage-text";

  // H1 - Titel
  const title = document.createElement("h1");
  title.textContent = "Hur man spelar spelet";
  infoPageText.appendChild(title);

  // P - Introtext
  const introText = document.createElement("p");
  introText.innerHTML = "Den försvunna Rockbjörnen &ndash; Ett musikquizspel";
  infoPageText.appendChild(introText);

  // Sektion - Antal spelare
  const antalSpelare = createSection(
    "antal-spelare",
    "Antal spelare",
    "Spelet är för 4&ndash;5 spelare."
  );
  infoPageText.appendChild(antalSpelare);

  // Sektion - Mål med spelet
  const malMedSpelet = createSection(
    "mal-med-spelet",
    "Mål med spelet",
    "Första spelaren att nå 100 poäng och samtidigt hitta Rockbjörnen vinner spelet."
  );
  infoPageText.appendChild(malMedSpelet);

  // Sektion - Spelupplägg
  const spelupplagg = document.createElement("div");
  spelupplagg.className = "spelupplagg";
  const spelupplaggTitle = document.createElement("h4");
  spelupplaggTitle.textContent = "Spelupplägg";
  spelupplagg.appendChild(spelupplaggTitle);

  const spelupplaggList = document.createElement("ul");
  const spelupplaggItems = [
    { label: "Spelplan:", text: "Spelet spelas på en fysisk karta med olika spelbrickor utplacerade." },
    { label: "Tärningskast:", text: "Varje spelare kastar tärningen i turordning och flyttar sin spelpjäs det antal steg som tärningen visar." },
    { label: "Stanna på spelbrickor:", text: "Om du landar på en spelbricka:", subItems: [
      "Skriv in koden från brickan i appen.",
      "Appen spelar upp en låt och du får en fråga om låten med fyra svarsalternativ.",
      "Du har 10 sekunder på dig att svara."
    ] }
  ];

  spelupplaggItems.forEach(item => {
    const li = document.createElement("li");
    const b = document.createElement("b");
    b.textContent = item.label;
    li.appendChild(b);
    li.append(" " + item.text);

    if (item.subItems) {
      const subList = document.createElement("ul");
      item.subItems.forEach(subItem => {
        const subLi = document.createElement("li");
        subLi.textContent = subItem;
        subList.appendChild(subLi);
      });
      li.appendChild(subList);
    }

    spelupplaggList.appendChild(li);
  });
  spelupplagg.appendChild(spelupplaggList);
  infoPageText.appendChild(spelupplagg);

  // Sektion - Poängsystem
  const poangsystem = createListSection(
    "poangsystem",
    "Poängsystem",
    [
      "<strong>10 poäng:</strong> Lätt fråga",
      "<strong>20 poäng:</strong> Medelsvår fråga",
      "<strong>30 poäng:</strong> Svår fråga"
    ]
  );
  infoPageText.appendChild(poangsystem);

  // Sektion - Rockbjörnen
  const rockbjornen = createListSection(
    "rockbjornen",
    "Rockbjörnen",
    [
      "<strong>Hitta Rockbjörnen:</strong> Rockbjörnen är gömd och kan endast plockas upp av en spelare som har 100 poäng.",
      "Om du hittar Rockbjörnen men inte har 100 poäng än, måste du lägga tillbaka den och fortsätta samla poäng."
    ],
    "h3"
  );
  infoPageText.appendChild(rockbjornen);

  // Sektion - Vinst
  const vinst = document.createElement("div");
  vinst.className = "vinst";
  const vinstTitle = document.createElement("h4");
  vinstTitle.textContent = "Vinst";
  vinst.appendChild(vinstTitle);

  const vinstText = document.createElement("p");
  vinstText.textContent = "För att vinna spelet måste du:";
  vinst.appendChild(vinstText);

  const vinstList = document.createElement("ol");
  ["Samla minst 100 poäng.", "Hitta Rockbjörnen och plocka upp den."].forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    vinstList.appendChild(li);
  });
  vinst.appendChild(vinstList);
  infoPageText.appendChild(vinst);

  // Sektion - Övriga regler
  const ovrigt = createListSection(
    "ovrigt",
    "Övriga regler",
    [
      "Du kan bara spela om poäng när du landar på en spelbricka.",
      "Endast en spelare åt gången får svara på frågor och samla poäng."
    ]
  );
  infoPageText.appendChild(ovrigt);

  // Lägg till huvudsektionen
  howToInfoPage.appendChild(infoPageText);
  main.appendChild(howToInfoPage);
}

// Hjälpfunktion för enkla sektioner
function createSection(className, title, content) {
  const section = document.createElement("div");
  section.className = className;

  const heading = document.createElement("h4");
  heading.textContent = title;
  section.appendChild(heading);

  const paragraph = document.createElement("p");
  paragraph.innerHTML = content;
  section.appendChild(paragraph);

  return section;
}

// Hjälpfunktion för list-sektioner
function createListSection(className, title, items, headingTag = "h4") {
  const section = document.createElement("div");
  section.className = className;

  const heading = document.createElement(headingTag);
  heading.textContent = title;
  section.appendChild(heading);

  const ul = document.createElement("ul");
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    ul.appendChild(li);
  });
  section.appendChild(ul);

  return section;
}

renderHowToInfoPage();
