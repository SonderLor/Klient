document.addEventListener("DOMContentLoaded", main);

function main() {
    let catalog = document.querySelector("#catalog");
    let catalogItems = document.querySelectorAll(".catalog-list-item");
    catalogItems.forEach(function(item) {
        item.onmousedown = function(event) {
            console.log(event.clientX, event.clientY);
            let shiftX = event.clientX - item.getBoundingClientRect().left;
            let shiftY = event.clientY - item.getBoundingClientRect().top;
            let newItem = document.createElement("li");
            newItem.className = "catalog-list-item";
            newItem.style.position = "absolute";
            newItem.style.zIndex = 1000;
            newItem.innerHTML = item.innerHTML;
            document.body.appendChild(newItem);
            moveAt(event.pageX, event.pageY);

            newItem.style.display = "none";
            let elementBelow = document.elementFromPoint(event.clientX, event.clientY);
            newItem.style.display = "flex";

            function moveAt(pageX, pageY) {
                newItem.style.left = pageX - shiftX + "px";
                newItem.style.top = pageY - shiftY + "px";
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
                newItem.style.display = "none";
                elementBelow = document.elementFromPoint(event.clientX, event.clientY);
                newItem.style.display = "flex";
            }

            document.addEventListener("mousemove", onMouseMove);
            newItem.onmouseup = function() {
                document.removeEventListener("mousemove", onMouseMove);
                newItem.onmouseup = null;
                document.body.removeChild(newItem);
                if (elementBelow.classList.contains("catalog-bin")) {
                    
                    let binItem = document.createElement("li");
                    binItem.className = "catalog-list-item";
                    binItem.innerHTML = item.innerHTML;
                    elementBelow.appendChild(binItem);
                }
            }

            item.ondragstart = function() {
                return false;
            }
            return false;
        }
    });
}