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

//User Interface Logic
function handleCalculation(event){
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#input1").value);
    const number2 = parseInt(document.querySelector("input#input2").value);
    const operator = document.querySelector("input[name='operator']:checked").value;

    let result;
    if (operator === "add") {
         result = add(number1, number2);
    }
        else if (operator === "subtract") {
        result = subtract(number1, number2)
    }
        else if (operator === "multiply") {
        result = multiply(number1, number2)
    }
        else if (operator === "divide") {
        result = divide(number1, number2)
    }
    document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleCalculation);
  });

//code from tuesday?
//const number1 = parseInt(prompt("Enter a number:"));
//const number2 = parseInt(prompt("Enter another number:"));
//const result = add(number1, number2);
//const result2 = subtract(number1, number2);
//const result3 = multiply(number1, number2);
//const result4 = divide(number1, number2);
//user interface logic
//window.alert(number1 + " + " + number2 + " = " + result + "  " + number1 + " - " + number2 + " = "  + result2 + "  " + number1 + " * " + number2 + " = " + result3 + "  " + number1 + " / " + number2 + " = " + result4);

