//function created to utilize using paragraph element for id
function p() {
    var p=("Enter text:");
    document.getElementById("p1").innerHTML=p; 
}

//created function using +=
function myFunc() {
    var sentence ="I'm learning";
    sentence += "a lot from this course"; 
    document.getElementById("Concatenate").innerHTML = sentence; 
}

//practice run
let y =Tally(5, 6);

function Tally(a, b) {
    return a * b; 
}

//practice getelement DOM
function day() {
var y = document.getElementById("delay");
y.style.color = "pink";
}