//business logic
function add(number1, number2) {
  return number1 + number2;
}
function sub(number1, number2) {
  return number1 - number2;
}
function multi(number1, number2) {
  return number1 * number2;
}
function div(number1, number2) {
  return number1 / number2;
}

//user interface logic
let number1 = parseInt(prompt("Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));


window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + ", " + number1 + " - " + number2 + " = " + sub(number1, number2) + ", " + number1 + " * " + number2 + " = " + multi(number1, number2) + ", " + number1 + " / " + number2 + " = " + div(number1, number2) + ".");