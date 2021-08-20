//TYPEOF operators
document.write(typeof "SHEESH");

//coercion
document.write(typeof "Scarabough" + 4);

//NaN 
function my_Function(){
    //returns NaN
    document.getElementById("Test").innerHTML = isNaN('Fruitllop');
}

//to check if something is a number or not 
function my_Func() {
document.getElementById("Ate").innerHTML =isNaN('007');
}

//infinite 
document.write(2E315);
//negative infinity
document.write(-3E315);

//Boolean true or false 
//true
document.write(7 < 10);
//false
document.write (18 < 4);

//CONSOLE LOG
console.log(2 + 2);

console.log(3 < 1); 

//DOUBLE EQUAL SIGNS 
//true 
document.write(2==2);
//false
document.write(3==9); 

//TRIPLE EQUAL SIGNS
//to confirm both values are the same 

x = 10;
y = 10;
document.write(x===y);

//same data types, different value
a = 7;
b = 6; 
document.write(a===b);
//different data types and values
e = 9;
f ="hi"; 
document.write(e===f);
//same data types, different values
t = "elmo";
d = "sherlock";
document.write (t===d);

//BOOLEAN LOGICAL OPPERATORS

//AND TRUE
document.write(4 < 7 && 7==7); 
//AND FALSE
document.write (4==1 && 2 > 7); 

//OR TRUE
document.write (11 == 11 || 12 > 22);
//OR FALSE 
document.write( 11 < 2 || 2 > 3); 

//NOT is false
function not(){
    document.getElementById("Not").innerHTML = !(20 > 9); 
}
//double negative turns true
function doubleno() {
    document.getElementById("no").innerHTML = !(5 > 10);
}