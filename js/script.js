const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});


function calculateMortgage() {
  const principal = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
  const months = parseInt(document.getElementById('loanTerm').value) * 12;

  const monthly =
    (principal * interestRate) /
    (1 - Math.pow(1 + interestRate, -months));

  document.getElementById('monthlyPayment').innerText =
    isFinite(monthly)
      ? `Monthly Payment: ₦${monthly.toFixed(2)}`
      : 'Please enter valid numbers';
}

async function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const targetCurrency = document.getElementById('currency').value;

  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/NGN`);
    const data = await res.json();
    const rate = data.rates[targetCurrency];
    const result = amount * rate;

    document.getElementById('convertedAmount').innerText =
      `Converted: ${targetCurrency} ${result.toFixed(2)}`;
  } catch (err) {
    document.getElementById('convertedAmount').innerText =
      'Conversion failed. Please try again later.';
  }
};

AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-in-out'
  });
