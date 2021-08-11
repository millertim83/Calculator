let firstOperand = '';
let secondOperand = '';
let operator = ''
const clearButton = document.getElementById('clear-button');
const displayScreen = document.getElementById('display-screen');


clearButton.addEventListener('click', (e) => {
    displayScreen.textContent = '0';
    firstOperand = '';
    operator = '';
    secondOperand = ''
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
        }
    });
});

//Event Listener for decimal button
const decimal = document.getElementById('decimal-button')
.addEventListener('click', (e) => {
    if (!firstOperand) {
        firstOperand = '0' + firstOperand;
        displayScreen.textContent = firstOperand;
    }
    
    if(firstOperand) {
        firstOperand = firstOperand + '.';
        displayScreen.textContent = firstOperand; 
        
    } 

    /*if (firstOperand.indexOf('.') != -1) {
        //decimal.disabled = true;
    }
    */

    if (firstOperand && operator && !secondOperand) {
        secondOperand = '0' + secondOperand;
        displayScreen.textContent = secondOperand;
    }

    /*if secondOperand.indexOf('.') == -1 {
        secondOperand = secondOperand;
        displayScreen.textContent = secondOperand;
    }*/

    if(secondOperand && !decimal) {
        secondOperand = secondOperand + '.';
        displayScreen.textContent = secondOperand;
    }  



});

document.querySelectorAll('.operators')
.forEach(operatorButtons => {
    operatorButtons.addEventListener('click', (e) => {
        const selectedOperator = e.target.textContent;

        if (firstOperand) {
            operator = selectedOperator;
        }
        console.log(operator);

        //logic here for continuous functionality
        if (firstOperand && operator && secondOperand) {
            const result = calculateResult();
            displayScreen.textContent = result;
            firstOperand = result;
            //operator = selectedOperator;
            secondOperand = '';
            
        }
        
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
        case 'X':
            return multiply();
    }
}

function add() {
    return `${trimDecimal(parseFloat(firstOperand) + parseFloat(secondOperand))}`;
}

function subtract() {
    return `${trimDecimal(parseFloat(firstOperand) - parseFloat(secondOperand))}`;
}

function divide() {
    return `${trimDecimal(parseFloat(firstOperand) / parseFloat(secondOperand))}`;
}

function multiply() {
    return `${trimDecimal(parseFloat(firstOperand) * parseFloat(secondOperand))}`;
}
 
function trimDecimal(calculation) {
    if (Number.isInteger(calculation)) {
        return calculation;
    } else {
        return calculation.toFixed(3);
    }
}











