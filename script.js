document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buy-now");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            navigator.clipboard.writeText(url).then(() => {
                alert("Instagram link copied! Open Instagram and paste it.");
            });

            window.open(url, "_blank");
        });
    });
});
