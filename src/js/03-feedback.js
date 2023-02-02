const trottle = require('lodash.throttle');
//  працюючий новий мій склонований

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const KEY = 'feedback-form-state';
let data = {};

form.addEventListener('input', trottle(hendleCreateData, 500));
form.addEventListener('submit', hendleSaveData);

hendleTakeDataFromLS();

function hendleCreateData(event) {
  // console.log(target.name);
  // console.log(target.value);
  data[event.target.name] = event.target.value;

  localStorage.setItem(KEY, JSON.stringify(data));
}
// щоб всі рядки були заповнені при submit
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
//  заповнення полів форми при завантаженні сторінки
function hendleTakeDataFromLS() {
  const dataFromLS = JSON.parse(localStorage.getItem(KEY)) || '';

  if (!dataFromLS) {
    return;
  } else {
    data = dataFromLS;
    input.value = data.email || '';
    textarea.value = data.message || '';
  }
}
