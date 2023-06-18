var X = 10 // using global variable

function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
Add_numbers_1();

function Add_numbers_2() {
    var Y = 20; // using local variable
    document.write(20 + Y);
}
Add_numbers_2();

function Add_numbers_3() {
    console.log(X + Y);
}
Add_numbers_3();

// using a function that includes an if statement
function get_Date() {
    if (new Date().getHours() < 20) {
        document.getElementById("Greeting").innerHTML = "How are you tonight?";
    }
}

// using a function that includes an if and else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}