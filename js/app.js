function getIncome() {
    const income = document.getElementById( 'total-income' );
    const totalIncome = parseFloat( income.value );
    return totalIncome;
}
function getExpence( fieldId ) {
    const expenceAmount = document.getElementById( fieldId );
    const expence = parseFloat( expenceAmount.value );
    return expence;
}
function totalExpence() {
    const foodExpence = getExpence( 'food' );
    const rentExpence = getExpence( 'rent' );
    const clothsExpence = getExpence( 'cloths' );
    const totalExpence = foodExpence + rentExpence + clothsExpence;
    return totalExpence;
}
function getInnetTextValue( fieldId ) {
    const innerValue = document.getElementById( fieldId );
    return innerValue;
};

function getInputValue() {
    const totalIncome = getIncome();
    const errorMessage = getInnetTextValue( 'error-message' );
    errorMessage.style.color = 'red';
    if ( totalIncome > 0 ) {
        const expence = getInnetTextValue( 'total-expence' );
        const balance = getInnetTextValue( 'new-balance' );

        const expenceAmount = totalExpence();
        if ( expenceAmount >= 0 ) {
            if ( totalIncome < expenceAmount ) {
                errorMessage.innerText = 'Not enough Money! , Please Try again';
            } else {
                const newBalance = totalIncome - expenceAmount;
                expence.innerText = expenceAmount;
                balance.innerText = newBalance;
                errorMessage.innerText = '';
            }
        } else {
            errorMessage.innerText = 'Please Enter Expence Value';
        }

    } else {
        errorMessage.innerText = 'Please Enter Your Income';
    }
}

function getParcentage() {
    const errorMessage = getInnetTextValue( 'error-message' );
    errorMessage.style.color = 'red';
    const percentAmount = getExpence( 'per' );
    const savings = getInnetTextValue( 'saving-amount' );
    const remaining = getInnetTextValue( 'remaining-balance' );
    const totalIncome = getIncome();
    const expenceAmount = totalExpence();
    const savingAmount = ( totalIncome / 100 ) * percentAmount;
    if ( totalIncome > 0 ) {
        if ( percentAmount > 0 ) {
            savings.innerText = savingAmount;
        } else {
            errorMessage.innerText = 'Please, Enter Percentage Amount!';
        }
        const remainingAmount = totalIncome - ( savingAmount + expenceAmount );
        if ( expenceAmount > 0 ) {
            if ( remainingAmount > 0 ) {
                remaining.innerText = remainingAmount;
                errorMessage.innerText = '';
            } else {
                errorMessage.innerText = 'Not enough Money! , Please Try again';
            }
            errorMessage.innerText = '';

        } else {
            errorMessage.innerText = 'Please, Enter Expence Amount!';
        }
        errorMessage.innerText = '';
    } else {
        errorMessage.innerText = 'Please Enter Your Income';
    }
}


document.getElementById( 'calculate' ).addEventListener( 'click', function () {
    getInputValue();
} );

document.getElementById( 'save' ).addEventListener( 'click', function () {
    getParcentage();
} );