function makeMarquee() {
  const title = "Upcoming Hex Yellow event on the 1st of December 2020";
  const marqueeText = new Array(90).fill(title).join(" — ");
  const marquee = document.querySelector(".marquee span");
  // using innerHTML lets us set the content inside an element
  marquee.innerHTML = marqueeText;
}

// here we actually run our makeMarquee function
makeMarquee();
