function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  let arrayStringsOfTags = [];

  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;

    const divBox = document.createElement('div');
    const colorOfBox = getRandomHexColor();

    divBox.style.width = `${width}px`;
    divBox.style.height = `${height}px`;
    divBox.style.backgroundColor = colorOfBox;
    divBox.style.marginBottom = '10px';
    // console.log(divBox);
    arrayStringsOfTags.push(divBox);
  }
  boxesEl.prepend(...arrayStringsOfTags);
}

const inputEl = document.querySelector('input');

const btnCreateEl = document.querySelector('[data-create]');
btnCreateEl.addEventListener('click', onbtnCreateClick);
function onbtnCreateClick(event) {
  const inputElValue = inputEl.value;

  createBoxes(inputElValue);
}

const btnDestroyEl = document.querySelector('[data-destroy]');
btnDestroyEl.addEventListener('click', event => {
  boxesEl.innerHTML = '';
  inputEl.value = '';
});
