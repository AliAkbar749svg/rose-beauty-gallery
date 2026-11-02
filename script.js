let cartCountValue = 0;

function addToCart(productName) {
    cartCountValue++;
    document.getElementById('cartCount').innerText = cartCountValue;
    alert(`محصول "${productName}" با موفقیت به سبد خرید شما اضافه شد!`);
}

// کد ساده جستجو در میان محصولات صفحه
document.getElementById('searchInput').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h4').textContent.toLowerCase();
        if (title.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
