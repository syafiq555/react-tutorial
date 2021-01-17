const inputEl = document.querySelector('#number');
const addButton = document.querySelector('#add');
const minusButton = document.querySelector('#minus');

const minus = () => {
  inputEl.value = +inputEl.value - 1;
};

const add = () => {
  inputEl.value = +inputEl.value + 1;
};

addButton.addEventListener('click', add);
minusButton.addEventListener('click', minus);
