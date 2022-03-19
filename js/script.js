/******** SELECTORS ********* */
const nav = document.querySelector(".nav");
const body = document.body;
const navLinks = document.querySelectorAll(".nav_link");

/******** BUTTONS ********* */

const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");

/******** EVENT LISTENERS ********* */

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        body.classList.remove("show");
        nav.classList.remove("show");
    });
});

btnMenu.addEventListener("click", () => {
    body.classList.add("show");
    nav.classList.add("show");
});

btnClose.addEventListener("click", () => {
    body.classList.remove("show");
    nav.classList.remove("show");
});
