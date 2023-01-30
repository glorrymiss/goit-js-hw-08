const trottle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
let data = {};
const KEY = 'feedback-form-state';

form.addEventListener('input', trottle(hendleTakeData, 500));
form.addEventListener('submit', hendleSaveData);

//   при перезавантаженні сторінки
const returnData = JSON.parse(localStorage.getItem(KEY));
textarea.value = returnData.message || '';
input.value = returnData.email || '';
//  введення та зберігання в local memory
function hendleTakeData({ target }) {
  data[target.name] = target.value;
  console.log(data);
  const dataValue = JSON.stringify(data);
  localStorage.setItem(KEY, dataValue);
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
