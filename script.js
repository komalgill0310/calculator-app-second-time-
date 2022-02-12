// const inputValue = document.querySelector("#result");
const operands = document.querySelectorAll(".operand-container");
operands.forEach(function (operand) {
  operand.addEventListener("click", (e) => {
    e.preventDefault();
    inputValue.value = e.target.value;
  });
});

const operators = document.querySelectorAll(".operator-container");
operators.forEach(function (operator) {
  operator.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#result").value = e.target.value;
  });
});

document.querySelector("#equal-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // add();
});



// experiment#1: 
// 1. get the input element and store that element in a global variable
// const inputValue = document.querySelector("#result");
// 2. define a funtion showOperands and store the logic of displaying operand in input box when click on number button
  // 2.1 return input.value from showOperands function
// function showoperands() {
//   operands.forEach(function (operand) {
//     operand.addEventListener("click", (e) => {
//       e.preventDefault();
//       inputValue.value = e.target.value;
//     });
//   });
//   return inputValue.value;
// }
//4. create function add
  //4.1 call showOperands function and perform the add operation and display that value in console.log
//ERROR: Based on this logic: the inputValue gets updated, when user click on the operand button the second time. 
//Expectation: e.g.: function add(){
//  x = showoperands(); //user enters 2 => x = 2
//  y = showoperands(); //user enters 1 => y = 1
//   console.log(x); // 2
//   console.log(y); //1
  // console.log(parseInt(x)+parseInt(y)); => 3
// }
//Actual: e.g.: function add(){
//  x = showoperands(); //user enters 2 => x = 2
//  y = showoperands(); //user enters 1 => y = 1
//   console.log(x); // 1
//   console.log(y); //1
  // console.log(parseInt(x)+parseInt(y)); => 2
// }











