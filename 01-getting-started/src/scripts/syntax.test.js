import exercise from './syntax'


const arr = [1, 2, 3, 4, 5];
const arr_For = [2, 4, 6, 8, 10];
const arr_While = [2, 4, 6, 8, 10];
const arr_DoWhile = [2, 4, 6, 8, 10];
const arr_ForEach = [1, 2, 3, 4, 5];
const arr_ForEach2 = [6, 9, 3, 12, 6];
const car = {
    colour: "blue",
    make: "Ford",
    model: "F150"
};
test('Check if it is an attribute', () => {
    expect(exercise["attribute"]).toBe("Inside Attribute");
});
test('Check if it is a variable', () => {
    expect(exercise.isVariable("x")).toBe("Daniel");
});
test('Check if it is a number', () => {
    expect(exercise.isNumber(7)).toBe("number");
    expect(exercise.isNumber("Daniel")).toBe("string");
});
test('Check if it is a string', () => {
    expect(exercise.isString("x")).toBe("string");
    expect(exercise.isString(5)).toBe("number");

});
test('Check if it is a boolean', () => {
    expect(exercise.isBoolean(true)).toBe(true);
    expect(exercise.isBoolean(false)).toBe(true);
    expect(exercise.isBoolean("x")).toBe(false);

});
test('Check if it is an array', () => {

    expect(exercise.isAnArray(arr)).toBe(true);
    expect(exercise.isAnArray("arr")).toBe(false);

});
test('Check if it is undefined', () => {
    var t;
    expect(exercise.isUndefined(t)).toBe("undefined");

});
test('Check if and else statements', () => {
    expect(exercise.ifElseStatement(45)).toBe("Pass");
    expect(exercise.ifElseStatement(39)).toBe("Fail");

});
test('Check if item was added to the front of the array', () => {
    expect(exercise.addToFrontofArray(9, arr)).toBe(9);
    expect(exercise.addToFrontofArray("front", arr)).toBe("front");

});
test('Check if item was added to the end of the array', () => {
    expect(exercise.addToEndofArray(9, arr)).toBe(9);
    expect(exercise.addToEndofArray("front", arr)).toBe("front");

});
test('Check if item was upated in array', () => {
    expect(exercise.updateArrayValues(arr, 12, 3)).toBe(12);
    expect(exercise.updateArrayValues(arr, "front", 1)).toBe("front");
});
test('Check if For Loop is running', () => {
    expect(exercise.aForLoop(arr_For)).toBe(13);
});
test('Check if For/In Loop is running', () => {
    expect(exercise.aForInLoop(car)).toBe("The car is a blue Ford F150 ");
});
test('Check if While loop is running', () => {
    expect(exercise.aWhileLoop(arr_While)).toBe(15);
});
test('Check if Do/While loop is running', () => {
    expect(exercise.aDoWhileLoop(arr_DoWhile)).toBe(7);
});
test('Check if ForEach loop is running', () => {
    expect(exercise.aForEachFunction(arr_ForEach)).toBe(15);
    expect(exercise.aForEachFunction(arr_ForEach2)).toBe(36);

});