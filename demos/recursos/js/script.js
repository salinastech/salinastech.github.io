document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('main-navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    setupCarousel();
    
    setupHamburgerMenu();
});

function setupHamburgerMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a, button');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
}

function setupCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const dots = document.querySelectorAll('.dot');
    
    if (!track) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    const moveToSlide = (index) => {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        updateDots();
    };

    const updateDots = () => {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    };

    prevBtn.addEventListener('click', () => moveToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => moveToSlide(currentIndex + 1));
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => moveToSlide(index));
    });

    moveToSlide(currentIndex);
}

function realizarPedidoGrillMaster() {
    const whatsappNumber = '59169268706'; 
    const message = encodeURIComponent('¡Hola Pollos Pampeño, quiero hacer un pedido a domicilio.');

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
}

document.getElementById('hero-pedido-btn').addEventListener('click', realizarPedidoGrillMaster);
document.querySelectorAll('.btn-pedido').forEach(button => {
    button.addEventListener('click', realizarPedidoGrillMaster);
});