let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .faq');
const totalSlides = slides.length;

function showSlides(index) {
    // Hide all slides initially
    slides.forEach((slide) => {
        slide.classList.remove('visible', 'center', 'left', 'right');
        slide.style.display = 'none'; // Hide all slides by default
    });

    // Display the selected three slides
    slides[index].classList.add('visible', 'center'); // Center slide
    slides[index].style.display = 'block';

    const leftIndex = (index - 1 + totalSlides) % totalSlides;  // Left slide
    slides[leftIndex].classList.add('visible', 'left');
    slides[leftIndex].style.display = 'block';

    const rightIndex = (index + 1) % totalSlides;  // Right slide
    slides[rightIndex].classList.add('visible', 'right');
    slides[rightIndex].style.display = 'block';
}

// Auto-slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlides(currentSlide);
}, 3000);

// Manual controls
document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlides(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlides(currentSlide);
});

// Initial display of the first three slides
showSlides(currentSlide);
