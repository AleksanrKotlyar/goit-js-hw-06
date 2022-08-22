const inputRef = document.querySelector('input[data-length="6"]');
inputRef.addEventListener('blur', onBlurGetInputValue);

function onBlurGetInputValue({ target }) {
  if (target.value.length == inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
