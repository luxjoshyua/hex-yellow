export default function colourInvert() {
  // find the div with a class of menu, assign it as a variable
  var element = document.getElementsByClassName("menu");
  // find the body tag, assign it to a variable (bodyTag)
  var bodyTag = document.getElementsByTagName("body");
  // element.length checks there is something there, if there is, do something
  if (element.length > 0) {
    if (bodyTag[0].getAttribute("class", "inverted")) {
      bodyTag[0].setAttribute("class", "");
    } else {
      bodyTag[0].setAttribute("class", "inverted");
    }
  }
}
