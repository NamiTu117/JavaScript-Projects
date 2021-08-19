function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition; 
}
document.write(addition_Function); 

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
    document.write(divide); 
}

function yay() {
    var multi = (9 + 10) * 2 / 8 - 3; 
    document.getElementById("Math").innerHTML = "9 plus 10, multiplied by 2, divided by 8 minus 3"
}