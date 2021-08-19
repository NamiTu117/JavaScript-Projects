//math functions
//remember to make them buttons
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; 
}

function subtract() {
    var sub = 3 - 2; 
    document.getElementById("Math").innerHTML = "3 - 2 = " + sub; 
}

function multiply() {
    var simple = 6 * 8; 
    document.getElementById("Math").innerHTML = " 6 x 8 = " + simple; 
}

function divide() {
    var div = 8 / 1 ; 
    document.getElementById("Math").innerHTML = "8 / 1 = " + div;  
}

function operations() {
    var operators = (9 + 1) * 2 / 3 - 5; 
    document.getElementById("Math").innerHTML = "9 plus 1, muliplied by 2 divided by 3 minus 5 equals" + operators;
}

function modulus() {
    var mod = 6 % 4; 
    document.getElementById("Math").innerHTML = "When you divide 6 by 4 you have a remainder of " + mod; 
}

function negate_operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

//increments and decrements 

//increment 
var y = 6.75; 
y++;
document.write(y);

//decrement 
var a = 5; 
a--; 
document.write(a);

//random numbers
//returning a random number between 0 and 1
window.alert(Math.random() );

//random number between 0 and 100
window.alert(Math.random() * 100); 

//MATH OBJECT
//rounds to the nearest integer Math.ceil()
document.getElementById("Math").innerHTML = Math.ceil(3.1); 
