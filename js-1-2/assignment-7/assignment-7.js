let roll_number = parseInt(prompt("How many dice to roll:"))
let sum = 0
for (i = 0; i< roll_number; i++){
    dice_number = Math.floor(Math.random() * 6) + 1
    sum += dice_number
}
document.querySelector("#target").innerHTML = sum
