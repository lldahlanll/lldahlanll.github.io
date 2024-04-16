// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika bakso menu di klik
document.querySelector("#profile-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan navbarNav
const bakso = document.querySelector("#profile-menu");

document.addEventListener("click", function (e) {
    if (!bakso.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});