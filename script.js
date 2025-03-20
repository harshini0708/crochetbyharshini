document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my Crochet Showcase! 🧶💖");
});

function buyNow(productName) {
    let username = "crochetbyharshini"; // Your Instagram business page
    let message = encodeURIComponent(`Heyyy, I wanna order this: ${productName} 💖`);
    
    // Open Instagram DM with pre-filled message
    let instaLink = `https://www.instagram.com/direct/t/${username}/?text=${message}`;
    
    window.open(instaLink, "_blank");
}
