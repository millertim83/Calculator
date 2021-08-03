const displayScreen = document.getElementById('display-screen');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', (e) => {
    displayScreen.textContent = "0";
})

button1.addEventListener('click', (e) => {
    displayScreen.textContent = "1";
})

button2.addEventListener('click', (e) => {
    displayScreen.textContent = "2";
})

button3.addEventListener('click', (e) => {
    displayScreen.textContent = "3";
})

button4.addEventListener('click', (e) => {
    displayScreen.textContent = "4";
})

button5.addEventListener('click', (e) => {
    displayScreen.textContent = "5";
})

button6.addEventListener('click', (e) => {
    displayScreen.textContent = "6";
})

button7.addEventListener('click', (e) => {
    displayScreen.textContent = "7";
})

button8.addEventListener('click', (e) => {
    displayScreen.textContent = "8";
})

button9.addEventListener('click', (e) => {
    displayScreen.textContent = "9";
})
