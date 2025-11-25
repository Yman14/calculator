const validate = document.querySelector("h1");
validate.classList.add("validated");

//global
let a, operator, b, result;
calculation();

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
    if(operator == "x") return multiply(a, b);
    if(operator == "/") return divide(a, b);
    return `Invalid operator: ${operator}`;
}

function display(text){
    let displayText = document.querySelector(".screen-text");
    displayText.textContent = text;
}

function opButtonUIReset(){
    const opButtons = document.querySelectorAll('.button-op');
    opButtons.forEach((button) => {
        button.classList.remove('clicked');
    });
}

function calculation(){
    //set display
    display("0");    

    //logic for button clicks to input values
    const mainButtons  = document.querySelector('.main-buttons');
    mainButtons.addEventListener('click', (e) =>{
        //take number inputs
        if(e.target.classList.contains('button-number'))
        {
            console.log(`a: ${a} | b: ${b}`);
            //store first input to a then if a is defined, store to b
            (a != undefined) ? b = parseInt(e.target.textContent) : a = parseInt(e.target.textContent);
            display(e.target.textContent);
            console.log(`a: ${a} | b: ${b}`);
            opButtonUIReset();
        }
        //take operator input
        if(e.target.classList.contains('button-op'))
        {
            //to make sure only these operators are considered
            const ops = ["/", "x", "-", "+",];
            if(ops.includes(e.target.textContent))
            {
                //if operator is pressed again and result is defined, assign result to a
                if(result != undefined) a = result;

                operator = e.target.textContent;
                display(e.target.textContent);
                console.log(`operator: ${operator}`);
                //ui
                opButtonUIReset();
                e.target.classList.add('clicked');
            }
        }
        //pressing equal button
        if(e.target.textContent == "=")
        {
            console.log(`a: ${a} | operator: ${operator} | b: ${b}`);

            result = operate(a, operator, b);
            display(result);
            console.log(`result: ${result}`);

            opButtonUIReset();
        }
    });
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

    //logic for button clicks to input values
    const mainButtons  = document.querySelector('.main-buttons');
    mainButtons.addEventListener('click', (e) =>{
        if(e.target.classList.contains('button-number'))
        {
            console.log(`a: ${a} | b: ${b}`);
            displayText.textContent = e.target.textContent;
            (a != undefined) ? b = parseInt(e.target.textContent) : a = parseInt(e.target.textContent);
            console.log(`a: ${a} | b: ${b}`);
        }
        if(e.target.classList.contains('button-op'))
        {
            //to make sure only these operators are considered
            const ops = ["/", "x", "-", "+",];
            if(ops.includes(e.target.textContent))
            {
                //if operator is pressed again and result is defined, assign result to a
                if(result != undefined) a = result;
                displayText.textContent = e.target.textContent;
                operator = e.target.textContent;
                console.log(`operator: ${operator}`);
            }
        }

        //pressing equal button
        if(e.target.textContent == "=")
        {
            result = operate(a, operator, b);
            displayText.textContent = result;
            console.log(`result: ${result}`);
            console.log(`a: ${a} | operator: ${operator} | b: ${b}`);
        }
    });
}
//experiment();