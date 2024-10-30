document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login by displaying user info
    document.querySelector('.login-section').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
    
    // Mock user data (in a real scenario, this would come from your backend)
    document.getElementById('user-name').textContent = "Marcella";
    document.getElementById('user-email').textContent = "marcella@domna.net";
    document.getElementById('selected-course').textContent = "Corso di Yoga Avanzato";
});

function logout() {
    // Hide user info and show login section
    document.getElementById('user-info').style.display = 'none';
    document.querySelector('.login-section').style.display = 'block';
}


document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Nasconde il form di login
    document.querySelector('.login-section').style.display = 'none';
    
    // Mostra la sezione del profilo
    document.querySelector('.profile-page-container').style.display = 'flex';
});
