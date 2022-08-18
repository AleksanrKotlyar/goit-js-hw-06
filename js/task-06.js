const inputRef = document.querySelector('input[data-length="6"]');
inputRef.addEventListener('blur', onBlurGetInputValue);

function onBlurGetInputValue({ target }) {
  target.value.length > inputRef.dataset.length
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
