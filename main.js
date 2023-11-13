const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const sideBar = document.getElementById("sideBar");

// ? side bar toggle
openBtn.onclick = () => {
  sideBar.classList.toggle("open-sidebar");
};

closeBtn.onclick = () => {
  sideBar.classList.toggle("open-sidebar");
};

// ? sticky nav
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  const topNav = document.getElementById("topNav");
  let scrollNum = window.scrollY || document.documentElement.scrollTop;

  if (scrollNum > 100) {
    topNav.style.height = "0px";
    topNav.style.overflow = "hidden";
    topNav.style.transition = "all 0.3s ease";

    nav.style.width = "100%";
    nav.style.background = "white";
  } else {
    topNav.style.height = "54px";
     topNav.style.transition = "all 0.3s ease";
     
    topNav.style.overflow = "visible";
    nav.style.transition = "all 0.3s ease";
    nav.style.background = "white";
    nav.style.position = "relative";
   }
});

// ? add to cart
let count = 0;
function addToCart(data) {
  count += 1;
   const dCound = document.querySelector("#countProduct");
  dCound.innerHTML = count
  console.log(data);
}

 


// ? slider
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
     },
     breakpoints: {
       320: {
         slidesPerView: 1,
         spaceBetween : 10
       },
       768: {
         slidesPerView: 3,
         spaceBetween : 30
       },
       1024: {
         slidesPerView: 4,
         spaceBetween : 30
       },
     }
    });
// mini slider
var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
     },
     breakpoints: {
       320: {
         slidesPerView: 1,
         spaceBetween : 10
       },
       768: {
         slidesPerView: 1,
         spaceBetween : 10
       },
       1024: {
         slidesPerView: 2,
         spaceBetween : 30
       },
     }
    });
