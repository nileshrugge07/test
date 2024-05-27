// script.js
const buyerButton = document.getElementById('buyer-button');
const sellerButton = document.getElementById('seller-button');

buyerButton.addEventListener('click', () => {
    window.location.href = 'buyer.html'; // Redirect to buyer page
});

sellerButton.addEventListener('click', () => {
    window.location.href = 'seller.html'; // Redirect to seller page
});