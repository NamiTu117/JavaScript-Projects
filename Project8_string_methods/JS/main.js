//concate
function Kanye() {
    var a = " I";
    var b = " miss";
    var c = " the old";
    var d = " Kanye";
    var whole = a.concat(b, c, d); 
    document.getElementById("help").innerHTML = whole; 
}

//string method 
function slice_Method() {
    var Sentence = "War never changes and neither do highschoolers.";
    var Section = Sentence.slice(22, 33);
    document.getElementById("Slice").innerHTML = Section; 
}

//uppercase()
function uber() {
    var str ="Wazzup";
    var toma= str.toUpperCase();

    document.getElementById("upper").innerHTML = toma; 
}

//search
function Search() {
    let str ="I sometimes rewatch episodes of Pucca";
    document.getElementById("search").innerHTML = str.search("Pucca"); 
}

//numbers to a string 
function number() {
    var d =22; 
    document.getElementById("NumberString").innerHTML = d.toString();
}

//precision
function Precise() {
    var k = 1235.66795; 
    document.getElementById("precise").innerHTML = k.toPrecision(6); 
}

function Fix() {
    var number = 3.5567; 
    var fixit = number.toFixed(3);

    document.getElementById("fixer").innerHTML = fixit; 
}

//value - returns value of string 
function Value() {
    let str = "Toonami";
    document.getElementById("value").innerHTML = str.valueOf("Toonami"); 
}