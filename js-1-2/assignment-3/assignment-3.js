const n1 = parseInt(prompt("Enter the first number."));
const n2 = parseInt(prompt("Enter the second number."));
const n3 = parseInt(prompt("Enter the third number."));
let sum = n1 + n2 + n3;
let product = n1*n2*n3;
let avg = sum/3;
document.querySelector("#target").innerHTML = `the sum: ${sum}, the product: ${product}, the average: ${avg}`;
