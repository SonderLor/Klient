document.addEventListener("DOMContentLoaded", function() {
    let layer = document.querySelectorAll(".parallax-layer")[1];
    let speed = 1.5;

    window.addEventListener("scroll", function() {
        if (window.scrollY >= window.innerHeight * 0.1) {
            layer.style.transform = `translateY(${(window.scrollY - window.innerHeight * 0.5 - window.innerHeight) * speed}px)`;
        }
    });
});
