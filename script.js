'use strict'


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


function start(){
const randomNumber = getRandomInt(100);

return function randomBot() {
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
      else if(realNum < randomNumber) {
        alert('Загаданное число больше');
        randomBot();
      }else {
        alert('вы угадали!');
        return;
      }
  } else {
    alert('Введите число');
    randomBot();
  }
}
}

let randomBot = start();
randomBot();