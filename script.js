let firstOperand = "";
let secondOperand = "";
let operator = "";
const result = document.querySelector("#result");

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    if (firstOperand && secondOperand) {
      let newOperator = e.target.textContent;
      // console.log("newOperator: ", newOperator);
      continuos(newOperator);
    }
    if (firstOperand) {
      operator = e.target.textContent;
      // console.log("operator: ", operator);
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
      // console.log("firstOperand: ", firstOperand);
      result.textContent = firstOperand;
      document.querySelector("#reset-btn").textContent = "CE";
    }
    if (firstOperand && operator) {
      secondOperand += e.target.textContent;
      // console.log("secondOperand: ", secondOperand);
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
      // console.log(result.textContent);
      break;
    case "-":
      result.textContent = firstNumber - secondNumber;
      // console.log(result.textContent);
      break;
    case "X":
      result.textContent = firstNumber * secondNumber;
      // console.log(result.textContent);
      break;
    case "/":
      result.textContent = (firstNumber / secondNumber).toFixed(3);
      // console.log(result.textContent);
      break;
  }
  return result.textContent;
}

function continuos(newOperator) {
  firstOperand = calculate(operator);
  result.textContent = firstOperand;
  // console.log("firstOperand: ", firstOperand);
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

let addMemory = "";
let subMemory = "";
// const memoryButtons = document.querySelectorAll(".memory");
// memoryButtons.forEach((memoryButton) => {
//   memoryButton.addEventListener("click", (e) => {
//     e.preventDefault();
    // if(document.querySelector("#memory-save")){
    //   saveToMemory();
    // }
    // if(document.querySelector("#memory-clear")){
    //   subToMemory();
    // }
  
//   });
// });

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
})


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






// function saveToMemory() {
//   if (document.querySelector("#memory-save")) {
//     if (addMemory) {
//       let addMemory1 = result.textContent;
//       console.log("Memory_Store1: ", addMemory1);
//       addMemory = parseInt(addMemory) + parseInt(addMemory1);
//       console.log("Sum of M+: ", addMemory);
//     }
//     else {
//       addMemory = result.textContent;
//       console.log("FirstMemoryStore: ", addMemory);
//     }
//   }
// }


// function subToMemory(){
//   if (document.querySelector("#memory-clear")) {
//     if (subMemory) {
//       let subMemory1 = result.textContent;
//       console.log("Memory_Store1: ", subMemory1);
//       subMemory = parseInt(subMemory) + parseInt(subMemory1);
//       console.log("Sum of M+: ", subMemory);
//     }
//     else {
//       subMemory = result.textContent;
//       console.log("FirstMemoryStore: ", subMemory);
//     }
//   }
// }

























// document.querySelector("#memory-save").addEventListener("click", (e) => {
//   e.preventDefault();
//   // let value = 0;
//   if(result.textContent){
//     value = {
//       id: Date.now(),
//       saveValue: result.textContent
//     };
//     let memoryValue = JSON.parse(localStorage.getItem("value")) || [];
//     // value = parseInt(result.textContent) + parseInt(value);
//     memoryValue.push(value);
//     localStorage.setItem("value", JSON.stringify(value));
//   }
// });

// document.querySelector("#memory-clear").addEventListener("click", (e) => {
//   e.preventDefault();
//   localStorage.removeItem("value");
// });




















