const calcInput = document.querySelector('#calcInput');
const calculateBtn = document.querySelector('#calculateBtn');
const resultP = document.querySelector('#result');

calculateBtn.addEventListener('click', function() {
    const inputStr = calcInput.value.trim();
    let result = '';
    if (inputStr.includes('+')) {
        const parts = inputStr.split('+');
        result = Number(parts[0]) + Number(parts[1]);
    } 
    else if (inputStr.includes('-')) {
        const parts = inputStr.split('-');
        result = Number(parts[0]) - Number(parts[1]);
    } 
    else if (inputStr.includes('*')) {
        const parts = inputStr.split('*');
        result = Number(parts[0]) * Number(parts[1]);
    } 
    else if (inputStr.includes('/')) {
        const parts = inputStr.split('/');
        result = Number(parts[0]) / Number(parts[1]);
    } else {
        result = 'Invalid input';
    }
    resultP.textContent = result;
});