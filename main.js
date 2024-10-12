const form = document.getElementById("registration");
// const emailVal = document.getElementById("email")
// const passwordVal = document.getElementById("password")
const loginForm = document.getElementById("login");
const errorDisplay = document.getElementById("errorDisplay");

// alert("testing file connection");

const clearErrors = () => {
  errorDisplay.textContent = "";
};

///// to show meassages
const showError = (message, input) => {
  errorDisplay.textContent = message;
  input.focus();
};

// validation the form 
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  clearErrors();

  //email part  
  // email validation since it didn't work using pattern in html 
  const email = form.email.value.trim().toLowerCase();
  if (!/\S+@\S+\.\S+/.test(email) || email.endsWith('@example.com')) {
    return showError("Email must be a valid email address and cannot be from the domain 'example.com'.", form.email);
  }


  // password and username validation part
  const username = form.username.value.trim().toLowerCase();
  const password = form.password.value;
  const passwordCheck = form.passwordCheck.value;

  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
    return showError("Passwords must contain at least one uppercase letter, one lowercase letter, one number, and one special character.", form.password);
  }
  if (password.toLowerCase().includes("password")) {
    return showError("Passwords cannot contain the word 'password'.", form.password);
    
  } if (username && password.toLowerCase().includes(username)) {
    return showError("Passwords cannot contain the username.", form.password);
  }
  
  // password check
  if (password !== passwordCheck) {
    return showError("Passwords do not match.", form.passwordCheck);
  } 

  // localStorage
  users[username] = { email, password };
  localStorage.setItem("users", JSON.stringify(users));

   // show success message
   form.reset();
   errorDisplay.textContent = "Registration successful!";

});

///==== longin part of the form
loginForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  clearErrors();

  const username = loginForm.username.value.trim().toLowerCase();
  const password = loginForm.password.value;

  if (!username) {
    return showError("Username cannot be blank.", loginForm.username);
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (!users[username]) {
    return showError("That username does not exist.", loginForm.username);
  }

  // Password validation
  if (!password) {
    return showError("Password cannot be blank.", loginForm.password);
  }
  if (users[username].password !== password) {
    return showError("Incorrect password.", loginForm.password);
  }

  // Clear form and show success message
  loginForm.reset();
  errorDisplay.textContent = loginForm.persist.checked 
    ? "you will be kept logged in." 
    : "login successful!";
});




//====================

// function validateForm(evt) {
//   // to clear errors
//   errorDisplay.textContent = "";
//   evt.preventDefault();

//   let isValid = true;

//   // Email validation
//   const emailVal = document.getElementById("email").value;
//   const emailCheck =
//     /^(?!.*@example\.com$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailCheck.test(emailVal)) {
//     return { valid: false, message: "Passwords do not match." };
//     isValid = false;
//   } else {
//     errorDisplay.textContent = "";
//   }

//   // Password validation
//   const password = document.getElementById("password").value;
//   const passValid =
//     "^$|^[a-zA-Z0-9][w.-]*[a-zA-Z0-9_]@[a-zA-Z0-9][w.-]*[a-zA-Z0-9_].[a-zA-Z][a-zA-Z]*[a-zA-Z]?$";

//   if (password.length > 12 && !passValid.test(password)) {
//     return { valid: false, message: "Passwords do not match." };
//     isValid = false;
//   } else {
//     return (password.textContent = "");
//   }

//   return isValid;

//   function loginUser(userId) {
//     // Save user ID in localStorage
//     const usernameVal = document.getElementById("username").value;

//     localStorage.setItem("userId", userId);
//     console.log("User logged in:", userId);
//   }
// }

// form.addEventListener("submit", validate);
// errorDisplay.innerHTML = ''; // Clearing errors
//     evt.preventDefault();

// //  this function will valiadte the email
// function validateEmail() {
//     emailVal.value;
//     const emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
//     const noDomainInput = "/@example\.com$/";

//     //testing the if it's a valid email
//     if (!emailPattern.test(emailVal)) {
//         alert('The email must be a valid email address.');
//         return false;
//     }
// // checking if it containes the correct format input
//     if (noDomainInput.test(emailVal)) {
//         alert('The email must not be from the domain "example.com."');
//         return false;
//     }

//     alert('Email is valid!');
//             return true;
//         }

// function validate(evt) {
//     errorDisplay.innerHTML = ''; // Clear previous errors
//     evt.preventDefault();

//  // Email Validation
//  if (!validateEmail(email)) {
//     valid = false;
// }

// }

// const form = document.getElementById("registration");
// const name = form.elements["name"];
// const email = form.elements["email"];
// const password = form.elements["password"];

// // alert("testing");

// form.addEventListener("submit", validate);

// // validating the password
// function validate(evt) {
//   const emailVal = validateEmail();
//   if (emailVal === false) {
//     evt.returnValue = false;
//     alert("enter email")
//     return false;
//   }

//   let passwordVal = validatePassword();
//   if (passwordVal === flase) {
//     evt.returnValue = flase;
//     return false;
//   }

//   alert(`Password: ${passwordVal} Email: ${emailVal}`);

//   return true;
// }

// function validateEmail() {
//   let emailVal = email.value;

//   if (emailVal === "") {
//     alert("please provide a valid email address");
//     email.focus();
//     return true;
//   }

//   const atpos = emailVal.indexOf("@");
//   const dotpos = emailVal.lastIndexof("example.com");

//   if (atpos < 1) {
//     alert("Must enter a vaild email address ");
//     email.focus();
//     return false;
//   }

//   if (dotpos - atpos < 2) {
//     alert(
//       "Invalid structure: @.\nYou must include a domain name after the @ symbol."
//     );
//     email.focus();
//     return false;
//   }

//   return emailVal;
// }

// function validatePassword() {
//   if (password.value === "") {
//     alert("Please provide a password.");
//     password.focus();
//     return false;
//   }
//   return password.value;
// }
