'use strict';

const numList = document.querySelector('.whod');
const btnStart = document.querySelector('.start');
const result = document.querySelector('.first__result')
const btnCopy = document.querySelector('.copy');

btnStart.addEventListener('click', () => {
  let num = +numList.value;

function calkNum(num) {
  let resultOne = [];
  for (let i = 0; i < num + 1; i++) {
    if (i % 2 !== 0) {
      resultOne.push(i)
    }
  }
  return resultOne;
}


let resultOne = calkNum(num);

function calkList(num) {
  return num.join(',');
}

 let res = calkList(resultOne)
result.textContent = res;
});




// let num = 48;

// function calkNum(num) {
//   let resultOne = [];
//   for (let i = 0; i < num; i++) {
//     if (i % 2 !== 0) {
//       resultOne.push(i)
//     }
//   }
//   return resultOne;
// }


// let resultOne = calkNum(num);

// function calkList(num) {
//   num.splice(0, 2, '1 - 3');
//   return num.join(',');
// }

// console.log(calkList(resultOne));

