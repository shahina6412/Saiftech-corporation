const nav_btn = document.getElementById("nav-btn");
const mobile_menu = document.getElementById("mobile-menu");
const mobile_list = document.getElementById("mobile-list");
const sub_category1 = document.getElementById("sub-category1");
const sub_menu = document.getElementById("sub-menu");
const sub_category2 = document.getElementById("sub-category2");
const sub_menu2 = document.getElementById("sub-menu2");

nav_btn.addEventListener("click", () => {
  mobile_menu.classList.toggle("active");
  //   mobile_list.classList.toggle("opacity-100");
});

sub_category1.addEventListener("click", () => {
  sub_menu.classList.toggle("active");
  sub_menu.classList.toggle("h-full");
});

sub_category2.addEventListener("click", () => {
  sub_menu2.classList.toggle("active");
  sub_menu2.classList.toggle("h-full");
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
