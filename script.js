let firstOperand = "";
let secondOperand = "";
let operator = "";
// let operator1 = "";
const result = document.querySelector("#result");

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    if(firstOperand && secondOperand){
      // let newOperator = e.target.textContent;
      let newOperator = e.target.textContent;
      console.log("newOperator: ", newOperator);
      // result.textContent = newOperator;
      continuos(newOperator);
    }

    if (firstOperand) {
      // else{
      operator = e.target.textContent;
      console.log("operator: ", operator);
      // result.textContent = e.target.textContent;
    }
    // if(firstOperand && operator){

    // }
    // if(firstOperand && secondOperand){
    //   let newOperator = e.target.textContent;
    //   console.log("newOperator: ", newOperator);
    //   // continuos(e);
    // }
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
  calculate(operator);
})

function calculate(operator) {
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
    case "/":
      result.textContent = firstNumber / secondNumber;
      console.log(result.textContent);
      break;
  }
  // firstOperand = "";
  // secondOperand = "";
  // operator = "";
  return result.textContent;
}

function continuos(newOperator){
firstOperand = calculate(operator);
result.textContent = firstOperand;
console.log(result.textContent);
console.log("firstOperand: ", firstOperand);
secondOperand = "";
operator = newOperator;
// console.log("Continuous Operator: ", operator);
}


// document.querySelector("#reset-btn").addEventListener("click", (e) => {
//   e.preventDefault();
  // firstOperand = 0;
  // // secondOperand = 0;
  // operator = 0;
// result.textContent = 0;
// console.log(result.textContent);
// document.querySelector("#result").reset();


  // let newResult = {
  //   firstOperand: 0,
  //   secondOperand: 0,
  //   operator: 0
  // };
  // return newResult;
  // firstOperand = "";
  // secondOperand = "";
  // operator = "";
// });
