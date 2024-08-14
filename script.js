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
    alert(`Thank you, ${name}! Your order has been submitted. We will deliver it to ${address}.`);
    // Here you would typically send the order data to the server.
    // For now, just clear the order and form.
    orderItems = [];
    updateOrderSummary();
    document.getElementById('orderForm').reset();
});
