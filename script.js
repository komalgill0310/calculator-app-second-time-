let firstOperand = "";
let secondOperand = "";
let operator = "";
const result = document.querySelector("#result");

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstOperand) {
      operator = e.target.textContent;
      console.log("operator: ", operator);
      result.textContent = e.target.textContent;
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
  calculate();
})

function calculate() {
  let firstNumber = parseFloat(firstOperand);
  let secondNumber = parseFloat(secondOperand);
  switch (operator) {
    case "+":
      result.textContent = firstNumber + secondNumber;
      console.log(result.textContent);
      break;
    case "-":
      result.textContent = firstNumber - secondNumber;
      console.log(result.textContent);
      break;
    case "X":
      result.textContent = firstNumber * secondNumber;
      console.log(result.textContent);
      break;
    default:
      result.textContent = firstNumber / secondNumber;
      console.log(result.textContent);
      break;
  }
}

// document.querySelector("#reset-btn").addEventListener("click", (e) => {
//   e.preventDefault();
//   result.textContent = "0";
// });
