const nameInput = document.querySelector('#validation-input');
console.log(nameInput);

nameInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value;
  const inputLength = event.currentTarget.dataset.length;

  event.currentTarget.classList.add('invalid');

  if (Number(inputValue.length) === Number(inputLength)) {
    event.currentTarget.classList.replace('invalid', 'valid');
  }
  return;
}
