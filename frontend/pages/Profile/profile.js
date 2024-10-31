// Funzione per gestire il login
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Nasconde il form di login e la sezione parallax
    document.querySelector('.login-section').style.display = 'none';
    document.querySelector('.parallax-2').style.display = 'none';
    
    // Mostra la sezione del profilo
    document.querySelector('.profile-page-container').style.display = 'flex';

    // Mock user data (in una situazione reale, questi dati verrebbero dal backend)
    document.getElementById('user-name').textContent = "Marcella Rossi";
    document.getElementById('user-email').textContent = "marcella@domna.net";
    document.getElementById('selected-course').textContent = "Corso di Yoga Avanzato";
});

// Funzione per il logout
function logout() {
    // Nasconde la sezione del profilo e mostra il form di login e la sezione parallax
    document.querySelector('.profile-page-container').style.display = 'none';
    document.querySelector('.login-section').style.display = 'flex'; // Usa flex per centrare il form
    document.querySelector('.parallax-2').style.display = 'none'; // Mostra la sezione parallax
}
