import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onFormElSubmit);

const data = {};

if (localStorage.getItem(STORAGE_KEY)) {
  const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const { email = '', message = '' } = localStorageData;

  inputEl.value = email;
  textAreaEl.value = message;

  data.email = email;
  data.message = message;
}

function onFormElInput(evt) {
  data[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onFormElSubmit(evt) {
  evt.preventDefault();

  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(data);
}