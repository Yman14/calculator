const validate = document.querySelector("h1");
validate.classList.add("validated");

//global
let a, operator, b, result, displayText;
//calculation();
newCalculationSystem();

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
}

function clear(){
    a = undefined;
    b = undefined;
    operator = undefined;
    result = undefined;
    display("0");
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

function calculation(){
    //set display
    display("0");    

    //logic for button clicks to input values
    const mainButtons  = document.querySelector('.buttons-container');
    mainButtons.addEventListener('click', (e) =>{
        //take number inputs
        if(e.target.classList.contains('button-number'))
        {
            //if number is clicked after result is shown and no operator is clicked, clear
            if(!operatorClicked() && a != undefined && result != undefined)
            {
                clear();
            }


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
                if(result != undefined) {
                    a = result;
                }

                //if both a and b are defined, perform operation
                if(a != undefined && b != undefined) {
                    console.log(`a: ${a} | operator: ${operator} | b: ${b}`);
                    result = operate(a, operator, b);
                    a = result;
                    b = undefined; //reset b for next input
                    display(result);
                    console.log(`result: ${result}`);
                }

                operator = e.target.textContent;
                //display(e.target.textContent);
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
            
            //reset b for next calculation
            b = undefined;

            //display result
            display(result);
            console.log(`result: ${result}`);

            opButtonUIReset();
        }

        //pressing clear button
        if(e.target.textContent == "CL")
        {
            clear();
            console.log("clear pressed");
        }
    });
}

function newCalculationSystem(){
    //set display
    display("new Calculation System");

    //logic for button clicks to input values
    const mainButtons  = document.querySelector('.buttons-container');
    mainButtons.addEventListener('click', (e) =>{
        //take number inputs
        if(e.target.classList.contains('button-number'))
        {
            display(e.target.textContent);
        }


        //pressing clear button
        if(e.target.textContent == "CL")
        {
            clear();
            console.log("clear pressed");
        }
    });
}


