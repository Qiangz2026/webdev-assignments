const targetUl = document.getElementById("target");
const names = ["John", "Paul", "Jones"];
for (let i = 0; i < names.length; i++){
    targetUl.innerHTML += `<li>${names[i]}</li>`;
}