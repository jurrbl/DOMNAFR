document.addEventListener("DOMContentLoaded", function () {
    setupSectionObserver();
    setupBackgroundFade();
});

function setupSectionObserver() {
    const sections = document.querySelectorAll('.fade-in-section');
    if (!sections.length) return;  // Ensure there are sections to observe

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

function setupBackgroundFade() {
    const backgrounds = document.querySelectorAll('.hero-background');
    if (!backgrounds.length) return;

    let backgroundIndex = 0;
    function fadeInOutBackground() {
        backgrounds.forEach((background, index) => {
            background.style.opacity = index === backgroundIndex ? '1' : '0';
            background.style.transition = 'opacity 1s ease';
        });
        backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
    }

    setInterval(fadeInOutBackground, 5000);
    fadeInOutBackground();
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    if (!content) return;

    const toggle = content.previousElementSibling?.querySelector('.accordion-toggle');
    if (!toggle) return;

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        toggle.textContent = '+';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        toggle.textContent = '-';
    }
    content.style.overflow = 'hidden';
}
