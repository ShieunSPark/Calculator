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
const display = document.getElementById('display');
display.textContent = "0";

// Track inputs that show up on display
let oldNum = 0;
let newNum = 0;

// Functionality for numbers
const btns = document.querySelectorAll('.buttons.number');
const special = "0+-*/";
btns.forEach(btn => btn.addEventListener('click', () => {
    if (special.indexOf(display.textContent) === -1)
        display.textContent += btn.textContent;
    else
        display.textContent = btn.textContent
    
    // Reset operator button's color if one was pressed
    operators.forEach(operator => operator.style.background = "#f0f0f0");
}));

// Functionality for "C"
const clear = document.getElementById('C');
clear.addEventListener('click', () => {
    display.textContent = '0';
});

// Functionality for operators
const operators = document.querySelectorAll('.buttons.operators');
operators.forEach(operator => operator.addEventListener('click', () => {
    // Store original input 
    oldNum = parseFloat(display.textContent);

    operator.style.background = "gold";
    if (operator.textContent === "+") 
        display.textContent = "+";
    else if (operator.textContent=== "-") 
        display.textContent = "-";
    else if (operator.textContent === "*") 
        display.textContent = "*";
    else if (operator.textContent === "/") 
        display.textContent = "/";
}));

// Functionality for special operators
const inverse = document.getElementById('inverse');
inverse.addEventListener('click', () => {
    display.textContent = 1/parseFloat(display.textContent);
});

const square = document.getElementById('square');
square.addEventListener('click', () => {
    display.textContent = Math.pow(parseFloat(display.textContent), 2);
});

const root = document.getElementById('root');
root.addEventListener('click', () => {
    display.textContent = Math.sqrt(parseFloat(display.textContent));
});

const squareY = document.getElementById('squareY');
squareY.addEventListener('click', () => {
    display.textContent = 'x*y';
});