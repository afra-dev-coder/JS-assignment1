var num = prompt("Enter a positive number:");
num = Number(num);

console.log("Number:", num);
console.log("Round off:", Math.round(num));
console.log("Floor value:", Math.floor(num));
console.log("Ceil value:", Math.ceil(num));


var num = prompt("Enter a negative floating number:");
num = Number(num);

console.log("Number:", num);
console.log("Round off:", Math.round(num));
console.log("Floor value:", Math.floor(num));
console.log("Ceil value:", Math.ceil(num));

var num = prompt("Enter a number:");
num = Number(num);

console.log("Absolute value:", Math.abs(num));

var dice = Math.floor(Math.random() * 6) + 1;
console.log("Dice value:", dice);


var toss = Math.floor(Math.random() * 2);

if (toss === 0) {
  console.log("Heads");
} else {
  console.log("Tails");
}

var x = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", x);

var y = prompt("Enter your weight:");
var z = parseFloat(y);

console.log("Your weight is:", z, "kg");


var a = Math.floor(Math.random() * 10) + 1;
var Guess = prompt("Guess a number between 1 and 10:");
Guess = Number(Guess);

if (Guess === a) {
  console.log("Congratulations! You guessed the correct number.");
} else {
  console.log("Wrong guess! Secret number was:", a);
}

var now = new Date();
console.log(now);

var now = new Date();
var months = ["January","February","March","April","May","June",
              "July","August","September","October","November","December"];

alert(months[now.getMonth()]);


var d = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert(days[d.getDay()]);


var a = new Date();
var day = a.getDay();

if (day === 0 || day === 6) {
  alert("It's Fun day");
}


var now = new Date();
var date = now.getDate();

if (date < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}


var customer = "Daniyal";
var month = "Januaryy";
var units = 350;
var unitcharge = 16;

var netAmount = units * unitcharge;
var lateCharges = 350;
var grossAmount = netAmount + lateCharges;

console.log("Customer Name:", customer);
console.log("Month:", month);
console.log("Units:", units);
console.log("Charges per unit:", chargesPerUnit);
console.log("Net Amount:", netAmount.toFixed(2));
console.log("Late Payment Surcharge:", lateCharges.toFixed(2));
console.log("Gross Amount:", grossAmount.toFixed(2));


var age = prompt("Enter your age:");
var year = new Date().getFullYear();

var birthYear = currentYear - age;
console.log("Your birth year is:", birthYear);


var a = new Date();
now.setFullYear(a.getFullYear() - 100);
alert(a);


var b = new Date();
now.setHours(b.getHours() + 1);
console.log(b);


var b = new Date();
var hours = b.getHours();
if (hours < 12) {
  alert("Its AM");
} else {
  alert("Its PM");
}

var z = new Date(2020, 11, 31);
console.log(z);


var ramadan = new Date("June 18, 2015");
var today = new Date();
var diff = today.getTime() - ramadan.getTime();
var daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan");


let m = new Date("January 1, 2015");
let n = new Date();
var seconds = (n.getTime() - m.getTime()) / 1000;
console.log(seconds);


var z = new Date();
z.setFullYear(z.getFullYear() - 100);
alert(z);
