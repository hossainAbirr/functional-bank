document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 1 = get new deposit amout from input value
    const newDepositAmount = getInputValueById('deposit-input');
    if(isNaN(newDepositAmount)){
        alert('insert number input only');
        return;
    };
    // step 2 get previous deposit amout from element inner text
    
    const previousDepositAmount = getElementInnerTextById('deposit');
    // step 3 calculate new deposit total 

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    //step 4 set textElement new value

    setTextValueById('deposit', newDepositTotal);

    // step 5 get previous balance amount by using the function

    const previousBalanceAmount = getElementInnerTextById('balance');

    // step 6 calculate new balance

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;

    // step 7 set new balance amount to it's element

    setTextValueById('balance', newBalanceTotal)


})