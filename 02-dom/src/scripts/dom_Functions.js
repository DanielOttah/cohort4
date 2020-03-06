const dom_Manipulation = {

    elementClicked: (param) => {
        param = event.target;
        return param.id;
    },
    showAllChildren: (elID) => {
        let childrenList = document.getElementById(elID);
        const mmm = [];
        for (let q = 0; q < childrenList.children.length; q++) {
            mmm[q] = " " + childrenList.children[q].innerText;
        }
        return mmm;
    },
    addAChild: (elID, nodeTxt) => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(nodeTxt));
        elID.appendChild(li);
        return elID.lastChild.innerHTML;

    },
    deleteElement: (elD, un) => {

        if (elD.hasChildNodes()) {
            //  console.log(un);
            elD.removeChild(elD.childNodes[un]);
        }
        // param.parentNode.removeChild(param);
    },
    elementClicked: (param) => {
        param = event.target;
        return param.id;
    },
    add2Start: (elID, nodeTxt) => {
        let mmm = [];
        for (let q = 0; q < elID.children.length; q++) {
            mmm[q] = " " + elID.children[q].innerText;
        }
        while (elID.lastElementChild) {
            elID.removeChild(elID.lastElementChild);
        }
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(nodeTxt));
        elID.appendChild(li);
        for (let t = 0; t < mmm.length; t++) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(mmm[t]));
            elID.appendChild(li);
        }

    },
    //Card Section
    addACard: (elID) => {
        let divNo = 0;
        if (elID.lastElementChild.innerText != "Add Card") { //Check if any card has been created
            divNo = Number(elID.lastChild.id.split("card")[1]) + 1;
        } else {
            divNo = 1; //If no div has been created assign number to the first 
        }

        let div = document.createElement("div"); //create a div
        div.id = "card" + divNo; //set the div id
        div.style.width = "100%"; //set the div width
        div.style.backgroundColor = "rgb(235, 235, 235)"; //set div background color
        div.style.padding = "20px"; // set div padding
        div.style.marginBottom = "10px"

        let txtDiv = document.createElement("div"); //create a div
        txtDiv.appendChild(document.createTextNode("Card " + divNo)) //create text ie 'Card 1'

        let btnAddBefore = document.createElement("BUTTON"); //create Add Before button
        btnAddBefore.appendChild(document.createTextNode("Add Before")); // put text 'add before' on it
        btnAddBefore.style.margin = "5px";
        btnAddBefore.id = "btnAddBefore" + divNo;

        let btnAddAfter = document.createElement("BUTTON"); //create Add After button
        btnAddAfter.appendChild(document.createTextNode("Add After")); //put text 'add after' on it 
        btnAddAfter.style.margin = "5px";
        btnAddAfter.id = "btnAddAfter" + divNo;

        let btnAddDelete = document.createElement("BUTTON"); //create delete button
        btnAddDelete.appendChild(document.createTextNode("Delete")); // put 'delete text on it
        btnAddDelete.style.margin = "5px";
        btnAddDelete.id = "btnAddDelete" + divNo;

        div.appendChild(txtDiv); //attach text to div
        div.appendChild(btnAddBefore); // attach add before button to div
        div.appendChild(btnAddAfter); // attach add after button to div
        div.appendChild(btnAddDelete); // attach delete button to div

        elID.appendChild(div); //attach div to parent div


    },
    elementDelete: (elID) => {
        let elCloner = document.getElementById(elID).parentNode; //get the parent of the card that triggers the cloning
        elCloner.remove(); //remove parent

    },
    cardButtonAddBefore: (par, elID) => {
        let itm = par.lastChild
        let clone = itm.cloneNode(true); //Clone Card

        let elCloner = document.getElementById(elID).parentNode; //get the parent of the card that triggers the cloning

        elCloner.insertAdjacentElement("beforeBegin", clone); //insert cloned card before the cloner
    },
    cardButtonAddAfter: (elID) => {
        let itm = elID.lastChild
        let clone = itm.cloneNode(true);
        elID.appendChild(clone); //nb insertAdjacentElement-Afterend js method can be used as well
    },
}
export default dom_Manipulation;