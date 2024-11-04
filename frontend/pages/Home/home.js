document.addEventListener("DOMContentLoaded", function () {
  // Select sections to animate when they become visible
  const sections = document.querySelectorAll(".fade-in-section");

  // Function to animate sections when they become visible
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Testimonials and automatic fade in/out animation
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Valentina",
      role: "Cliente Domna",
      text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Giulia",
      role: "Cliente Domna",
      text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/46.jpg",
      name: "Sofia",
      role: "Cliente Domna",
      text: "Ho iniziato il percorso ‘Domna’ e non potrei essere più soddisfatta! La preparazione è stata fondamentale per acquisire forza e flessibilità. Ho trasformato i miei desideri in realtà grazie a questo programma. Consiglio vivamente a tutte le donne che desiderano un cambiamento reale nella loro vita.",
    },
  ];

  let currentIndex = 0;

  // Function to update the testimonial with fade in/out effect
  function updateTestimonial() {
    const testimonialContainer = document.querySelector(".testimonial");

    testimonialContainer.style.opacity = "0";
    testimonialContainer.style.transition = "opacity 1s ease-in-out";

    setTimeout(() => {
      const testimonial = testimonials[currentIndex];
      document.getElementById("testimonial-img").src = testimonial.img;
      document.getElementById("testimonial-name").innerText = testimonial.name;
      document.getElementById("testimonial-role").innerText = testimonial.role;
      document.getElementById("testimonial-text").innerText = testimonial.text;

      testimonialContainer.style.opacity = "1";
      currentIndex = (currentIndex + 1) % testimonials.length;
    }, 1000);
  }

  setInterval(updateTestimonial, 3000);
  updateTestimonial();

  function letterByLetterAnimation(element) {
    const letters = element.textContent.split("");
    element.innerHTML = "";

    letters.forEach(function (letter) {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = "0";
        span.style.transform = "translateX(-100%)";

        // If the character is a space, apply extra width
        if (letter === " ") {
            span.style.marginRight = "0.2em"; // Adjust this value as needed
        }

        element.appendChild(span);
    });

    const spans = element.querySelectorAll("span");
    let index = 0;
    function animateLetters() {
        if (index < spans.length) {
            spans[index].style.opacity = "1";
            spans[index].style.color = "white";
            spans[index].style.transform = "translateX(0)";
            setTimeout(() => {
                index++;
                animateLetters();
            }, 35);
        }
    }
    animateLetters();
}

  const animatedText = document.getElementById("animated-text");
  letterByLetterAnimation(animatedText);

  letterByLetterAnimation(animatedText);

  // JavaScript function to create fade in and fade out effect for background images
  let backgroundIndex = 0;

  function fadeInOutBackground() {
    const backgrounds = document.querySelectorAll(".hero-background");

    // Hide all background images except the one currently active
    backgrounds.forEach((background, index) => {
      if (index === backgroundIndex) {
        background.style.opacity = 1;
        background.style.transition = "opacity 1s ease-in";
      } else {
        background.style.opacity = 0;
        background.style.transition = "opacity 1s ease-out";
      }
    });

    // Update the index to show the next background
    backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
  }

  // Set an interval to change the background every 5 seconds
  setInterval(fadeInOutBackground, 5000);

  // Initialize the first background when the page loads
  fadeInOutBackground();
});
