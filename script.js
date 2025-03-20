document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my Crochet Showcase! 🧶💖");
});

function buyNow(productName) {
    let message = `Heyyy, I wanna order this: ${productName} 💖`;

    // Copy message to clipboard
    navigator.clipboard.writeText(message).then(() => {
        alert("Message copied! Open Instagram and paste it in DMs 💌");
        
        // Open your Instagram page
        window.open("https://www.instagram.com/crochetbyharshini/", "_blank");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
