const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

