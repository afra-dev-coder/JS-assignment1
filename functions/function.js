function showDateTime() {
    document.write(new Date() + "<br><br>");
}
showDateTime();


function greetUser(firstName, lastName) {
    document.write("Hello " + firstName + " " + lastName + "<br><br>");
}
greetUser("Aryan", "Khan");


function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("Sum: " + addNumbers(5, 10) + "<br><br>");


function calculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}
document.write("Calculator Result: " + calculator(8, 4, "*") + "<br><br>");


function square(num) {
    return num * num;
}
document.write("Square: " + square(6) + "<br><br>");


function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
document.write("Factorial: " + factorial(5) + "<br><br>");


function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
    document.write("<br><br>");
}
counting(1, 10);


function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(value) {
        return value * value;
    }

    var hyp = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    document.write("Hypotenuse: " + hyp + "<br><br>");
}
calculateHypotenuse(3, 4);


function rectangleArea(width, height) {
    return width * height;
}
document.write("Area (values): " + rectangleArea(5, 6) + "<br>");

var w = 4;
var h = 7;
document.write("Area (variables): " + rectangleArea(w, h) + "<br><br>");


function isPalindrome(word) {
    var reverse = word.split("").reverse().join("");
    if (word === reverse) {
        return true;
    } else {
        return false;
    }
}
document.write("Palindrome (madam): " + isPalindrome("madam") + "<br><br>");


function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] =
            words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
document.write(capitalizeWords("the quick brown fox") + "<br><br>");


function longestWord(str) {
    var words = str.split(" ");
    var longest = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
document.write("Longest Word: " + longestWord("Web Development Tutorial") + "<br><br>");


function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
document.write("Letter count: " + countLetter("JSResourceS.com", "o") + "<br><br>");


function calcCircumference(radius) {
    var c = 2 * Math.PI * radius;
    document.write("The circumference is " + c + "<br>");
}
function calcArea(radius) {
    var a = Math.PI * radius * radius;
    document.write("The area is " + a + "<br>");
}
calcCircumference(5);
calcArea(5);
