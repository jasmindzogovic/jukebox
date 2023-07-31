const form = document.getElementById("myform");
const formBtn = document.querySelector(".login-btn");

formBtn.addEventListener("click", () => {
  form.style.display = "block";
});

const closeBtn = document.querySelector(".cancel");

closeBtn.addEventListener("click", ()=> {
  form.style.display = "none";
})
