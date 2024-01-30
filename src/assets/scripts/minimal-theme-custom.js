function toggleTheme() {
  const button = document.querySelector("a[data-theme-switcher]");
  const light = "🔆";
  const dark = "🌙";
  
  // Add switching button functionality
  button.addEventListener("click", function () {
    console.log("clicked");
    if (button.getAttribute("data-theme-switcher") === "light") {
      button.setAttribute("data-theme-switcher", "dark");
      button.textContent = light;
    } else {
      button.setAttribute("data-theme-switcher", "light");
      button.textContent = dark;
    }
  });

  // Set correct buttons on reload
  const currentTheme = localStorage.getItem("picoPreferredColorScheme");
  currentTheme == "dark"
    ? (button.textContent = dark)
    : (button.textContent = light);  
}

window.addEventListener("load", toggleTheme);
