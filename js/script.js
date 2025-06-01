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
  const annualInterest = parseFloat(document.getElementById('interestRate').value) / 100;
  const years = parseFloat(document.getElementById('loanTerm').value);
  const monthlyInterest = annualInterest / 12;
  const payments = years * 12;
  const x = Math.pow(1 + monthlyInterest, payments);
  const monthly = (principal * x * monthlyInterest) / (x - 1);
  document.getElementById('monthlyPayment').innerText = `Monthly Payment: $${monthly.toFixed(2)}`;
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const currency = document.getElementById('currency').value;
  // Example exchange rates; in a real application, fetch from an API
  const rates = {
  'USD': 1 / 1500,    // 1 USD ≈ 1500 NGN
  'EUR': 1 / 1600,    // 1 EUR ≈ 1600 NGN
  'GBP': 1 / 1850,    // 1 GBP ≈ 1850 NGN
  'JPY': 1 / 10.2,    // 1 JPY ≈ 10.2 NGN
  'CAD': 1 / 1100,    // 1 CAD ≈ 1100 NGN
  'AUD': 1 / 1000,    // 1 AUD ≈ 1000 NGN
  'INR': 1 / 18.5,    // 1 INR ≈ 18.5 NGN
  'CNY': 1 / 205,     // 1 CNY ≈ 205 NGN
  'RUB': 1 / 16.7,    // 1 RUB ≈ 16.7 NGN
  'ZAR': 1 / 80       // 1 ZAR ≈ 80 NGN
};

  const converted = amount * rates[currency];
  document.getElementById('convertedAmount').innerText = `Converted Amount: ${converted.toFixed(2)} ${currency}`;
};

AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-in-out'
  });