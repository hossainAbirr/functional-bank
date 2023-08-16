function getInputValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValueStringToNumber = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValueStringToNumber; 
};

function getElementInnerTextById (elementID){
    const element = document.getElementById(elementID);
    const elementStringValue = element.innerText;
    const elementStringValueToNumber = parseFloat(elementStringValue);

    return elementStringValueToNumber;
};


function setTextValueById (elementID, newValue){
    const textElementPreviousValue = document.getElementById(elementID);
    textElementPreviousValue.innerText = newValue
};