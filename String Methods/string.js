
var firstName = prompt("Write your first name");
var lastName = prompt("Write your last name")
var finalname = firstName + " " + lastName;
alert("Hey" + finalname)


var a = prompt("What is your favourite Phone Model?")
var length = a.length
 document.write("My favourite Phone is:" + a + "<br>" )
document.write("Length of string:" + length + "<br>")


var y = "Pakistani";
var z = y.indexOf("n");

document.write("String: " + y + "<br>");
document.write("Index of 'n': " + z);

var x = ("Hello World")
document.write("Last index of '1':" + x.lastIndexOf("1"));


var y = "Pakistani";
document.write(x.substring(3, 4)); 


var word = "Hyderabad"
var replace = word.replace ("Hyder", "Islam")
document.write(" City: " + word +"<br>")
document.write(" After replacement: " + replace + "<br>")

var message = "Ali and Sami are best friends. They play cricket and football together"
var result = message.replaceAll("and" , "&")
document.write(" Message: " + result + "<br>")

var string ="472"
var num = Number(string)

document.write("Value: " + string + "<br>")
document.write("Type: " + typeof string + "<br><br>");

document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num)

var x = prompt("Write something New word")
var result = x.toUpperCase()

document.write(" User Input: " + x + "<br>" )
document.write(" Upper Case: " + result + "<br>")

var x = prompt("Write Any Word")
var result = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();

document.write(" User Input: " + x + "<br>")
document.write(" Title case: " + result + "<br>")

var username = prompt("Enter your username");
var invalid = false;

for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);

    if (code === 33 || code === 44 || code === 46 || code === 64) {
        invalid = true;
        break;
    }
}

if (invalid) {
    alert("Please enter a valid username");
} else {
    alert("Username saved: " + username);
}

var x =["cake", "brownies", "cookie", "snacks", "sugar stick"]
var y = prompt("What do you want to search?")

var item = y.toLowerCase();
var z = false

for(var i = 0; i < x.length; i++){
    if(x[i].toLowerCase()===item){
        z = true;
        break
    }
}
if (z) {
    alert(y + " is available in the list.");
} else {
    alert(y + " is not available in the list.");
}

var password = prompt("Enter your password");
var x = true;

if(password.length <6){
    x=false;
}

var y =password.charCodeAt(0)
if (y >= 48 && y <= 57) {
    x = false;
}

var letter = false
var number = false

for (var i = 0; i < password.length; i++) {
    var code = password.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        letter = true;
    }
    if (code >= 48 && code <= 57) {
        number = true;
    }
}
if (letter===false || number ===false){
    x = false
}

if (x) {
    alert("Password is valid");
} else {
    alert("Please enter a valid password");
}

var z = "University of Karachi"
var a =z.split("")

for(var i =0; i  < a.length ; i++){
    document.write(a[i] +"<br>")
}

var x = prompt("Write anything")
document.write(" User Input: " + x +"<br>" )
document.write("Last character of input: "+ x.slice(-1))

