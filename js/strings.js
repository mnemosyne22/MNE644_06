/*eslint-env browser*/

//STEP 1: Create an application that prompts the user for their name. Find & display the length of characters in the person’s name using the alert method:

function nameLength() {
    "use strict";
    var name, charName;
    name = window.prompt("Please type in your name.");
    charName = name.length;
    window.alert("Your name is " + charName + " characters long.");
}
nameLength();

//STEP 2: Create an application that prompts the user for their name. Then, for a numeric value to find the letter in the string based on the number they specify. Display the result in an alert:

function letterPosition() {
    "use strict";
    var name, charName, position;
    name = window.prompt("Please type in your name.");
    charName = name.length;
    position = window.prompt("Please choose a number between 1 and " + charName + ".");
    window.alert(name.charAt(position - 1) + " is the letter in that position.");
}
letterPosition();

//STEP 3: Create an application that prompts the user for their first name and another for their last name. Use the alert method to display the text "Your name is: " and the first name and last names strung together:

function fullName() {
    "use strict";
    var firstName, lastName;
    firstName = window.prompt("Hang on - what's your given name?");
    lastName = window.prompt("And your family name?");
    window.alert("So your full name is " + firstName.concat(lastName) + "? Interesting.");
}
fullName();

//STEP 4: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable, and display the index of the word “fox”:

function firstFox() {
    "use strict";
    var text = "The quick brown fox jumps over the lazy dog.";
    window.alert("The word fox begins in position " + text.indexOf("fox") + " of the phrase 'The quick brown fox jumps over the lazy dog'.");
}
firstFox();

//STEP 5: Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable, and display the index of the last instance of the word “fox”:

function finalFox() {
    "use strict";
    var text = "The quick brown fox jumps over the lazy fox.";
    window.alert("In the phrase 'The quick brown fox jumps over the lazy fox', the last appearance of the word fox begins in position " + text.lastIndexOf("fox") + ".");
}
finalFox();

//STEP 6: Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name and replace the text “the lazy dog” with their name:

function fleetingFox() {
    "use strict";
    var text, name;
    text = "The quick brown fox jumps over the lazy dog.";
    name = window.prompt("Please type in your name.");
    window.alert(text.replace("the lazy dog", name));
}
fleetingFox();

//STEP 7: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Search for that word within the string:

function searchText() {
    "use strict";
    var text, word;
    text = "The quick brown fox jumps over the lazy dog.";
    word = window.prompt("Of which word would you like to find the starting position?");
    window.alert(text.search(word));
}
searchText();  

//STEP 8: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Display the result in uppercase format:

function sliceText() {
    "use strict";
    var old_string, new_string;
    old_string = "The quick brown fox jumps over the lazy dog.";
    new_string = old_string.slice(31);
    window.alert(new_string.toUpperCase());
}
sliceText();

//STEP 9: Create an ALL CAPS text within a variable. Display in lowercase and trim any excess spacing:

function smallText() {
    "use strict";
    var text;
    text = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    ";
    window.alert(text.trim().toLowerCase());
}
smallText();

//STEP 10: Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. Programmatically capitalize the first letter in the sentence and display:

function capitalize() {
    "use strict";
    var text, firstLetter;
    text = "the quick brown fox jumps over the lazy dog.";
    firstLetter = text.charAt(0).toUpperCase();
    window.alert(text.replace(text.charAt(0), firstLetter));
}
capitalize();