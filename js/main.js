
var carousels = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
var carouselActual = document.getElementsByClassName("carousel");
const MAXLENGTHCAROUSEL = carousels.length;

var texts = [1, 2, 3, 4];
var textActual = document.getElementsByClassName("text");

var previous = document.getElementsByClassName("previous");
var next = document.getElementsByClassName("next");

var intervalCarousel = setInterval(carouselMove, 2500);

index = 0;

function carouselMove() {

  if (index < MAXLENGTHCAROUSEL) {
    carouselActual[0].src = "img/" + carousels[index];
    textActual[0].innerHTML = "Text " + texts[index];
  }

  index++;

  if (index > MAXLENGTHCAROUSEL) {
    index = 0;
  }

}

function previousClick() {
  
}

previous[0].onclick = function() {
  previousClick();
};

next[0].onclick = function() {
  // fonctionAppelee();
};
