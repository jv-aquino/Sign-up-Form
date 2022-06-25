const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");
let confirmPassword, password;
let passwordClicked = false;
let state = "invalid";

passwordField.addEventListener('click', () => {
  passwordClicked = true;
});
confirmPasswordField.addEventListener('click', () => {
  passwordClicked = true;
});

// Check the passwords after each key
passwordField.addEventListener("keyup", () => {
  updatePassword(); 
  validatePassword();
});
confirmPasswordField.addEventListener("keyup", () => {
  updatePassword(); 
  validatePassword();
});

function validatePassword() {
  if (passwordClicked == true) {
    if (password != "" || confirmPassword != "") {

      state = ((password === confirmPassword) ? "valid" : "invalid");
      // If the password matches, then the state is valid, otherwise it's invalid
      changeStyle(state);
    }
  }
}

function changeStyle(state) {
  if (state == "valid") {
    passwordField.className = "valid";
    confirmPasswordField.className = "valid";
  }
  else {
    passwordField.className = "invalid";
    confirmPasswordField.className = "invalid";
  }
}

function updatePassword() {
  confirmPassword = confirmPasswordField.value;
  password = passwordField.value;
}

function validateForm() {
  const response = document.querySelector("#validate");

  if (state != 'valid') {
    response.textContent = "Passwords don't match";

    return false;
  }
  else {
    response.textContent = "";
    
    return true;
  }
}