// Esperar a que todo el DOM (HTML) esté cargado antes de ejecutar scripts
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach((image) => {
        if (!image.getAttribute('src')) {
            image.removeAttribute('src');
            image.classList.add('empty-image');
        }
    });

    /* ==========================================
       1. LÓGICA DEL CARRUSEL DE IMÁGENES
       ========================================== */
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlideIndex = 0;
    let carouselInterval;

    function showSlide(index) {
        slides[currentSlideIndex].classList.remove('active');
        
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        slides[currentSlideIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        showSlide(currentSlideIndex - 1);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });

        function startTimer() {
            carouselInterval = setInterval(nextSlide, 5000);
        }

        function resetTimer() {
            clearInterval(carouselInterval);
            startTimer();
        }

        startTimer();
    }

    /* ==========================================
       2. MENÚ RESPONSIVE DESPLEGABLE (Móviles)
       ========================================== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    /* ==========================================
       3. VALIDACIÓN/ENVÍO SUTIL DE FORMULARIO
       ========================================== */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por escribir! Tu mensaje ha sido enviado con éxito.');
            contactForm.reset();
        });
    }
});
