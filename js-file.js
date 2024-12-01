const digits = document.querySelectorAll(".digits");
const displayButton = document.querySelector("#display");
const operateButton = document.querySelector("#operate");
const operators = document.querySelectorAll(".operators");
const clearButton = document.querySelector("#clear");

let firstNumber = null;
let secondNumber = null;
let selectedOperator = '';
let display = '';
//justOperated is to make it work right when you operate and next introduce a new number
let justOperated = false;

function add(a,b){
  return a + b;
}

function substract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function operate(operator, n1, n2){
  switch(operator){
    case "opAdd":
      return add(n1,n2);
    case "opSubstract":
      return substract(n1,n2);
    case "opMultiply":
      return multiply(n1,n2);
    case "opDivide":
      return divide(n1,n2);
    default: 
      alert("wrong operator");
  }
}

function updateDisplay(){
  displayButton.textContent = display;
}

function clearDisplay(){
  display = "";
}

function clearData(){
  firstNumber = null;
  secondNumber = null;
  selectedOperator = "";
}

//digits event listener
digits.forEach(digit => {
  digit.addEventListener("click", (event) =>{
    if (justOperated === true){
      clearDisplay();
      updateDisplay();
    }
    justOperated = false;
    let digit = event.target.id.at(1);
    display = display + digit.toString();
    updateDisplay();
  });
});

//operators event listener
operators.forEach(operator => {
  operator.addEventListener("click", (event) =>{
    if (event.target.localName !== "button")
      return;
    if (firstNumber !== null){
      operateButton.click();
    }
    firstNumber = parseInt(display);
    selectedOperator = event.target.id;
    clearDisplay();
  });
});

//operate event listener
operateButton.addEventListener("click", () => {
  secondNumber = parseInt(display);
  clearDisplay();
  display = operate(selectedOperator, firstNumber, secondNumber);
  updateDisplay();
  clearData();
  justOperated = true;
});

//clear event listener
clearButton.addEventListener("click", () => {
  clearData();
  clearDisplay();
  updateDisplay();
})
