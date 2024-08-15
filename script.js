// Theme and Language Settings
function toggleSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    settingsPanel.classList.toggle('hidden');
}

function changeTheme(theme) {
    document.body.className = theme;
}

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.textContent = translations[language][key] || el.textContent;
    });
}

function startVoiceSearch() {
    alert('Voice search initiated! Start speaking...');
    // Placeholder for actual voice search functionality
}

function filterMenu() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('.item-name').textContent.toLowerCase();
        item.style.display = itemName.includes(searchInput) ? '' : 'none';
    });
}

function redeemPoints() {
    alert('Points redeemed! Enjoy your discount!');
}

function trackOrder() {
    const orderId = document.getElementById('orderId').value;
    const trackingDetails = document.getElementById('trackingDetails');

    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 10 + Math.random() * 20;
        trackingDetails.innerHTML = `Tracking Order #${orderId}: ${Math.min(progress, 100).toFixed(2)}% complete.`;

        if (progress >= 100) {
            clearInterval(progressInterval);
            trackingDetails.innerHTML = `Order #${orderId} has been delivered!`;
        }
    }, 1000);
}

// Simulated In-App Notifications
function simulateNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        notification.addEventListener('transitionend', () => {
            notification.remove();
        });
    }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
    simulateNotification('Welcome back! Check out our new offers.');
});
