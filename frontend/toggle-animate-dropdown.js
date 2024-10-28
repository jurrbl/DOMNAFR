function toggleAccordion(id) {
    const content = document.getElementById(id);
    const toggle = content.previousElementSibling.querySelector('.accordion-toggle');
    
    if (content.style.maxHeight) {
        // Chiudi il contenuto
        content.style.maxHeight = null;
        toggle.textContent = '+';
    } else {
        // Mostra il contenuto con un'animazione smooth
        content.style.maxHeight = content.scrollHeight + "px";
        toggle.textContent = '-';
    }
}
