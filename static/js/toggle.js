// https://www.ditdot.hr/en/dark-mode-website-tutorial

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
let darkModeState = (localStorage.getItem("color-scheme") == null) && (window.matchMedia("(prefers-color-scheme: dark)").matches) || (localStorage.getItem("color-scheme") == "dark-mode");
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Toggles the "dark-mode" class on click and sets localStorage state
window.addEventListener("DOMContentLoaded", (evt) => {
  const d2l_button = document.querySelector(".btn.dark-to-light");
  const l2d_button = document.querySelector(".btn.light-to-dark");

  if (d2l_button && l2d_button) {
    d2l_button.addEventListener("click", () => {
      clicked = true;
      // Switch to light mode
      darkModeState = !darkModeState;
      toggleDarkMode(darkModeState);
      setDarkModeLocalStorage(darkModeState);

      // Hide the dark-to-light button and show the light-to-dark button
      d2l_button.style.display = "none";
      l2d_button.style.display = "";
    });
    l2d_button.addEventListener("click", () => {
      clicked = true;
      // Switch to dark mode
      darkModeState = !darkModeState;
      toggleDarkMode(darkModeState);
      setDarkModeLocalStorage(darkModeState);

      // Hide the light-to-dark button and show the dark-to-light button
      d2l_button.style.display = "";
      l2d_button.style.display = "none";
    });
  }
});

// Listen for changes in the OS settings.
// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
// https://stackoverflow.com/a/60000747
try {
  // Chrome & Firefox
  useDark.addEventListener("change", (evt) => toggleDarkMode(evt.matches));
} catch (e1) {
  try {
    // Safari
    useDark.addListener((evt) => toggleDarkMode(evt.matches));
  } catch (e2) {
    console.error(e2);
  }
}


