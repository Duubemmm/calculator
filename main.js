//Get the DOM elements
const btnElement = document.querySelectorAll("[data-number]")
const operatorElement = document.querySelectorAll("[data-operator]")
const equalBtn = document.querySelector(".equal-btn")
const displayArea = document.querySelector(".display-area")
const clearBtn = document.querySelector(".clear-button")
const lastScreenDisplay = document.querySelector("#lastScreenDisplay")
const currentScreenDisplay = document.querySelector("#currentScreenDisplay")
const pointBtn = document.querySelector(".point-button")
const deleteBtn = document.querySelector(".delete-button")

//Initialize the variables
let num1 = "";
let num2 = "";
let currentOperator = null;
let shouldResetDisplay = false;

//Add event listeners to the DOM elements
btnElement.forEach((button) => {
    button.addEventListener("click", () => btnValue(button.textContent))
})

operatorElement.forEach((operator) => {
 operator.addEventListener("click", () => operatorValue(operator.textContent))
})

equalBtn.addEventListener("click", evaluate)
pointBtn.addEventListener("click", pointFn)
deleteBtn.addEventListener("click", deleteFn)

function btnValue(num){ 
 if(currentScreenDisplay.textContent === '0' || shouldResetDisplay)
    resetDisplay()
 currentScreenDisplay.textContent += num
}

function operatorValue(operator){
 if (currentOperator !== null) evaluate()
  num1 = currentScreenDisplay.textContent
  currentOperator = operator
  lastScreenDisplay.textContent = `${num1} ${currentOperator}`
  shouldResetDisplay = true
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
  if (currentOperator === '/' && currentScreenDisplay.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  num2 = currentScreenDisplay.textContent
  currentScreenDisplay.textContent = roundResult(calculate(num1, currentOperator, num2))
  
  lastScreenDisplay.textContent = `${num1} ${currentOperator} ${num2} =`
  currentOperator = null
}

clearBtn.addEventListener("click", clear)

function clear(){
  currentScreenDisplay.textContent = '0'
  lastScreenDisplay.textContent = ''
  num1 = ''
  num2 = ''
  currentOperator = null
}

function resetDisplay(){
  currentScreenDisplay.textContent = ''
  shouldResetDisplay = false
}

function pointFn(){
  if (shouldResetDisplay) resetDisplay()
  if (currentScreenDisplay.textContent === '')
    currentScreenDisplay.textContent = '0'
  if (currentScreenDisplay.textContent.includes('.')) return
  currentScreenDisplay.textContent += '.'
}

function deleteFn(){
  currentScreenDisplay.textContent = currentScreenDisplay.textContent
    .toString()
    .slice(0, -1)
}

function roundResult(num) {
  return Math.round(num * 1000) / 1000
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