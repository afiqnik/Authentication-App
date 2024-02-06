const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const user = [];

function login (username, password) {
  if(username === "" || password === "") {
    alert("Please enter the username and/or password.")
  } else {
    const foundUser = user.find(user => user.username === username && user.password === password);
    if (foundUser) {
      alert("Login successful!");
    } else {
      alert("User not found! Please sign up.");
    }
  }
}

function isStrongPassword(password) {
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[*&^%$#@!]/;
  
  return (
    password.length >= 8 &&
    upperCaseRegex.test(password) &&
    lowerCaseRegex.test(password) &&
    numberRegex.test(password) &&
    specialCharRegex.test(password)
  );
}

function signUp(username, password, confirmpassword) {
  if(!isStrongPassword(password)) {
    alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."); 
  } else if(password !== confirmpassword) {
    alert("Password don't match.");
  } else {
    user.push({username: username, password: password});
    alert("Sign up successful! You can now login.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if(isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword)
  }
}