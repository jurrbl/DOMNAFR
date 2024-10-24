document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Valentina",
            role: "Cliente Domna",
            text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita."
        }, {
            img: "https://randomuser.me/api/portraits/women/45.jpg",
            name: "Giulia",
            role: "Cliente Domna",
            text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita."
        }, {
            img: "https://randomuser.me/api/portraits/women/46.jpg",
            name: "Sofia",
            role: "Cliente Domna",
            text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita."
        }
    ];

    let currentIndex = 0;

    // Funzione per aggiornare la testimonianza con effetto fade
    function updateTestimonial(direction) {
        const testimonialContainer = document.querySelector('.testimonial');

        // Applica un effetto di fade-out
        testimonialContainer.style.opacity = '0';
        testimonialContainer.style.transition = 'opacity 0.3s ease';

        // Dopo 300ms aggiorna il contenuto e applica il fade-in
        setTimeout(() => {
            currentIndex = direction === 'next' ? (currentIndex + 1) % testimonials.length : (currentIndex - 1 + testimonials.length) % testimonials.length;

            const testimonial = testimonials[currentIndex];
            document.getElementById("testimonial-img").src = testimonial.img;
            document.getElementById("testimonial-name").innerText = testimonial.name;
            document.getElementById("testimonial-role").innerText = testimonial.role;
            document.getElementById("testimonial-text").innerText = testimonial.text;

            // Applica il fade-in
            testimonialContainer.style.opacity = '1';
        }, 100); // Durata del fade-out
    }

    // Funzione per freccia sinistra
    document.querySelector('.prev-arrow').addEventListener('click', () => {
        updateTestimonial('prev');
    });

    // Funzione per freccia destra
    document.querySelector('.next-arrow').addEventListener('click', () => {
        updateTestimonial('next');
    });

    // Inizializzazione con la prima testimonianza
    updateTestimonial();
});