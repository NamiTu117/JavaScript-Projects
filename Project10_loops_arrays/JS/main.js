function Call_Loop() {
    var digits = ""; 
    var x = 2; 
    while (x < 9) {
        digits += "<br>" + x;
        x++; 
    }
    document.getElementById("Loop").innerHTML = digits; 
}

//string length 
function stringy() {
let text = "Hi there"; 
document.getElementById("lengthy").innerHTML = text.lengthy; 
}


//for loop 
var movies = ["John Wick", "The Matrix", "Speed"]; 
var content = ""; 
var x;
function forLoop() {
    for (x = 0; x < movies.length; x++) {
        content += movies[x] + "<br>";
    }
    document.getElementById("Movies").innerHTML = content; 
}

function types() {
    var DogTypes = [];
    DogTypes[0] ="Rottweiler";
    DogTypes[1] ="Pitbull";
    DogTypes[2] = "Siberian Husky";
    DogTypes[3] = "Doberman"; 
    document.getElementById("dog").innerHTML = "I'd like to buy a " + DogTypes[2] + " as a pup!"; 
}

//constant 
function constant() {
    const Comics = {book:"Raven", author:"Kami Garcia", year:"2020"};
    Comics.cover = "soft cover";
    Comics.price ="$15.00"; 
    document.getElementById("comic").innerHTML = "This comic book is " + Comics.price + "."; 
}

let game = {
    console: "Xbox One",
    name: "Halo 5: Guardians",
    year: "2015",
    rated: "M",
    description: function() {
        return "You can only play " +  this.name +  "on " + this.console; 
    }
}; 
document.getElementById("games").innerHTML = game.description();

//loop w/break statement 

function breakit() {
let text = ""; 
for (let k = 0; k < 12; k++) {
    if (k == 5) {break;}
    text += "Your number is " + k + "<br>";
}
document.getElementById("mystic").innerHTML = text; 
}