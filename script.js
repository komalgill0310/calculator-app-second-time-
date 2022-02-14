let firstOperand = "";
let secondOperand = "";
let operator = "";
const result = document.querySelector("#result");

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    if(firstOperand){
      operator = e.target.textContent;
      console.log("operator: ", operator);
      result.value = e.target.textContent;
    }   
  });
});

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    if(!operator){
      firstOperand = e.target.textContent;
      console.log("firstOperand: ", firstOperand);
      result.textContent = firstOperand;
    }
    if(firstOperand && operator){
      secondOperand = e.target.textContent;
      console.log("secondOperand: ", secondOperand);
      result.textContent = secondOperand;
    }
  });
});

