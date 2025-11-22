const validate = document.querySelector("h1");
validate.classList.add("validated");
prototype();

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
    const a = parseInt(prompt("input first number: "));
    const b = parseInt(prompt("input second number: "));
    console.log(`a: ${a} | b: ${b}`);
    console.log(`add: ${add(a, b)}`);
    console.log(`substract: ${substract(a, b)}`);
    console.log(`multiply: ${multiply(a, b)}`);
    console.log(`divide: ${divide(a, b)}`);

    //get operator for manual calculation
    operator = prompt("Operator: ");
    console.log(`manual: ${operate(a, operator, b)}`);
    
}

function operate(a, operator, b){
    if(operator == "+") return add(a, b);
    if(operator == "-") return substract(a, b);
    if(operator == "*") return multiply(a, b);
    if(operator == "/") return divide(a, b);
}