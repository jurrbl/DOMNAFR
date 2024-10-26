const carousel = document.querySelector('.carousel');
const items = Array.from(carousel.children);
const totalWidth = carousel.scrollWidth;


while (carousel.scrollWidth < 2 * totalWidth) {
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });
}

function pauseCarousel() {
    carousel.style.animationPlayState = 'paused';
}


function resumeCarousel() {
    carousel.style.animationPlayState = 'running';
}

// Add event listeners to pause and resume
carousel.addEventListener('mouseenter', pauseCarousel);
carousel.addEventListener('mouseleave', resumeCarousel);
carousel.addEventListener('touchstart', pauseCarousel);
carousel.addEventListener('touchend', resumeCarousel);
