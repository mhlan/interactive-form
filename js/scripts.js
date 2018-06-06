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
  payment: document.getElementById("payment"),
  cc: document.getElementById("cc-num"),
  zip: document.getElementById("zip"),
  cvv: document.getElementById("ccv"),
  month: document.getElementById("exp-month"),
  year: document.getElementById("exp-year")
};

//---- Misc Declarations ----//
let total = 0;

//---- On Page Load ----//

basicInfo.name.focus();
basicInfo.other.style.display = "none";
shirtInfo.design.firstElementChild.disabled = "true";
shirtInfo.colorDiv.style.display = "none";
buildTotal();

//---- Functions -----//
function buildTotal() {
  const span = document.createElement("span");
  span.id = "total-cost";
  span.innerText = "Total Due: $" + total;
  activities.fieldset.append(span);
}

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
  console.log(select);
  console.log(select.name);
});
