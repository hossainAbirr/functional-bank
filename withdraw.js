// new withdraw amount

// function getInputValueById(inputId){
//     const withdrawInputField = document.getElementById(inputId);
//     const withdrawInputFieldStringValue = withdrawInputField.value;
//     const withdrawInputFieldStringValueToNumber = parseFloat(withdrawInputFieldStringValue);

//     withdrawInputField.value = '';

//     return withdrawInputFieldStringValueToNumber;
// };

// // previous withdraw amount

// function getElementInnerTextById(elementID){
//     const withdrawElement = document.getElementById(elementID);
//     const withdrawElementString = withdrawElement.innerText;
//     const withdrawElementStringToNumber = parseFloat(withdrawElementString);

//     return withdrawElementStringToNumber;
// };

// // setting element value
// function setTextValueById(elementID, newValue){
//     const previousWithdrawValue = document.getElementById(elementID);
//     previousWithdrawValue.innerText = newValue; 
// };

document.getElementById('btn-withdraw').addEventListener('click', function(){

    // step 1 get new withdraw amount using utility function 
    const newWithdrawAmount = getInputValueById('withdraw-input');

    // step 2 get previous withdraw amount using utility function 

    const previousWithdrawAmount = getElementInnerTextById('withdraw');
    
    // step 3 check if input is a valid number 

    if(isNaN(newWithdrawAmount)){
        alert('insert number input only');
        return;
    };

    // step 4 get previous balance amount using utility function 

    const previousBalanceTotal = getElementInnerTextById('balance');

    // step 5 check whether you have  enough money to withdraw or not
    if(newWithdrawAmount > previousBalanceTotal){
        alert("You don't have enough money")
        return;
    };

    // step 6 calculate total withraw amount 

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

     // step 7 set new withdraw total amount to it's element using utility function 

     setTextValueById('withdraw', totalWithdrawAmount);

    // step 8 calculate total balance amount 

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // step 9 set new balance total amount to it's element using utility function 

    setTextValueById('balance', newBalanceTotal); 
})