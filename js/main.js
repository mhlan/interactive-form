//---------** Form Modules **---------//

//---- DOM Selectors ----//
const basicInfo = {
  fieldset: document.querySelector("fieldset"),
  name: document.getElementById("name"),
  mail: document.getElementById("mail"),
  title: document.getElementById("title"),
  other: document.getElementById("other-title")
};

const shirtInfo = {
  fieldset: document.querySelector(".shirt"),
  size: document.getElementById("size"),
  design: document.getElementById("design"),
  colorDiv: document.getElementById("colors-js-puns"),
  color: document.getElementById("color"),
  colors: document.getElementById("color").children
};

const activities = {
  fieldset: document.querySelector(".activities"),
  options: document.querySelector(".activities").children,
  main: document.querySelector(".activities").children[1],
  frameworks: document.querySelector(".activities").children[2],
  libraries: document.querySelector(".activities").children[3],
  express: document.querySelector(".activities").children[4],
  node: document.querySelector(".activities").children[5],
  tools: document.querySelector(".activities").children[6],
  npm: document.querySelector(".activities").children[7]
};

const payment = {
  fieldset: document.querySelector(".activities").nextElementSibling,
  method: document.getElementById("payment"),
  ccDiv: document.getElementById("credit-card"),
  cc: document.getElementById("cc-num"),
  zip: document.getElementById("zip"),
  cvv: document.getElementById("cvv"),
  month: document.getElementById("exp-month"),
  year: document.getElementById("exp-year"),
  paypal: document.getElementsByTagName("p")[0],
  bitcoin: document.getElementsByTagName("p")[1]
};

const submit = document.querySelector("button");

//---- Misc Declarations ----//
let total = 0;

//---- On Page Load ----//
basicInfo.name.focus();
basicInfo.other.style.display = "none";
shirtInfo.design.firstElementChild.disabled = "true";
shirtInfo.colorDiv.style.display = "none";
payment.method.firstElementChild.disabled = "true";
payment.ccDiv.style.display = "none";
payment.paypal.style.display = "none";
payment.bitcoin.style.display = "none";
buildTotal();

//---- Functions -----//

//builds html for the total cost element
function buildTotal() {
  const span = document.createElement("span");
  span.id = "total-cost";
  span.innerText = "Total Due: $" + total;
  activities.fieldset.append(span);
}

//calculates total cost based on selected activites
function calculateTotal(select) {
  if (select.name === "all" && select.checked === true) {
    total += 200;
  } else if (select.name === "all" && select.checked === false) {
    total -= 200;
  } else if (select.type === "checkbox" && select.checked === true) {
    total += 100;
  } else if (select.type === "checkbox" && select.checked === false) {
    total -= 100;
  }
}

//updates total cost based on selected activites
function updateTotal() {
  const span = document.getElementById("total-cost");
  span.innerText = "Total Due: " + "$" + total;
}

//hides activity options with conflicting time slots
function disableOption(selectedName, select) {
  const next = select.parentNode.nextElementSibling.nextElementSibling;
  const prev = select.parentNode.previousElementSibling.previousElementSibling;
  if (
    (selectedName === "js-frameworks" && select.checked === true) ||
    (selectedName === "js-libs" && select.checked === true)
  ) {
    next.className = "disabled";
    next.firstElementChild.setAttribute("disabled", "true");
  } else if (
    (selectedName === "js-frameworks" && select.checked === false) ||
    (selectedName === "js-libs" && select.checked === false)
  ) {
    next.removeAttribute("class", "disabler");
    next.firstElementChild.removeAttribute("disabled");
  }
  if (
    (selectedName === "express" && select.checked === true) ||
    (selectedName === "node" && select.checked === true)
  ) {
    prev.className = "disabled";
    prev.firstElementChild.setAttribute("disabled", "true");
  } else if (
    (selectedName === "express" && select.checked === false) ||
    (selectedName === "node" && select.checked === false)
  ) {
    prev.removeAttribute("class", "disabler");
    prev.firstElementChild.removeAttribute("disabled");
  }
}

