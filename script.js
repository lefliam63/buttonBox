let boutonActuel;
let caseOriginale;

const element = {

    BasicButton:{
        name:"basic button",
        cssClass:"basicButton1"
    },

    BasicButton2:{
        name:"basic button 2",
        cssClass:"basicButton2"
    },

    roundBasicButton:{
        name:"round basic button",
        cssClass:"roundBasicButton",
    },

}

const container = document.getElementById("caseP");
const returnButton = document.getElementById("returnButton");

returnButton.addEventListener("click", returnPage);

Object.values(element).forEach((button) => {
  const div = document.createElement("div");

  div.classList.add("case");

  div.innerHTML = `
    <h2>${button.name}</h2>
    <button class="${button.cssClass}" data-name="${button.name}" onclick="changePage(this)">clic</button>
  `;

  container.appendChild(div);
});

function changePage(button) {

    boutonActuel = button;
    caseOriginale = button.parentElement;

    let buttonClic = button.className;
    let buttonName = button.dataset.name;

    const page2Button = document.getElementById("page2Button");
    const page2Title = document.getElementById("page2Title");
    const page2 = document.getElementById("backgroundPage2");
    const page1 = document.getElementById("caseP");

    page2.style.display = "flex";
    page1.style.display = "none";


    page2Button.appendChild(button);
    page2Title.textContent = buttonName;


    page2Title.style.display = "block";
    returnButton.style.display = "block";
    page2HTML.style.display = "block";
    page2CSS.style.display = "block";
    page2JS.style.display = "block";

    let HTML = "";
    let CSS = "";
    let JS = "";

    if (buttonClic === "basicButton1") {
        HTML = `<button id="Button1">clic</button>`;
        CSS = `
        .Button1{
            height: 60px;
            width: 100px;
            border: solid;
            background-color: white;
            border-radius: 10px;
            font-size: 30px;
        }
        .Button1:hover{
            background-color: rgb(185, 185, 185);
        }`;
    }

    if (buttonClic === "basicButton2") {
        HTML = `<button id="Button1">clic</button>`;
        CSS = `
        .Button1{
            height: 60px;
            width: 100px;
            border: solid;
            background-color: white;
            font-size: 30px;
        }
        .Button1:hover{
            background-color: rgb(185, 185, 185);
        }`;
    }

    if (buttonClic === "roundBasicButton") {
        HTML = `<button id="Button1">clic</button>`;
        CSS = `
        .Button1{
            height: 70px;
            width: 70px;
            border: solid;
            background-color: white;
            border-radius: 100px;
            font-size: 30px;
        }
        .Button1:hover{
            background-color: rgb(185, 185, 185);
        }`;
    }

    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    html.textContent = HTML;
    css.textContent = CSS;
    js.textContent = JS;
}

function returnPage() {
    const page2 = document.getElementById("backgroundPage2");
    const page1 = document.getElementById("caseP");

    caseOriginale.appendChild(boutonActuel);

    page2.style.display = "none";
    page1.style.display = "flex";
}