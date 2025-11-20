var x = []

var array = new Array();


var array = new Array("Red", "Faraz","Biryani");

var array = new Array( 4 , 8, 88,76);

var booleanArray = [true, false]


var y = ["Sara", 55, false,true  ]

var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M. Phil." , "PhD"];

document.write("<h2>Qualifications</h2>");

document.write((" 1 ") + qualifications[0] + " <br> " )
document.write((" 2 ") + qualifications[1] + " <br> " )
document.write((" 3 ") + qualifications[2] + " <br> " )
document.write((" 4 ") + qualifications[3] + " <br> " )
document.write((" 5 ") + qualifications[4] + " <br> " )
document.write((" 6 ") + qualifications[5] + " <br> " )
document.write((" 7 ") + qualifications[6] + " <br> " )
document.write((" 8 ") + qualifications[7] + " <br> <br> <br> " )

var colors = ["Red" , "Blue" , "Green"]
document.write( colors , "<br>")

colors.unshift("Pink")
document.write( colors  , "<br>")

colors.push("White")
document.write( colors  , "<br>")

colors.unshift("Black" , "Grey")
document.write( colors  , "<br>")

colors.shift(0)
document.write(colors , "<br>")

colors.pop(6)
document.write(colors, "<br>")

var index = +prompt("At which index do you want to add a color?")
var add = prompt("Which color do you want to add?")

colors.splice(index , 0 , add)
document.write(colors + "<br>" )

var index2 = +prompt("At which index do you want to delete colors?")
var remove= prompt("How many colors do you want to delete?")

colors.splice(index2 , 0 , remove)
document.write(colors + "<br><br>" )


var score =[ 195,265 , 488, 999,333, 244 ]
document.write("Scores of students" + score + "<br><br>");

score.sort()
document.write("Ordered Marks" + score + "<br><br>")

var arr =["This" , "is" , "my" , "cat" ]
var result = arr.join (",")
document.write( "<h2> ARRAY </h2>" + result +  "<br>") 

var string =["This" , "is" , "my" , "cat" ]
var result = string.join ("  ")
document.write( "<h2> STRING </h2>" + result +  "<br>") 

var array =["Karachi", " Lahore", "Queeta", "Pwshawar", "Islamabad"]
document.write(" <h2>Cities list</h2> " +  array  + "<br>")

var selectedcities = [" Lahore", "Queeta", "Pwshawar"]
document.write(" <h2>Selected cities</h2> " + selectedcities + "<br>")

var devices = [ ]
devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Monitor")
document.write(" <h2>Devices:</h2> " + devices + "<br>")

var out1 = devices.shift( )
document.write("Out: <br>" + out1+ "<br>")

var out2 = devices.shift( )
document.write("Out: <br>" + out2+ "<br>")

var out3 = devices.shift( )
document.write("Out: <br>" + out3+ "<br>")

var out4 = devices.shift( )
document.write("Out: <br>" + out4+ "<br>")


var devices = [ ]
devices.push("Keyboard")
devices.push("Mouse")
devices.push("Printer")
devices.push("Monitor")
document.write(" <h2>Devices:</h2> " + devices + "<br>")


var out1 = devices.pop( )
document.write("Out: <br>" + out1+ "<br>")

var out2 = devices.pop( )
document.write("Out: <br>" + out2+ "<br>")

var out3 = devices.pop( )
document.write("Out: <br>" + out3+ "<br>")

var out4 = devices.pop( )
document.write("Out: <br>" + out4+ "<br> <br>")


var manufacturers =["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<h2> Phone manufacturers</h2>"   ) 

var a =["Apple"]
document.write("<option>" + a +  "</option>")

var b =["Samsung"]
document.write("<option>" + b +  "</option>")

var c =["Motrola"]
document.write("<option>" + c +  "</option>")

var d =["Nokia"]
document.write("<option>" + d +  "</option>")

var e =["Sony"]
document.write("<option>" + e +  "</option>")

var f =["Haier"]
document.write("<option>" + f +  "</option>")