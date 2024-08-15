// Order tracking feature with progress bar
function trackOrder() {
    const orderId = document.getElementById('orderId').value;
    const trackingDetails = document.getElementById('trackingDetails');
    
    if (orderId.trim() === '') {
        trackingDetails.textContent = 'Please enter a valid Order ID.';
        return;
    }

    // Simulated progress (in a real app, fetch order status from the server)
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 20;
        trackingDetails.innerHTML = `Tracking Order #${orderId}: ${progress}% complete.`;

        if (progress >= 100) {
            clearInterval(progressInterval);
            trackingDetails.innerHTML = `Order #${orderId} has been delivered!`;
        }
    }, 1000);
}

// Theme and Language Settings
function changeTheme(theme) {
    const body = document.body;
    body.className = theme;
}

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.textContent = translations[language][key] || el.textContent;
    });
}

// Simulated Push Notifications for order updates
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
