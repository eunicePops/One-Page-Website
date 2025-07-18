function openModal(){
    document.getElementById("myModal").style.display = "block";
}
function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var captionText = document.getElementById("caption");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";

    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex); // or whatever your initialization call is
});
