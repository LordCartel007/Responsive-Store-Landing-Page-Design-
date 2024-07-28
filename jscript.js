        // java script auto scroll

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.scrolling-container');
    const wrapper = document.querySelector('.scrolling-wrapper');

    let scrollAmount = 0;
    const scrollSpeed = 1; // to adjust the speed which the picture is automatically scrolling
    

    function scrollImages() {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= wrapper.scrollWidth) {
            scrollAmount = 0;
        }
        wrapper.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollImages);
    }

    scrollImages();
});