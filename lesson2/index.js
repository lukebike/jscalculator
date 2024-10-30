window.alert("Welcome to my calculator!");

let numberOne = prompt("Please enter a number");
let numberTwo = prompt("Please another another number");
let operator = prompt(
  "Please enter an operator. Only the following are available: +, -, *, /"
);

if (operator == "+") {
  let sum = Number(numberOne) + Number(numberTwo);
  window.alert("The sum is " + sum);
}

if (operator == "-") {
  let sum = Number(numberOne) - Number(numberTwo);
  window.alert("The sum is " + sum);
}

if (operator == "*") {
  let sum = Number(numberOne) * Number(numberTwo);
  window.alert("The sum is " + sum);
}

if (operator == "/") {
  let sum = Number(numberOne) * Number(numberTwo);
  window.alert("The sum is " + sum);
}

if (
  (isNaN(numberOne) && isNaN(numberTwo)) ||
  isNaN(numberOne) ||
  isNan(numberTwo)
) {
  window.alert("This is not a number, please try again.");
}

window.alert("Thanks for calculating, goodbye!");
