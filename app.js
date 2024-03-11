"use strict"

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multipy(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber = NaN;
let secondNumber = NaN;
let operator = '';
let label = "";

function operate(num1, num2, operator) {
    switch (operator) {
        case '+': return add(num1, num2);

        case '-': return subtract(num1, num2);

        case "x": return multipy(num1, num2);

        case "/": return divide(num1, num2);
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelector('.button-container');
const equalButton = document.querySelector('#equal');

const displayText = document.createElement('p');
display.appendChild(displayText);

if (!buttons) {
    console.log("Unable to find button container");
}

buttons.addEventListener('click', (e) => {
    const target = e.target;

    switch (target.id) {
        case '1':
            label += '1';
            break;

        case '2':
            label += '2';
            break;

        case '3':
            label += '3';
            break;
        case '4':
            label += '4';
            break;

        case '5':
            label += '5';
            break;

        case '6':
            label += '6';
            break;

        case '7':
            label += '7';
            break;

        case '8':
            label += '8';
            break;

        case '9':
            label += '9';
            break;

        case '0':
            label += '0';
            break;

        case '.':
            if (operator === '' && !label.includes('.')) {
                label += '.';
            }
            if (operator !== '' && !label.split(operator)[1].includes('.')) {
                label += '.';
            }
            break;

        case 'clear':
            reset();
            break;

        case 'backspace':
            if (['x', '-', '+', '/'].includes(label[label.length - 1])) {
                operator = '';
            }
            label = label.substring(0, label.length - 1);
            break;

        case 'minus':
            equalButton.click();
            if (operator !== '' || label === '') {
                break;
            }
            operator = '-';
            label += operator;
            break

        case 'plus':
            equalButton.click();
            if (operator !== '' || label === '') {
                break;
            }
            operator = '+';
            label += operator;
            break


        case 'divide':
            equalButton.click();
            if (operator !== '' || label === '') {
                break;
            }
            operator = '/';
            label += operator;
            break

        case 'multiply':
            equalButton.click();
            if (operator !== '' || label === '') {
                break;
            }
            operator = 'x';
            label += operator;
            break
    }

    displayText.textContent = label;
})

equalButton.addEventListener('click', (e) => {
    if (label === '') {
        console.log("Empty Expression!")
        return;
    }

    let isNegative = false;
    if (label[0] === '-' && operator === '-') {
        isNegative = true;
        label = label.slice(1);
    }

    const parse = label.split(operator);

    if (parse.length !== 2) {
        return;
    }

    if (parse[0] === '' || parse[1] === '' || operator === '') {
        return;
    }

    firstNumber = Number(parse[0]);
    secondNumber = Number(parse[1]);

    if (secondNumber === 0 && operator === '/') {
        alert("Can't divide by Zero!");
        return;
    }

    let result;
    if (isNegative) {
        result = operate(-firstNumber, secondNumber, operator);
    } else {
        result = operate(firstNumber, secondNumber, operator);
    }

    label = Math.round(result * 100) / 100;

    operator = '';
    displayText.textContent = label;
})

function reset() {
    label = '';
    firstNumber = NaN;
    secondNumber = NaN;
    operator = '';
}
