document.addEventListener('DOMContentLoaded', (event) => {
    const navWrapper = document.querySelector('.navWrapper');
    navWrapper.innerHTML = '<div class="NavContainer"><div class="Nav"><button class="Hamburger">&#9776;</button><div class="NavBoxes"> <div class="NavBox"><a href="index.html">Home</a></div> <div class="NavBox"><a href="photoselect.html">Photography</a></div> <div class="NavBox"><a href="2025.html">2025</a></div> <div class="NavBox"><a href="recipes.html">Recipes</a></div> </div></div></div>';
});

// format for new link
// <div class="NavBox"><a href="format.html">format</a></div> 