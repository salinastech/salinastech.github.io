/* Creado por Luis Tito Salinas Garcia. */

document.addEventListener("DOMContentLoaded", function () {
  const alternarMenu = document.querySelector(".alternar-menu");
  const navMenu = document.querySelector(".navegacion-principal");

  const menuDesplegableItems = document.querySelectorAll(".desplegable");

  alternarMenu.addEventListener("click", () => {
    navMenu.classList.toggle("activo");
  });

  menuDesplegableItems.forEach((item) => {
    const alternarDesplegable = item.querySelector(".alternar-desplegable");
    const menuDesplegable = item.querySelector(".menu-desplegable");

    alternarDesplegable.addEventListener("click", (e) => {
      e.preventDefault();
      menuDesplegable.classList.toggle("activo");

      menuDesplegableItems.forEach((otherItem) => {
        const otherMenu = otherItem.querySelector(".menu-desplegable");
        if (otherMenu !== menuDesplegable) {
          otherMenu.classList.remove("activo");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const alternarMenu = document.querySelector(".alternar-menu");
  const navMenu = document.querySelector(".navegacion-principal");
  const menuDesplegableItems = document.querySelectorAll(".desplegable");

  alternarMenu.addEventListener("click", () => {
    navMenu.classList.toggle("activo");
  });

  menuDesplegableItems.forEach((item) => {
    const alternarDesplegable = item.querySelector(".alternar-desplegable");
    const menuDesplegable = item.querySelector(".menu-desplegable");

    alternarDesplegable.addEventListener("click", (e) => {
      e.preventDefault();
      menuDesplegable.classList.toggle("activo");

      menuDesplegableItems.forEach((otherItem) => {
        const otherMenu = otherItem.querySelector(".menu-desplegable");
        if (otherMenu !== menuDesplegable) {
          otherMenu.classList.remove("activo");
        }
      });
    });
  });

  const mouseCircle = document.createElement("div");
  mouseCircle.classList.add("mouse-circle");
  document.body.appendChild(mouseCircle);

  const interactiveElements = document.querySelectorAll(
    "a, button, input[type='submit'], input[type='button'], .boton, .alternar-menu"
  );

  document.addEventListener("mousemove", (e) => {
    mouseCircle.style.left = e.clientX + "px";
    mouseCircle.style.top = e.clientY + "px";
  });

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      mouseCircle.classList.add("hovered");
    });
    element.addEventListener("mouseleave", () => {
      mouseCircle.classList.remove("hovered");
    });
  });
});

window.addEventListener("load", () => {
  AOS.init({
    once: true,
    duration: 1200,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const alternarMenu = document.querySelector(".alternar-menu");
  const navMenu = document.querySelector(".navegacion-principal");
  const menuDesplegableItems = document.querySelectorAll(".desplegable");

  alternarMenu.addEventListener("click", () => {
    navMenu.classList.toggle("activo");
  });

  menuDesplegableItems.forEach((item) => {
    const alternarDesplegable = item.querySelector(".alternar-desplegable");
    const menuDesplegable = item.querySelector(".menu-desplegable");

    alternarDesplegable.addEventListener("click", (e) => {
      e.preventDefault();
      menuDesplegable.classList.toggle("activo");

      menuDesplegableItems.forEach((otherItem) => {
        const otherMenu = otherItem.querySelector(".menu-desplegable");
        if (otherMenu !== menuDesplegable) {
          otherMenu.classList.remove("activo");
        }
      });
    });
  });

  const mouseCircle = document.createElement("div");
  mouseCircle.classList.add("mouse-circle");
  document.body.appendChild(mouseCircle);

  const interactiveElements = document.querySelectorAll(
    "a, button, input[type='submit'], input[type='button'], .boton, .alternar-menu, .carta"
  );

  document.addEventListener("mousemove", (e) => {
    mouseCircle.style.left = e.clientX + "px";
    mouseCircle.style.top = e.clientY + "px";

    createTrailElement(e.clientX, e.clientY);
  });

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      mouseCircle.classList.add("hovered");
    });
    element.addEventListener("mouseleave", () => {
      mouseCircle.classList.remove("hovered");
    });
  });

  function createTrailElement(x, y) {
    const trailElement = document.createElement("div");
    trailElement.classList.add("mouse-trail-element");
    document.body.appendChild(trailElement);

    trailElement.style.left = x + "px";
    trailElement.style.top = y + "px";

    trailElement.offsetWidth;

    trailElement.style.opacity = 1;
    trailElement.style.width = "0px";
    trailElement.style.height = "0px";
    trailElement.style.transform = `translate(-50%, -50%) scale(0.1)`;

    trailElement.addEventListener("transitionend", () => {
      trailElement.remove();
    });
  }

  window.addEventListener("load", () => {
    AOS.init({
      once: false,
      duration: 1200,
    });
  });
});

function createTrailElement(x, y) {
  const trailElement = document.createElement("div");
  trailElement.classList.add("mouse-trail-element");
  document.body.appendChild(trailElement);

  trailElement.style.left = x + "px";
  trailElement.style.top = y + "px";

  trailElement.offsetWidth;

  trailElement.style.opacity = 0;
  trailElement.style.width = "0px";
  trailElement.style.height = "0px";
  trailElement.style.transform = `translate(-50%, -50%) scale(0.1)`;

  trailElement.addEventListener("transitionend", () => {
    trailElement.remove();
  });
}
