const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', getInputValue);
function getInputValue({ target }) {
  nameRef.innerText = target.value ? target.value : 'Anonymous';
}
