function rollDice(sides){
    return Math.floor(Math.random() * sides) + 1;
}
const maxSides = parseInt(prompt("How many sides does the dice have?"));
const targetUl = document.getElementById("target");
while (true) {
    const result = rollDice(maxSides);
    const li = document.createElement("li");
    li.textContent = result;
    targetUl.appendChild(li);
    if (result === maxSides){
        break
    }
}