"use strict";

const page = document.querySelector(".page");
const toggle = document.querySelector(".toggle__input");

toggle.addEventListener("change", toggleTheme);

setCheckedState();

// Using localStorage to set and get which colour theme the user has selected allows changing/refreshing a page on the website to stay in the colour theme chosen and not revert back to the default original theme.

function setCheckedState() {
  if (!(localStorage.checked === undefined)) {
    toggle.checked = isTrue(localStorage.getItem("checked"));
    toggleTheme();
  }
}

function isTrue(value) {
  return value === "true";
}

function toggleTheme() {
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }

  localStorage.setItem("checked", toggle.checked);
}
