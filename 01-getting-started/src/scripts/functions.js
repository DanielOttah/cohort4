const functions = {

    size: (num) => {
        if (num < 10) return "a small";
        if (num < 20) return "a medium";
        if (num <= 100) return "a large";
        return "an extra large";
    },
    isEven: (num) => {
        if (num % 2 == 0) return "true";
        return "false";
    },

    add: (num1, num2) => {
        return Number(num1) + Number(num2);
    },

    subtract: (num1, num2) => {
        return Number(num1) - Number(num2);
    },

    multiplication: (num1, num2) => {
        return Number(num1) * Number(num2);
    },
    division: (num1, num2) => {
        return Number(num1) / Number(num2);
    },
    taxCalcBase1: (num) => {
        return Number(num * 0.15);
    },
    taxCalcBase2: (num) => {
        return Number(num * 0.205);
    },
    taxCalcBase3: (num) => {
        return Number(num * 0.26);
    },
    taxCalcBase4: (num) => {
        return Number(num * 0.29);
    },
    taxCalcBase5: (num) => {
        return Number(num * 0.33);
    },
};
export default functions;