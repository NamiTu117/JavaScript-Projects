function Ride_Function() {
    var Height, Can_ride; 
    Height = document.getElementById("Height").Value; 
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//vehicle function example 
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jaguar", "XF", 2021, "Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; 
}


//gaming function using new
function Game (Title, Genre, Rating, Console) {
    this.Game_Title = Title;
    this.Game_Genre = Genre; 
    this.Game_Rating = Rating;
    this.Game_Console = Console; 
}
var Ella = new Game("Dying Light 2", "Survival Horror", "M", "PS5");
var Ulrich = new Game ("Fuzion Frenzy", "Action", "E", "Original Xbox");
var Kat = new Game ("Senua's Saga 2", "Horror", "M", "Xbox One")
function myGame(){
    document.getElementById("New_and_This").innerHTML =
    "Ella will soon get to play " + Ella.Game_Title + " on her " + Ella.Game_Console + ". "
   + Ella.Game_Title + " is a " + Ella.Game_Genre + " game rated " + Ella.Game_Rating + "."; 
}


//assigning variable the value of a reserved word
//can't run it: var a = case; 




//nested function that spits out a number
function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Nest();
    function Nest() {
        var GetSet = 8; 
        function Annex() {GetSet += 1;}
        Annex();
        return GetSet; 
    }
}
