// Hamburger Menu Toggle
window.onload = function () {
    document.getElementById("hamburger").addEventListener("click", function (e) {
      e.stopPropagation();
      const header = document.querySelector("header");
      header.classList.toggle("change");
    });
}


// Theme and Boxicons Toggle
function toggleTheme() {
    const button = document.querySelector("a[data-theme-switcher]");
    const light = "🔆";
    const dark = "🌙";
    
    // Add switching button functionality
    button.addEventListener("click", function () {
      if (button.getAttribute("data-theme-switcher") === "light") {
        button.setAttribute("data-theme-switcher", "dark");
        button.textContent = light;
      } else {
        button.setAttribute("data-theme-switcher", "light");
        button.textContent = dark;
      }
    });
  
    // Set correct buttons on reload - Made to work with Astro Transitions
    const currentTheme = localStorage.getItem("picoPreferredColorScheme");
    currentTheme == "dark"
      ? (button.textContent = dark)
      : (button.textContent = light);      
  }
  
  function setBoxiconColor() {
    const style = getComputedStyle(document.body);
    const color = style.getPropertyValue("--color");
    const boxIcons = document.querySelectorAll("box-icon");
  
    boxIcons.forEach((boxIcon) => {
      boxIcon.setAttribute("color", color);
    });
  }
  
  document.addEventListener("astro:page-load", () => {
    setBoxiconColor();
    toggleTheme();
  });
  
  