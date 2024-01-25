const button = document.querySelector("a[data-theme-switcher]");

// Add switching button functionality
button.addEventListener("click", function () {
  if (button.getAttribute("data-theme-switcher") === "light") {
    button.setAttribute("data-theme-switcher", "dark");
    button.textContent = "🌙";
  } else {
    button.setAttribute("data-theme-switcher", "light");
    button.textContent = "🔆";
  }
});

// Set correct buttons on reload
const currentTheme = localStorage.getItem("picoPreferredColorScheme");
currentTheme == "dark"
  ? (button.textContent = "🔆")
  : (button.textContent = "🌙");
