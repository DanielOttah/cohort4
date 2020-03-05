import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("a small"); // Consider the edge cases
    expect(functions.size(0)).toBe("a small");
    expect(functions.size(10)).toBe("a medium");
    expect(functions.size(15)).toBe("a medium");
    expect(functions.size(20)).toBe("a large");
    expect(functions.size(101)).toBe("an extra large");
});

test('Check if even', () => {
    expect(functions.isEven(2)).toBe("true"); // Consider the edge cases
    expect(functions.isEven(11)).toBe("false");
});

test('Does that add function work?', () => {
    expect(functions.add(1, 2)).toBe(3); //This works to -  expect(functions.add(1, 2)).toEqual(3);
    expect(functions.add(7, 4)).toBe(11);

});

test('Checking if Subtract function works', () => {
    expect(functions.subtract(5, 2)).toBe(3);
    expect(functions.subtract(9, 3)).toBe(6);

});

test('Checking if multiplication function works', () => {
    expect(functions.multiplication(7, 2)).toBe(14);
    expect(functions.multiplication(15, 4)).toBe(60);

});
test('Checking if division function works', () => {
    expect(functions.division(7, 2)).toBeCloseTo(3.5);
    expect(functions.division(15, 3)).toBe(5);

});
test('Checking 1st base function', () => {
    expect(functions.taxCalcBase1(48535)).toBeCloseTo(7280.25);
    expect(functions.taxCalcBase1(25000)).toBeCloseTo(3750);

});
test('Checking 2nd base function', () => {
    expect(functions.taxCalcBase2(48534)).toBeCloseTo(9949.47);
    expect(functions.taxCalcBase2(25000)).toBeCloseTo(5125);

});
test('Checking 3rd base function', () => {
    expect(functions.taxCalcBase3(20000)).toBeCloseTo(5200);
    expect(functions.taxCalcBase3(25000)).toBeCloseTo(6500);

});
test('Checking 4th base function', () => {
    expect(functions.taxCalcBase4(20000)).toBeCloseTo(5800);
    expect(functions.taxCalcBase4(25000)).toBeCloseTo(7250);

});
test('Checking 4th base function', () => {
    expect(functions.taxCalcBase5(20000)).toBeCloseTo(6600);
    expect(functions.taxCalcBase5(25000)).toBeCloseTo(8250);

});