var slideIndex;
function showSlides() {
	var i;
	var slides = document.getElementByClassName("first");
	var dots = document.getElementByClassName("dot");
	for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
    }
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	slideIndex ++;
	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
}
showSlides(slideIndex = 0);

function currentSlide(n) {
	showSlides(slideIndex = n);
}