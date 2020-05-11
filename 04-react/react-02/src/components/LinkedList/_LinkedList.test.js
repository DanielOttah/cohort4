import _LinkedList from './_LinkedList.js'


test('Testing size() Method', () => {
    let sll = new _LinkedList();
    expect(sll.size()).toBe(0);
});
test('Testing add() Method', () => {
    let sll = new _LinkedList();
    let ll1 = sll.add(10);
    let ll2 = sll.add(15);
    let ll3 = sll.add(20);

    expect(ll1.data).toBe(10);
    expect(ll1.next.data).toBe(15);
    expect(ll2.data).toBe(15);
    expect(ll3.data).toBe(20);
    expect(ll3.next).toBe(null);
    expect(sll.size()).toBe(3);
});

test('Testing remove() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add("item 1");
    sll.add(["another item", 254]);
    expect(sll.size()).toBe(5);

    sll.remove(20);
    expect(sll.size()).toBe(4);
    sll.remove(10);
    expect(sll.size()).not.toBe(4);
    expect(sll.size()).toBe(3);

});
test('Testing indexOf() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add(25);
    sll.add(30);
    sll.add("item 1");
    sll.add(["another item", 254]);

    expect(sll.indexOf(30)).toBe(4);
    expect(sll.indexOf(30)).not.toBe(5);
    expect(sll.indexOf(15)).toBe(1);
    expect(sll.indexOf(25)).toBe(3);
    expect(sll.indexOf(10)).toBe(0);
    expect(sll.indexOf(10)).not.toBe(1);


});
test('Testing dataAt() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add(25);
    sll.add(30);
    sll.add("item 1");
    sll.add(["another item", 254]);

    expect(sll.dataAt(3)).toBe(25);
    expect(sll.dataAt(0)).not.toBe(15);
    expect(sll.dataAt(1)).toBe(15);
    expect(sll.dataAt(2)).toBe(20);
    expect(sll.dataAt(5)).toBe("item 1");
    expect(sll.dataAt(6)).not.toBe(1);


});

test('Testing printData() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add(25);
    sll.add(30);

    let printedData = sll.printData();

    expect(printedData.length).toBe(5);
    expect(printedData.length).not.toBe(4);
    expect(printedData).toStrictEqual([10, 15, 20, 25, 30]);


});

test('Testing clearData() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add(25);
    sll.add(30);

    expect(sll.size()).toBe(5);
    sll.clearData();
    expect(sll.size()).not.toBe(5);
    expect(sll.size()).toBe(0);
    expect(sll.head).toBe(null);


});


test('Testing insertAt() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add(25);
    sll.add(30);

    expect(sll.size()).toBe(5);
    sll.insertAt(2, 60);
    expect(sll.size()).not.toBe(5);
    expect(sll.size()).toBe(6);
    expect(sll.printData()[2]).toBe(60);


});


test('Testing removeAt() Method', () => {
    let sll = new _LinkedList();

    sll.add(10);
    sll.add(15);
    sll.add(20);
    sll.add(25);
    sll.add(30);

    expect(sll.size()).toBe(5);
    sll.removeAt(2);
    expect(sll.size()).not.toBe(5);
    expect(sll.size()).toBe(4);
    sll.removeAt(3);
    expect(sll.size()).not.toBe(4);
    expect(sll.size()).toBe(3);
    expect(sll.printData()[2]).toBe(25);
    expect(sll.printData()[0]).toBe(10);
});