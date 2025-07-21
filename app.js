const bigDisplay = document.getElementById('big-display');
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnailStrip = document.querySelector('.thumbnail_strip');
let currentIndex = 0;

// Update image and scroll thumbnails
function updateGallery() {
    bigDisplay.src = thumbnails[currentIndex].src;
    bigDisplay.alt = thumbnails[currentIndex].alt;
    const thumbnailWidth = thumbnails[0].offsetWidth + 16;
    const visibleThumbnails = window.innerWidth <= 768 ? 2 : 4;
    thumbnailStrip.scrollTo({
        left: Math.max(0, currentIndex - Math.floor(visibleThumbnails / 2)) * thumbnailWidth,
        behavior: 'smooth'
    });
}

// Thumbnail click
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        bigDisplay.src = event.target.src;
        bigDisplay.alt = event.target.alt;
        currentIndex = Array.from(thumbnails).indexOf(event.target);
        thumbnailStrip.scrollTo({
            left: Math.max(0, currentIndex - Math.floor(visibleThumbnails / 2)) * (thumbnails[0].offsetWidth + 16),
            behavior: 'smooth'
        });
    });
});

// Arrow click
document.getElementById('back').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});
document.getElementById('forward').addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

// Initialize
updateGallery();