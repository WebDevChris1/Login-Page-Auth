const msg = document.getElementById("msg");
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

// when submit button is clicked
submit.addEventListener("click", function () {
  // stop page reload
  event.preventDefault();
  // error if nothing is entered
  if (email.value === "" || pass.value === "") {
    msg.textContent = "Please enter your email and password";
    // verify email and pass
  } else if (email.value === auth.email && pass.value === auth.pass) {
    email.remove();
    pass.remove();
    submit.remove();
    labelEmail.remove();
    labelPass.remove();
    greeting.textContent = "Welcome";
    msg.textContent = "Please Wait...";
  } else {
    // can't verify email and pass
    msg.textContent = "Incorrect Email/Password";
  }
});
