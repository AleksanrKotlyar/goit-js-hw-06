const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);
let profile = {};

function onFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('Все поля должны быть заполнены!');
  } else {
    const mail = event.currentTarget.elements.email;
    const pass = event.currentTarget.elements.password;
    profile.email = mail.value;
    profile.password = pass.value;
    event.currentTarget.reset();
  }
  console.log(profile);
}

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     if (value === '') {
//       alert(`Все поля ${name} должны быть заполнены !`);
//     }
//     profile[name] = value;
//   });
//   console.log(profile);
//   event.currentTarget.reset();
// }
