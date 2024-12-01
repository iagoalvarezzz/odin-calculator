const digits = document.querySelector("#digits");
const displayElement = document.querySelector("#display");
const operateElement = document.querySelector("#operate");
const operators = document.querySelector("#operators");

let firstNumber = 0;
let secondNumber = 0;
let lastResult = 0;
let selectedOperator = '';
let display = '';

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
  displayElement.textContent = display;
}

function clearDisplay(){
  display = "";
}

digits.addEventListener("click", (event) =>{
  let digit = event.target.id.at(1);
  display = display + digit.toString();
  updateDisplay();
});

operators.addEventListener("click", (event) =>{
  firstNumber = parseInt(display);
  selectedOperator = event.target.id;
  clearDisplay();
});

operateElement.addEventListener("click", () => {
  secondNumber = parseInt(display);
  clearDisplay();
  lastResult = operate(selectedOperator, firstNumber, secondNumber);
  display = lastResult;
  selectedOperator = "";
  updateDisplay();
});

