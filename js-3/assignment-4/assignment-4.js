const numbers = [];
while (true){
    const number = parseFloat(prompt("Enter a number(0 to stop)"));
    if (number == 0){
        break;
    }else{
        numbers.push(number);
    }
}
numbers.sort((a, b) => b - a);
console.log("Numbers from largest to smallest:");
for (const number of numbers){
    console.log(number);
}