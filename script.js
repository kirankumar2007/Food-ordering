// script.js

// Cart functionality
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        const itemPrice = parseInt(button.getAttribute('data-price'));

        const item = {
            name: itemName,
            price: itemPrice
        };

        cart.push(item);
        updateCartCount();
        alert(`${itemName} added to cart!`);
    });
});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Cart button event
cartBtn.addEventListener('click', () => {
    displayCart();
});

function displayCart() {
    let cartContent = 'Cart Items:\n\n';
    cart.forEach((item, index) => {
        cartContent += `${index + 1}. ${item.name} - ₹${item.price}\n`;
    });
    cartContent += `\nTotal: ₹${calculateTotal()}`;
    alert(cartContent);
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Apply coupon functionality
const offers = document.querySelector('.offer-banner');
offers.addEventListener('click', () => {
    let discount = 0;
    const total = calculateTotal();
    if (total > 0) {
        discount = total * 0.5;
        alert(`Coupon applied! You save ₹${discount}`);
    } else {
        alert('Add items to the cart to apply a coupon.');
    }
});
