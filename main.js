function adjustQuantity(button, quantityChange) {
    const itemDiv = button.closest('.cart-item');
    const quantityElement = itemDiv.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    
    // Ensure quantity is not negative
    if (quantity + quantityChange > 0) {
        quantity += quantityChange;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }
}

function deleteItem(button) {
    const itemDiv = button.closest('.cart-item');
    itemDiv.remove();
    updateTotalPrice();
}

function toggleLike(button) {
    button.classList.toggle('liked');
}

function updateTotalPrice() {
    const itemPrices = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    itemPrices.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.getAttribute('data-price'));
        totalPrice += quantity * price;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}