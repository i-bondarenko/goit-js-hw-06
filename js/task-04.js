let counterValue = 0;

const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const result = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
  //   console.log('click on decrement');

  counterValue -= 1;
  result.textContent = counterValue;

  console.log(counterValue);
});

incrementBtn.addEventListener('click', function () {
  //   console.log('click on increment');

  counterValue += 1;
  result.textContent = counterValue;

  console.log(counterValue);
});
