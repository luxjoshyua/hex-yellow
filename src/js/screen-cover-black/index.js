function begin() {
  const canvas = document.getElementById("canvasCover");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.addEventListener("mousemove", mouseMove);

  ctx.globalAlpha = 0.4;
  ctx.fillStyle = "white";
  // const size = 85;
  const size = 195;
  function mouseMove(e) {
    //draw transparent circle
    console.log(e.clientX);
    ctx.save();
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, size, 0, 2 * Math.PI);
    ctx.clip();
    ctx.clearRect(e.clientX - size, e.clientY - size, size * 2, size * 2);
    ctx.restore();
  }

  setTimeout(function() {
    canvas.removeEventListener("mousemove", mouseMove);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 2000);
}

setTimeout(begin, 2000);
