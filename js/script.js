const images = [
    'url("/img/main-block/main1.png")',  
    'url("/img/main-block/main2.png")'
];

let currentIndex = 0;

const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateBackgroundImage() {
    slider.style.backgroundImage = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateBackgroundImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateBackgroundImage();
});

// Инициализация первого изображения
updateBackgroundImage();