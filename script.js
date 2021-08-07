let firstOperand = '';
let secondOperand = '';
let operator = ''
const clearButton = document.getElementById('clear-button');
const displayScreen = document.getElementById('display-screen');


clearButton.addEventListener('click', (e) => {
    displayScreen.textContent = '0';
    firstOperand = '';
})

document.querySelectorAll('.numbers')
.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        const number = numberButton.textContent;
        

        if (!operator) {
            firstOperand += number;
            displayScreen.textContent = firstOperand;
        }  

        if (firstOperand && operator) {
            secondOperand += number;
            displayScreen.textContent = secondOperand;
            //console.log('secondOperand', secondOperand);
        }
        
        //console.log('firstOperand', firstOperand);
        
    })
})

/* Event Listener for decimal button
document.querySelector('#decimal-button')
.addEventListener('click', (e) => {
    if(firstOperand) {
        
})
*/

document.querySelectorAll('.operators')
.forEach(operatorButtons => {
    operatorButtons.addEventListener('click', (e) => {
        const selectedOperator = e.target.textContent;

        if (firstOperand) {
            operator = selectedOperator;
        }
        console.log(operator);
        
    })
})

document.getElementById('equal-button')
.addEventListener('click', (e) => {
    if (firstOperand && operator && secondOperand) {
        const result = calculateResult();
        firstOperand = result;
        operator = '';
        secondOperand = '';
        displayScreen.textContent = result;
    }
})

function calculateResult () {
    switch (operator) {
        case '+': 
            return add();
        case '-':
            return subtract();
        case '/':
            return divide();
        case '*':
            return multiply();
    }
}

function add() {
    return `${Number(firstOperand) + Number(secondOperand)}`;
}

function subtract() {
    return `${Number(firstOperand) - Number(secondOperand)}`;
}

function divide() {
    return `${Number(firstOperand) / Number(secondOperand)}`;
}

function multiply() {
    return `${Number(firstOperand) * Number(secondOperand)}`;
}

//const displayScreen = document.getElementById('display-screen');







