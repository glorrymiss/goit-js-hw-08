// const trottle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let data = {};

const KEY = 'feedback-form-state';

form.addEventListener('input', hendleTakeData);
form.addEventListener('submit', hendleSaveData);

//   при перезавантаженні сторінки
input.value = JSON.parse(localStorage.getItem(KEY)).email || '';
textarea.value = JSON.parse(localStorage.getItem(KEY)).message || '';
function hendleTakeData(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  data = {
    email: email.value,
    message: message.value,
  };

  const dataValue = JSON.stringify(data);
  localStorage.setItem(KEY, dataValue);
}

function hendleSaveData(event) {
  event.preventDefault();
  if (input.value === '' || textarea.value === '') {
    alert(`Всі поля мають бути заповнені`);
  } else {
    event.currentTarget.reset();
    console.log(localStorage.getItem(KEY));
    localStorage.removeItem(KEY);
  }
}
