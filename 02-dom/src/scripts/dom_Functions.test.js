import dom_Manipulation from './dom_Functions'

const btnAdd = document.getElementById("btnAdd");
const ol = document.getElementById("itemList");

//Test for add child element 
test('Check to see if child was added', () => {
    var el = btnAdd;
    var etype = 'click';
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
    expect(dom_Manipulation.addAChild(ol, "More Stuff")).toBe("More Stuff");
    expect(dom_Manipulation.addAChild(ol, "Even More Stuff")).toBe("Even More Stuff");
    expect(dom_Manipulation.addAChild(ol, "One More Stuff")).toBe("One More Stuff");
    expect(dom_Manipulation.addAChild(ol, "Last Stuff")).toBe("Last Stuff");
});