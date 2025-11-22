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

function prototype(){
    const a = parseInt(prompt("input first number: "));
    const b = parseInt(prompt("input second number: "));
    console.log(`a: ${a} | b: ${b}`);
    console.log(`add: ${add(a, b)}`);
    console.log(`substract: ${substract(a, b)}`);
    console.log(`multiply: ${multiply(a, b)}`);
}