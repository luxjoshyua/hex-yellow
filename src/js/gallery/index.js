var next = document.querySelector(".gallery .next"),
  prev = document.querySelector(".gallery .prev"),
  imagesGallery = document.querySelectorAll(".slide"),
  currentSlide = 0,
  nextSlide = function() {
    (currentSlide += 1),
      (currentSlide %= imagesGallery.length),
      imagesGallery.forEach(function(e) {
        e.classList.remove("visible");
      }),
      imagesGallery[currentSlide].classList.add("visible");
  },
  prevSlide = function() {
    (currentSlide -= 1) < 0 && (currentSlide = imagesGallery.length - 1),
      imagesGallery.forEach(function(e) {
        e.classList.remove("visible");
      }),
      imagesGallery[currentSlide].classList.add("visible");
  };

next.addEventListener("click", function() {
  nextSlide();
}),
  prev.addEventListener("click", function() {
    prevSlide();
  });

var touchStart = null,
  touchEnd = null;
document.addEventListener("touchstart", function(e) {
  (touchStart = e.touches[0].pageX), (touchEnd = touchStart);
}),
  document.addEventListener("touchmove", function(e) {
    touchEnd = e.touches[0].pageX;
  }),
  document.addEventListener("touchend", function(e) {
    30 < touchStart - touchEnd
      ? nextSlide()
      : touchStart - touchEnd < -30 && prevSlide(),
      (touchEnd = touchStart = null);
  }),
  document.addEventListener("keyup", function(e) {
    "ArrowLeft" == e.key ? prevSlide() : "ArrowRight" == e.key && nextSlide();
  });
