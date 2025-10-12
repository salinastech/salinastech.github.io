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
      name: "Toti Doble",
      description:
        "El mejor combo, 2 presas, 1 porción y una bebida o gaseosa.",
      price: "33 BOB",
      image: "ctdoble.png",
    },
    {
      name: "Toti Triple",
      description:
        "El mejor combo, 3 presas, 1 porción y una bebida o gaseosa.",
      price: "37 BOB",
      image: "cttriple.png",
    },
    {
      name: "Toti Monster",
      description:
        "El mejor combo, 5 presas, 1 porción y una bebida o gaseosa.",
      price: "22 BOB",
      image: "ctmonster.png",
    },
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
      menuItem.setAttribute("data-aos-delay", `${index * 200}`);
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
