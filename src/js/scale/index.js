$(document).ready(function() {
  const wW = window.innerWidth;
  const wH = window.innerHeight;
  const menuH = $(".menu-container").height();
  //   document.getElementById("infoTest").innerHTML = wH;

  var screenW = $(window).width();
  if (screenW > 900) {
    //     var menuH = $('.menu-container').height();
    $(".mStick").css("top", menuH + "px");

    $(".home.tl, .home.tr").css("top", menuH + "px");
    $("#s1").css("padding-top", menuH + "px");
    var maxHCalc = "calc(100vh - " + menuH + "px)";
    $(".home.bl, .home.br, .home.tl, .home.tr").css("max-height", maxHCalc);

    var sidebarW = $("#sidebar").width();
    $(".home.tl, .home.bl").css("left", sidebarW + "px");
    //     var maxWCalc = "calc(100vw - " + sidebarW + "px)";
    var maxWCalc = wW - sidebarW;
    $(".home.bl, .home.br, .home.tl, .home.tr").css("max-width", maxWCalc);

    var w = Math.floor(Math.random() * 100);
    var h = Math.floor(Math.random() * 100);

    var wLeft = w + "%";
    var hTop = h + "%";
    var wRight = 100 - w + "%";
    var hBottom = 100 - h + "%";

    var hTopCalc = "calc(" + hTop + " - " + menuH + "px)";
    var wLeftCalc = "calc(" + wLeft + " - " + sidebarW + "px)";

    $(".home.tl, .home.tr").css("height", hTopCalc);
    $(".home.tl, .home.bl").css("width", wLeftCalc);
    $(".home.tr, .home.br").css("width", wRight);
    $(".home.br, .home.bl").css("height", hBottom);
  } else {
    const menuH = $(".menu-container").height();
    //     $(".mStick").css("top", (menuH + "px"));

    $(".home.tl, .home.tr").css("top", menuH + "px");
    //     $(".home.tl, .home.tr").css("top", "0");
    $("#s1").css("padding-top", menuH + "px");
    //     $("#s1").css("height", ("calc(" + wH + "px - " + menuH + "px)"));
    $("#s1").css("height", wH + "px");
    $(".path-container-m").css("top", "calc(" + wH + "px - 250px)");
    //     var maxHCalc = "calc(" + windowH + "px - " + menuH + "px)";
    const maxHCalc = wH - menuH;
    $(".home.bl, .home.br, .home.tl, .home.tr").css("max-height", maxHCalc);

    var w = Math.floor(Math.random() * 100);
    var h = Math.floor(Math.random() * 100);

    var wLeft = w + "%";
    var hTop = h + "%";
    var wRight = 100 - w + "%";
    var hBottom = 100 - h + "%";

    var hTopCalc = "calc(" + hTop + " - " + menuH + "px)";

    //     $(".home.tl, .home.tr").css("height", hTopCalc);
    $(".home.tl, .home.bl").css("width", wLeft);
    $(".home.tr, .home.br").css("width", wRight);
    //     $(".home.br, .home.bl").css("height", hBottom);
    $(".home.br, .home.bl").css("height", maxHCalc);
  }

  $(document).on("mousemove", function(event) {
    if (screenW > 900) {
      var menuH = $(".menu-container").height();
      $(".home.tl, .home.tr").css("top", menuH + "px");
      $("#s1").css("padding-top", menuH + "px");
      var maxHCalc = "calc(100vh - " + menuH + "px)";
      $(".home.bl, .home.br, .home.tl, .home.tr").css("max-height", maxHCalc);

      var sidebarW = $("#sidebar").width();
      console.log(wW);
      //       if (sidebarW === undefined) {
      //         var sidebarW = 0;
      //       };
      $(".home.tl, .home.bl").css("left", sidebarW + "px");
      var maxWCalc = wW - sidebarW;
      $(".home.bl, .home.br, .home.tl, .home.tr").css("max-width", maxWCalc);

      $(".home.tl, .home.bl").css("width", event.pageX - sidebarW);
      $(".home.tl, .home.tr").css("height", event.pageY - menuH);
      $(".home.tr, .home.br").css("width", $(window).width() - event.pageX);
      $(".home.bl, .home.br").css("height", $(window).height() - event.pageY);
    }
  });

  document.addEventListener(
    "touchmove",
    function(e) {
      //     e.preventDefault();
      if (screenW < 900) {
        $(".home.tl, .home.tr").css("top", menuH + "px");
        $("#s1").css("padding-top", menuH + "px");
        //       var maxHCalc = "calc(100vh - " + menuH + "px)";
        const maxHCalc = wH - menuH;
        $(".home.bl, .home.br, .home.tl, .home.tr").css("max-height", maxHCalc);

        var maxWCalc = "100vw";
        $(".home.bl, .home.br, .home.tl, .home.tr").css("max-width", maxWCalc);

        var touch = e.touches[0];
        //       var y = touch.pageY;
        var x = touch.pageX;

        //       $(".home.tl, .home.tr").css("height", (y - menuH));
        //       $(".home.bl, .home.br").css("height", (wH - y));
        $(".home.tl, .home.bl").css("width", x);
        $(".home.tr, .home.br").css("width", wW - x);
      }
    },
    false
  );
});
