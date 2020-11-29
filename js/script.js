'use strict';

let opArray = [];
let mixStr = '';
let numArray = [];
let result = 0;
const display = document.querySelector('.display');


(function topBtnHandler() {
    const operators = document.querySelectorAll('.top__btn');   
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', () => {
            opArray.push(operators[i].textContent);
            mixStr += operators[i].textContent;
            display.textContent += operators[i].textContent;
        })
    }
})();

(function leftBtnHandler() {
    const numbers = document.querySelectorAll('.left__btn');
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', () => {
            mixStr += numbers[i].textContent;
            display.textContent += numbers[i].textContent;
        })
    }
})();

function numFilter() {
    numArray = mixStr.split(/[÷\-×+]+/);
    numArray = numArray.map(item => parseFloat(item));
}

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;


function calculate() {

    let temp = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (opArray[i-1] == '+') {
            temp = sum(temp, numArray[i]);
        }
        if (opArray[i-1] == '-') {
            temp = sub(temp, numArray[i]);
        }
        if (opArray[i-1] == '×') {
            temp = mult(temp, numArray[i]);
        }
        if (opArray[i-1] == '÷') {
            temp = div(temp, numArray[i]);
        }
    }
    return temp;
}

(function rightBtnHandler() {
    const equal = document.querySelector('.right__btn');
    equal.addEventListener('click', () => {
        display.textContent += equal.textContent;
        numFilter();
        if(opArray.length == numArray.length-1 && !isNaN(numArray[0]) && !isNaN(numArray[numArray.length-1])) {
            result = calculate();
            display.textContent = result;
            mixStr = '' + result;
        } else {
            display.textContent = 'ERROR';
            mixStr = '';
        }
        opArray = [];
        numArray = [];
    })
})();

(function clearBtnHandler() {
    const clear = document.querySelector('.btn--clear');
    clear.addEventListener('click', () => {
        display.textContent = '\xa0';
        opArray = [];
        mixStr = '';
        numArray = [];
    })
})();

