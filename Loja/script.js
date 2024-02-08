// Sistema de compra básico

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartLink = document.getElementById('cart-link');

let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
    });
});

function updateCartCount() {
    cartLink.textContent = `Carrinho (${cartCount})`;
}
