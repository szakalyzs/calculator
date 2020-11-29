'use strict';

let opArray = [];
let mixStr = '';
const display = document.querySelector('.display');


(function topBtnHandler() {
    const operators = document.querySelectorAll('.top__btn');   
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', () => {
            opArray.push(operators[i].textContent);
            mixStr += operators[i].textContent;
            display.textContent += operators[i].textContent;
            console.log(opArray);
        })
    }
})();

(function leftBtnHandler() {
    const numbers = document.querySelectorAll('.left__btn');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            mixStr += numbers[i].textContent;
            display.textContent += numbers[i].textContent;
            console.log(mixStr);
        })
    }
})();

(function rightBtnHandler() {
    const equal = document.querySelector('.right__btn');
    equal.addEventListener('click', () => {
        display.textContent += equal.textContent;
    })
})();

(function clearBtnHandler() {
    const clear = document.querySelector('.btn--clear');
    clear.addEventListener('click', () => {
        display.textContent = '\xa0';
        opArray = [];
        mixStr = '';
    })
})();