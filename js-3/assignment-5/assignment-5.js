const numbers = [];
while (true){
    const number = parseFloat(prompt("Enter a number: "));
    if (numbers.includes(number)){
        alert(`The number ${number} has already been given`);
        break;
    }else{
        numbers.push(number);
    }
}
numbers.sort((a, b) => a - b);
console.log("All given numbers in ascending order:");
for (const number of numbers) {
    console.log(number);
}