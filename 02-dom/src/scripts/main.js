import dom_Manipulation from './dom_Functions.js';


const btnShow = document.getElementById("btnShow");
const btnAdd = document.getElementById("btnAdd");
const ol = document.getElementById("itemList");
const inputText = document.getElementById("inputText");
const btnDel = document.getElementById("btnDel");
const btnAdd2Start = document.getElementById("add2Start");
const btnAddCard = document.getElementById("addCard");
const panel1 = document.querySelector("#panel1");
const body = document.querySelector(".cardContainer");

// outer_Container.addEventListener('click', () => {
//     message1.textContent = `The element clicked was: ${dom_Manipulation.elementClicked(event)}`;
// });

btnShow.addEventListener('click', () => {
    message2.textContent = `The list of items are: [${dom_Manipulation.showAllChildren(ol)}]`;

});
btnAdd.addEventListener('click', () => {
    message2.textContent = `${dom_Manipulation.addAChild(ol, inputText.value)} has been added to the list`
});

btnDel.addEventListener('click', () => {
    dom_Manipulation.deleteElement(ol, Number(inputText.value));
});
btnAdd2Start.addEventListener('click', () => {
    message2.textContent = dom_Manipulation.add2Start(ol, inputText.value);
});
//Card Section
btnAddCard.addEventListener('click', () => {
    dom_Manipulation.addACard(panel1);

});
body.addEventListener('click', () => {
    if (event.target.innerText == "Delete") {
        // dom_Manipulation.elementDelete(dom_Manipulation.elementClicked(event));
        dom_Manipulation.elementDelete(event.target.parentNode);
    } else if (event.target.innerText == "Add Before") {
        dom_Manipulation.cardButtonAddBefore(panel1, dom_Manipulation.elementClicked(event));
    } else if (event.target.innerText == "Add After") {
        dom_Manipulation.cardButtonAddAfter(panel1, dom_Manipulation.elementClicked(event));
    }

});
//Classes
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    birthday() {
        return this.age++;
    }

    show() {
        return `${this.name} is ${this.age} old`
    }
    trial() {
        return 'Seeing you'
    }

}
class Professor extends Person {
    constructor(name, age) {
        super(name, age);
    }
    show() {
        return `${super.show()} and teaches`;
    }
}

class Farmer extends Person {
    constructor(name, age) {
        super(name, age);
    }
    show() {
        return `${super.show()} and farms`;
    }
}
const larry = new Farmer("Larry", 29);
const roman = new Professor("Roman", 25);

console.log(larry.show());
console.log(larry.birthday());
console.log(roman.show());
console.log(roman.birthday());
console.log(roman.trial());