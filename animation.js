const slideshow = document.querySelector('.slideshow');
const images = [
    'images/turkestan/turkestan.jpg',
    'images/turkestan/turkestan1.jpg',
    'images/turkestan/turkestan2.jpg'
];

let currentIndex = 0;

function changeBackground() {
    // Меняем фоновое изображение с плавным переходом
    slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
}

// Меняем фон каждые 5 секунд
setInterval(changeBackground, 5000);

// Устанавливаем первый фон при загрузке
changeBackground();
