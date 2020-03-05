import dom_Manipulation from './dom_Functions.js';

const btnShow = document.getElementById("btnShow");
const btnAdd = document.getElementById("btnAdd");
const ol = document.getElementById("itemList");
const inputText = document.getElementById("inputText");
const btnDel = document.getElementById("btnDel");
const btnAdd2Start = document.getElementById("add2Start");
const btnAddCard = document.getElementById("addCard");
const panel1 = document.querySelector("#panel1");
const body = document.querySelector("#body");

// outer_Container.addEventListener('click', () => {
//     message1.textContent = "The element clicked was: " + dom_Manipulation.elementClicked(event);
// });

btnShow.addEventListener('click', () => {
    message2.textContent = "The list of items are: [" + dom_Manipulation.showAllChildren("itemList") + "]";

});
btnAdd.addEventListener('click', () => {

    message2.textContent = dom_Manipulation.addAChild(ol, inputText.value) + " has been added to the list"
});

btnDel.addEventListener('click', () => {
    dom_Manipulation.deleteElement(ol, Number(inputText.value));
});
btnAdd2Start.addEventListener('click', () => {
    message2.textContent = dom_Manipulation.add2Start(ol, "item 0");
});
//Card Section
btnAddCard.addEventListener('click', () => {
    dom_Manipulation.addACard(panel1);

});
body.addEventListener('click', () => {
    if (event.target.innerText == "Delete") {
        dom_Manipulation.elementDelete(dom_Manipulation.elementClicked(event));
    } else if (event.target.innerText == "Add Before") {
        dom_Manipulation.cardButtonAddBefore(panel1, dom_Manipulation.elementClicked(event));
    } else if (event.target.innerText == "Add After") {
        dom_Manipulation.cardButtonAddAfter(panel1);
    }

});