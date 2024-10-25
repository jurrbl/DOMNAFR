document.addEventListener("DOMContentLoaded", function () {
    // Seleziona tutte le sezioni che devono animarsi, escluso il parallasse
    const sections = document.querySelectorAll('.fade-in-section:not(.parallax-section)');

    // Funzione per animare le sezioni quando diventano visibili
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Una volta visibile, smette di osservarla
            }
        });
    }, { threshold: 0.1 });

    // Osserva ogni sezione tranne il parallasse
    sections.forEach(section => {
        observer.observe(section);
    });

    // Testimonianze e animazione lettera per lettera
    const testimonials = [
        {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Valentina",
            role: "Cliente Domna",
            text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita."
        },
        {
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            name: "Giulia",
            role: "Cliente Domna",
            text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita."
        },
        {
            img: "https://randomuser.me/api/portraits/women/46.jpg",
            name: "Sofia",
            role: "Cliente Domna",
            text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita."
        }
    ];

    let currentIndex = 0;

    // Funzione per aggiornare la testimonianza con effetto fade
    function updateTestimonial(direction = 'next') {
        const testimonialContainer = document.querySelector('.testimonial');

        testimonialContainer.style.opacity = '0';
        testimonialContainer.style.transition = 'opacity 0.3s ease';

        setTimeout(() => {
            currentIndex = direction === 'next' ? (currentIndex + 1) % testimonials.length : (currentIndex - 1 + testimonials.length) % testimonials.length;

            const testimonial = testimonials[currentIndex];
            document.getElementById("testimonial-img").src = testimonial.img;
            document.getElementById("testimonial-name").innerText = testimonial.name;
            document.getElementById("testimonial-role").innerText = testimonial.role;
            document.getElementById("testimonial-text").innerText = testimonial.text;

            testimonialContainer.style.opacity = '1';
        }, 100);
    }

    // Frecce per navigare nelle testimonianze
    document.querySelector('.prev-arrow').addEventListener('click', () => {
        updateTestimonial('prev');
    });
    document.querySelector('.next-arrow').addEventListener('click', () => {
        updateTestimonial('next');
    });

    updateTestimonial();

    // Animazione per cambiare lo sfondo
    const backgrounds = document.querySelectorAll('.hero-background');
    let currentBackgroundIndex = 0;

    function changeBackground() {
        backgrounds.forEach((background, index) => {
            background.classList.remove('active');
        });
        backgrounds[currentBackgroundIndex].classList.add('active');
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 4000);
    changeBackground();

    // Animazione lettera per lettera
    function letterByLetterAnimation(element) {
        const letters = element.textContent.split('');
        element.innerHTML = '';
        letters.forEach(function(letter) {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.opacity = '0';
            span.style.marginRight = '3px';
            span.style.transform = 'translateX(-100%)';
            element.appendChild(span);
        });

        const spans = element.querySelectorAll('span');
        let index = 0;
        function animateLetters() {
            if (index < spans.length) {
                spans[index].style.opacity = '1';
                spans[index].style.transform = 'translateX(0)';
                setTimeout(() => {
                    index++;
                    animateLetters();
                }, 35);
            }
        }
        animateLetters();
    }

    const animatedText = document.getElementById('animated-text');
    letterByLetterAnimation(animatedText);
});
