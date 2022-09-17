function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const changeColor = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  let randomHexColor = getRandomHexColor();
  // console.log(randomHexColor);

  bodyEl.style.backgroundColor = randomHexColor;
  changeColor.textContent = randomHexColor;
}
