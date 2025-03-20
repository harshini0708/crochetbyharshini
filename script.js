document.addEventListener("DOMContentLoaded", function() {
    let popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <p>Welcome to my Crochet Showcase! 🧶💖</p>
        <button onclick="this.parentElement.classList.remove('show')">Close</button>
    `;
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.classList.add("show");
    }, 500);
});
