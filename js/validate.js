//---------** Form Validation **---------//

//---- DOM Selectors ----//
let name;
let email;

//---- Misc Declarations ----//
let nameIsValid;
let emailIsValid;
const nameError = "name. Eg: Bob Dole";
const emailError = "email address. Eg: yourname@domain.com";
const span = document.createElement("span");

//---- On Page Load ----//

//---- Functions -----//

function validateName(name) {
  if (name.length > 0 && name.replace(/\s+/g, " ").trim() !== "") {
    nameIsValid = true;
  } else {
    nameIsValid = false;
  }
  return nameIsValid;
}

//checks if the user entered a valid email address
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//---- Event Listeners ----//

basicInfo.name.addEventListener("keyup", e => {
  name = basicInfo.name.value;
  nameIsValid = validateName(name);
  if (!nameIsValid) {
    span.innerText = "Please enter a valid " + nameError;
    basicInfo.fieldset.insertBefore(span, basicInfo.name.nextElementSibling);
    span.className = "error";
    basicInfo.name.setAttribute("class", "error-true");
  } else {
    span.remove();
    basicInfo.name.classList.remove("error-true");
  }
});

//listens for typing in email field
//checks if email syntax is valid
//shows appropriate warning message if it isn't
basicInfo.mail.addEventListener("keyup", e => {
  email = basicInfo.mail.value;
  emailIsValid = validateEmail(email);
  if (!emailIsValid) {
    span.innerText = "Please enter a valid " + emailError;
    basicInfo.fieldset.insertBefore(span, basicInfo.mail.nextElementSibling);
    span.className = "error";
    basicInfo.mail.setAttribute("class", "error-true");
  } else {
    span.remove();
    basicInfo.mail.classList.remove("error-true");
  }
});

// activities.fieldset.addEventListener("change", e => {
//   console.log(e.target);
// });

//submit button event listener
submit.addEventListener("click", e => {
  e.preventDefault();
  if (total === 0) {
    const regiSpan = document.createElement("span");
    regiSpan.innerText = "Please register for at least one activity.";
    regiSpan.className = "error";
    activities.fieldset.insertBefore(regiSpan, activities.main);
  } else {
    regiSpan.remove();
  }
});
