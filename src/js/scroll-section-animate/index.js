$(document).ready(function() {
  $("#about").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#about-sec").offset().top,
      },
      500
    );
    return false;
  });
});

$(document).ready(function() {
  $("#artists").on("click", function(event) {
    //var menuH = $('.menu-container').height();
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#artists-sec-begin").offset().top,
      },
      500
    );
    return false;
  });
});

$(document).ready(function() {
  $("#gallery").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#gallery-sec").offset().top,
      },
      500
    );
    return false;
  });
});

$(document).ready(function() {
  $("#contact").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#contact-sec").offset().top,
      },
      500
    );
    return false;
  });
});

$(document).ready(function() {
  $("#back-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#sidebar").offset().top,
      },
      500
    );
    return false;
  });
});
