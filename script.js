let orderItems = [];
let loyaltyPoints = 120;

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
    document.body.classList.remove('light', 'dark', 'colorful', 'vibrant');
    document.body.classList.add(theme);
}

function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        element.textContent = translations[language][element.getAttribute('data-i18n')] || element.textContent;
    });
}

function claimOffer(offer) {
    alert(`You've claimed the offer: ${offer}. Enjoy your discount!`);
}

function redeemPoints() {
    if (loyaltyPoints >= 100) {
        loyaltyPoints -= 100;
        alert('You have redeemed 100 points for a discount!');
        document.getElementById('loyaltyPoints').textContent = loyaltyPoints;
    } else {
        alert('Not enough points to redeem.');
    }
}

function filterMenu() {
    const search = document.getElementById('search').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const name = item.querySelector('.menu-info h3').textContent.toLowerCase();
        if (name.includes(search)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
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
        specialOffers: 'Special Offers',
        claimOffer: 'Claim Offer',
        reviews: 'Reviews',
        userReview: 'User Review',
        tracking: 'Order Tracking',
        trackOrder: 'Track Order',
        orderId: 'Order ID:',
        loyalty: 'Loyalty Rewards',
        currentPoints: 'Your current points:',
        redeemPoints: 'Redeem Points'
    },
    es: {
        profile: 'Tu Perfil',
        username: 'Nombre de Usuario:',
        email: 'Correo Electrónico:',
        password: 'Contraseña:',
        saveChanges: 'Guardar Cambios',
        menu: 'Nuestro Menú',
        orderNow: 'Realiza tu Pedido',
        contactUs: 'Contáctanos',
        chatWithSupport: 'Chatea con Soporte',
        specialOffers: 'Ofertas Especiales',
        claimOffer: 'Reclamar Oferta',
        reviews: 'Reseñas',
        userReview: 'Reseña del Usuario',
        tracking: 'Seguimiento de Pedidos',
        trackOrder: 'Rastrear Pedido',
        orderId: 'ID de Pedido:',
        loyalty: 'Recompensas de Lealtad',
        currentPoints: 'Tus puntos actuales:',
        redeemPoints: 'Canjear Puntos'
    },
    // Add more languages as needed
};
