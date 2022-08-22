function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amount = 0;
let divColl = [];

const numberRef = document.querySelector('input');
const createRef = document.querySelector('button[data-create]');
const destroyRef = document.querySelector('button[data-destroy]');
const boxesRef = document.querySelector('#boxes');
numberRef.addEventListener('input', onClickToggleGetValue);
createRef.addEventListener('click', onClickBtnCreateMarkup);
destroyRef.addEventListener('click', onClickBtnDestroyMarkup);

function onClickToggleGetValue({ currentTarget }) {
  amount = currentTarget.value;
}
let i = 0;
function onClickBtnCreateMarkup() {
  if (divColl.length > 0) {
    let i = divColl[divColl.length - 1];
  }

  console.log(divColl.length);
  console.log(divColl[divColl.length - 1]);
  console.log(i);
  for (; i < amount * 10; i += 10) {
    const divEl = document.createElement('div');
    let widthDefault = 30 + i;
    let heightDefault = 30 + i;

    divEl.style.width = widthDefault + 'px';
    divEl.style.height = heightDefault + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    console.log(divEl);

    divColl.push(divEl);
    console.log(divColl.length - 1);
    console.log(i);
  }
  boxesRef.append(...divColl);
}

function onClickBtnDestroyMarkup() {
  boxesRef.innerHTML = '';
}
