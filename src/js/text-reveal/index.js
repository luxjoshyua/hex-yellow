$(document).ready(function() {
  // 		document.getElementById('vid').play();
});

var text =
  "Hex Yellow welcomes collaboration and contact of all shapes, sizes, and colours. Currently, we are particularly interested in partnership with visual artists and those working in the industrial noise vein, fuck buttons where are you? Reach us at hexyellow@gmail.com.";
var arr = text.split(" ");
var mappedRange;
var currentWord = arr[0];

$(document).mousemove(function(event) {
  mappedRange = Math.floor((arr.length * event.pageX) / window.innerWidth);
  currentWord = arr[mappedRange];
  $("#intro h1").text(currentWord);
});

$(document).ready(function() {
  $("#intro").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#intro").height(),
      },
      500
    );
  });
});

window.setTimeout(function() {
  $("#intro h1").addClass("visible");
}, 1000);
