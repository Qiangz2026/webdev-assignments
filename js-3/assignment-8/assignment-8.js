function concat(array){
    let resultString = "";
    for (let i = 0; i < array.length; i++) {
        resultString += array[i];
    }
    return resultString;
}
const testArray = ["Apple", "Pear", "Peach", "Banana"];
const concatenatedResult = concat(testArray);
const targetParagraph = document.getElementById("target");
targetParagraph.textContent = concatenatedResult;