const validate = document.querySelector("h1");
validate.classList.add("validated");

//global
let a, operator, b;
const displayText = document.querySelector(".screen-text");
displayText.textContent = "Hello world!";

//
//prototype();



function add(a, b){
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}


//simple calculator for testing functions
function prototype(){
    getInput();
    console.log(`a: ${a} | operator: ${operator} | b: ${b}`);
    console.log(`add: ${add(a, b)}`);
    console.log(`substract: ${substract(a, b)}`);
    console.log(`multiply: ${multiply(a, b)}`);
    console.log(`divide: ${divide(a, b)}`);

    //get operator for manual calculation
    console.log(`manual: ${operate(a, operator, b)}`);
    
}

function getInput(){
    a = parseInt(prompt("input first number: "));
    operator = prompt("Operator: ");
    b = parseInt(prompt("input second number: "));
}

function operate(a, operator, b){
    if(operator == "+") return add(a, b);
    if(operator == "-") return substract(a, b);
    if(operator == "*") return multiply(a, b);
    if(operator == "/") return divide(a, b);
}

//experiment to get data usinh button
function experiment(){
    //get all the elements that have button-text class
    const buttons = [...document.querySelectorAll('.button-text')];
    //extract the text content of the elements
    const buttonTexts = buttons
    .map(button => button.textContent);
    //get all the texts that are numbers and convert it to integer
    const numbers = buttonTexts
    .filter((text) => (/[0-9]/.test(text)))
    .map(number => parseInt(number));
    //get all the operators
    const ops = buttonTexts
    .filter((op) => {
        const arr = ["/", "x", "-", "=", "+",];
        return (arr.includes(op));
    });
    
    console.log(buttons);
    console.log(buttonTexts);
    console.log(numbers);
    console.log(ops);
}
experiment();