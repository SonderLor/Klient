document.addEventListener("DOMContentLoaded", main);

function main() {
    let list = document.querySelector(".blocks-list");
    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("li");
        item.className = "blocks-list-item";

        let paragraph = document.createElement("p");
        paragraph.className = "blocks-paragraph";
        paragraph.innerText = "File " + i;

        item.appendChild(paragraph);
        list.appendChild(item);
    }

    list.onclick = function(event) {
        if (!event.target.classList.contains("blocks-list-item") && !event.target.classList.contains("blocks-paragraph")) return;
        
        let target = event.target;
        while (!target.classList.contains("blocks-list-item")) {
            target = target.parentElement;
        }
        if (event.ctrlKey || event.metaKey) {
            if (target.classList.contains("selected")) {
                target.classList.remove("selected");
            } else {
                target.classList.add("selected");
            }
        } else {
            if (target.classList.contains("selected")) {
                target.classList.remove("selected");
                let items = document.querySelectorAll(".blocks-list-item");
                items.forEach(function(item) {
                    if (item.classList.contains("selected")) {
                        item.classList.remove("selected");
                    }
                });
            } else {
                let items = document.querySelectorAll(".blocks-list-item");
                items.forEach(function(item) {
                    if (item.classList.contains("selected")) {
                        item.classList.remove("selected");
                    }
                    target.classList.add("selected");
                });
            }
        }
        return false;
    }
}