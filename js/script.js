// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const menuIcon = document.querySelector("#menu-icon");

menuIcon.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Hide navbarNav when clicked outside
document.addEventListener("click", function (e) {
  if (!menuIcon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  }
});

// Toggle Icon
const menuIcons = document.querySelectorAll("#menu-icon");
const navbars = document.querySelectorAll(".navbar-nav");

menuIcons.forEach((menuIcon, index) => {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbars[index].classList.toggle("active");
  };
});

// Scroll Section Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar-nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("sticky", window.scrollY > 100);
  }

  let menuIcon = document.querySelector("#menu-icon");
  if (menuIcon) {
    menuIcon.classList.remove("bx-x");
    navbars.forEach((navbar) => {
      navbar.classList.remove("active");
    });
  }
};

// Typing Text
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Mobile Developer", "IT Support"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
