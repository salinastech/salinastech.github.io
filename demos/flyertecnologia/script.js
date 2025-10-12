document.addEventListener("DOMContentLoaded", () => {
  const imagenesZoom = document.querySelectorAll(".imagen-zoom");

  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  const imagenModal = document.createElement("img");
  imagenModal.id = "lightbox-imagen";

  overlay.appendChild(imagenModal);
  document.body.appendChild(overlay);

  function cerrarModal() {
    overlay.classList.remove("visible");
  }

  imagenesZoom.forEach((img) => {
    img.addEventListener("click", function () {
      const src = this.getAttribute("src");

      imagenModal.setAttribute("src", src);
      overlay.classList.add("visible");
    });

    img.addEventListener("dblclick", cerrarModal);
  });

  overlay.addEventListener("click", cerrarModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("visible")) {
      cerrarModal();
    }
  });
});
