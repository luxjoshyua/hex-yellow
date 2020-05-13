// as we scroll down the page

// calculate the background opacity

$(document).on("scroll", function() {
  var scrollTop = $(document).scrollTop();

  var scrollBottom = scrollTop + $(window).height();

  var pageBottom = $(document).height();

  var diff = pageBottom - scrollBottom;

  var opacity = 1 - diff / 300;

  $("div.fade-bg").css("opacity", opacity);
});
