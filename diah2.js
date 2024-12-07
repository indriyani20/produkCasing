function setRating(element, maxStars) {
    // Mengambil rating yang dipilih
    let rating = prompt("Masukkan rating (1-5):");
    rating = parseInt(rating);

    // Validasi rating
    if (rating >= 1 && rating <= maxStars) {
        // Mengupdate tampilan bintang
        let stars = "⭐".repeat(rating) + "☆".repeat(maxStars - rating);
        element.innerHTML = stars; // Mengubah tampilan bintang
        element.setAttribute("data-rating", rating); // Mengupdate atribut data-rating
    } else {
        alert("Rating harus antara 1 dan " + maxStars);
    }
}

// Fungsi untuk menambahkan produk ke keranjang
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        // Menambahkan item ke keranjang
        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = `${productName} - Rp ${productPrice}`;
        cartItems.appendChild(newItem);

        // Mengupdate total harga
        updateTotalPrice();
    });
});

// Fungsi untuk menghitung total harga
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('#cart-items li');
    let total = 0;

    cartItems.forEach(item => {
        const priceText = item.textContent.split(' - Rp ')[1];
        total += parseInt(priceText);
    });

    document.getElementById('total-price').textContent = `Total: Rp ${total}`;
}

// Fungsi untuk checkout
document.getElementById('checkout').addEventListener('click', function() {
    alert("Terima kasih telah berbelanja! Total belanja Anda adalah: " + document.getElementById('total-price').textContent);
});