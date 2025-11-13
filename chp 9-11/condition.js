var x =prompt("What's your city name?")
var y = "karachi"
if (x===y) {
    alert("Welcome to city of lights")
    
}
else{
    alert("No")

}

var x =prompt("Enter Your Gender (male or female) ")
if (x==="male") {
      alert("Good Morning Sir")
    
}
else if (x==="female"){
     alert("Good Morning Ma'am")
}
else{
    alert("Please enter only Male or Female")
}
 
var a =prompt("Enter the color of the traffic signal(Red , Yellow, Green")
if (a==="Red") {
    alert("Must Stop")
    
}
else if (a==="Yellow"){
    alert("Ready to move")
}

else if (a==="Green"){
    alert("Move now")
}

else{
    alert("It's not a valid signal color")
}


var fuel =prompt("Enter remaining fuel in your car");
if (fuel< 0.25) {
    alert("Please refill the fuel in your car")
}
else{
    alert("Fuel level is okay")
}

var a = 4
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82
if (b++ === 83) {
        alert("given condition for variable b is true");

}

var c = 12
if (c++ === 13) {
        alert("condition 1 is true");

}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialcost = 20000
var laborcost = 2000
var totalcost = "materialcost +laborcost";
if (totalcost ===laborcost + materialcost) {
    alert("The cost equals")
}

if (true) {
    alert("True")
}
if (false) {
    alert("False")
}

if ("car" < "cat") {
    
    alert("car is smaller than cat")
}

var sub1 = +prompt("Enter marks of English subject")
var sub2 = +prompt("Enter marks of Maths subject")
var sub3 = +prompt("Enter marks of Science subject")
var totalMarks = +prompt("Enter total marks")


var obtainedMarks = sub1 + sub2 +sub3;
var percentage = (obtainedMarks / totalMarks ) * 100;

document.write("<h2>Mark Sheet</h2>")
document.write(" Total Marks: " +totalMarks+ "<br>");
document.write(" Marks Obtained: " +obtainedMarks+ "<br>");
document.write(" Percentage: " +percentage+ "%<br>");

if (percentage >= 80) {
    document.write(" Grade: A-one<br>")
    document.write(" Remarks: Excellent ")
}

else if (percentage >= 70)   {
      document.write(" Grade: A<br>")
    document.write(" Remarks: Better ")
}
else if (percentage >= 60)   {
      document.write(" Grade: B<br>")
    document.write(" Remarks: You need to improve ")
}
else{
     document.write(" Grade: Fail<br>")
    document.write(" Remarks: Sorry ")
}


var secretNumber = 5
var userguess =+prompt("Guess the secret number (between 1 to 10 )")

if(userguess===secretNumber) {
    alert("Bingo! Correct answer")
}
else if (userguess + 1 === secretNumber) {
    alert("Close enough to the correct answer")
}

 else {
    alert("Try again!")
}

var x = prompt("Enter a number")
var y = number(50)

if (y % 3 === 0) {
    alert("The number is divisible by 3")
}
else{
        alert("The number is not divisible by 3")

}

var number =prompt("Enter a number")
var y = 10
if (number % 2 === 0) {
    alert("The number is even");
}
else {
    alert("The number is odd");
}

var a =prompt("Enter the temperature")

if (a > 40) {
    alert("It is too hot outside")
    
}
else if (a > 30) {
      alert("The Weather today is Normal.");
 }
  else if (a > 20) {
      alert("Today's Weather is cool.");
}
 else if (a > 10) {
      alert("OMG! Today's weather is so Cool.");
  }
 else {
      alert("It's very cold today!");
 }


