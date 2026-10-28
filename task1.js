const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
function handleScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    links.forEach(function (link) {
        const isActive =
            link.getAttribute("href") === "#" + currentSection;

        link.classList.toggle("active", isActive);
    });
}

window.addEventListener("scroll", handleScroll, {
    passive: true
});


handleScroll();


menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});


links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
