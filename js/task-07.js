// Напиши скрипт, який реагує на зміну значення
// input#font - size - control(подія input) і
// змінює інлайн - стиль span#text,
// оновлюючи властивість font - size. В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.

const nameInput = document.querySelector('#font-size-control');
console.log(nameInput);

const spanEl = document.querySelector('#text');
// console.log(spanEl);

nameInput.addEventListener(
  'input',
  event => (spanEl.style.fontSize = `${event.currentTarget.value}px`)
);
