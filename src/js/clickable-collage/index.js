document.getElementById("collage");

const images = [
    "../../src/assets/images/drvgcvltvre.jpg",
    "../../src/assets/images/hannah.jpg",
    "../../src/assets/images/headless-tiny.png",
    "../../src/assets/images/jannah.jpg",
    "../../src/assets/images/keepsakes.jpg",
    "../../src/assets/images/hannah-2.jpg",
    "../../src/assets/images/regis.jpg",
    "../../src/assets/images/lucycliche.jpg",
    "../../src/assets/images/unhuman-two.jpg",
    "../../src/assets/images/brooke-powers.jpg",
    "../../src/assets/images/katia.jpg",
    "../../src/assets/images/loveless.png",
    "../../src/assets/images/rebel-yell.jpg",
    "../../src/assets/images/ryan-ford.jpg",
    "../../src/assets/images/unhuman.jpg",
    "../../src/assets/images/unhuman-three.jpg",
    "../../src/assets/images/rebel-yell-two.jpg",
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
