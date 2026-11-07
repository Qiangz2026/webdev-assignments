function rollDice() {
     return Math.floor(Math.random() * 6) + 1;
}
const targetUl = document.getElementById("target");
while (true) {
    const result = rollDice();
    const li = document.createElement("li");
    li.textContent = result;
    targetUl.appendChild(li);
    if (result === 6) {
        break;
    }
}