window.addEventListener("load", () => {
  // Sets custom color for box-icons
  const style = getComputedStyle(document.body);
  const color = style.getPropertyValue("--color");
  const boxIcons = document.querySelectorAll("box-icon");

  boxIcons.forEach((boxIcon) => {
    boxIcon.setAttribute("color", color);
  });
});

  
  