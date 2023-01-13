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
itemPressed.textContent = "0";

// Functionality for numbers
const btns = document.querySelectorAll('.buttons.number');
const special = "0+-*/";
btns.forEach(btn => btn.addEventListener('click', () => {
    if (special.indexOf(itemPressed.textContent) === -1)
        itemPressed.textContent += btn.textContent;
    else
        itemPressed.textContent = btn.textContent
}));

// Functionality for "C"
const clear = document.getElementById('C');
clear.addEventListener('click', () => {
    itemPressed.textContent = '0';
});

// Functionality for operators
const operators = document.querySelectorAll('.buttons.operators');
operators.forEach(operator => operator.addEventListener('click', () => {
    if (operator.textContent === "+") 
        itemPressed.textContent = "+";
    else if (operator.textContent=== "-") 
        itemPressed.textContent = "-";
    else if (operator.textContent === "*") 
        itemPressed.textContent = "*";
    else if (operator.textContent === "/") 
        itemPressed.textContent = "/";
}));

// Functionality for special operators
const inverse = document.getElementById('inverse');
inverse.addEventListener('click', () => {
    itemPressed.textContent = 1/parseFloat(itemPressed.textContent);
});

const square = document.getElementById('square');
square.addEventListener('click', () => {
    itemPressed.textContent = Math.pow(parseFloat(itemPressed.textContent), 2);
});

const root = document.getElementById('root');
root.addEventListener('click', () => {
    itemPressed.textContent = Math.sqrt(parseFloat(itemPressed.textContent));
});

const squareY = document.getElementById('squareY');
squareY.addEventListener('click', () => {
    itemPressed.textContent = 'x*y';
});