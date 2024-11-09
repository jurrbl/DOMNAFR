function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const menuItems = document.querySelectorAll('.menu-item');
    
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.innerText.toLowerCase() === sectionId) {
            item.classList.add('active');
        }
    });
}

function openForm() {
    const activeSection = document.querySelector('.content-section.active');
    
    // Verifica se l'elemento attivo esiste
    if (!activeSection) {
        console.error("Errore: Nessuna sezione attiva trovata.");
        alert("Errore: Nessuna sezione attiva trovata.");
        return; // Esce dalla funzione se l'elemento non esiste
    }

    const sectionId = activeSection.id;
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Resetta il contenuto del form

    if (sectionId === 'corsi') {
        formContainer.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <label for="courseTitle" style="min-width: 150px;">Titolo del Corso:</label>
                <input type="text" id="courseTitle" style="flex: 1;" placeholder="Inserisci il titolo" required>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <label for="coursePrice" style="min-width: 150px;">Prezzo:</label>
                <input type="text" id="coursePrice" style="flex: 1;" placeholder="Inserisci il prezzo" required>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <label for="courseQuantity" style="min-width: 150px;">Quantità:</label>
                <input type="number" id="courseQuantity" style="flex: 1;" min="1" value="1" required>
            </div>
            <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <label for="courseFeatures" style="min-width: 150px; margin-top: 5px;">Caratteristiche:</label>
                <textarea id="courseFeatures" style="flex: 1;" placeholder="Inserisci le caratteristiche, separate da virgola"></textarea>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <label for="courseType" style="min-width: 150px;">Tipo di Corso:</label>
                <div style="flex: 1;">
                    <label style="margin-right: 10px;">
                        <input type="checkbox" id="domnaCheckbox"> DOMNA
                    </label>
                    <label>
                        <input type="checkbox" id="domnaPremiumCheckbox"> DOMNA Premium
                    </label>
                </div>
            </div>
        `;
    } else if (sectionId === 'blog') {
        formContainer.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <label for="blogTitle" style="min-width: 150px;">Titolo del Blog:</label>
                <input type="text" id="blogTitle" style="flex: 1;" placeholder="Inserisci il titolo" required>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <label for="blogImage" style="min-width: 150px;">URL Immagine:</label>
                <input type="text" id="blogImage" style="flex: 1;" placeholder="Inserisci l'URL dell'immagine" required>
            </div>
            <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <label for="blogContent" style="min-width: 150px; margin-top: 5px;">Contenuto:</label>
                <textarea id="blogContent" style="flex: 1;" placeholder="Inserisci il contenuto" required></textarea>
            </div>
        `;
    }

    document.getElementById('formModal').style.display = 'flex';
}


function closeForm() {
    document.getElementById('formModal').style.display = 'none';
}

function createCard() {
    const activeSection = document.querySelector('.content-section.active').id;

    if (activeSection === 'corsi') {
        const title = document.getElementById('courseTitle').value;
        const price = document.getElementById('coursePrice').value;
        const quantity = document.getElementById('courseQuantity').value;
        const features = document.getElementById('courseFeatures').value.split(',');

        const container = document.getElementById('courseContainer');
        const courseCard = document.createElement('div');
        courseCard.className = 'container';
        courseCard.innerHTML = `
            <div class="left-column">
                <h1 class="product-title">${title}</h1>
                <p class="price">$${price}</p>
                <div class="quantity-container">
                    <label class="quantity-label" for="quantity">Quantity:</label>
                    <input class="quantity-input" type="number" value="${quantity}" min="1" disabled>
                </div>
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
            <div class="right-column">
                <ul class="features-list">
                    ${features.map(feature => `<li>${feature.trim()}</li>`).join('')}
                </ul>
            </div>
        `;
        container.appendChild(courseCard);
    } else if (activeSection === 'blog') {
        const title = document.getElementById('blogTitle').value;
        const imageUrl = document.getElementById('blogImage').value;
        const content = document.getElementById('blogContent').value;

        const container = document.getElementById('blogContainer');
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-post';
        blogCard.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <div class="blog-content">
                <h3>${title}</h3>
                <p>${content.substring(0, 100)}...</p>
                <a href="#" class="read-more">Leggi di più</a>
            </div>
        `;
        container.appendChild(blogCard);
    }

    closeForm();
    showToast('Contenuto creato con successo!', 'success');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
