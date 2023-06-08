// business logic
function add(number1, number2) {
  return number1 + number2;
}

function multiply(number3, number4) {
  return number3 * number4;
}

// user interface logic 
const number1 = parseInt(prompt("We are doing an equation for addition. Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));

const number3 = parseInt(prompt("Now we are doing an equation for multiplcation. Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));

window.alert(multiply(number3, number4));