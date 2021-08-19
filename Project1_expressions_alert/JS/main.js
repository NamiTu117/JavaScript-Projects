
window.alert("WAZZUP");
var e = "Why"
window.alert (e);
var y ="Stan from Eminem was kinda disturbing"
document.write(y);

function check() {
    var content= document.getElementById("Hi").innerText;
    alert(check); 
}

//how to write commas without the extra marks showing
document.write("Lisa told Bart, \ Knock it off")

document.write ("\"Bella Poarch has to be one the most" 
                + "talented Tik Tok Stars"); 

//concating multiple strings
//var Deity= "Seth", Deity2="Tony", Deity3="Eric"; 
//document.write(Deity + Deity2);

var Deity1 ="Krishna",  Deity2 ="Kali Ma";
var Deity3= Deity1 + Deity2;
document.write(Deity3);



//how to switch font colors and make the string that color
var reds=("Help");
var reds=reds.fontcolor("red");
document.write(reds); 
//expressions 
document.write(3 + 3);
//making a function to click a button and make the 
//text inside that function whatever color you assigned 
function func() {
    var str="This text is purple";
    var result=str.fontcolor ("purple");
    document.getElementById ("Purple_Text").innerHTML = result; 
}

// two slashes lets you comment code