const trottle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
console.log(form);

let data = {};
const KEY = 'feedback-form-state';

form.addEventListener('input', trottle(hendleTakeData, 500));
form.addEventListener('submit', hendleSaveData);

function hendleTakeData(event) {
  data[event.target.name] = event.target.value;
  const dataValue = JSON.stringify(data);
  localStorage.setItem(KEY, dataValue);
  loadingPage();
}
//   при перезавантаженні сторінки
function loadingPage() {
  if (localStorage.getItem(KEY)) {
    input === JSON.parse(localStorage.getItem(KEY) || '');
    message === JSON.parse(localStorage.getItem(KEY) || '');
  }
}

function hendleSaveData(event) {
  event.preventDefault();
  if (input.value === '' || message.value === '') {
    alert(`Всі поля мають бути заповнені`);
  } else {
    event.currentTarget.reset();
    console.log(localStorage.getItem(KEY));
    localStorage.removeItem(KEY);
  }
}
