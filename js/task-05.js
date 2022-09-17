const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const { value } = event.currentTarget;
  output.textContent = value ? value : 'Anonymous';
});
