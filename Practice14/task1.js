document.addEventListener("DOMContentLoaded", main);

function main() {
    let list = document.querySelector("#contents");
    for (let i = 1; i <= 5; i++) {
        let item = document.createElement("li");
        item.className = "liks-list-item";

        let link = document.createElement("a");
        link.href="https://google.com";
        link.target = "_blank";
        link.innerText = "Link " + i + " to somewhere";

        item.appendChild(link);
        list.appendChild(item);
    }

    list.onclick = function(event) {
        if (event.target.tagName != "A") return;

        let href = event.target.getAttribute("href");
        let answer = confirm("Do you want to follow this link: \"" + href + "\"?");
        if (!answer) {
            return false;
        }
    }
}