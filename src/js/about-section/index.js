$(".italic-two").on("mouseover", function() {
  $(".techno").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-two").on("mouseout", function() {
  $(".techno").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

$(".italic-three").on("mouseover", function() {
  $(".raver").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-three").on("mouseout", function() {
  $(".raver").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

$(".italic-four").on("mouseover", function() {
  $(".gabber").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-four").on("mouseout", function() {
  $(".gabber").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

$(".italic-five").on("mouseover", function() {
  $(".acid").css("opacity", "1");
  $(".standard").css("opacity", "0");
  $("a").css("opacity", "0");
});

$(".italic-five").on("mouseout", function() {
  $(".acid").css("opacity", "0");
  $(".standard").css("opacity", "1");
  $("a").css("opacity", "1");
});

// colour wheel

// // 1. on hover, create a new div with a class of pink-dots
$(".colour-wheel").hover(() => {
  $("").toggleClass("on");
});

// GRAPHIC DESIGNER...
// To fade out text link
// 1. toggle a class of "faded"
// 2. in css, add styles to .faded
$(".colour-wheel").hover(() => {
  $(".fade").toggleClass("faded");
  $(".circle").toggleClass("loading");
});
