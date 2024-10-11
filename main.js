const form = document.getElementById("registration");
// const emailVal = document.getElementById("email")
// const passwordVal = document.getElementById("password")
const errorDisplay = document.getElementById("errorDisplay");

// alert("testing");

form.addEventListener("submit", validate);

const usernameVal = document.getElementById("username")

const userStorage = localStorage.username

function validateForm(evt) {
  errorDisplay.innerHTML = ""; // Clearing errors
  evt.preventDefault();

  let isValid = true;

  // Email validation
  const emailVal = document.getElementById("email").value;
  const emailCheck =
    /^(?!.*@example\.com$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailCheck.test(emailVal)) {
    return { valid: false, message: "Passwords do not match." };
    isValid = false;
  } else {
    errorDisplay.textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  const passValid =
  "^$|^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9_]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9_]\.[a-zA-Z][a-zA-Z]*[a-zA-Z]?$";


  if (password.length > 12 && !passValid.test(password)) {
    return { valid: false, message: "Passwords do not match." };
    isValid = false;
  } else {
    return (password.textContent = "");
  }

  return isValid;
}

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
