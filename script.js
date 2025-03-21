document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-now");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.getAttribute("data-product");
            const message = `Heyy, I wanna order this: ${product}! 🧶💖`;
            navigator.clipboard.writeText(message).then(() => {
                alert("Message copied! Open Instagram and paste it.");
            });

            window.open("https://www.instagram.com/crochetbyharshini/", "_blank");
        });
    });
});

