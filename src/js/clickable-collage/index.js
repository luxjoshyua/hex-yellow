document.getElementById("collage");

const images = [
    "../assets/drvgcvltvre.jpg",
    "../assets/hannah.jpg",
    "../assets/headless-tiny.png",
    "../assets/jannah.jpg",
    "../assets/keepsakes.jpg",
    "../assets/hannah-2.jpg",
    "../assets/regis.jpg",
    "../assets/lucycliche.jpg",
    "../assets/unhuman-two.jpg",
    "../assets/brooke-powers.jpg",
    "../assets/katia.jpg",
    "../assets/loveless.png",
    "../assets/rebel-yell.jpg",
    "../assets/ryan-ford.jpg",
    "../assets/unhuman.jpg",
    "../assets/unhuman-three.jpg",
    "../assets/rebel-yell-two.jpg",
];

// ./ means on the same level
// ../ means drill up two, from the child to the parent level

//

let i = 0;

function placeImage(x, y) {
    const nextSrc = images[i];

    // const img = document.createElement("img")
    const img = document.createElement("img");
    img.setAttribute("src", nextSrc);
    img.setAttribute("draggable", "true");

    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform =
        "translate(-50%, -50%) rotate(" + (Math.random() * 20 - 10) + "deg)";

    document.querySelector("#collage").appendChild(img);

    i = i + 1;
    if (i >= images.length) {
        i = 0;
    }
}

document.querySelector("#collage").addEventListener("click", function (event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
});

document
    .querySelector("#collage")
    .addEventListener("touchend", function (event) {
        event.preventDefault();
        placeImage(event.pageX, event.pageY);
    });
