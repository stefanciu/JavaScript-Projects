document.write (5 + " pens");
document.write("<br>");

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('007');
}

// Printing Infinity using floating point
document.write(-2E333);
document.write("<br>");

// Printing data type of variable x
var x= "true";
document.write(typeof x);
document.write("<br>");

// Utilizing the > and && orperators
document.write( 5 > 4 && 4 > 3);
document.write("<br>")

// Utilizing console.log method and > operator
console.log(2>2);

// Utilizing the == operator
document.write(5 == "5");
document.write("<br>")

// Utilizing the === operator
document.write(1 === 1)
document.write("<br>")

// Utilizing the || operator
document.write(1>2 || 2>1)

function not_Function () {
    document.getElementById("Not").innerHTML= !(20>10)
}