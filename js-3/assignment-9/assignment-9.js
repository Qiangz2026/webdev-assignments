function even(array){
    const evenArray = [];
    for (let number of array){
        if (number % 2 == 0){
            evenArray.push(number);
        }
    }
    return evenArray;
}
const testArray = [2, 7,4];
const evenNum = even(testArray);
console.log(testArray);
console.log(evenNum);
