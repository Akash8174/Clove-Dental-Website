const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const form = document.querySelector(".form");
const captchaInput = document.getElementById("captchaInput");
const captchaDisplay = document.getElementById("captchaDisplay");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userCaptcha = captchaInput.value.trim();
  const actualCaptcha = captchaDisplay.textContent.trim();

  if (userCaptcha !== actualCaptcha) {
    alert("Captcha is incorrect. Please try again.");
    return;
  }
  alert("Form submitted successfully!");
  form.reset();
});

const appointmentForm = document.querySelector(".appointment-form");
const bookButton = document.querySelector(".book-button");
const bottomCaptchaInput = document.querySelector(".captcha-input");
const bottomCaptchaCode = document.querySelector(".captcha-code");

bookButton.addEventListener("click", function (e) {
  e.preventDefault();

  const input = bottomCaptchaInput.value.trim();
  const code = bottomCaptchaCode.textContent.trim();

  if (input !== code) {
    alert("Captcha is incorrect in appointment form.");
    return;
  }

  alert("Appointment request submitted!");
  appointmentForm.reset();
});
