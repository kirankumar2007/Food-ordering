let orderItems = [];

function addToOrder(item, price) {
    orderItems.push({ item, price });
    updateOrderSummary();
}

function updateOrderSummary() {
    const itemsTextarea = document.getElementById('items');
    itemsTextarea.value = orderItems.map(order => `${order.item} - $${order.price.toFixed(2)}`).join('\n');
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (orderItems.length === 0) {
        alert('Please add items to your order before submitting.');
        return;
    }
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    alert(`Thank you, ${name}! Your order has been submitted. We will deliver it to ${address}.`);
    orderItems = [];
    updateOrderSummary();
    document.getElementById('orderForm').reset();
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    if (message) {
        addChatMessage('user', message);
        chatInput.value = '';
        setTimeout(() => {
            addChatMessage('bot', 'Thank you for your message. Our support team will get back to you shortly.');
        }, 1000);
    }
});

function addChatMessage(sender, message) {
    const chatbox = document.getElementById('chatbox');
    const chatMessage = document.createElement('div');
    chatMessage.className = `chat-message ${sender}`;
    chatMessage.textContent = message;
    chatbox.appendChild(chatMessage);
    chatbox.scrollTop = chatbox.scrollHeight;
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Profile updated!\nUsername: ${username}\nEmail: ${email}`);
    document.getElementById('profileForm').reset();
});

function toggleSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    settingsPanel.classList.toggle('hidden');
}

function changeTheme(theme) {
    document.body.classList.remove('light', 'dark', 'colorful');
    document.body.classList.add(theme);
}

function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        element.textContent = translations[language][element.getAttribute('data-i18n')];
    });
}

const translations = {
    en: {
        profile: 'Your Profile',
        username: 'Username:',
        email: 'Email:',
        password: 'Password:',
        saveChanges: 'Save Changes',
        menu: 'Our Menu',
        orderNow: 'Place Your Order',
        contactUs: 'Contact Us',
        chatWithSupport: 'Chat with Support',
    },
    es: {
        profile: 'Tu Perfil',
        username: 'Nombre de usuario:',
        email: 'Correo electrónico:',
        password: 'Contraseña:',
        saveChanges: 'Guardar cambios',
        menu: 'Nuestro Menú',
        orderNow: 'Haz Tu Pedido',
        contactUs: 'Contáctenos',
        chatWithSupport: 'Chatea con Soporte',
    },
    fr: {
        profile: 'Votre Profil',
        username: 'Nom d\'utilisateur:',
        email: 'Email:',
        password: 'Mot de passe:',
        saveChanges: 'Enregistrer les modifications',
        menu: 'Notre Menu',
        orderNow: 'Passez Votre Commande',
        contactUs: 'Contactez-Nous',
        chatWithSupport: 'Chattez avec le Support',
    }
};

// Initialize with the default language
changeLanguage('en');
