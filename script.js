const scrollBtn = document.getElementById('scroll-btn');

// Проверим, существует ли кнопка, прежде чем добавлять обработчики событий
if (scrollBtn) {
    // Функция, которая будет проверять положение прокрутки
    function toggleScrollButton() {
        // Проверяем, прокручен ли экран больше чем на 20px
        if (window.scrollY > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    // Используем `addEventListener` для прокрутки и проверки
    window.addEventListener('scroll', toggleScrollButton);

    // Прокрутка вверх при нажатии на кнопку
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Сначала проверим состояние при загрузке страницы
    toggleScrollButton();
}
