/*eslint-env browser*/

//STEP 1: Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window:

function absoluteValue() {
    "use strict";
    var num;
    num = window.prompt("Please enter any REAL number:");
    window.console.log(Math.abs(num));
}
absoluteValue();

//STEP 2: Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window:

function roundUp() {
    "use strict";
    var deci1;
    deci1 = window.prompt("Enter a decimal value...");
    window.console.log(Math.ceil(deci1));
}
roundUp();

//STEP 3: Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window:

function downer() {
    "use strict";
    var deci2;
    deci2 = window.prompt("Enter a decimal value...");
    window.console.log(Math.ceil(deci2));
}
downer();

//STEP 4: Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window:

function minMax() {
    "use strict";
    var stringNum;
    stringNum = window.prompt("please enter FIVE numbers separated by commas");
    window.console.log("The greatest number is of these is " + Math.max(parseInt(stringNum)));
    window.console.log("The smallest number is " + Math.min(parseInt(stringNum)));
}
minMax();

//STEP 5: Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window:

function sqRoot() {
    "use strict";
    var num;
    num = window.prompt("Please enter a number:");
    window.console.log(Math.sqrt(num));
}
sqRoot();