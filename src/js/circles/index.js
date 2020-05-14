$(function () {
    var randr = Math.floor(Math.random() * 255);
    var randg = Math.floor(Math.random() * 255);
    var randb = Math.floor(Math.random() * 255);
    var rand = "rgb(" + randr + "," + randg + "," + randb + ")";
    $(".home, .highlXight").css("background-color", rand);
});

export default function colour () {
    console.log("Func is being reached");
    var randr = Math.floor(Math.random() * 255);
    var randg = Math.floor(Math.random() * 255);
    var randb = Math.floor(Math.random() * 255);
    var rand = "rgb(" + randr + "," + randg + "," + randb + ")";
    $(".home, .highXlight").css("background-color", rand);
}
