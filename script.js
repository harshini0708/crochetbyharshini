document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my Crochet Showcase! 🧶💖");

    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", function() {
            let productName = this.getAttribute("data-product");
            let message = `Heyyy, I wanna order this ${productName}! 🧶💖`;
            
            // Copy message to clipboard
            navigator.clipboard.writeText(message).then(() => {
                alert("Message copied! Now opening Instagram.");
                // Open Instagram profile
                window.open("https://instagram.com/crochetbyharshini", "_blank");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    });
});
