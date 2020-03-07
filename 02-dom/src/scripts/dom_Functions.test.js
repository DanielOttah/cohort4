import dom_Manipulation from './dom_Functions'
`document.body = 

    <ol id = "itemList" class="ool">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>

    </ol> 
    
`
const aNewLiElement1 = document.createElement("li");
const aNewLiElement2 = document.createElement("li");
const aNewLiElement3 = document.createElement("li");
aNewLiElement1.appendChild(document.createTextNode("Stuff"));
aNewLiElement2.appendChild(document.createTextNode("Stuff 2"));
aNewLiElement3.appendChild(document.createTextNode("Stuff 3"));
const aNewOlElement = document.createElement("ol");
aNewOlElement.appendChild(aNewLiElement1);
aNewOlElement.appendChild(aNewLiElement2);
aNewOlElement.appendChild(aNewLiElement3);
const aNewBodyElement = document.createElement("body");
aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
aNewBodyElement.appendChild(aNewOlElement);

//Test for add child element 
test('Check to see if child was added', () => {

    // const ol = document.getElementById("itemList");
    // const el = document.getElementById("btnAdd");
    // const etype = 'click';
    // if (el.fireEvent) {
    //     el.fireEvent('on' + etype);
    // } else {
    //     let evObj = document.createEvent('Events');
    //     evObj.initEvent(etype, true, false);
    //     el.dispatchEvent(evObj);
    // }

    expect(dom_Manipulation.addAChild(aNewOlElement, "More Stuff")).toBe("More Stuff");
    expect(dom_Manipulation.addAChild(aNewOlElement, "Even More Stuff")).toBe("Even More Stuff");
    expect(dom_Manipulation.addAChild(aNewOlElement, "One More Stuff")).toBe("One More Stuff");
    expect(dom_Manipulation.addAChild(aNewOlElement, "Last Stuff")).toBe("Last Stuff");
});
//Test for add child element 
test('Check to see if child was added', () => {

    expect(dom_Manipulation.deleteElement(aNewOlElement, 0)).toBe(6);
    expect(dom_Manipulation.deleteElement(aNewOlElement, 1)).toBe(5);
    expect(dom_Manipulation.deleteElement(aNewOlElement, 2)).toBe(4);

});