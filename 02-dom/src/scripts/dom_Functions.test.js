import dom_Manipulation from './dom_Functions'
`document.body = 

    <ol id = "itemList" class="ool">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>

    </ol> 
    
`
const aNewBtnElement = document.createElement("BUTTON");
aNewBtnElement.appendChild(document.createTextNode("A Button"));
aNewBtnElement.id = "myBtn";
const aNewLiElement1 = document.createElement("li");
const aNewLiElement2 = document.createElement("li");
const aNewLiElement3 = document.createElement("li");
aNewLiElement1.appendChild(document.createTextNode("Stuff"));
aNewLiElement2.appendChild(document.createTextNode("Stuff 2"));
aNewLiElement3.appendChild(document.createTextNode("Stuff 3"));
const aNewOlElement = document.createElement("ol");
aNewOlElement.id = "myOlElement";
aNewOlElement.appendChild(aNewLiElement1);
aNewOlElement.appendChild(aNewLiElement2);
aNewOlElement.appendChild(aNewLiElement3);
const aNewBodyElement = document.createElement("body");
aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
aNewBodyElement.appendChild(aNewOlElement);
aNewBodyElement.appendChild(aNewBtnElement);

//==============================================================

//Test if child element are displayed
test('Check if children are displayed', () => {
    expect(dom_Manipulation.showAllChildren(aNewOlElement)).toBe(" Stuff, Stuff 2, Stuff 3,");
    const aNewLiElement4 = document.createElement("li");
    aNewLiElement4.appendChild(document.createTextNode("Stuff 4"));
    aNewOlElement.appendChild(aNewLiElement4);
    expect(dom_Manipulation.showAllChildren(aNewOlElement)).toBe(" Stuff, Stuff 2, Stuff 3, Stuff 4,");

});
//Test for add child element 
test('Check to see if child was added', () => {

    //===============Code to trigger click Event=================
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
//Test deletion of child element 
test('Check if child was deleted', () => {
    expect(dom_Manipulation.deleteElement(aNewOlElement, 0)).toBe(7);
    expect(dom_Manipulation.deleteElement(aNewOlElement, 1)).toBe(6);
    expect(dom_Manipulation.deleteElement(aNewOlElement, 2)).toBe(5);

});
//Test if child element was added at the beginning
test('Check if child was added at the beginning', () => {
    expect(dom_Manipulation.add2Start(aNewOlElement, "first Element")).toBe("first Element");
    expect(dom_Manipulation.add2Start(aNewOlElement, "Very first Element")).toBe("Very first Element");
    expect(dom_Manipulation.add2Start(aNewOlElement, "Very Very first Element")).toBe("Very Very first Element");

});
//Test if card was created
test('Test if card was added', () => {
    expect(dom_Manipulation.addACard(aNewBodyElement)).toBe(true);

});
//Test if card was added after
test('Test if card was added after', () => {
    expect(dom_Manipulation.cardButtonAddAfter(aNewBodyElement)).toBe(true);

});
//Test if card was added Before
test('Test if card was added Before', () => {
    //  expect(dom_Manipulation.cardButtonAddBefore(aNewBodyElement)).toBe(true);

});