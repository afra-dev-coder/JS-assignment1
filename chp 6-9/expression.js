document.write("<h3>Result:</h3>")


var a = 10


document.write(" The value of a is " +a+ "<br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br> ");


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write (" a is " +a+ "<br>");
document.write(" b is " +b+ "<br>");
document.write(" result is " +result + "<br><br>");


var username = prompt("Enter Your name")
document.write(" Hello " +username+ " ! welcome to my website" + "<br>");

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

    // b) Total marks for each subject
var totalMarks = 100;

 // c & d) Taking obtained marks
 var marks1 = +prompt("Enter obtained marks for " + subject1);
 var marks2 = +prompt("Enter obtained marks for " + subject2);
var marks3 = +prompt("Enter obtained marks for " + subject3);

    // e) Calculations
 var total = totalMarks * 3;
var obtained = marks1 + marks2 + marks3;
var percentage = (obtained / total) * 100;

    // Display table
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + (marks1/totalMarks*100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + (marks2/totalMarks*100).toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + (marks3/totalMarks*100).toFixed(2) + "%</td></tr>");
    
document.write("<tr><th></th><th>" + total + "</th><th>" + obtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");


