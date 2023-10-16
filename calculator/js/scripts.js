//business logic
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}
function divide(number1, number2){
    return number1 / number2; 
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
const result2 = subtract(number1, number2);
const result3 = multiply(number1, number2);
const result4 = divide(number1, number2);
//user interface logic
window.alert(result + " " + result2 + " " + result3 + " "+ result4);

