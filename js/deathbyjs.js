/*eslint-env browser*/

//STEP 1: Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

function orderItUp() {
    "use strict";
    var myString, orderedString;
    myString = window.prompt("Type the longest word you know:");
    //SPLIT WILL SEPARATE OUT THE WORDS INTO AN ARRAY FOR SORTING
    orderedString = myString.split("").sort();
    window.alert(orderedString.join(""));
}
orderItUp();


//STEP 2: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

function capFirst() {
    "use strict";
    var i, myString, myArray, value, capitals = [], newArray = [];
    myString = window.prompt("What´s the title of your favorite book?");
    myArray = myString.split(" ");

    for (i = 0; i < myArray.length; i += 1) {
        capitals.push(myArray[i].charAt(0).toUpperCase());
    }
    
    myArray.forEach(function (item, i) {
        var newString = item.replace(item.charAt(0), capitals[i]);
        newArray.push(newString);
    });
    
    return newArray.join(" ");
}
window.alert(capFirst());
    

//STEP 3: Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowelsLength() {
    "use strict";
    var startString, vowels;
    startString = window.prompt("Enter a word or phrase:");
    vowels = startString.match(/[a|e|i|o|u]/g);
    window.alert("That contains " + vowels.length + " vowels!");
}
vowelsLength();


//STEP 4: Write a JavaScript function that generates a string id (specified length) of random characters.

function generator() {
    "use strict";
    var i, selected = [];
    
    // RANDOM INDEX VALUE 
    function getRandom(arr) {
        var random, range;
        
        range = arr.length;
        random = Math.floor(Math.random() * range); // between 0 to (lenght-1)
        
        return random;
    }

    // Array[random]
    function getValues() {
        var lowerCase, upperCase, numOpt, charOpt;
        
        lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        numOpt = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        charOpt = ["!", "@", "#", "$", "%", "&", "*", "?"];
        
        //WRAP INTO LOOPS

        for (i = 0; i < 3; i += 1) {
            selected.push(lowerCase[getRandom(lowerCase)]);
        }
        for (i = 0; i < 3; i += 1) {
            selected.push(upperCase[getRandom(upperCase)]);
        }
        for (i = 0; i < 2; i += 1) {
            selected.push(numOpt[getRandom(numOpt)]);
        }
        for (i = 0; i < 2; i += 1) {
            selected.push(charOpt[getRandom(charOpt)]);
        }
        window.console.log(selected);
        return selected;
    }
    
    getValues();
    
    function password() {
        
        var pwd = "";

        pwd = selected[2] + selected[4] + selected[6] + selected[8] + selected[0] + selected[1] + selected[9] + selected[7] + selected[5] + selected[3];
        
        window.alert(pwd);
    }
    password();
}
generator();


//STEP 5: Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
    
function Travel() {
    "use strict";
    var i, countries, cList, cLength = [], length, maxLength, longest;
    
    // STORE COUNTRY NAMES IN AN ARRAY
    countries = window.prompt("Type in the names of FOUR or MORE COUNTRIES you want to visit...Please, separate with commas! Click OK to submit.");
    window.console.log(countries);
    
    cList = countries.split(" ");
    window.console.log(cList);
    
    // FIND THE LENGTH OF EACH ITEN STORED IN ARRAY AND STORE IN A NEW ARRAY
    cList.forEach(function(item){
        cLength.push(item.length);
    });
    
    window.console.log(cLength);
    
    for (i = 0; i < cLength.length; i += 1) {
        maxLength = Math.max(cLength[i]);
    }
    window.console.log(maxLength);
    
    for (i = 0; i < cList.length; i += 1) {
        if (cList[i].length === maxLength) {
            longest = cList[i];
        }
    }
    window.alert(longest + "is the longest of these.");
        
}
Travel();
    