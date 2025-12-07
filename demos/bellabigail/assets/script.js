document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const indicators = document.querySelectorAll(".indicator");

    if (!carouselInner || carouselItems.length === 0) {
        console.warn("No se encontraron elementos clave del carrusel. Inicialización abortada.");
        return; 
    }

    let currentIndex = 0;
    const totalItems = carouselItems.length;
    let autoSlide;

    function showItem(index) {
        if (index >= totalItems) {
            currentIndex = 0; 
        } else if (index < 0) {
            currentIndex = totalItems - 1; 
        } else {
            currentIndex = index;
        }


        const offset = -currentIndex * (100 / totalItems); 
        carouselInner.style.transform = `translateX(${offset}%)`;

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === currentIndex);
        });
    }

    function startAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            showItem(currentIndex + 1);
        }, 5000);
    }
    
    function handleInteraction(newIndex) {
        showItem(newIndex);
        startAutoSlide();
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => handleInteraction(currentIndex - 1));
    }
    if (nextButton) {
        nextButton.addEventListener("click", () => handleInteraction(currentIndex + 1));
    }
    
    indicators.forEach((indicator, i) => {
        indicator.addEventListener("click", () => handleInteraction(i));
    });

    carouselInner.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carouselInner.addEventListener("mouseleave", startAutoSlide);

    showItem(currentIndex);
    startAutoSlide();

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.body;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
            body.classList.toggle("no-scroll");
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    body.classList.remove('no-scroll');
                }
            });
        });
    }

    const header = document.querySelector(".header");
    
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
});