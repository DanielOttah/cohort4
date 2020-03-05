var p;
//const xyz = {};

//======Attribute=======
const exercise = {

        attribute: "Inside Attribute", //declared a property attribute to confirm exercise is an object and it can be accessed
        //********Variable*******
        isVariable: (v) => {
            v = "Daniel";
            return v; //returns v to confirm it holds data "Daniel"
        },
        //*******NUMBER******
        isNumber: (num) => {
            return typeof(num); //returns the type        
        },
        //*****STRING*******
        isString: (str) => {
            return typeof(str); //returns the type
        },
        //*****BOOLEAN******
        isBoolean: (b) => {
            return (typeof(b) === "boolean"); //since b is 'greater than' a
        },
        //********ARRAY********
        isAnArray: (arr) => {
            return (Array.isArray(arr)); //checks if arr is an array        
        },
        //*******UNDEFINED********
        isUndefined: (p) => {
            return typeof p; //p is declared but not assigned thus returning undefined
        },
        //==============IF ELSE==============
        ifElseStatement: (v) => {
            if (v < 40) return "Fail";
            else return "Pass";
        },
        //======ARRAYS=========
        addToFrontofArray: (frt, arr) => {
            arr.unshift(frt); //adds frt to the 1st position in the array
            return arr[0];
        },
        addToEndofArray: (frt, arr) => {
            arr.push(frt); //adds frt to the last position in the array
            return arr[arr.length - 1];
        },
        updateArrayValues: (arr, frt, pos) => {
            arr[pos] = frt; //updated position (pos) with 'frt' in array arr
            return arr[pos];
        },
        //======LOOPS=======
        aForLoop: (arry) => {
            for (var i = 0; i < arry.length; i++) {
                arry[i] = arry[i] + 3;
            }
            return arry[arry.length - 1];
        },
        aForInLoop: (xyz) => {
            let str = "";
            for (var q in xyz) {
                str += xyz[q] + " ";
            }
            return "The car is a " + str;
        },
        aWhileLoop: (xyz) => {
            let i = 0;
            while (i < xyz.length) {
                xyz[i] = xyz[i] + 5;
                i++;
            }
            return xyz[xyz.length - 1];
        },
        aDoWhileLoop: (xyz) => {
            let i = 0;
            do {
                xyz[i] = xyz[i] + 5;
                i++;
            }
            while (i < xyz.length);
            return xyz[0];

        },
        //=========ForEach with Array & Function========
        aForEachFunction: (xyz) => {
            let sum = 0;
            xyz.forEach(function myForEach(item) {
                sum += Number(item);
            });
            return sum;
        },

    }
    /*      
            ======Declare object========
             Exercise is an example of an object
            =======Lookup key to retrieve value=====
             We can look up isArray by using exercise.isArray*/






export default exercise;