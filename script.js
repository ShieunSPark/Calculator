// Operator functions
const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

// Determine which operator to use
const operate = (operator, num1, num2) => {
    if (operator === "+") 
        return add(num1, num2);
    else if (operator === "-") 
        return subtract(num1, num2);
    else if (operator === "*") 
        return multiply(num1, num2);
    else if (operator === "/") 
        return divide(num1, num2);
}

// Track text on calculator
const itemPressed = document.getElementById('input');

// Functionality for numbers
const btns = document.querySelectorAll('.buttons.number');
btns.forEach(btn => btn.addEventListener('click', () => {
    itemPressed.textContent += btn.textContent;
}));

// Functionality for "C"
const clear = document.getElementById('C');
clear.addEventListener('click', () => {
    itemPressed.textContent = '';
});