const startYear = parseInt(prompt("Enter the start year:"));
const endYear = parseInt(prompt("Enter the end year:"));
let listItems = "";
for(let year = startYear; year <= endYear; year++){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        listItems += `<li>${year}</li>`;
    }
}

document.querySelector("#target").innerHTML = listItems