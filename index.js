const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");
navbarMenu.classList.remove("active");
navbarToggle.addEventListener("click", ()=> {
    console.log("funciona?")
    navbarMenu.classList.toggle("active");
})