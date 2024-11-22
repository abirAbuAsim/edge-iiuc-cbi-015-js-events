document.getElementById("depositButton").addEventListener("click", depositAmount); 
document.getElementById("withdrawButton").addEventListener("click", withdrawAmount); 

const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");

const totalDeposited = document.getElementById("totalDeposited");
const totalWithdrawn = document.getElementById("totalWithdrawn");
const balance = document.getElementById("balance");


function depositAmount() {
    const depositValue = parseFloat(depositInput.value); 
    const totalDepositedValue = parseFloat(totalDeposited.innerText.split("$")[1]);

    totalDeposited.innerHTML = `$${totalDepositedValue+depositValue}`;
}

function withdrawAmount() {
    const withdrawValue = parseFloat(withdrawInput.value);
    alert(withdrawValue);
}