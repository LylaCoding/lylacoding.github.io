document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".Hamburger");
    const navBoxes = document.querySelector(".NavBoxes");

    hamburger.addEventListener("click", function () {
        navBoxes.classList.toggle("active");
    });
});