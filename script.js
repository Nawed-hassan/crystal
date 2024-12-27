let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove("active"));
    indicators.forEach(indicator => indicator.classList.remove("active"));

    // Show the selected slide
    slides[index].classList.add("active");
    indicators[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Auto-slide functionality
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initial display
showSlide(slideIndex);
