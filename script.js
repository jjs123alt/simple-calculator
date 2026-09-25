let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    if (num === '.' && expression.includes('.')) return;
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression === '') return;
    if (['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
        expression = expression.slice(0, -1);
    }
    expression += op;
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    display.value = '0';
}

function updateDisplay() {
    display.value = expression || '0';
}

function calculate() {
    try {
        if (expression === '') return;
        let result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}