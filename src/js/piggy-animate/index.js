var desktop = !navigator.userAgent.match(
  /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
);
//var motionSupport = !!window.DeviceMotionEvent && !desktop;
var orientationSupport = !!window.DeviceOrientationEvent && !desktop;
//var output = document.querySelector('.output');
var request = null;
var mouse = {
  x: 0,
  y: 0,
};
var cx = window.innerWidth / 2;
var cy = window.innerHeight / 2;

// Get a reference to the first <img> element on the page
//var imageElem = document.getElementsByTagName('img')[0],
var imageElem = document.getElementById("move"),
  // Create an event handler function for processing the device orientation event
  handleOrientationEvent = function(e) {
    // Get the orientation of the device in 3 axes, known as alpha, beta, and gamma,
    // represented in degrees from the initial orientation of the device on load
    var alpha = e.alpha,
      beta = e.beta,
      gamma = e.gamma;
    // NAS PORC
    beta = beta / 2;

    //output.innerHTML  = "alpha : " + alpha + "<br>\n";
    //output.innerHTML += "beta : " + beta + "<br>\n";
    //output.innerHTML += "gamma: " + gamma + "\n";

    // Rotate the <img> element in 3 axes according to the device’s orientation
    imageElem.style.webkitTransform =
      "rotateZ(0deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
    imageElem.style.MozTransform =
      "rotateZ(0deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
    imageElem.style.msTransform =
      "rotateZ(0deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
    imageElem.style.OTransform =
      "rotateZ(0deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
    imageElem.style.transform =
      "rotateZ(0deg) rotateX(" + beta + "deg) rotateY(" + gamma + "deg)";
  };

function handleMouseMovement(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;

  //output.innerHTML = "x : " + mouse.x + "<br>\n";
  //output.innerHTML += "y : " + mouse.y + "\n";

  cancelAnimationFrame(request);
  request = requestAnimationFrame(update);
}

function update() {
  dx = mouse.x - cx;
  dy = mouse.y - cy;

  // NAS PORC
  tiltx = dy / cy / 2;
  tilty = -(dx / cx);
  radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
  degree = radius * 40;
  //imageElem.style.transform = 'rotateZ(0deg) rotateX(' + tiltx + 'deg) rotateY(' + tilty + 'deg)';

  //   TweenLite.to(".pig-nose,", 1, {
  TweenLite.to(".pig-nose, .blue-ellipse", 1, {
    transform: "rotate3d(" + tiltx + ", " + tilty + ", 0, " + degree + "deg)",
    ease: Power2.easeOut,
  });
}

// Listen for changes to the device orientation using the gyroscope and fire the event
// handler accordingly
if (orientationSupport) {
  window.addEventListener("deviceorientation", handleOrientationEvent, false);
  //document.getElementById("doeSupported").innerText = "Supported!";
} else {
  window.addEventListener("mousemove", handleMouseMovement, false);
}

$("map").imageMapResize();

$("area").click(function(e) {
  e.preventDefault();
  var locationString = $(this).prop("href");
  locationString = locationString.replace(/.*\#(.*)/, "$1");
  console.log(locationString);
  $("#" + locationString).toggleClass("open");
});

$(".close").click(function(e) {
  e.preventDefault();
  $(this)
    .closest(".modal")
    .toggleClass("open");
});

$(".img-hover").hover(function() {
  var temp = $(this).attr("src");
  $(this).attr("src", $(this).attr("data-alt-src"));
  $(this).attr("data-alt-src", temp);
});

function selectRegion(ctx, side, region) {
  var selector = "img[usemap='#" + ctx.parentElement.name + "']";
  document
    .querySelector(selector)
    .setAttribute("src", "images/" + side + "-menu-blue" + region + ".png");
}
