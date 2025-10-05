const btnElement = document.querySelectorAll("[data-number]")
const operatorElement = document.querySelectorAll("[data-operator]")
const equalBtn = document.querySelector(".equal-btn")
const displayArea = document.querySelector(".display-area")
const clearBtn = document.querySelector(".clear-button")
const lastScreenDisplay = document.querySelector("#lastScreenDisplay")
const currentScreenDisplay = document.querySelector("#currentScreenDisplay")

let num1 = "";
let num2 = "";
let currentOperator = null;
let shouldResetDisplay = false;

btnElement.forEach((button) => {
    button.addEventListener("click", btnValue)
})

operatorElement.forEach((operator) => {
 operator.addEventListener("click", () => operatorValue(operator.textContent))
})

equalBtn.addEventListener("click", evaluate)

function btnValue(event){
 const buttonValue = event.target.textContent  
 if(currentScreenDisplay.textContent === '0' || shouldResetDisplay)
    resetScreen()
 currentScreenDisplay.textContent += buttonValue
}

function operatorValue(operator){
 if (currentOperator !== null) evaluate()
  num1 = currentScreenDisplay.textContent
  currentOperator = operator
  lastScreenDisplay.textContent = `${num1} ${currentOperator}`
  shouldResetScreen = true
}

function calculate(num1, currentOperator, num2){
   num1 = Number(num1)
   num2 = Number(num2)
  switch (currentOperator) {
    case '+':
      return add(num1, num2)
    case '-':
      return subtract(num1, num2)
    case '*':
      return multiply(num1, num2)
    case '/':
      if (num2 === 0) return null
      else return divide(num1, num2)
    default:
      return null
}
}

function evaluate(){
  if (currentOperator === null || shouldResetDisplay) return
  if (currentOperator === '÷' && currentScreenDisplay.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  num2 = currentScreenDisplay.textContent
  currentScreenDisplay.textContent = calculate(num1, currentOperator, num2)
  
  lastScreenDisplay.textContent = `${num1} ${currentOperator} ${num2} =`
  currentOperator = null
}
clearBtn.addEventListener("click", clear)
function clear(){
  num1 = ""
  num2 = ""  
  currentOperator = ""
  displayArea.textContent = ""
}

function resetScreen(){
  currentScreenDisplay.textContent = ''
  shouldResetDisplay = false
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