const scrollBtn = document.getElementById('scroll-btn');

// Показать кнопку прокрутки при прокрутке вниз
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Прокрутка вверх при нажатии на кнопку
scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
