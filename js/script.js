const images = [
    'url("img/main-block/main1.png")',  
    'url("img/main-block/main2.png")'
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


updateBackgroundImage();



document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.getElementById('carouselNext');
    const prevBtn = document.getElementById('carouselPrev');

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked');
        const scrollDistance = 250 + 17; 
        carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        console.log(`Scrolled right by ${scrollDistance}px`);
    });

    prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked');
        const scrollDistance = 250 + 17; 
        carousel.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        console.log(`Scrolled left by ${scrollDistance}px`);
    });
});
