import style from "./sass/index.scss";
// import jquery from "jquery";

import "./js/about-section";
import colour from "./js/circles";
import "./js/clickable-collage";
import colourInvert from "./js/dark-mode";
import "./js/gallery";
import "./js/marquee";
import "./js/mouse-print-yellow";
import "./js/scale";
// import "./js/screen-cover-black"; not actually using this effect currently
import "./js/scroll-bg-colour";
import "./js/scroll-section-animate";
import "./js/text-reveal";

const homeCircles = document.getElementById("home");
homeCircles.addEventListener("click", (e) => {
  colour();
});

import "./js/piggy-animate"; // moving to the bottom means the other scripts still run, hacky solution, fix

const logo = document.querySelector(".logo");
logo.addEventListener("click", (e) => {
  colourInvert();
});
