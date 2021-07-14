const errorMsg = document.getElementById("error-msg");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const submit = document.getElementById("submit");
const labelEmail = document.getElementById("label-email");
const labelPass = document.getElementById("label-pass");
const greeting = document.getElementById("greeting");
let auth = {
  email: "chris@gmail.com",
  pass: "123",
};

submit.addEventListener("click", function () {
  event.preventDefault();
  if (email.value === "" || pass.value === "") {
    errorMsg.textContent = "- Please enter your email and password";
  } else if (email.value === auth.email && pass.value === auth.pass) {
    email.remove();
    pass.remove();
    submit.remove();
    labelEmail.remove();
    labelPass.remove();
    greeting.textContent = "Welcome";
    errorMsg.textContent = "Please Wait...";
  } else {
    errorMsg.textContent = "Incorrect Email/Password";
  }
});
