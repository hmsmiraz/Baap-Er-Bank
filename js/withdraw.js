document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    withdrawField.value = '';
    if(isNaN(newWithDrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);

    if(newWithDrawAmount > previousBalanceTotal){
        alert('Ekn ek taka ek pahar bap er kache! Eto taka nai!');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})