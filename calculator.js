
let preVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;


const numButton = (num) =>  {

    if(resultVal){
        newVal = num;
        resultVal = "";
    } else {
        if(num === '.'){
            if(decimalClicked != true) {
                newVal += num; 
                decimalClicked = true;
            }
        } else {
            newVal += num; 
        }
    }
    document.getElementById("display").value = newVal;
}
const mathButton = (operator) =>  {
    if(!resultVal) {
        preVal = newVal;
    }else {
        preVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.getElementById("display").value = preVal; 
}

const equalButton = (num) =>  {
    decimalClicked = false;
    preVal = parseFloat(preVal);
    newVal = parseFloat(newVal);
    switch (mathOperator) {
        case "+": 
            resultVal = preVal + newVal;
            break;
        case "-": 
            resultVal = preVal - newVal;
            break;   
        case "*": 
            resultVal = preVal * newVal; 
            break; 
        case "/": 
            resultVal = preVal / newVal;
            break; 
        default: 
            resultVal = newVal; 
    }   
    preVal = resultVal;
    document.getElementById('display').value = resultVal;
}

const clearButton = () =>  { 
    preVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("display").value = "0";
}
