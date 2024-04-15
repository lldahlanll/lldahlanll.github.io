// Toggle active
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector(".navbar-extra");

// Menu Di Klik
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
  menu.classList.toggle("active"); // Menambah/menghapus kelas "active" pada ikon menu
};

// Klik di Luar side Bar untuk menutup Navbar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    menu.classList.remove("active"); // Menghapus kelas "active" pada ikon menu jika di luar side bar
  }
});
