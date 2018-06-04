const firstFieldSet = document.querySelector("fieldset");
const title = document.getElementById("title");
//makes the "name" field the focus on page load/refresh
function focus() {
  const name = document.getElementById("name").focus();
}
//create text input field when user selects "Other" from the title role select field
let otherTitleCount = 0;
function createOtherTitle() {
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("id", "other-title");
  input.setAttribute("placeholder", "Your Title Role");
  firstFieldSet.append(input);
}

title.addEventListener("change", e => {
  const titleSelection = e.currentTarget.value;
  if (titleSelection === "other" && otherTitleCount < 1) {
    otherTitleCount++;
    createOtherTitle();
  } else if (titleSelection !== "other" && otherTitleCount > 0) {
    otherTitleCount--;
    const otherTitle = document.getElementById("other-title");
    otherTitle.remove();
  }
});

focus();
