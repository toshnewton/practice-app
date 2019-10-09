function calculateGrandTotal(total, tip, tax) {
    return total + tip + tax
}

function calculateTip(total, rate) {
    return total * (rate/100)
}

function calculateTax(total, taxRate) {
    return total * (taxRate/100)
}

function onButtonPress() {
    // get the total and the rate so we can calc other values
    const total = Number(document.querySelector('#total-field').value)
    console.log('Total: ' + total)
    const rate = Number(document.querySelector('#rate-field').value)
    console.log('Rate: ' + rate)
    
    // calc other values
    const tip = calculateTip(total, rate);
    const tax = calculateTax(total, taxRate);
    const grandTotal = calculateGrandTotal(total, tip, tax);

    // update labels to represent the previously calced values
    document.querySelector('#tip-amount').innerHTML = `$${tip.toFixed(2)}`
    document.querySelector('#tax-amount').innerHTML = `$${tax.toFixed(2)}`
    document.querySelector('#grand-total').innerHTML = `$${grandTotal.toFixed(2)}`
}

// Constant tax rate of 5.5%
const taxRate = 5.5
// Add our button listen event
document.querySelector('#btn-calculate').addEventListener('click', onButtonPress)