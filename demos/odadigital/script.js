document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  const indicators = document.querySelectorAll(".indicator");

  let currentIndex = 0;
  const totalItems = carouselItems.length;

  function showItem(index) {
    if (index >= totalItems) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalItems - 1;
    } else {
      currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}vw)`;

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currentIndex);
    });
  }

  prevButton.addEventListener("click", () => {
    showItem(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showItem(currentIndex + 1);
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      showItem(i);
    });
  });

  let autoSlide = setInterval(() => {
    showItem(currentIndex + 1);
  }, 5000);

  carouselInner.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carouselInner.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      showItem(currentIndex + 1);
    }, 5000);
  });
  prevButton.addEventListener("click", () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      showItem(currentIndex + 1);
    }, 5000);
  });
  nextButton.addEventListener("click", () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      showItem(currentIndex + 1);
    }, 5000);
  });
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        showItem(currentIndex + 1);
      }, 5000);
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  document.querySelectorAll(".nav-menu a").forEach((item) => {
    item.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  });

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
