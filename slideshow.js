let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Function to change slides manually
function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
    resetAutoSlide(); // Reset the auto-slide timer when manually navigating
}

// Function to start auto-sliding
function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1); // Move to the next slide automatically
    }, 5000); // Change slide every 5 seconds
}

// Function to reset the auto-slide timer
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    startAutoSlide();

    // Add event listeners to buttons
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
});