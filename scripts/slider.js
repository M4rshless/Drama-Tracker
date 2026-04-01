// Grab the slider element from the page
const slider = document.querySelector('.slider');

// Grab all the nav dots as an array-like list
const dots = document.querySelectorAll('.slider-nav a');

// Keep track of which slide we're currently on (0 = first)
let currentSlide = 0;
const totalSlides = 3;

// This function moves the "active" class to whichever dot matches the current slide
function updateDots(index) {
    // Loop through every dot and remove "active" from all of them first
    dots.forEach(dot => dot.classList.remove('active'));

    // Then add "active" only to the dot at position index
    dots[index].classList.add('active');
}


// Light up the first dot immediately when the page loads
updateDots(0);

// Run this function every 5 seconds automatically
setInterval(() => {
    // Move to the next slide, wrap back to 0 after the last one
    currentSlide = (currentSlide + 1) % totalSlides;

    // Scroll the slider to the correct position
    // Each slide is exactly as wide as the slider box (offsetWidth)
    slider.scrollTo({
        left: slider.offsetWidth * currentSlide,
        behavior: 'smooth'
    });

    // Update the dots to match the new slide
    updateDots(currentSlide);
}, 5000);
