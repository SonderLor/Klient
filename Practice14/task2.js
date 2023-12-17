document.addEventListener("DOMContentLoaded", main);

function main() {
    let imagesContainer = document.querySelector(".images-container");
    let bigImage = document.querySelector(".big-image");

    imagesContainer.onclick = function(event) {
        if (event.target.className != "image") return;

        bigImage.src = event.target.src;
    }
}