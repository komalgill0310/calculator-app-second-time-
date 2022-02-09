const operands = document.querySelectorAll(".operand-container");
operands.forEach(function(operand) {
  operand.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#result").value = e.target.value;
 });
});

const operators = document.querySelectorAll(".operator-container");
operators.forEach(function(operator) {
operator.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#result").value = e.target.value;
});
});


