let divNos = 0

const dom_Manipulation = {

    elementClicked: (param) => {
        param = event.target;
        return param.id;
    },
    showAllChildren: (elID) => {
        let mmm = "";
        for (let q = 0; q < elID.children.length; q++) {
            mmm += ' ' + elID.children[q].textContent + ',';
        }
        return mmm;
    },
    addAChild: (elID, nodeTxt) => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(nodeTxt));
        elID.appendChild(li);
        return elID.lastChild.textContent;

    },
    deleteElement: (elD, un) => {

        if (elD.hasChildNodes()) {
            elD.removeChild(elD.childNodes[un]);
        }
        return elD.children.length;
    },
    add2Start: (elID, nodeTxt) => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(nodeTxt));
        elID.insertBefore(li, elID.childNodes[0]);
        return elID.children[0].textContent;
    },
    //Card Section

    addACard: (elID) => {

        // if (elID.lastElementChild.innerText != "Add Card") { //Check if any card has been created
        //     divNos = Number(elID.lastChild.id.split("card")[1]) + 1;
        // } else {
        //     divNos = 1; //If no div has been created assign number to the first 
        // }
        let div = document.createElement("div"); //create a div
        div.id = `card${++divNos}`; //set the div id
        div.style.width = "100%"; //set the div width
        div.style.backgroundColor = "rgb(235, 235, 235)"; //set div background color
        div.style.padding = "20px"; // set div padding
        div.style.marginBottom = "10px"

        let br = document.createElement("br"); //create a div

        let btnAddBefore = document.createElement("BUTTON"); //create Add Before button
        btnAddBefore.appendChild(document.createTextNode("Add Before")); // put text 'add before' on it
        btnAddBefore.style.margin = "5px";
        btnAddBefore.id = "btnAddBefore" + divNos;

        let btnAddAfter = document.createElement("BUTTON"); //create Add After button
        btnAddAfter.appendChild(document.createTextNode("Add After")); //put text 'add after' on it 
        btnAddAfter.style.margin = "5px";
        btnAddAfter.id = "btnAddAfter" + divNos;

        let btnAddDelete = document.createElement("BUTTON"); //create delete button
        btnAddDelete.appendChild(document.createTextNode("Delete")); // put 'delete text on it
        btnAddDelete.style.margin = "5px";
        btnAddDelete.id = "btnAddDelete" + divNos;

        div.appendChild(document.createTextNode("Card " + divNos)); //attach text to div
        div.appendChild(br);
        div.appendChild(btnAddBefore); // attach add before button to div
        div.appendChild(btnAddAfter); // attach add after button to div
        div.appendChild(btnAddDelete); // attach delete button to div
        elID.appendChild(div); //attach div to parent div
        return elID.contains(div);
    },
    elementDelete: (elID) => {
        console.log(elID);
        // let elCloner = document.getElementById(elID).parentNode; //get the parent of the card that triggers the cloning
        // console.log(elCloner);
        elID.remove(); //remove parent

    },

    cardButtonAddBefore: (par, elID) => {
        // console.log(++divNos)
        // let divNo = Number(elID.split("btnAddBefore")[1]);
        // console.log(document.getElementById(elID).parentNode);

        let itm = par.lastChild
        let clone2 = itm.cloneNode(true); //Clone Card
        clone2.id = "card" + (++divNos)
        clone2.childNodes[0].textContent = "Card " + (divNos);
        let elCloner = document.getElementById(elID).parentNode; //get the parent of the card that triggers the cloning
        par.insertBefore(clone2, elCloner)
        // elCloner.insertAdjacentElement("beforeBegin", clone2); //insert cloned card before the cloner

        // return elID.contains(clone2);
    },
    cardButtonAddAfter: (par, elID) => {
        // console.log(par.childNodes.length)
        // let divNo = Number(elID.split("btnAddAfter")[1]);

        let itm = par.lastChild
        let clone = itm.cloneNode(true);
        clone.id = "card" + (++divNos)
        clone.childNodes[0].textContent = "Card " + (divNos);
        let elCloner = document.getElementById(elID).parentNode;
        par.insertBefore(clone, elCloner.nextSibling); //nb insertAdjacentElement-Afterend js method can be used as well
        // return elID.contains(clone);
    },
}
export default dom_Manipulation;