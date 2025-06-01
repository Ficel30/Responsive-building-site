  emailjs.init("r4GAbuno8rC7nbZ6l");

  document.getElementById("hireForm").addEventListener("submit", function(event) {
    event.preventDefault();

const successBox = document.getElementById("successMessage");
successBox.classList.add("show");
  document.getElementById("timeInput").value = new Date().toLocaleString();

  emailjs.sendForm("service_x.h3ll", "template_x.h3ll", this)
    .then(() => {
      this.reset();
      const successBox = document.getElementById("successMessage");
      successBox.classList.add("show");
      alert("✅ Your request has been sent successfully! We'll get back to you shortly.");
      location.reload();
    }, (error) => {
      alert("❌ Failed to send. Please try again.");
      console.error("EmailJS Error:", error);
      location.reload();
    });
});


  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out'
  });