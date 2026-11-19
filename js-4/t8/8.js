const inputs = document.querySelectorAll('input');
const num1Input = document.querySelector('#num1') || inputs[0];
const num2Input = document.querySelector('#num2') || inputs[1];
const operationSelect = document.querySelector('#operation') || document.querySelector('select');
const calculateBtn = document.querySelector('#calculate') || document.querySelector('button');
const resultEl = document.querySelector('#result');

function calculate() {
  if (!num1Input || !num2Input || !operationSelect || !resultEl) return;

  const a = Number(num1Input.value);
  const b = Number(num2Input.value);
  const op = operationSelect.value;

  let res;
  switch (op) {
    case 'add':
      res = a + b;
      break;
    case 'sub':
      res = a - b;
      break;
    case 'multi':
      res = a * b;
      break;
    case 'div':
      res = b === 0 ? 'Cannot divide by zero' : a / b;
      break;
    default:
      res = '';
  }

  resultEl.textContent = String(res);
}

if (calculateBtn) {
  calculateBtn.addEventListener('click', calculate);
}