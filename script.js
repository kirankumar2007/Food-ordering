document.addEventListener("DOMContentLoaded", function () {
    // Menu items
    const menuItems = [
        { name: "Pizza", price: 12.99, image: "pizza.jpg" },
        { name: "Biryani", price: 10.99, image: "biryani.jpg" },
        { name: "Chole Bhature", price: 8.99, image: "chole-bhature.jpg" },
        { name: "Burger", price: 7.99, image: "burger.jpg" },
        { name: "Pasta", price: 9.99, image: "pasta.jpg" },
        { name: "Chicken Kabab", price: 14.99, image: "chicken-kabab.jpg" },
        { name: "Gulab Jamun", price: 4.99, image: "gulab-jamun.jpg" }
    ];

    const menuContainer = document.querySelector(".menu-container");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
        `;
        menuContainer.appendChild(menuItem);
    });

    // Cart functions
    function addToCart(itemName, itemPrice) {
        const cartContainer = document.querySelector(".cart-container");
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${itemName.toLowerCase().replace(/ /g, '-')}.jpg" alt="${itemName}">
            <h3>${itemName}</h3>
            <p>$${itemPrice.toFixed(2)}</p>
            <input type="number" value="1" min="1">
            <button onclick="removeFromCart(this)">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        updateCartTotal(itemPrice);
    }

    function removeFromCart(button) {
        const cartItem = button.parentElement;
        const itemPrice = parseFloat(cartItem.querySelector("p").textContent.substring(1));
        updateCartTotal(-itemPrice);
        cartItem.remove();
    }

    function updateCartTotal(priceChange) {
        const cartTotalElement = document.querySelector(".cart-total h3");
        const currentTotal = parseFloat(cartTotalElement.textContent.substring(8));
        const newTotal = currentTotal + priceChange;
        cartTotalElement.textContent = `Total: $${newTotal.toFixed(2)}`;
    }

    // Checkout function
    window.checkout = function () {
        alert("Proceeding to checkout!");
        // Here you'd normally trigger the checkout process
    };
});
