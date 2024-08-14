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
    alert('Order submitted successfully!');
    // Here you would typically send the order data to the server.
    // For now, just clear the order and form.
    orderItems = [];
    updateOrderSummary();
    document.getElementById('orderForm').reset();
});
