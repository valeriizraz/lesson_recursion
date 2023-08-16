'use strict';

const numMin = 3;
const numMax = 15;

const sum = numMax - numMin;
console.log(sum);

const numberOfTimes = Math.floor(sum * 0.3);
console.log(`количество попыток: ${numberOfTimes}`);

const rand = Math.round(Math.random() * (numMax - numMin) + numMin);
console.log(`random: ${rand}`);

const arrNumbers = [];

function foo(quant) {
  let number = +prompt('Угадайте число');
  
  const revis = (num) => {
    for (const elem of arrNumbers) {
      if (number === elem) {
        console.log(elem);
        return elem;
      };
    };
  };
  revis(arrNumbers);
  const resRevis = revis(number, arrNumbers);
  console.log(`Номер пользователя ${number}`);

  if (resRevis) {
    console.log('Это число вы вводили, введите другое');
    quant++;
  };
  
  if (number > rand) {
    console.log('Больше');
  };
  
  if (number < rand) {
    console.log('Меньше');
  };
  
  if (number === rand) {
    console.log('Верно! Игра окончена, Вы победили!');
    quant = 1;
  };
  
  if (Number.isNaN(number) || !(Number.isFinite(number)) ||
    !(Number.isInteger(number))) {
    console.log('Не допускается вводить буквы и дробные числа!');
    quant++;
  } else {
    console.log('Другая ситуация');
  };

  arrNumbers.push(number);
  console.log(arrNumbers);

  if (quant === 1) {
    return arrNumbers;
  } else {
    return foo(quant - 1);
  };
};

foo(numberOfTimes);
