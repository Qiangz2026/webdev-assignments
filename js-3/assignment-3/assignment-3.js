const dogs = [];
for (let i = 0; i < 6; i++){
    const dog = prompt(`Enter the name of ${i+1} dog.`);
    dogs.push(dog);
}
dogs.sort();
dogs.reverse();
let dogsList = "";
for (let dog of dogs){
    dogsList += `<li>${dog}</li>`;
}
document.querySelector("#target").innerHTML = dogsList;