const diceCount = parseInt(prompt("Enter the number of dice:"));
const targetSum = parseInt(prompt("Enter the sum of the eye numbers of interest:"));
const totalRepetitions = 10000;
let successCount = 0;
for (let i = 0; i < totalRepetitions; i++) {
    let currentSum = 0;
    for (let j = 0; j < diceCount; j++) {
        const dieRoll = Math.floor(Math.random() * 6) + 1;
        currentSum += dieRoll;
    }
    if (currentSum === targetSum) {
        successCount++;
    }
}
const probability = ((successCount / totalRepetitions) * 100).toFixed(2);
const outputText = `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability}%`;
document.querySelector("#target").textContent = outputText;
