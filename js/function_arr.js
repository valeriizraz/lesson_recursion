'use strict';

const arr = [];

function recursFoo(arr) {
  const arrCopy = arr;

  const rand = Math.round(Math.random() * 10);
  arr.push(rand);

  const sum = arr.reduce((acc, curr) => acc += curr, 0);
  console.log(sum);

  if (sum < 50) {
    return recursFoo(arr);
  } else {
    return arrCopy;
  }
}

console.log(recursFoo(arr));

