/*eslint-env browser*/

//new Date()
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//new Date(milliseconds)
//new Date(date string)

//STEP 1: Get the number of days in a month

var daysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
};
window.console.log(daysInMonth(2, 2020)); 

//STEP 2: Get the month name from a particular date

var monthName = function(dt){
monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthList[dt.getMonth()];
};
console.log(monthName(new Date("04/01/1973")));

//STEP 3: Test whether or not a date falls on a weekend

var thatDay = new Date();
thatDay.setFullYear(2016);
thatDay.setMonth(3);
thatDay.setDate(17);
if(thatDay.getDay() == 6 || thatDay.getDay() == 0) {
    window.alert('Weekend!');
} else {
    window.alert("Work Week Blues...")
}

//STEP 4: Get yesterday’s day of the week

var yesterday =  function(date1){
    var dt = new Date(date1);
  return new Date((dt.setDate(dt.getDate()-1))).toString();
}
console.log(yesterday('Nov 15, 2014'));

//STEP 5: Get the current day of the week - display only the first letter of the day

function myFunction() {
  var d = new Date();
  var n = d.toDateString();
  window.alert(n.charAt(0));
}
myFunction();