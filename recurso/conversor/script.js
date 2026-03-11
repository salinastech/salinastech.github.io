document.getElementById('imagenInput').addEventListener('change', function () {
    const fileLabel = document.getElementById('fileLabel');
    if (this.files.length > 0) {
        fileLabel.textContent = this.files[0].name;
    } else {
        fileLabel.textContent = 'Seleccionar Imagen';
    }
});

async function convertirImagen() {
    const input = document.getElementById('imagenInput');
    const formatoSelect = document.getElementById('formatoDestino');
    const mensaje = document.getElementById('mensaje');
    const cargando = document.getElementById('cargando');
    const processButton = document.getElementById('processButton');
    const imagenOutput = document.getElementById('imagenOutput');
    const downloadLink = document.getElementById('downloadLink');

    if (input.files.length === 0) {
        mensaje.textContent = "Por favor, selecciona una imagen primero.";
        mensaje.style.color = "red";
        return;
    }

    cargando.style.display = 'block';
    processButton.disabled = true;
    mensaje.textContent = "Procesando...";
    mensaje.style.color = "var(--color-text)";
    downloadLink.style.display = 'none';

    const archivo = input.files[0];
    const lector = new FileReader();

    lector.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            const tipoMime = formatoSelect.value;
            let extension = tipoMime.split('/')[1];
            if (extension === 'x-icon') extension = 'ico';
            if (extension === 'jpeg') extension = 'jpg';

            const resultadoBase64 = canvas.toDataURL(tipoMime);

            imagenOutput.src = resultadoBase64;
            downloadLink.href = resultadoBase64;
            downloadLink.download = `imagen.${extension}`;
            downloadLink.style.display = 'inline-block';
            
            mensaje.textContent = "";
            mensaje.style.color = "green";
            cargando.style.display = 'none';
            processButton.disabled = false;
        };

        img.onerror = function() {
            mensaje.textContent = "Error al cargar la imagen.";
            mensaje.style.color = "red";
            cargando.style.display = 'none';
            processButton.disabled = false;
        };

        img.src = e.target.result;
    };

    lector.readAsDataURL(archivo);
}

(function() {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        const ads = document.querySelectorAll('.adsbygoogle');
        ads.forEach(ad => ad.classList.add('debug-local'));
    }
})();