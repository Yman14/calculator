const validate = document.querySelector("h1");
validate.classList.add("validated");

//global
let a, operator, b, result, displayText;
let decimalPressed = false; //to track if decimal button is pressed

//initialize calculation system to run the program
calculationSystem();

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
    displayText = document.querySelector(".screen-text");
    displayText.textContent = text;
    console.log(`Display: ${text}`);
    console.log(`a: ${a} | b: ${b} | operator: ${operator} | result: ${result}`);
}

function clear(){
    a = undefined;
    b = undefined;
    operator = undefined;
    result = undefined;
    display("0");
    opButtonUIReset();
}

function equalButtonPressed(){
    result = operate(a, operator, b); 
    //setup variables for next calculation
    b = undefined;
    //this is how normal calculator worked
    //a = result;
    //but to fit requirement system
    a = undefined;
    operator = undefined;

    //ui
    display(result);
    console.log(`result: ${result}`);
    opButtonUIReset();
}

function opButtonUIReset(){
    const opButtons = document.querySelectorAll('.button-op');
    opButtons.forEach((button) => {
        button.classList.remove('clicked');
    });
}

function operatorClicked(){
    let validateClicked = false;
    const btn = document.querySelectorAll('.button-op');
    for(let i=0; i<btn.length; i++)
    {
        if(btn[i].classList.contains('clicked'))
        {
            validateClicked = true;
            break;
        }
    }
    return validateClicked;
}

function calculationSystem(){
    //set display
    display("0");

    //logic for button clicks to input values
    const mainButtons  = document.querySelector('.buttons-container');
    mainButtons.addEventListener('click', (e) =>{
        //take number inputs
        if(e.target.classList.contains('button-number'))
        {

            if(!operatorClicked())
            {
                if(decimalPressed){
                    decimalPressed = false;
                    display(displayText.textContent + e.target.textContent);
                }
                else if (a == undefined){
                    display(e.target.textContent);
                }
                else {
                    display(displayText.textContent + e.target.textContent);
                }
                a = parseFloat(displayText.textContent);
            }
            else
            {
                //opButtonUIReset();
                if(decimalPressed){
                    decimalPressed = undefined;
                    display(displayText.textContent + e.target.textContent);
                }
                else if (b == undefined){
                    display(e.target.textContent);
                }
                else {
                    display(displayText.textContent + e.target.textContent);
                }
                b = parseFloat(displayText.textContent);
            }
        }

        //take operator input
        if(e.target.classList.contains('button-op'))
        {

            //to make sure only these operators are considered
            const ops = ["/", "x", "-", "+",];
            if(ops.includes(e.target.textContent))
            {
                //if operator is pressed again after a and b is defined, perform operation
                //to show result before next operator is selected
                if(a != undefined && b != undefined) {
                    //this was how normal calculator worked
                    //equalButtonPressed();
                    //but to fit requirement system
                    clear();
                }
                //only assign operator if a is defined
                if(a != undefined){
                    operator = e.target.textContent;
                    console.log(`operator: ${operator}`);
                    //ui
                    opButtonUIReset();
                    e.target.classList.add('clicked');
                }
                
            }
        }

        //if decimal button is pressed
        if(e.target.classList.contains('button-decimal')) {
            if(displayText.textContent.includes('.')) return; //prevent multiple decimals
            
                decimalPressed = true;
                display(displayText.textContent + '.');
            
        }

        //pressing equal button
        if(e.target.textContent == "=")
        {
            equalButtonPressed();
        }

        //pressing clear button
        if(e.target.textContent == "CL")
        {
            clear();
            console.log("clear pressed");
        }
    });
}


