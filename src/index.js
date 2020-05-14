import style from "./sass/index.scss";
// import jquery from "jquery";

import "./js/about-section";
import colour from "./js/circles";
import "./js/clickable-collage";
import "./js/dark-mode";
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
  console.log("We've reached here in index.js");
  colour();
});

import "./js/piggy-animate"; // moving to the bottom means the other scripts still run, hacky solution, fix
