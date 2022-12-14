function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

btnRef.addEventListener('click', onBtnClickChangeColor);

function onBtnClickChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor();
}
