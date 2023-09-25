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

[emailInput, passwordInput].forEach((input) => {
  input.addEventListener("focus", () => {
    input.placeholder = "";
  });
});
