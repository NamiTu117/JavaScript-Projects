//function to create a dictionary
function my_Dictionary() {
    var Character ={
        Name: "Cortana",
        Age: "27",
        Species: "A.I.",
        Affiliation: "UNSC",
    };
    document.getElementById("Dictionary").innerHTML =Character.Affiliation; 
} 

//practice function to delete variable 
function my_Dictionary() {
    var Team ={
        Squad: "Black Wolves",
        Affiliation: "Unknown/U.S. Government",
        Location: "Dubai",
    }
    //delete deletes whatever key is put after its variable 
    delete Team.Affiliation; 
    document.getElementById("Dictionary").innerHTML =Team.Affiliation; 
}