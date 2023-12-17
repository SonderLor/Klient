document.addEventListener("DOMContentLoaded", function() {
    let sidebar = document.querySelector(".blog-aside-list");
    let footer = document.querySelector(".footer");

    function checkFooterVisibility() {
        let sidebarRect = sidebar.getBoundingClientRect();
        let footerRect = footer.getBoundingClientRect();
        if (sidebarRect.bottom > footerRect.top - 100) {
            sidebar.style.position = "absolute";
            sidebar.style.bottom = "100px";
        } 
        else if (footerRect.top > 775) {
            sidebar.style.position = "fixed";
            sidebar.style.bottom = "auto";
        }
    }

    window.addEventListener("resize", checkFooterVisibility);
    window.addEventListener("scroll", checkFooterVisibility);
    checkFooterVisibility();
});