function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log("Power:", power(2, 5));


/*********** 2. Leap Year Function ***********/
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Leap Year:", isLeapYear(2020));


/*********** 3. Area of Triangle (2 Functions) ***********/
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    let S = semiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
console.log("Triangle Area:", triangleArea(3, 4, 5));


/*********** 4. Average & Percentage ***********/
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction(m1, m2, m3) {
    console.log("Average:", average(m1, m2, m3));
    console.log("Percentage:", percentage(m1, m2, m3) + "%");
}
mainFunction(75, 80, 90);


/*********** 5. Custom indexOf Function ***********/
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
console.log("Index:", customIndexOf("JavaScript", "S"));


/*********** 6. Delete All Vowels ***********/
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}
console.log("Without Vowels:", removeVowels("Hello World"));


/*********** 7. Count Two Vowels in Succession ***********/
function countSuccessiveVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length - 1; i++) {
        switch (true) {
            case vowels.includes(text[i]) && vowels.includes(text[i + 1]):
                count++;
                break;
        }
    }
    return count;
}

let sentence = "Pleases read this application and give me gratuity";
console.log("Successive Vowels:", countSuccessiveVowels(sentence));


/*********** 8. Distance Conversion ***********/
function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}

let distance = 5;
console.log("Meters:", toMeters(distance));
console.log("Feet:", toFeet(distance));
console.log("Inches:", toInches(distance));
console.log("Centimeters:", toCentimeters(distance));


/*********** 9. Overtime Pay ***********/
function overtimePay(hoursWorked) {
    let overtime = hoursWorked > 40 ? hoursWorked - 40 : 0;
    return overtime * 12;
}
console.log("Overtime Pay Rs:", overtimePay(45));


/*********** 10. Currency Notes ***********/
function currencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    amount %= 100;

    let fifties = Math.floor(amount / 50);
    amount %= 50;

    let tens = Math.floor(amount / 10);

    console.log("100 Notes:", hundreds);
    console.log("50 Notes:", fifties);
    console.log("10 Notes:", tens);
}

currencyNotes(880);

function showAlert() {
    alert("You clicked the link!");
}

function mobileAlert() {
    alert("Thanks for purchasing a mobile from us!");
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.remove();
}

function changeImage(img) {
    img.src = "image2.jpg";
}

function resetImage(img) {
    img.src = "image1.jpg";
}

var count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
}
