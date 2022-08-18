const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);
let profile = {};
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    if (value === '') {
      alert(`Все поля ${name} должны быть заполнены !`);
    }
    profile[name] = value;
  });

  event.currentTarget.reset();
}
console.log(profile);
