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
starnav.forEach((star) => {
  star.addEventListener("click", () => {
      removeActiveStar();
      star.classList.add("active");
      const activeContent= document.querySelector(`#${star.id}-content`);
      removeActiveContent();
      activeContent.classList.add("active");
})

});

function removeActiveStar(){
  starnav.forEach((star) => {
    star.classList.remove("active");
  })
}
function removeActiveContent(){
  starcontent.forEach((star) => {
    star.classList.remove("active");
  })
}
// function tabs(star, content) {
//   var i, coffee, starNav;
//   coffee = document.getElementsByClassName("coffee-tab__content");
//   for (i = 0; i < coffee.length; i++) {
//     coffee[i].style.display = "none";
//   }
//   starNav = document.getElementsByClassName("star__nav__link");
//   for (i = 0; i < starNav.length; i++) {
//     starNav[i].className = starNav[i].className.replace(" active", "");
//   }
//   document.getElementById(content).style.display = "block";
//   star.currentTarget.className += " active";
// }