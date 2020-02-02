'use strict'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const randomNumber = getRandomInt(100);
console.log(randomNumber);

function randomBot() {
  const num = prompt('Угадай число от 1 до 100');

  if (num === null) {
    alert('До свидания');
    return;
  }

  if (isNum(num)) {
    const realNum = +num;

    if (realNum > randomNumber) {
      alert('Загаданное число меньше');
      randomBot();
    }
    if (realNum < randomNumber) {
      alert('Загаданное число бльше');
      randomBot();
    }else {
      alert('вы угадали!');
    }
  } else {
    alert('Введите число');
    randomBot();
  }
}

randomBot();