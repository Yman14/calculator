const validate = document.querySelector("h1");
validate.classList.add("validated");

//global
let a, operator, b;

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