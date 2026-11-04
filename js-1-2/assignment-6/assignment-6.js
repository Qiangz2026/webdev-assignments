const targetElement = document.getElementById("target");
const userChoice = confirm("Should I calculate the square root?");
if (userChoice === true) {
    const number = parseFloat(prompt("Enter a number:"));
     if (number < 0) {
        targetElement.textContent = "The square root of a negative number is not defined.";
     }else{
        const squareRoot = Math.sqrt(number);
        targetElement.textContent = `The square root of ${number} is ${squareRoot}.`;
     } 
}else{
    targetElement.textContent = "The square root is not calculated.";
}