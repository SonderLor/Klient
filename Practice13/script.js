document.addEventListener("DOMContentLoaded", function() {
    let centeredContainer = document.getElementById('centeredContainer');
    let centeredImage = document.getElementById('centeredImage');
    document.addEventListener('click', function(event) {
        console.log(`Координаты клика: X=${event.clientX}, Y=${event.clientY}`);
    });
    window.addEventListener('resize', centerImage);
    centerImage();

    function centerImage() {
        let containerWidth = centeredContainer.clientWidth;
        let containerHeight = centeredContainer.clientHeight;
        let imageWidth = centeredImage.width;
        let imageHeight = centeredImage.height;

        let offsetX = (containerWidth - imageWidth) / 2;
        let offsetY = (containerHeight - imageHeight) / 2;

        centeredImage.style.position = 'absolute';
        centeredImage.style.left = offsetX + 'px';
        centeredImage.style.top = offsetY + 'px';
    }
});
