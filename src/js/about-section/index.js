$(".italic-two").on("mouseover", function () {
  $(".techno").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-two").on("mouseout", function () {
  $(".techno").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

$(".italic-three").on("mouseover", function () {
  $(".raver").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-three").on("mouseout", function () {
  $(".raver").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

$(".italic-four").on("mouseover", function () {
  $(".gabber").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-four").on("mouseout", function () {
  $(".gabber").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

$(".italic-five").on("mouseover", function () {
  $(".acid").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-five").on("mouseout", function () {
  $(".acid").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

const colourWheel = document.querySelector(".colour-wheel");
const circle = document.querySelector(".circle");
colourWheel.addEventListener("mouseover", () => {
  circle.classList.add("circle-active", "fade");
});
colourWheel.addEventListener("mouseout", () => {
  circle.classList.remove("circle-active");
});
