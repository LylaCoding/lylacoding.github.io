document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".Hamburger");
    const navBoxes = document.querySelector(".NavBoxes");
    const NavContainer = document.querySelector(".NavContainer");
    const nav = document.querySelector(".Nav");

    hamburger.addEventListener("click", function () {
        navBoxes.classList.toggle("active");
        nav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});