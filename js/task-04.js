let counterValue = 0;
const valueRef = document.querySelector('#value');

const decr = document.querySelector('button[data-action="decrement"]');
const onClickBtnDecrementValue = event => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
decr.addEventListener('click', onClickBtnDecrementValue);

const incr = document.querySelector('button[data-action="increment"]');
const onClickBtnIncrementValue = event => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
incr.addEventListener('click', onClickBtnIncrementValue);
