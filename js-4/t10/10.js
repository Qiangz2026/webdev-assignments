const form = document.querySelector('form');
const firstNameInput = document.querySelector('input[name=firstname]');
const lastNameInput = document.querySelector('input[name=lastname]');
const target = document.querySelector('#target');

if (form && firstNameInput && lastNameInput && target) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    target.textContent = `Your name is ${firstName} ${lastName}`.trim();
  });
}