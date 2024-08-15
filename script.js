function toggleSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    settingsPanel.classList.toggle('hidden');
}

function changeTheme(theme) {
    document.body.className = theme;
}

function changeLanguage(language) {
    // Implement language change functionality
    alert('Language changed to ' + language);
}

function addToCart(itemName, itemPrice) {
    const cart = document.getElementById('cart');
    const newItem = document.createElement('div');
    newItem.className = 'cart-item';
    newItem.innerHTML = `
        <img src="placeholder.jpg" alt="${itemName}">
        <h3 class="item-name">${itemName}</h3>
        <p class="item-price">$${itemPrice.toFixed(2)}</p>
        <input type="number" value="1" min="1" onchange="updateCartItem('${itemName}', this.value)">
        <button onclick="removeFromCart('${itemName}')">Remove</button>
    `;
    cart.appendChild(newItem);
    updateCartTotal();
}

function removeFromCart(itemName) {
    const cartItems = document.getElementsByClassName('cart-item');
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].getElementsByClassName('item-name')[0].textContent === itemName) {
            cartItems[i].remove();
            break;
        }
    }
    updateCartTotal();
}

function updateCartItem(itemName, quantity) {
    const cartItems = document.getElementsByClassName('cart-item');
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].getElementsByClassName('item-name')[0].textContent === itemName) {
            const priceElement = cartItems[i].getElementsByClassName('item-price')[0];
            const basePrice = parseFloat(priceElement.textContent.replace('$', ''));
            const newPrice = basePrice * quantity;
            priceElement.textContent = `$${newPrice.toFixed(2)}`;
            break;
        }
    }
    updateCartTotal();
}

function updateCartTotal() {
    const cartItems = document.getElementsByClassName('cart-item');
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        const priceElement = cartItems[i].getElementsByClassName('item-price')[0];
        const itemPrice = parseFloat(priceElement.textContent.replace('$', ''));
        total += itemPrice;
    }
    document.getElementsByClassName('cart-total')[0].getElementsByTagName('h3')[0].textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Proceeding to checkout...');
    // Add checkout logic
}

function uploadProfilePic() {
    const fileInput = document.getElementById('uploadProfilePic');
    const profilePic = document.getElementById('profilePic');

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        profilePic.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        profilePic.src = "default-avatar.png";
    }
}

function saveProfile() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userLocation = document.getElementById('userLocation').value;
    const userDOB = document.getElementById('userDOB').value;

    alert(`Profile saved! \nName: ${userName} \nEmail: ${userEmail} \nLocation: ${userLocation} \nDOB: ${userDOB}`);
    // Save profile details logic
}

function filterMenu() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const menuItems = document.getElementsByClassName('menu-item');
    
    for (let i = 0; i < menuItems.length; i++) {
        const itemName = menuItems[i].getElementsByClassName('item-name')[0].textContent.toLowerCase();
        if (itemName.includes(searchInput)) {
            menuItems[i].style.display = '';
        } else {
            menuItems[i].style.display = 'none';
        }
    }
}

function trackOrder() {
    const orderId = document.getElementById('orderId').value;
    alert(`Tracking order with ID: ${orderId}`);
    // Implement order tracking functionality
}
