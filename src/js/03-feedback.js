const trottle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
console.log(form);
let data = {};

form.addEventListener('input', hendleTakeData);

function hendleTakeData(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  data = { email: email.value, message: message.value };

  const dataValue = JSON.stringify(data);
  localStorage.setItem('feedback-form-state', dataValue);

  //   при перезавантаженні сторінки
}

form.addEventListener('submit', hendleSaveData);

function hendleSaveData(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
