let prevInput= '0';
let calculationOperator='';
let currentInput='0';

const calculatorScreen=document.querySelector(".calculator-screen");

const updateScreen =(number)=>{
    calculatorScreen.value=number;
};

const coronafree=document.querySelectorAll(".Corona-free");

coronafree.forEach((choice)=>{
    choice.addEventListener("click",(event)=>{
        updateScreen(event.target.value);
    })
})

const clearbtn=document.querySelector(".all-clear");

clearbtn.addEventListener("click",(event)=>{
    clearAll();
    updateScreen(currentInput);
});

const percentbtn=document.querySelector(".percentage");

percentbtn.addEventListener("click",(event)=>{
    percentage(currentInput);
})

const equalSign=document.querySelector(".equal-sign");

equalSign.addEventListener("click",(event)=>{
    calculate();
    updateScreen(currentInput);
});


const numbers=document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentInput);
    })
    
});

const operators=document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    })
    
});

const inputNumber=(number)=>{
    if(currentInput === '0' && number === '.'){
        currentInput='0.';
    }else if(currentInput === '0'){
        currentInput=number;
    }else{
        currentInput+=number;
    }
};

const inputOperator=(operator)=>{
    prevInput=currentInput;
    calculationOperator=operator;
    currentInput='0';
}


const calculate = () => {
    let result = 0;
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput);
            break;
        case '-':
            result= parseFloat(prevInput) - parseFloat(currentInput);
            break;
        case '*':
            result= parseFloat(prevInput) * parseFloat(currentInput);
            break;
        case '/':
            result= parseFloat(prevInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput=result.toString();
    calculationOperator='';
}

const percentage=(value)=>{
    currentInput=0.01*value;
    updateScreen(currentInput);
    return currentInput;
}


const clearAll=()=>{
    prevInput='0';
    currentInput='0';
    calculationOperator='';
};
