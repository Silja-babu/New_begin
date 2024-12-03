const tipForm = document.getElementById("tip-form");
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageSelect = document.getElementById("tip-percentage")
const tipAmountDisplay = document.getElementById("tip-amount")
const totalAmountDisplay = document.getElementById("total-amount")


function calculateTip(event){
    event.preventDEfault();

    const billAmount = parseFloat(billAmountInput.value);
    const tipPercentage = parseFloat(tipPercentageSelect.value);


    if(isNaN(billAmount) || billAmount <= 0){
        alert("Please enter a valid bill amount.")

        return
    }

    const tipAmount = (billAmount * tipPercentage) /100;
    const totalAmount = billAmount + tipAmount;

    tipAmountDisplay.textContent = tipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalAmount.toFixed(2)
}

tipForm.addEventListener("submit", calculateTip)