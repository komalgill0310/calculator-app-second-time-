let firstOperand = "";
let secondOperand = "";
let operator = "";
let addMemory = "";
let subMemory = "";
let outputMemory = "";
const result = document.querySelector("#result");

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstOperand && secondOperand) {
      let newOperator = e.target.textContent;
      continuos(newOperator);
    }
    if (firstOperand) {
      operator = e.target.textContent;
      // result.textContent = e.target.textContent;
    }
  });
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    if (!operator) {
      firstOperand += e.target.textContent;
      console.log("firstOperand: ", firstOperand);
      result.textContent = firstOperand;
      document.querySelector("#reset-btn").textContent = "CE";
    }
    if (firstOperand && operator) {
      secondOperand += e.target.textContent;
      console.log("secondOperand: ", secondOperand);
      result.textContent = secondOperand;
    }
  });
});

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
    case "X":
      result.textContent = firstNumber * secondNumber;
      break;
    case "/":
      result.textContent = (firstNumber % secondNumber) === 0 ? (firstNumber / secondNumber) : (firstNumber / secondNumber).toFixed(3);
      break;
  }
  return result.textContent;
}

function continuos(newOperator) {
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

document.querySelector("#memory-save").addEventListener("click", (e) => {
  e.preventDefault();
  if (addMemory) {
    let addMemory1 = result.textContent;
    console.log("Memory_Store1: ", addMemory1);
    addMemory = parseInt(addMemory) + parseInt(addMemory1);
    console.log("Sum of M+: ", addMemory);
  }
  else {
    addMemory = result.textContent;
    console.log("FirstMemoryStore: ", addMemory);
  }
});

document.querySelector("#memory-clear").addEventListener("click", (e) => {
  e.preventDefault();
  if (subMemory) {
    let subMemory1 = result.textContent;
    console.log("Memory_Store1: ", subMemory1);
    subMemory = parseInt(subMemory) + parseInt(subMemory1);
    console.log("Sum of M+: ", subMemory);
  }
  else {
    subMemory = result.textContent;
    console.log("FirstMemoryStore: ", subMemory);
  }
});

document.querySelector("#memory-recall").addEventListener("click", (e) => {
  e.preventDefault();
  outputMemory = addMemory - subMemory;
  result.textContent = outputMemory;
  console.log("MR: ", result.textContent);
  if (firstOperand && operator) {
    secondOperand = outputMemory;
    result.textContent = secondOperand;
    console.log("MR SecondOperand: ", result.textContent);
  }
  if (!firstOperand) {
    firstOperand = outputMemory;
    result.textContent = firstOperand;
    console.log("MR FirstOperand: ", result.textContent);
  }
});

document.querySelector("#memory-refresh").addEventListener("click", (e) => {
  e.preventDefault();
  outputMemory = "";
  console.log("MC: ", outputMemory);
  if (addMemory || subMemory) {
    addMemory = "";
    subMemory = "";
  }
});




















