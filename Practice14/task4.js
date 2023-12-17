document.addEventListener("DOMContentLoaded", main);

function main() {
    let slider = document.querySelector(".slider");
    let bar = document.querySelector(".bar");
    let point = document.querySelector(".point");
    let isDragging = false;
    let amount = 2;

    function createSlides(n, slider) {
        for (let i = 0; i < n; i++) {
            let slide = document.createElement("div");
            slide.className = "slide";
            if (i % 3 == 0) {
                slide.style.backgroundColor = "#1abc9c";
            } else if (i % 3 == 1) {
                slide.style.backgroundColor = "#3498db";
            } else {
                slide.style.backgroundColor = "#e74c3c";
            }
            slide.innerText = i + 1;
            slider.appendChild(slide);
        }
    }
  
    function handleMouseDown(event) {
        isDragging = true;
        point.style.transform = "translateX(" + event.clientX - bar.getBoundingClientRect().left + "px)";
    }
  
    function handleMouseMove(event) {
        if (isDragging) {
            let rect = bar.getBoundingClientRect();
            let delta = event.clientX - rect.left;
            if (event.clientX > rect.left && event.clientX < rect.right) {
                point.style.transform = "translateX(" + delta + "px)";
                slider.style.transform = `translateX(${-delta * (slider.children.length - amount)}px)`;
            } else if (delta < 0) {
                point.style.transform = "translateX(" + 0 + "px)";
            } else {
                point.style.transform = "translateX(" + rect.right - rect.left + "px)";
            }
        }
    }
  
    function handleMouseUp() {
        isDragging = false;
    }

    createSlides(10, slider);
    bar.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
}