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

//displays corresponding color options based on selectedd theme
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

activities.fieldset.addEventListener("change", e => {
  const select = e.target;
  calculateTotal(select);
  updateTotal();
});
