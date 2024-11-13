const displayEl = document.getElementById('display');

function calculateLoan(params) {
    let loanEl = document.getElementById('loanAmount').value;
    let monthEl = document.getElementById('months').value;
    let interestEl = document.getElementById('interestRate').value;
    let interest = (loanEl * (interestEl * 0.01)) / monthEl;
    let monthlyPayment = (loanEl / monthEl + interest);
    displayEl.innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
}