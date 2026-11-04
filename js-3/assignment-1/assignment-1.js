const numbers = []
for (i = 0; i < 5; i++){
    const number = parseFloat(prompt("Enter a number: "))
    numbers.unshift(number)
}
for (j = 0; j < 5; j++){
    console.log(numbers[j])
}
