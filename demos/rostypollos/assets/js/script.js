document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const searchInput = document.querySelector(".search-box input");
  const searchButton = document.querySelector(".search-box button");
  const menuContainer = document.querySelector("#menu .menu-items-container");

  const toggleMenu = () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  };

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > auto) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });

  const menuItems = [
    {
      name: "Economico Broaster",
      description: "",
      price: "15 BOB",
      image: "img/m1.png",
    },
    {
      name: "Economico Brasa",
      description: "",
      price: "16 BOB",
      image: "img/m2.png",
    },
    {
      name: "Cuarto Broaster",
      description: "",
      price: "25 BOB",
      image: "img/m3.png",
    },
    {
      name: "Cuarto Brasa",
      description: "",
      price: "25 BOB",
      image: "img/m4.png",
    },
    {
      name: "Cuarto 3 Presas Broaster",
      description: "",
      price: "33 BOB",
      image: "img/m5.png",
    },
    {
      name: "Cuarto 3 Presas Brasa",
      description: "",
      price: "33 BOB",
      image: "img/m6.png",
    },
    {
      name: "Pollo Entero Broaster C/G",
      description: "",
      price: "98 BOB",
      image: "img/m7.png",
    },
    {
      name: "Pollo Entero Brasa C/G",
      description: "",
      price: "98 BOB",
      image: "img/m8.png",
    },
    {
      name: "Pollo Entero Broaster S/G",
      description: "",
      price: "78 BOB",
      image: "img/m9.png",
    },
    {
      name: "Pollo Entero Brasa",
      description: "",
      price: "78 BOB",
      image: "img/m10.png",
    },
    {
      name: "Salchipapa Simple",
      description: "",
      price: "18 BOB",
      image: "img/m11.png",
    },
    {
      name: "Salchipapa Super",
      description: "",
      price: "22 BOB",
      image: "img/m12.png",
    },
    {
      name: "Salchipollo Broaster",
      description: "",
      price: "27 BOB",
      image: "img/m13.png",
    },
    {
      name: "Milanesa Clasica",
      description: "",
      price: "20 BOB",
      image: "img/m14.png",
    },
    {
      name: "Hamburguesa Simple",
      description: "",
      price: "18 BOB",
      image: "img/m15.png",
    },
    {
      name: "Hamburguesa Super",
      description: "",
      price: "22 BOB",
      image: "img/m16.png",
    },
    {
      name: "Hamburguesa Doble",
      description: "",
      price: "26 BOB",
      image: "img/m17.png",
    },
    {
      name: "Hamburguesa Triple",
      description: "",
      price: "32 BOB",
      image: "img/m18.png",
    },
    {
      name: "Alitas 12 Piezas",
      description: "",
      price: "35 BOB",
      image: "img/m19.png",
    },
    {
      name: "Salchialitas",
      description: "",
      price: "37 BOB",
      image: "img/m20.png",
    },
    {
      name: "2 Alitas 12 Piezas",
      description: "",
      price: "57 BOB",
      image: "img/m21.png",
    },
    {
      name: "Pipocas de Pollo",
      description: "",
      price: "15 BOB",
      image: "img/m22.png",
    },
    {
      name: "Lomito",
      description: "",
      price: "20 BOB",
      image: "img/m23.png",
    },
    {
      name: "2 Lomitos",
      description: "",
      price: "35 BOB",
      image: "img/m24.png",
    },
    {
      name: "Chuleta de Res + Huevo",
      description: "",
      price: "20 BOB",
      image: "img/m25.png",
    },
    {
      name: "Chicharron de pollo",
      description: "",
      price: "20 BOB",
      image: "img/m26.png",
    }
  ];

  const createMenuItem = (item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item", "aos-init", "aos-animate");
    itemDiv.setAttribute("data-aos", "zoom-in");
    itemDiv.setAttribute("data-aos-duration", "1000");
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span class="price">${item.price}</span>
    `;
    return itemDiv;
  };

  if (menuContainer) {
    menuItems.forEach((item, index) => {
      const menuItem = createMenuItem(item);
      menuItem.setAttribute("data-aos-delay", `${index * 50}`);
      menuContainer.appendChild(menuItem);
    });
  }

  const handleSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const allMenuItems = document.querySelectorAll(".menu-item");
    let found = false;

    allMenuItems.forEach((item) => item.classList.remove("highlight"));

    for (const item of allMenuItems) {
      const name = item.querySelector("h3").textContent.toLowerCase();
      const description = item.querySelector("p").textContent.toLowerCase();

      if (name.includes(searchTerm) || description.includes(searchTerm)) {
        item.scrollIntoView({ behavior: "smooth", block: "center" });
        item.classList.add("highlight");
        found = true;
        break;
      }
    }

    if (!found) {
      alert("No se encontraron resultados.");
    }
  };

  if (searchButton) {
    searchButton.addEventListener("click", handleSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
  }
});

window.addEventListener("load", () => {
  AOS.init({
    once: true,
  });
});

document
  .querySelector(".contact-form")
  .addEventListener("input", updateWhatsappLink);

function updateWhatsappLink() {
  const name = document.getElementById("nombre_cliente").value;
  const number = document.getElementById("numero_whatsapp").value;
  const description = document.getElementById("descripcion").value;

  const encodedName = encodeURIComponent(name);
  const encodedNumber = encodeURIComponent(number);
  const encodedDescription = encodeURIComponent(description);

  const message = `Hola! Me llamo ${encodedName} y me gustaría ordenar lo siguiente: ${encodedDescription}. Mi número es ${encodedNumber}.`;

  const whatsappNumber = "59177111652";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  const whatsappLink = document.getElementById("whatsapp-link");
  whatsappLink.href = whatsappURL;

  if (name && number && description) {
    whatsappLink.style.pointerEvents = "auto";
    whatsappLink.style.opacity = "1";
  } else {
    whatsappLink.style.pointerEvents = "none";
    whatsappLink.style.opacity = "0.6";
  }
}

updateWhatsappLink();
