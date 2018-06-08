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
  cvv: document.getElementById("ccv"),
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
    shirtInfo.colors[1].style.display = "";
    shirtInfo.colors[2].style.display = "";
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
    shirtInfo.colors[4].style.display = "";
    shirtInfo.colors[5].style.display = "";
    shirtInfo.colors[3].selected = "true";
  }
});

//calculates and updates total based on activites selected
//prevents user from booking conflicting time slots
activities.fieldset.addEventListener("change", e => {
  const select = e.target;
  calculateTotal(select);
  updateTotal();
  if (select.name === "js-frameworks" && select.checked === true) {
    activities.express.style.color = "rgba(255, 255, 255, 0.5)";
    activities.express.style.fontStyle = "italic";
    activities.express.firstElementChild.setAttribute("disabled", "true");
  } else if (select.name === "js-frameworks" && select.checked === false) {
    activities.express.style.color = "#000";
    activities.express.style.fontStyle = "normal";
    activities.express.firstElementChild.removeAttribute("disabled");
  }
  if (select.name === "express" && select.checked === true) {
    activities.frameworks.style.color = "rgba(255, 255, 255, 0.5)";
    activities.frameworks.style.fontStyle = "italic";
    activities.frameworks.firstElementChild.setAttribute("disabled", "true");
  } else if (select.name === "express" && select.checked === false) {
    activities.frameworks.style.color = "#000";
    activities.frameworks.style.fontStyle = "normal";
    activities.frameworks.firstElementChild.removeAttribute("disabled");
  }
  if (select.name === "js-libs" && select.checked === true) {
    activities.node.style.color = "rgba(255, 255, 255, 0.5)";
    activities.node.style.fontStyle = "italic";
    activities.node.firstElementChild.setAttribute("disabled", "true");
  } else if (select.name === "js-libs" && select.checked === false) {
    activities.node.style.color = "#000";
    activities.node.style.fontStyle = "normal";
    activities.node.firstElementChild.removeAttribute("disabled");
  }
  if (select.name === "node" && select.checked === true) {
    activities.libraries.style.color = "rgba(255, 255, 255, 0.5)";
    activities.libraries.style.fontStyle = "italic";
    activities.libraries.firstElementChild.setAttribute("disabled", "true");
  } else if (select.name === "node" && select.checked === false) {
    activities.libraries.style.color = "#000";
    activities.libraries.style.fontStyle = "normal";
    activities.libraries.firstElementChild.removeAttribute("disabled");
  }
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

//---- Form Validation ----//

//---- DOM Selectors ----//
//---- Misc Declarations ----//
//---- On Page Load ----//
//---- Functions -----//
//---- Event Listeners ----//

let email = basicInfo.mail.value;
let isValid;
const nameError = "name. Eg: Bob Dole";
const emailError = "email address. Eg: yourname@domain.com";

const span = document.createElement("span");

//checks if the user entered a valid email address
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  console.log(re.test(email));
  return re.test(email);
}
//listens for typing in email field
//checks if email syntax is valid
//shows appropriate warning message if it isn't
basicInfo.mail.addEventListener("keyup", e => {
  email = basicInfo.mail.value;
  isValid = validateEmail(email);
  if (!isValid) {
    span.innerText = "Please enter a valid " + emailError;
    basicInfo.fieldset.insertBefore(span, basicInfo.mail.nextElementSibling);
    span.className = "email-error";
    basicInfo.mail.setAttribute("class", "error-true");
  } else {
    span.remove();
    basicInfo.mail.removeAttribute("class", "error-true");
  }
});

//submit button event listener
submit.addEventListener("click", e => {
  e.preventDefault();
  if (!isValid) {
    console.log("Please enter a valid email");
  } else {
    console.log("Bingo!");
  }
});
