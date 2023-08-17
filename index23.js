var slideIndex = 0;
var slideTimer;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  slideTimer = setTimeout(showSlides, 5000); // Change image every 5 seconds
}

var slideshowContainer = document.getElementsByClassName("slideshow-container")[0];

slideshowContainer.addEventListener("mouseenter", function() {
  clearTimeout(slideTimer);
});

slideshowContainer.addEventListener("mouseleave", function() {
  slideTimer = setTimeout(showSlides, 5000);
});