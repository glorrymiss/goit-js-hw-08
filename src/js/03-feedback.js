const trottle = require('lodash.throttle');
//  працюючий новий мій склонований

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const KEY = 'feedback-form-state';
const data = {};

form.addEventListener('input', trottle(hendleCreateData, 500));
form.addEventListener('submit', hendleSaveData);

hendleTakeDataFromLS();

function hendleCreateData({ target }) {
  // console.log(target.name);
  // console.log(target.value);
  data[target.name] = target.value;

  console.log(data);
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
  const date = JSON.parse(localStorage.getItem(KEY)) || '';
  console.log(date);
  // console.log(savedData);
  if (!date) {
    return;
  } else {
    for (const key in date) {
      const element = date[key];
      console.log(key);
      console.log(element);
      if (key === 'email') {
        input.value = date[key];
      }
      if (key === 'message') {
        textarea.value = date[key];
      }
    }
    // input.value = date.email || '';
    // textarea.value = date.message || '';
  }
}
