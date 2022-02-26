let firstOperand = "";
let secondOperand = "";
let operator = "";
let addToMemory = "";
let subToMemory = "";
let memoryRecall = "";
const result = document.querySelector("#result");

document.querySelector("#equal-btn").addEventListener("click", (e) => {
  e.preventDefault();
  calculate(operator);
  if (firstOperand && secondOperand && operator) {
    firstOperand = "";
    secondOperand = "";
    operator = "";
  }
});

function calculate(operator) {
  let firstNumber = parseFloat(firstOperand);
  let secondNumber = parseFloat(secondOperand);
  switch (operator) {
    case "+":
      result.textContent = firstNumber + secondNumber;
      break;
    case "-":
      result.textContent = firstNumber - secondNumber;
      break;
    case "x":
      result.textContent = firstNumber * secondNumber;
      break;
    default:
      result.textContent = (firstNumber % secondNumber) === 0 ? (firstNumber / secondNumber) : (firstNumber / secondNumber).toFixed(3);
      break;
  }
  return result.textContent;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    if (!operator) {
      firstOperand += e.target.textContent;
      result.textContent = firstOperand;
      document.querySelector("#reset-btn").textContent = "CE";
    }
    if (firstOperand && operator) {
      secondOperand += e.target.textContent;
      result.textContent = secondOperand;
    }
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstOperand && secondOperand) {
      let newOperator = e.target.textContent;
      continuousOperation(newOperator);
    }
    if (firstOperand) {
      operator = e.target.textContent;
    }
  });
});


function continuousOperation(newOperator) {
  firstOperand = calculate(operator);
  result.textContent = firstOperand;
  secondOperand = "";
  operator = newOperator;
}

document.querySelector("#reset-btn").addEventListener("click", (e) => {
  e.preventDefault();
  result.textContent = 0;
  document.querySelector("#reset-btn").textContent = "AC";
  if (firstOperand || operator || secondOperand) {
    firstOperand = "";
    operator = "";
    secondOperand = "";
  }
});

document.querySelector("#memory-plus").addEventListener("click", (e) => {
  e.preventDefault();
  if (addToMemory) {
    let addToMemory1 = result.textContent;
    addToMemory = parseInt(addToMemory) + parseInt(addToMemory1);
  }
  else {
    addToMemory = result.textContent;
  }
});

document.querySelector("#memory-minus").addEventListener("click", (e) => {
  e.preventDefault();
  if (subToMemory) {
    let subToMemory1 = result.textContent;
    subToMemory = parseInt(subToMemory) + parseInt(subToMemory1);
  }
  else {
    subToMemory = result.textContent;
  }
});

document.querySelector("#memory-recall").addEventListener("click", (e) => {
  e.preventDefault();
  memoryRecall = addToMemory - subToMemory;
  result.textContent = memoryRecall;
  if (firstOperand && operator) {
    secondOperand = memoryRecall;
    result.textContent = secondOperand;
  }
  if (!firstOperand) {
    firstOperand = memoryRecall;
    result.textContent = firstOperand;
  }
});

document.querySelector("#memory-clear").addEventListener("click", (e) => {
  e.preventDefault();
  memoryRecall = "";
  if (addToMemory || subToMemory) {
    addToMemory = "";
    subToMemory = "";
  }
});




















