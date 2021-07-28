// Selectors
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");
const backspaceButton = document.querySelector(".backspace");
const upperScreen = document.querySelector(".upper-screen");
const lowerScreen = document.querySelector(".lower-screen");
const decimalButton = document.querySelector(".decimal")

upperScreen.innerText = "";
lowerScreen.innerText = "";
let upperScreenValue = "0";
let haveDecimal = false;
let setOperator = "null"

lowerScreen.innerText = "";

// Event Listeners
numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.innerText))
)

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.innerText))
)

backspaceButton.addEventListener('click', backspace);
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', solve);
decimalButton.addEventListener('click', appendDecimal);

// Functions
function add(x, y) {
    let solution = x + y;
    upperScreen.innerText = solution;
    upperScreenValue = solution;
    lowerScreen.innerText = "";
    return upperScreen.innerText;
    
}

function subtract(x, y) {
    let solution = x - y;
    upperScreen.innerText = solution;
    upperScreenValue = solution;
    lowerScreen.innerText = "";
    return upperScreen.innerText;
}

function multiply(x, y) {
    let solution = x * y;
    upperScreen.innerText = solution;
    upperScreenValue = solution;
    lowerScreen.innerText = "";
    return upperScreen.innerText;
}

function divide(x, y) {
    if (y === 0) {
        alert("Don't you dare!")
        clear();
    } else {
    let solution = x / y;
    upperScreen.innerText = solution;
    upperScreenValue = solution;
    lowerScreen.innerText = "";
    return upperScreen.innerText;
    }
}

function exponent(x, y) {
    let solution = Math.pow(x, y);
    upperScreen.innerText = solution;
    upperScreenValue = solution;
    lowerScreen.innerText = "";
    return upperScreen.innerText;
}

function backspace() {
    lowerScreen.innerText = lowerScreen.innerText
        .toString()
        .slice(0, -1);
}

function clear() {
    lowerScreen.innerText = "";
    upperScreen.innerText = "";
    upperScreenValue = 0;
    haveDecimal = false;
}

function setOperation(operator) {
    if (lowerScreen.innerText == "") {
        haveDecimal = false;
        appendOperator(operator)
    } else {

    let x = lowerScreen.innerText;
    upperScreen.innerText = x;
    upperScreenValue = upperScreen.innerText;
    setOperator = operator;
    lowerScreen.innerText = "";
    haveDecimal = false;
    appendOperator(operator);

    }
}

function solve() {
    let x = upperScreenValue;
    let y = lowerScreen.innerText;
    let operator = setOperator;
    operate(operator, x, y);
}

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
    case "+":
        return add(x, y);
        break;
    case "-":
         return subtract(x, y);
        break;
    case "*":
        return multiply(x, y);
        break;
    case "/": 
        return divide(x, y);
        break;
    case "^":
        return exponent(x, y);
        break;
    }
}

function appendNumber(number) {
    lowerScreen.innerText += number;
}

function appendOperator(operator) {
    upperScreen.innerText += " " + operator;
}

function appendDecimal() {
    if (haveDecimal == true) {
        return;
    } else {
        haveDecimal = true;
        lowerScreen.innerText += ".";
    }
}