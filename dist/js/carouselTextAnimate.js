// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector('[data-carousel="slide"]');
//   const items = carousel.querySelectorAll("[data-carousel-item]");

//   items.forEach((item) => {
//     item.addEventListener("slide.bs.carousel", function () {
//       const h1 = item.querySelector("h1");
//       const p = item.querySelector("p");
//       h1.classList.add("fadeIn");
//       p.classList.add("fadeIn");
//     });

//     item.addEventListener("slid.bs.carousel", function () {
//       const h1 = item.querySelector("h1");
//       const p = item.querySelector("p");
//       h1.classList.remove("fadeIn");
//       p.classList.remove("fadeIn");
//     });
//   });
// });

// =======================================================================
// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector('[data-carousel="slide"]');
//   const items = carousel.querySelectorAll("[data-carousel-item]");

//   function handleAnimation(item, action) {
//     const h1 = item.querySelector("h1");
//     const p = item.querySelector("p");
//     if (action === "add") {
//       h1.classList.add("animated");
//       p.classList.add("animated");
//     } else if (action === "remove") {
//       h1.classList.remove("animated");
//       p.classList.remove("animated");
//     }
//   }

//   items.forEach((item, index) => {
//     item.addEventListener("slide.bs.carousel", function () {
//       handleAnimation(item, "add");
//     });

//     item.addEventListener("slid.bs.carousel", function () {
//       handleAnimation(item, "remove");
//     });

//     // Ensure animation on first load
//     if (index === 0) {
//       handleAnimation(item, "add");
//     }
//   });
// });

// ======================================================================
// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector('[data-carousel="slide"]');
//   const items = carousel.querySelectorAll("[data-carousel-item]");

//   function handleAnimation(item, action) {
//     const h1 = item.querySelector("h1");
//     const p = item.querySelector("p");
//     if (action === "add") {
//       h1.classList.add("animated-h1");
//       p.classList.add("animated-p");
//     } else if (action === "remove") {
//       h1.classList.remove("animated-h1");
//       p.classList.remove("animated-p");
//     }
//   }

//   items.forEach((item, index) => {
//     item.addEventListener("slide.bs.carousel", function () {
//       handleAnimation(item, "add");
//     });

//     item.addEventListener("slid.bs.carousel", function () {
//       handleAnimation(item, "remove");
//     });

//     // Ensure animation on first load
//     if (index === 0) {
//       handleAnimation(item, "add");
//     }
//   });
// });

// ==============================
// new Carousel(document.getElementById('default-carousel'), {
//     slidesToScroll: 1,
//     slidesToShow: 1,
//     easing: 'ease-in-out',
//     duration: 1000,
//     loop: true,
//     autoplay: false
//   });
