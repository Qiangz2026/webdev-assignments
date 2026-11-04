const studentName = prompt("Enter your name:");
const drawValue = Math.floor(Math.random() * 4) + 1;
let house = "";
switch (drawValue) {
    case 1:
        house = "Gryffindor";
        break;
    case 2:
        house = "Slytherin"; 
        break;
    case 3:
        house = "Hufflepuff"; 
        break;
    case 4:
        house = "Ravenclaw";  
        break;
}
const output = studentName + ", you are " + house + ".";
document.querySelector("#target").innerHTML = output;