//---- Event Listeners ----//

//show or hide "other" input form
basicInfo.title.addEventListener("change", e => {
  const select = e.target.value;
  if (select === "other") {
    basicInfo.other.style.display = "";
  } else {
    basicInfo.other.style.display = "none";
  }
});

//displays corresponding color options based on selected theme
shirtInfo.design.addEventListener("change", e => {
  const select = e.target.value;
  if (select === "js puns") {
    shirtInfo.colorDiv.style.display = "block";
    shirtInfo.colors[0].style.display = "";
    shirtInfo.colors[0].innerText = shirtInfo.colors[0].innerText.replace(
      "(JS Puns shirt only)",
      ""
    );
    shirtInfo.colors[1].style.display = "";
    shirtInfo.colors[1].innerText = shirtInfo.colors[1].innerText.replace(
      "(JS Puns shirt only)",
      ""
    );
    shirtInfo.colors[2].style.display = "";
    shirtInfo.colors[2].innerText = shirtInfo.colors[2].innerText.replace(
      "(JS Puns shirt only)",
      ""
    );
    shirtInfo.colors[3].style.display = "none";
    shirtInfo.colors[4].style.display = "none";
    shirtInfo.colors[5].style.display = "none";
    shirtInfo.colors[0].selected = "true";
  } else if (select === "heart js") {
    shirtInfo.colorDiv.style.display = "block";
    shirtInfo.colors[0].style.display = "none";
    shirtInfo.colors[1].style.display = "none";
    shirtInfo.colors[2].style.display = "none";
    shirtInfo.colors[3].style.display = "";
    shirtInfo.colors[3].innerText = shirtInfo.colors[3].innerText.replace(
      "(I ♥ JS shirt only)",
      ""
    );
    shirtInfo.colors[4].style.display = "";
    shirtInfo.colors[4].innerText = shirtInfo.colors[4].innerText.replace(
      "(I ♥ JS shirt only)",
      ""
    );
    shirtInfo.colors[5].style.display = "";
    shirtInfo.colors[5].innerText = shirtInfo.colors[5].innerText.replace(
      "(I ♥ JS shirt only)",
      ""
    );
    shirtInfo.colors[3].selected = "true";
  }
});

//calculates and updates total based on activites selected
//prevents user from booking conflicting time slots
activities.fieldset.addEventListener("change", e => {
  const select = e.target;
  const selectedName = select.name;
  calculateTotal(select);
  updateTotal();
  disableOption(selectedName, select);
});

//displays appropriate payment field(s) or relevant text based on selected
//payment options
payment.method.addEventListener("change", e => {
  const select = e.target.value;
  if (select === "credit card") {
    payment.ccDiv.style.display = "block";
  } else {
    payment.ccDiv.style.display = "none";
  }
  if (select === "paypal") {
    payment.paypal.style.display = "block";
  } else {
    payment.paypal.style.display = "none";
  }
  if (select === "bitcoin") {
    payment.bitcoin.style.display = "block";
  } else {
    payment.bitcoin.style.display = "none";
  }
});

//---------** Form Validation **---------//

//---- Misc Declarations ----//

let name, email, cc, zip, cvv;

let nameIsValid,
  emailIsValid,
  shirtIsValid,
  activityIsValid,
  paymentTypeIsValid,
  ccIsValid,
  zipIsValid,
  cvvIsValid,
  formIsValid;

//---- Functions -----//

//checks to see if name is valid
//returns false if numbers or only white space is inputed
function validateName(name) {
  if (isNaN(name)) {
    if (name.length > 0 && name.replace(/\s+/g, " ").trim() !== "") {
      basicInfo.name.className = "error-false";
      return true;
    } else {
      basicInfo.name.className = "error-true";
      return false;
    }
  } else {
    basicInfo.name.className = "error-true";
    return false;
  }
}

//checks if inputed email is of a valid format
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    basicInfo.mail.className = "error-false";
    return true;
  } else {
    basicInfo.mail.className = "error-true";
    return false;
  }
}

