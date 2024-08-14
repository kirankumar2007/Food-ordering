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
    // Send the order data to the server (not implemented)
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
