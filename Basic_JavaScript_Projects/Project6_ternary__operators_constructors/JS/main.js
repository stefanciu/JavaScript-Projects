
// A function using ternary operation
function Vote_Function() {
    var Height, Can_ride;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "
    + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

// A constructor function
function pet(Race, Age, Color) {
    this.pet_Race = Race;
    this.pet_Age = Age;
    this.pet_Color = Color;
}
var Felix = new pet("cat", 2, "grey");
var Cesar = new pet("dog", 4, "white");
var Dory = new pet("fish", 1, "blue");
function petFunction () {
    document.getElementById("New_and_This").innerHTML = "I have a " + Cesar.pet_Age + " years old, "
    + Cesar.pet_Color + ", " + Cesar.pet_Race + ", pet."
}

// A nested function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}