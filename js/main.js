// Toggle active
const navbarNav = document.querySelector(".navbar");

// Menu Di Klik
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di Luar side Bar untuk menutup Navbar
const menu = document.querySelector("#menu-icon");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
