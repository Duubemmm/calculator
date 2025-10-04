const btnElement = document.querySelectorAll("[data-number]")
const operatorElement = document.querySelectorAll("[data-operator]")
const equalBtn = document.querySelector(".equal-btn")
const displayArea = document.querySelector(".display-area")

let num1 = "";
let num2 = "";
let operator = "";

btnElement.forEach((button) => {
    button.addEventListener("click", btnValue)
})

operatorElement.forEach((operator) => {
 operator.addEventListener("click", operatorValue)
})

equalBtn.addEventListener("click", calculate)

function btnValue(event){
 const button = event.target
 displayArea.textContent += button.textContent;
}

function operatorValue(event){
 const operatorButton = event.target;
 displayArea.textContent += operatorButton.textContent;
}

function calculate(num1, num2, operator){
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }

}

function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
 return num1- num2
}

function multiply(num1,num2){
     return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}
