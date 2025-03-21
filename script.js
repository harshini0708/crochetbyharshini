document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-now");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            const productName = this.getAttribute("data-product");
            const message = `Heyy, I wanna order this: ${productName} 💖`;

            // Copy message to clipboard
            navigator.clipboard.writeText(message).then(() => {
                alert("Message copied! Paste it in Instagram 💕");
            });

            // Open Instagram page
            window.open(url, "_blank");
        });
    });
});
