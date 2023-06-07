function addition_Function() { //Addition function 
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition
}

function subtraction_Function() { //Subtraction function
    var subtraction = 5-2;
    document.getElementById("Minus").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() { //Multiplication function
    var more = 6*8;
    document.getElementById("X").innerHTML = "6 x 8 = " + more;
}

function division_Function() { //Division function
    var division = 48 / 6;
    document.getElementById("Slice").innerHTML = "48 / 6 = " + division;
}

function more_Math() { //Multiple operations function
    var simple_Math = (1+2)*10/2-5;
    document.getElementById("Tree").innerHTML = "1 plus 2, multiplied bt 10, divided in half and then subtracted by 5 = " + simple_Math;
}

function modulus_Operator() { //Modulus operator function
    var mO = 25 % 6;
    document.getElementById("Rest").innerHTML = "When you divide 25 by 6 you have a remainder of: " + mO;
}

function negation_Operator() { //Negation Opperator function
    var x = 10;
    document.getElementById("Neg").innerHTML = -x;
}

var x = 5  
x++              //Increment
document.write(x)

x--    //Decrement
document.write(x)

x--
alert(x)

window.alert(Math.random() * 100.); //Math.random function