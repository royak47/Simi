document.addEventListener("DOMContentLoaded", function() {
    for (let i = 0; i < 5; i++) { // 🦋 Change number of butterflies here
        let butterfly = document.createElement("div");
        butterfly.classList.add("butterfly");
        document.body.appendChild(butterfly);
        animateButterfly(butterfly);
    }
});

function animateButterfly(butterfly) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    butterfly.style.left = x + "px";
    butterfly.style.top = y + "px";

    setInterval(() => {
        let newX = Math.random() * window.innerWidth;
        let newY = Math.random() * window.innerHeight;
        butterfly.style.transform = `translate(${newX - x}px, ${newY - y}px) rotate(${Math.random() * 360}deg)`;
    }, 4000);
}
