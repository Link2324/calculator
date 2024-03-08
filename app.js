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

let fistNumber;
let secondNumber;
let operator;   
let label = "";

function operate(num1, num2, operator) {
    switch (operator) {
        case '+': return add(num1, num2);

        case '-': return subtract(num1, num2);

        case "x": return multipy(num1, num2);

        case "/": return divide(num1, num2);
    }
}
