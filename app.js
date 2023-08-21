const sidebarButton = document.querySelector(".toggle-btn");

sidebarButton.addEventListener("click", () => {
  document.body.classList.toggle("active");
});
