function getIncome() {
    const income = document.getElementById( 'total-income' );
    const totalIncome = parseFloat( income.value );
    return totalIncome;
}

function getInputValue() {
    const totalIncome = getIncome();
    const errorMessage = document.getElementById( 'error-message' );

    const checkInput = document.getElementsByTagName( 'input' ).value;
    errorMessage.style.color = 'red';
    if ( totalIncome > 0 ) {
        const expence = document.getElementById( 'total-expence' );
        const balance = document.getElementById( 'new-balance' );

        const food = document.getElementById( 'food' );
        const foodExpence = parseFloat( food.value );

        const rent = document.getElementById( 'rent' );
        const rentExpence = parseFloat( rent.value );

        const cloths = document.getElementById( 'cloths' );
        const clothsExpence = parseFloat( cloths.value );

        const totalExpence = foodExpence + rentExpence + clothsExpence;

        if ( totalIncome < totalExpence ) {
            errorMessage.innerText = 'Not enough Money! , Please Try again';
        } else {
            const newBalance = totalIncome - totalExpence;
            expence.innerText = totalExpence;
            balance.innerText = newBalance;
            errorMessage.innerText = '';
        }
    } else {
        errorMessage.innerText = 'Please Enter a Posetive Number';
    }
}

function percentage() {
    const percent = document.getElementById( 'per' );
    const percentAmount = parseFloat( percent.value );

    const savings = document.getElementById( 'saving-amount' );
    const remaining = document.getElementById( 'remaining-balance' );
    const totalIncome = getIncome();

    const savingAmount = ( totalIncome / 100 ) * percentAmount;
    const remainingAmount = totalIncome - savingAmount;

    savings.innerText = savingAmount;
    remaining.innerText = remainingAmount;
}

document.getElementById( 'calculate' ).addEventListener( 'click', function () {
    getInputValue();
} );

document.getElementById( 'save' ).addEventListener( 'click', function () {
    percentage();
} );