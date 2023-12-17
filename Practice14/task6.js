document.addEventListener("DOMContentLoaded", main);

function main() {

    function setClearableInterval(callback, interval) {
        let intervalId = setInterval(callback, interval);
    
        function clearableIntervalWrapper() {
            clearInterval(intervalId);
            if (typeof clearableIntervalWrapper.onClear === 'function') {
                clearableIntervalWrapper.onClear();
            }
        }
    
        return clearableIntervalWrapper;
    }

    let loadingBar = document.querySelector(".loading");
    let loadingWidth = 0;
    let loadingInterval = setClearableInterval(function() {
        loadingWidth += 5;
        loadingBar.style.width = loadingWidth + "px";
        if (loadingWidth >= 100) {
            loadingWidth = 0;
            clearInterval(loadingInterval);
        }
    }, 150);

    let pulsatingElement = document.querySelector(".pulsating");
    let scaleFactor = 1;
    setInterval(function() {
        scaleFactor = scaleFactor === 1 ? 1.2 : 1;
        pulsatingElement.style.transform = "scale(" + scaleFactor + ")";
    }, 500);
}