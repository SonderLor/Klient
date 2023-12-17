document.addEventListener("DOMContentLoaded", function() {
    let path = window.location.pathname;
    let links = document.querySelectorAll("#navigation-list-link");
    links.forEach(function(link) {
        if (link.getAttribute("href") === path) {
			if (path == "/pages/registration.html") {
				link.querySelector(".navigation-list-account").style.backgroundImage = "url(\"/styles/images/accountHover.svg\")";
			}
			if (path == "/pages/bin.html") {
				link.querySelector(".navigation-list-bin").style.backgroundImage = "url(\"/styles/images/shoppingCartHover.svg\")";
			}
          	link.style.color = "#fff";
        }
    });
  });