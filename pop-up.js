const form = document.getElementById("myform");
const formBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".cancel");
const emailInput = document.querySelector(".form__email");
const passwordInput = document.querySelector(".form__password");

formBtn.addEventListener("click", () => {
  form.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

emailInput.addEventListener("focus", () => {
  emailInput.placeholder = "";
});

emailInput.addEventListener("blur", () => {
  emailInput.placeholder = "Please enter your email";
});

passwordInput.addEventListener("focus", () => {
  passwordInput.placeholder = "";
});

passwordInput.addEventListener("blur", () => {
  passwordInput.placeholder = "Enter Password";
});
