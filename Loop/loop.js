var x =[]

var matrix = [
    [0, 1, 2, 3],
    [ 1 , 0 ,1, 2],
    [2, 1 ,0 ,1]

]

for(var i = 0; i <matrix.length; i++ ){
       document.write(matrix[i] , "<br><br>")
}

var num = [1,2,3,4,5,6,7,8,9,10]
for(var i = 0 ; i <num.length; i++ ){
    document.write(num[i] , "<br>")
}


var table = Number(prompt("Enter a number to print its table"));
var length = Number(prompt("Enter a length"));

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + (table * i) + "<br>");
}

var fruits = ["apple", "banana","mango","orange","strawberry"]
for(var i=0; i<fruits.length; i++ , "<br>"){
    document.write(fruits[i] + "<br>")
}

for(var i =0; i < fruits.length; i++){
    document.write("Element at index" +i+ " is " + fruits[i] + "<br>" )
    
}

document.write("<h2>Counting:</h2>")
for(var i = 1; i<= 15; i++ ){
    document.write(i + "  ")
}

document.write("<h2>Reverse Counting:</h2>")
for(var i = 10; i>= 1; i-- ){
    document.write(i + "  ")
}
document.write("<h2>Even numbers:</h2>")
for(var i = 0; i<= 20; i+=2 ){
    document.write(i + "  ")
}
document.write("<h2>Odd numbers:</h2>")
for(var i = 1; i<= 20; i+=2 ){
    document.write(i + "  ")
}

document.write("<h2>Series:</h2>");
for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k ");
}


for (var i = 5; i <= 100; i += 5) {
    document.write(i + "<br>");
}


var items = ["Cake", "Cookies", "Snacks", "Patties", "Brownies","Rusk"]
var bakery = prompt("Welcome to Kababjees Bakers! What do you want to order? ")
var itemFound = false

for (var i = 0; i < items.length; i++) {
    if (items[i].toLowerCase() === bakery.toLowerCase()) {
        itemFound = true;
        alert(bakery + " is available at index " + i + " in our bakery.");
        break;
    }
}
if (
    itemFound) {
    alert("We are sorry, " + bakery + " is not available in our bakery.");
}

var x = [24, 53, 78, 91, 12];

var largest = x[0];  

for (var i = 1; i < x.length; i++) {
    if (x[i] > largest) {
        largest = x[i];
    }
}
document.write("The largest number is: " + largest);
