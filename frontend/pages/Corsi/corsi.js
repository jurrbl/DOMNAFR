window.onload = function() {
    // Dropdown Animation
    const sectionTitle = document.querySelector(".section-title");
    const sectionContent = document.querySelector(".section-content");
    
    sectionTitle.addEventListener("click", () => {
        sectionContent.classList.toggle("show");
    });
}