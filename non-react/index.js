const inputEl = document.querySelector('#number');

const minus = () => {
  inputEl.value = +inputEl.value - 1;
};

const add = () => {
  inputEl.value = +inputEl.value + 1;
};
