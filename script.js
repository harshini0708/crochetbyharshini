document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-now");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            const productName = this.parentElement.querySelector("h2").textContent;
            const message = `Heyy, I wanna order this: ${productName}`;

            navigator.clipboard.writeText(message).then(() => {
                alert("Message copied! Open Instagram and paste it.");
            });

            window.open(url, "_blank");
        });
    });
});
