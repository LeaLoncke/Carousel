
var carousels = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
var carouselActual = document.getElementsByClassName("carousel");
const MAXLENGTHCAROUSEL = carousels.length;

var texts = [1, 2, 3, 4];
var textActual = document.getElementsByClassName("text");

var previous = document.getElementsByClassName("previous");
var next = document.getElementsByClassName("next");

var intervalCarousel = setInterval(function(){carouselMove("+")}, 3000); // run the function every three seconds

var index = 0;

function carouselMove(parameter) {

  if (parameter === "+") {

    index++;

    if (index >= MAXLENGTHCAROUSEL) {
      index = 0;
    }

  } else if (parameter === "-") {

    index--;

    if (index === -1) {
      index = MAXLENGTHCAROUSEL - 1;
    }

  } else {
    console.log("This parameter is invalid");
  }

  // scroll through the table to change the source of the image and text
  carouselActual[0].src = "img/" + carousels[index];
  textActual[0].innerHTML = "Text " + texts[index];

} // End of carouselMove(parameter)


previous[0].onclick = function() {
  carouselMove("-");
}; // start the function once when we click on the previous button

next[0].onclick = function() {
  carouselMove("+");
}; // start the function once when we click on the next button
