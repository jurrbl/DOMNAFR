document.querySelectorAll('.quiz-section button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`You selected: ${button.textContent}`);
        // Add logic to evaluate answers or proceed to the next question here
    });
});
