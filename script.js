// Toggle Menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Scroll Section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // Sticky Navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Toggle and Navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};
//SCROLL REVEAL

ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading, .contact h2", { origin: "top" });
ScrollReveal().reveal(".home-image, .contact form", { origin: "bottom" });
ScrollReveal().reveal(
  ".home-contact  h1, .about-img, .skills h2, .portfolio-box ",
  {
    origin: "left",
  }
);
ScrollReveal().reveal(
  ".home-contact  p, .about-content, .portfolio h2, .skill-container, .certificate-container",
  {
    origin: "right",
  }
);

//TYPED JS
const typed = new Typed(".multiple-text", {
  strings: [
    "MERN Stack Developer",
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  typeSpeed: 70,
  backSpeed: 20,
  loop: true,
});

//VANTA NET JS
window.addEventListener("DOMContentLoaded", () => {
  VANTA.DOTS({
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x2191e0,
    color2: 0x5b5555,
    size: 2.5,
    spacing: 27.0,
    showLines: false,
  });
});
