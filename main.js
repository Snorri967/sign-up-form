const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-button");

let fNameSpan = document.querySelector(".fname-span");
let lNameSpan = document.querySelector(".lname-span");
let passwordSpan = document.querySelector(".password-span");
let confirmPasswordSpan = document.querySelector(".confirm-password-span");

const nameRegex = /[a-zA-Z]+$/
const passwordRegex = /^.{8,15}$/

function invalidCredentials (element) {
  element.classList.add("invalid-input");
  element.style.backgroundImage = "url('./img/red-checkmark.png')";
  element.style.backgroundSize = "20px 20px";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundPosition = "right";
}

function validCredentials (element) {
  element.style.backgroundImage = "url('./img/green-tick.jpg')";
  element.style.backgroundSize = "20px 20px";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundPosition = "right";
}

fName.addEventListener("focusout", () => {
  if (fName.value === "") {
    fNameSpan.innerText = "";
    fName.classList.remove("invalid-input");
    fName.style.background = "none";
  } else if (nameRegex.test(fName.value) === false) {
    fNameSpan.innerText = "Letters only please!";
    fNameSpan.classList.add("invalid-span");
    fName.classList.add("invalid-input");
    submitButton.setAttribute("disabled", true);
    invalidCredentials(fName);
  } else if (nameRegex.test(fName.value)) {
    fName.classList.remove("invalid-input");
    fNameSpan.innerText = "";
    submitButton.removeAttribute("disabled");
    validCredentials(fName);
  }
});
 
lName.addEventListener("focusout", () => {
  if (lName.value === "") {
    lNameSpan.innerText = "";
    lName.classList.remove("invalid-input");
    lName.style.background = "none";
  } else if (nameRegex.test(lName.value) === false) {
    lNameSpan.innerText = "Letters only please!"
    lNameSpan.classList.add("invalid-span");
    lName.classList.add("invalid-input");
    submitButton.setAttribute("disabled", true);
    invalidCredentials(lName);
  } else if (nameRegex.test(lName.value)) {
    lName.classList.remove("invalid-input");
    lNameSpan.innerText = "";
    submitButton.removeAttribute("disabled");
    validCredentials(lName);
  }
});

password.addEventListener("focusout", () => {
  if (password.value === "") {
    passwordSpan.innerText = "";
    password.classList.remove("invalid-input");
    password.style.background = "none";
  } else if (passwordRegex.test(password.value) === false) {
    passwordSpan.innerText = "Between 8 and 15 Characters Please";
    password.classList.add("invalid-input");
    passwordSpan.classList.add("invalid-span");
    submitButton.setAttribute("disabled", true);
    invalidCredentials(password);
  } else if (passwordRegex.test(password.value)) {
    password.classList.remove("invalid-input");
    passwordSpan.classList.remove("invalid-span");
    passwordSpan.innerText = "";
    submitButton.removeAttribute("disabled");
    validCredentials(password);
  }
});

confirmPassword.addEventListener("focusout", () => {
  if (confirmPassword.value === "") {
    confirmPasswordSpan.innerText = "";
    password.classList.remove("invalid-input");
    confirmPassword.style.background = "none";
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordSpan.innerText = "No match!";
    confirmPassword.classList.add("invalid-input");
    confirmPasswordSpan.classList.add("invalid-span");
    submitButton.setAttribute("disabled", true);
    invalidCredentials(confirmPassword);
  } else if (confirmPassword.value === password.value) {
    confirmPassword.classList.remove("invalid-input");
    confirmPasswordSpan.classList.remove("invalid-span");
    confirmPasswordSpan.innerText = "";
    submitButton.removeAttribute("disabled");
    validCredentials(confirmPassword);
  }
})