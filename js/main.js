const firstFieldSet = document.querySelector("fieldset");
const title = document.getElementById("title");
const design = document.getElementById("design");
const colorSelections = document
  .getElementById("color")
  .querySelectorAll("option");
let otherTitleCount = 0;
let y = document.getElementById("design").firstElementChild;

//makes the "name" field the focus on page load/refresh
function focus() {
  const name = document.getElementById("name").focus();
}

//hides color selections and replaces with a message to user as default
function hideColors() {
  for (let i = 0; i < colorSelections.length; i++) {
    colorSelections[i].style.display = "none";
  }
  if (y.selected === true) {
    const colorSelection = document.getElementById("color");
    const option = document.createElement("option");
    option.setAttribute("id", "theme-select");
    option.innerText = "Select Theme";
    colorSelection.append(option);
    option.selected = "true";
  }
}

//create text input field when user selects "Other" from the title role select field
function createOtherTitle() {
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("id", "other-title");
  input.setAttribute("placeholder", "Your Title Role");
  firstFieldSet.appendChild(input);
}

//listens for changes to the job title selection field
//dynamically adds or removes text input field for "other" selection
title.addEventListener("change", e => {
  const titleSelection = e.currentTarget.value;
  if (titleSelection === "other" && otherTitleCount < 1) {
    otherTitleCount++;
    createOtherTitle();
  } else if (titleSelection !== "other" && otherTitleCount > 0) {
    const otherTitle = document.getElementById("other-title");
    otherTitleCount--;
    otherTitle.remove();
  }
});

design.addEventListener("change", e => {
  const designSelection = e.currentTarget.value;
  if (designSelection === "Select Theme") {
    hideColors();
  } else if (designSelection === "js puns") {
    hideColors();
    for (let i = 0; i < 3; i++) {
      let innerText = colorSelections[i];
      innerText.style.display = "block";
    }
  } else if (designSelection === "heart js") {
    hideColors();
    for (let i = 3; i < 6; i++) {
      let innerText = colorSelections[i];
      innerText.style.display = "block";
    }
  }
});

focus();
hideColors();
