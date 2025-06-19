const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});


window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});


function calculateMortgage() {
  const principal = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const months = parseInt(document.getElementById('loanTerm').value) * 12;
  const output = document.getElementById('monthlyPayment');

  if (isNaN(principal) || isNaN(interestRate) || isNaN(months) || principal <= 0 || months <= 0) {
    output.innerText = 'Please enter valid numbers';
    return;
  }

  const monthly = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -months));

  output.innerText = isFinite(monthly)
    ? `Monthly Payment: ₦${monthly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : 'Calculation error. Check your inputs.';
}

// Reset all input/output on page load
window.addEventListener('load', () => {
  document.getElementById('loanAmount').value = '';
  document.getElementById('interestRate').value = '';
  document.getElementById('loanTerm').value = '';
  document.getElementById('monthlyPayment').innerText = '';
});


async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const output = document.getElementById('convertedAmount');

  if (isNaN(amount) || amount <= 0) {
    output.innerText = 'Please enter a valid amount.';
    return;
  }

  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await res.json();
    const rate = data.rates[toCurrency];
    
    if (!rate) {
      output.innerText = `Rate not available for ${toCurrency}`;
      return;
    }

    const result = amount * rate;
    output.innerText = `Converted: ${toCurrency} ${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } catch (err) {
    output.innerText = 'Conversion failed. Please try again later.';
  }
}

// Reset form on page load
window.addEventListener('load', () => {
  document.getElementById('amount').value = '';
  document.getElementById('convertedAmount').innerText = '';
});


AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-in-out'
  })
