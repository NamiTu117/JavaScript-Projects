//Global variable
var y = 15; 
function Sub(){
    document.write(20 - y + "<br>");
}

function Sub_2() {
    document.write (y-5 + "<br>"); 
}
Sub();
Sub_2(); 

//Local variable 
var x = 9; 
function Multiply(){
    document.write (3 * x + "<br>");
}
function Multiply2(){
    document.write (4 * 9);
}
Multiply();
Multiply2(); 

//purposeful console log error 
function add() {
    var d = 2; 
    console.log('15' + d);
}
function add2(){
    console.log(9 + d); 
}
add();
add2(); 

//if statement
if (3 == 3) {
    document.write("Of course it's the same, they're both equal to each other");
}


//using getHours and getDate
function getDate() {
    if(new Date(). getHours() < 19) {
        document.getElementById("Time").innerHTML = "Good evening"; 
    }
}
//if statement using function 
function rey() {
    if (10 > 2) {
        document.getElementById("Win").innerHTML = "Top of the morning to ya";
    }
}

//original vote function 
function Age_Req() {
    age = document.getElementById("age").value; 
    if (age >= 21) {
        Drink = "You're old enough to drink";
    }
    else {
        Drink = "Sorry, but no martinis for you";
    }
    document.getElementById("How old are you?").innerHTML = Drink;
}
//pulls time from the computer 
function Time_function() {
    var Time = new Date().getHours();
    var Reply; 
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening"; 
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}