function validateEmailLive(email) {
  var re = /\S+@\S+\.\S+/;
  if (re.test(email)) {
    errorCount = 0;
    return true;
  } else {
    errorCount++;
    return false;
  }
}

function buildEmailError() {
  const span = document.createElement("span");
  span.innerText = "Example: email@website.com";
  span.id = "error-message";
  basicInfo.fieldset.childNodes[7].appendChild(span);
}

//checks if a design theme is selected
function validateShirt() {
  if (shirtInfo.design.value === "Select Theme") {
    shirtInfo.design.className = "error-true";
    return false;
  } else {
    shirtInfo.design.className = "error-false";
    return true;
  }
}

//checks if an activity has been selected
function validateActivites() {
  if (total > 0) {
    activities.fieldset.firstElementChild.className = "error-false-text";
    return true;
  } else {
    activities.fieldset.firstElementChild.className = "error-true-text";
    return false;
  }
}

//checks if a payment type has been selected
function validatePaymentType() {
  if (payment.method.value === "select_method") {
    payment.method.className = "error-true";
    return false;
  } else {
    payment.method.className = "error-false";
    return true;
  }
}

//checks if a numeric value between 13 and 16 has been entered
function validateCC(cc) {
  if (isNaN(cc)) {
    payment.cc.className = "error-true";
    return false;
  } else if (cc.length >= 13 && cc.length <= 16) {
    payment.cc.className = "error-false";
    return true;
  } else {
    payment.cc.className = "error-true";
    return false;
  }
}

//checks that a numeric value with a length of 5 has been entered
function validateZip(zip) {
  if (isNaN(zip)) {
    payment.zip.className = "error-true";
    return false;
  } else if (zip.length === 5) {
    payment.zip.className = "error-false";
    return true;
  } else {
    payment.zip.className = "error-true";
    return false;
  }
}

//checks that a numeric value with a length of 6 has been entered
function validateCVV(cvv) {
  if (isNaN(cvv)) {
    payment.cvv.className = "error-true";
    return false;
  } else if (cvv.length === 3) {
    payment.cvv.className = "error-false";
    return true;
  } else {
    payment.cvv.className = "error-true";
    return false;
  }
}

//final check that ensures all required entries return true
function validateForm() {
  nameIsValid = validateName(name);
  emailIsValid = validateEmail(email);
  shirtIsValid = validateShirt();
  activityIsValid = validateActivites();
  paymentTypeIsValid = validatePaymentType();
  ccIsValid = validateCC(cc);
  zipIsValid = validateZip(zip);
  cvvIsValid = validateCVV(cvv);
  if (payment.method.value === "credit card") {
    if (
      nameIsValid &&
      emailIsValid &&
      shirtIsValid &&
      activityIsValid &&
      ccIsValid &&
      zipIsValid &&
      cvvIsValid
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (
      nameIsValid &&
      emailIsValid &&
      shirtIsValid &&
      activityIsValid &&
      paymentTypeIsValid
    ) {
      return true;
    } else {
      return false;
    }
  }
}

//---- Event Listeners ----//
let errorCount = 0;
basicInfo.mail.addEventListener("keyup", e => {
  console.log(errorCount);
  let email = basicInfo.mail.value;
  const span = document.getElementById("error-message");
  const emailIsValid = validateEmailLive(email);
  if (!emailIsValid && errorCount === 1) {
    console.log("Invalid");
    buildEmailError();
  } else if (emailIsValid && errorCount >= 0) {
    console.log("Valid");
    span.remove();
  }
});

submit.addEventListener("click", e => {
  name = basicInfo.name.value;
  email = basicInfo.mail.value;
  cc = payment.cc.value;
  zip = payment.zip.value;
  cvv = payment.cvv.value;
  formIsValid = validateForm();
  if (!formIsValid) {
    e.preventDefault();
    alert("Please fix areas highlighted in red.");
    scroll(0, 0);
  } else {
    e.preventDefault();
    alert("Form submitted, see you at the event!");
    location.reload();
  }
});
