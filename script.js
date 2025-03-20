document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my Crochet Showcase! 🧶💖");
});

function buyNow(productName) {
    let message = encodeURIComponent(`Heyyy, I wanna order this: ${productName} 💖`);
    window.location.href = `https://www.instagram.com/direct/t/crochetbyharshini?text=${message}`;
}
