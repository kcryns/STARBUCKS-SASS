const kamote = document.querySelectorAll(".links__item h4")
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
    })
})

const toggleMenu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav1");
const opacity = document.querySelector(".background");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headernav.classList.toggle("open");
  opacity.classList.toggle("open");
});

const starnav = document.querySelectorAll(".star__nav__link");
const starcontent = document.querySelectorAll(".coffee-tab__content");
starnav.forEach((stars) => {
  stars.addEventListener("click", () => {
      removeActiveStars();
      stars.classList.add("active");
      const activeContent= document.querySelector(`#${stars.id}-content`);
      removeActiveContent();
      activeContent.classList.add("active");

})

})

function removeActiveStars(){
  starnav.forEach((star) => {
    star.classList.remove("active");
  })
}
function removeActiveContent(){
  starnav.forEach((star) => {
    star.classList.remove("active");
  })
}