new Glide("#testimonial1", {
  type: "carousel",
  perView: 5,
  breakpoints: {
    860: {
      perView: 3,
    },
    1100: {
      perView: 4,
    },
  },
}).mount();

new Glide("#people-say", {
  type: "carousel",
  perView: 1,
}).mount();

new Glide("#review-slider", {
  type: "carousel",
  perView: 2,
  breakpoints: {
    1100: {
      perView: 1,
    },
  },
}).mount();

new Glide("#case-studies-sm", {
  type: "carousel",
  perview: 6,
}).mount();

const caseBg = document.getElementById("case-studies-bg");
const caseSm = document.getElementById("case-studies-sm");
let screenWidth = window.innerWidth;
if (screenWidth > 875) {
  caseBg.style.display = "flex";
  caseSm.style.display = "none";
} else {
  caseBg.style.display = "none";
  caseSm.style.display = "block";
}
window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;
  if (screenWidth > 875) {
    caseBg.style.display = "flex";
    caseSm.style.display = "none";
  } else {
    caseBg.style.display = "none";
    caseSm.style.display = "block";
  }
});
