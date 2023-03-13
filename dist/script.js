const kamote = document.querySelectorAll(".links__item h4")
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
    })
})

const toggleMenu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav1");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headernav.classList.toggle("open");
});