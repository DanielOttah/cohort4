import functions from './functions.js';
import exercise from './syntax.js';
import provinceCode from './province.js';
// **********//
// Size Section// 
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// Calculator Section// 
var num1;
var num2;
var oper;

one.addEventListener('click', (() => {
    ops.textContent += "1";
}));
one.addEventListener('keypress', ((event) => {
    //if(){
    ops.textContent += "1";
    //}
}));
two.addEventListener('click', (() => {
    ops.textContent += "2";
}));
three.addEventListener('click', (() => {
    ops.textContent += "3";
}));
four.addEventListener('click', (() => {
    ops.textContent += "4";
}));
five.addEventListener('click', (() => {
    ops.textContent += "5";
}));
six.addEventListener('click', (() => {
    ops.textContent += "6";
}));
seven.addEventListener('click', (() => {
    ops.textContent += "7";
}));
eight.addEventListener('click', (() => {
    ops.textContent += "8";
}));

nine.addEventListener('click', (() => {
    ops.textContent += "9";
}));
zero.addEventListener('click', (() => {
    ops.textContent += "0";
}));
plus.addEventListener('click', (() => {

    num1 = ops.textContent;
    oper = "+";
    ops.textContent += "+";
}));
minus.addEventListener('click', (() => {
    num1 = ops.textContent;
    oper = "-";
    ops.textContent += "-";
}));
times.addEventListener('click', (() => {
    num1 = ops.textContent;
    oper = "*";
    ops.textContent += "*";
}));
divide.addEventListener('click', (() => {
    num1 = ops.textContent;
    oper = "/";
    ops.textContent += "/";
}));
dot.addEventListener('click', (() => {
    ops.textContent += ".";
}));
equalTo.addEventListener('click', (() => {

    var res1 = ops.textContent.split(num1)[1];
    num2 = res1.substring(1);

    if (oper == "+") {
        ans.textContent = num1 + " " + oper + " " + num2 + " = " + functions.add(num1, num2);
    } else if (oper == "-") {
        ans.textContent = num1 + " " + oper + " " + num2 + " = " + functions.subtract(num1, num2);
    } else if (oper == "*") {
        ans.textContent = num1 + " " + oper + " " + num2 + " = " + functions.multiplication(num1, num2);
    } else if (oper == "/") {
        ans.textContent = num1 + " " + oper + " " + num2 + " = " + functions.division(num1, num2);
    }
    ops.textContent = "";
}));
cancel.addEventListener('click', (() => {
    ops.textContent = "";
    ans.textContent = "";


}));
// Canadian Tax Section//
var taxableIncome;
var b1 = 48535;
var b2 = 48534;
var b3 = 53404;
var b4 = 63895;

myButton.addEventListener('click', () => {
    l37.textContent = "";
    l39.textContent = "";
    l42.textContent = "";
});
l36.addEventListener('change', () => {
    taxableIncome = l36.value;
    l42.style.fontWeight = "bold";
    if (taxableIncome <= b1) {
        l37.innerHTML = "0";
        l39.innerHTML = "15% ~ CAD$" + taxableIncome;
        l42.innerHTML = "CAD$" + " " + functions.taxCalcBase1(taxableIncome);
    } else if (taxableIncome > b1 && taxableIncome <= 97069) {
        l37.innerHTML = "CAD$48353 | CAD$" + (taxableIncome - b1);
        l39.innerHTML = "15% ~ CAD$48353 | 20.5% ~ CAD$" + (taxableIncome - b1);
        l42.innerHTML = "CAD$" + " " + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(taxableIncome - b1));

    } else if (taxableIncome > 97069 && taxableIncome <= 150473) {
        l37.innerHTML = "CAD$48353 | CAD$48534 | CAD$" + (taxableIncome - 97069);
        l39.innerHTML = "15% ~ CAD$48353 | 20.5% ~ CAD$48534 | 26% ~ CAD$" + (taxableIncome - 97069);
        l42.innerHTML = "CAD$" + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(b2) + functions.taxCalcBase3(taxableIncome - 97069));

    } else if (taxableIncome > (150473) && taxableIncome <= 214368) {
        l37.innerHTML = "CAD$48353 | CAD$48534 | CAD$53404 | CAD$" + (taxableIncome - 150473);
        l39.innerHTML = "15% ~ CAD$48353 | 20.5% ~ CAD$48534 | 26% ~ CAD$53404 | 29% ~ CAD$" + (taxableIncome - 150473);
        l42.innerHTML = "CAD$" + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(b2) + functions.taxCalcBase3(b3) + functions.taxCalcBase4(taxableIncome - 150473));

    } else if (taxableIncome > 214368) {
        l37.innerHTML = "CAD$48353 | CAD$48534 | CAD$53404 | CAD$63895 | CAD$" + (taxableIncome - 214368);
        l39.innerHTML = "15% ~ CAD$48353 | 20.5% ~ CAD$48534 | 26% ~ CAD$53404 | 29% ~ CAD$63895 | CAD$" + (taxableIncome - 214368);
        l42.innerHTML = "CAD$" + (functions.taxCalcBase1(b1) + functions.taxCalcBase2(b2) + functions.taxCalcBase3(b3) + functions.taxCalcBase4(b4) + functions.taxCalcBase5(taxableIncome - 214368));

    }
});
//============ Array ============
const myArray = [];

myBtnAdd.addEventListener('click', () => {
    if (arrInput.value.length == 0) {
        message.innerHTML = "Please enter a number in the input field abbove";
    } else if (arrInput.value.length != 0) {
        exercise.addToEndofArray(arrInput.value, myArray)
        arrInput.value = "";
        message.textContent = "Last number added: " + myArray[myArray.length - 1];
    }
});

myBtnShow.addEventListener('click', () => {
    if (myArray.length == 0) {
        message.innerHTML = "Sorry, nothing to show as the array is empty";
    } else if (myArray.length != 0) {
        message.innerHTML = "The array is: [" + myArray + "]";
    }
});
myBtnTotal.addEventListener('click', () => {
    var sum = 0;
    if (myArray.length == 0) {
        message.innerHTML = "Total is 0, the array is empty.";
    } else if (myArray.length != 0) {
        message.textContent = "The sum of array items equals: " + exercise.aForEachFunction(myArray);
        //message.textContent = "The sum of array items equals: " + myArray.reduce((a, b) => a + b, 0);
    }
});
myBtnClear.addEventListener('click', () => {
    myArray.length = 0;
    message.innerHTML = "The array is empty";

});
//=========== DICTIONARY AND LIBRARY=================
myBtnLookUp.addEventListener('click', () => {
    (provinceCode.getProvince(pcInput.value) == "Not a valid provincial code") ? pcmessage.textContent =
        provinceCode.getProvince(pcInput.value): pcmessage.textContent = "The province is: " + provinceCode.getProvince(pcInput.value);
});