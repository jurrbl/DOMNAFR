document.addEventListener("DOMContentLoaded", function () {
  // Seleziona tutte le sezioni che devono animarsi
  const sections = document.querySelectorAll(".fade-in-section");

  // Funzione per animare le sezioni quando diventano visibili
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Una volta visibile, smette di osservarla
        }
      });
    },
    { threshold: 0.1 }
  );

  // Osserva ogni sezione
  sections.forEach((section) => {
    observer.observe(section);
  });
});
document.addEventListener("scroll", () => {
  const sections = [
    { element: document.querySelector(".hero"), darkBackground: false },
    {
      element: document.querySelector(
        ".container-about-section.fade-in-section"
      ),
      darkBackground: true,
    },
    {
      element: document.querySelector(".container-about-section.third"),
      darkBackground: false,
    },
    { element: document.querySelector(".service-cards"), darkBackground: true },
  ];
  const dots = document.querySelectorAll(".dot");

  let currentSectionIndex = -1;

  sections.forEach((section, index) => {
    const sectionTop = section.element.offsetTop;
    const sectionHeight = section.element.clientHeight;

    // Controlla se la sezione è visibile
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      currentSectionIndex = index;
    }
  });

  // Determina il colore dei puntini inattivi e attivo
  const isCurrentSectionDark = sections[currentSectionIndex]?.darkBackground;

  dots.forEach((dot, index) => {
    dot.classList.remove("active", "light", "dark");

    // Colore opposto per i puntini inattivi
    dot.classList.add(isCurrentSectionDark ? "light" : "dark");

    // Colore specifico per il puntino attivo
    if (index === currentSectionIndex) {
      dot.classList.add("active");
      dot.classList.toggle("light", !isCurrentSectionDark);
      dot.classList.toggle("dark", isCurrentSectionDark);
    }
  });
});
