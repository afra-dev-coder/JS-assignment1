alert("Welcome to javascript")

var x =prompt("Enter your name")
alert(x)

var y =prompt("What's your favourite color?")
alert(y)


var firstName = "shah";
var lastName = "Nawaz";
alert(firstName + " " + lastName);


var city = "Karachi";
alert("You live in " + city);


var hobby = "Bibliophile";
alert("My hobby is " + hobby);



var a = 5;
var b = 7;
alert(a + b);


var marks = 60;
if (marks >= 50) {
    alert("Pass");
} else {
    alert("Fail");
}

var age = 20;
if (age > 18) {
    alert("You are now 18 plus");
}


var userName = "Faraz";
var totalMarks = 200;
var $value = 90;
alert("Legal variable names created");

alert("Illegal names: 1name, var-name, my name");

var x = ["userName", "totalMarks", "$value"];
alert(x);

var x = 10, y = 4;
alert("Sum: " + (x + y));
alert("Difference: " + (x - y));

alert("Product: " + (x * y));
alert("Quotient: " + (x / y));
alert("Remainder: " + (x % y));

var num = 5;
num++;
alert(num);


var n = 10;
n++;
alert(n);
n--;
alert(n);

var k = 5;
k += 3;
alert(k);
k -= 2;
alert(k);

var t = 4;
t *= 2;
alert(t);
t /= 4;
alert(t);


var x = (6 + 4) * 7;
alert(x);

var y = 8 + 4 * 9 - 10;
alert(y);


var z = (6 + (3 * 3)) - (6 / 8);
alert(z);


var a = "jawan";
var b = "pakistan";
alert(a + " " + b);

var city = "Lahore"
alert("Welcome from " + city);


var a = "Hey Pookies ";
var b = "my name is ";
var c = "Afra";
alert(a + b + c);


var color = prompt("Enter Your favorite color");
alert("Your favorite color is " + color);

var age = prompt("Enter your age");
alert("Your age is " + age);

var fruit = prompt("Favorite fruit?");
alert(fruit);


var n = 15;
if (n > 10) {
    alert("Number is greater than 10");
}

var marks = 55;
if (marks >= 50) {
    alert("Pass");
}

var age = 17;
if (age < 18) {
    alert("Minor");
}


alert(10 > 5);

var a = 5, b = 5;
if (a == b) {
    alert("Numbers are equal");
} else {
    alert("Numbers are not equal");
}

alert(5 <= 10);


var marks = 72;
if (marks >= 90) {
    alert("Grade A");
} else if (marks >= 70) {
    alert("Grade B");
} else {
    alert("Grade C");
}

var age = 6;
if (age < 12) {
    alert("Child");
} else if (age < 18) {
    alert("Teen");
} else {
    alert("Adult");
}


var temp = 18;
if (temp >= 30) {
    alert("Hot");
} else if (temp >= 20) {
    alert("Warm");
} else {
    alert("Cold");
}


var num = 12;
if (num > 0 && num % 2 === 0) {
    alert("This number is positive and even");
}


var score = 95;
if (score >= 50 && score <= 100) {
    alert("Valid score range");
}


var n = 30;
if (n % 3 === 0 && n % 5 === 0) {
    alert("Divisible by both 3 and 5");
}


var age = 20;
var card = true;
if (age >= 18) {
    if (card) {
        alert("Entry Allowed");
    }
} else {
    alert("Entry Not Allowed");
}

var number = 14;
if (number > 0) {
    if (number % 2 === 0) {
        alert("Positive & Even Number");
    }
}

var result = 80;
var bonus = false;
if (result >= 50) {
    if (bonus) {
        alert("Pass with Bonus");
    } else {
        alert("Pass");
    }
}


var fruits = ["Watermelon", "Strawberry", "Sugar apple", "Kivi", "Grapes"];
alert("Fruits: " + fruits);

var numbers = [50, 32, 77, 50, 74];
alert("First number: " + numbers[0]);
alert("Last number: " + numbers[numbers.length - 1]);

var colors = ["Lilac", "Voilet", "Navy blue", "Purple", "Black"];
alert("Colors: " + colors);


var fruits = ["Kivi", "Grapes", "Mango"];
fruits.push("Pineapple");
alert("After adding a fruit: " + fruits);

var items = ["Brush", "Acrylic", "Highlighter", "Geometrybox"];
items.pop();
alert("After removing last item: " + items);

var cars = ["Spotage", "Civic", "Liana"];
cars.unshift("Swift");   
cars.shift();          
alert("Updated cars list: " + cars);


var list = [2, 4, 6, -8, 10];
for (var i = 0; i < list.length; i++) {
    if (list[i] < 0) {
        alert("Stopped because negative number found");
        break;
    }
}

var x = [5, 10, 15];
var found = false;
for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
        found= true;
    }
}
alert(found);

var nums = [12, 25, 55, 70];
for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 50) {
        alert("A number greater than 50 found");
        break;
    }
}

var x = "Lahore";
alert(city.toUpperCase());


var y = "Turkey";
alert(country.toLowerCase());


var z = "Pineapple";
var result = word.charAt(0).toUpperCase() + word.slice(1);
alert(result);



var z = "JavanPakistan";
alert(z.length);


alert(z.slice(0, 4));


alert(z.slice(z.length - 4));

var line = "Learning JavaScript is fun";
alert(line.indexOf("JavaScript"));

alert(line.lastIndexOf("n"));

alert(line.includes("fun"));



var a = "MacBook";
alert(word.charAt(2));

alert(a.charAt(a.length - 1));

alert(a.charAt(Math.floor(a.length / 2)));


var text = "Really I enjoy coding";
alert(text.replace("coding", "reading"));


var newText = text.replace(g, "0");
alert(newText);


var z = "Hello world world";
alert(z.replace("world", "Pakistan"));




var x=prompt("Hey code push hojao plz")