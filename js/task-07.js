const inputRef = document.querySelector('#font-size-control');
inputRef.addEventListener('input', getRangeValue);
const textRef = document.querySelector('#text');

function getRangeValue({ currentTarget }) {
  textRef.style.fontSize = `${currentTarget.value}px`;
}
