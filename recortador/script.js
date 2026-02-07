let cropper;
const imagenParaRecortar = document.getElementById('imagenParaRecortar');
const imagenInput = document.getElementById('imagenInput');


const inputWidth = document.getElementById('inputWidth');
const inputHeight = document.getElementById('inputHeight');
const inputX = document.getElementById('inputX');
const inputY = document.getElementById('inputY');

function zoomImage(value) {
    if (cropper) {
        cropper.zoom(value);
    }
}

imagenInput.addEventListener('change', function (e) {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
        reader.onload = function (event) {
            if (cropper) cropper.destroy();
            
            imagenParaRecortar.src = event.target.result;
            
            cropper = new Cropper(imagenParaRecortar, {
                viewMode: 1,
                dragMode: 'crop', 
                autoCropArea: 0.9,
                responsive: true,
                restore: false,
                guides: true,
                center: true,
                highlight: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                toggleDragModeOnDblclick: true,
                crop(event) {

                    inputWidth.value = Math.floor(event.detail.width);
                    inputHeight.value = Math.floor(event.detail.height);
                    inputX.value = Math.floor(event.detail.x);
                    inputY.value = Math.floor(event.detail.y);
                },
            });
            document.getElementById('fileLabel').textContent = e.target.files[0].name;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

[inputWidth, inputHeight, inputX, inputY].forEach(input => {
    input.addEventListener('change', () => {
        if (!cropper) return;
        cropper.setData({
            width: parseInt(inputWidth.value) || 0,
            height: parseInt(inputHeight.value) || 0,
            x: parseInt(inputX.value) || 0,
            y: parseInt(inputY.value) || 0
        });
    });
});

document.getElementById('selectRatio').addEventListener('change', (e) => {
    if (cropper) cropper.setAspectRatio(parseFloat(e.target.value));
});

document.getElementById('selectRotate').addEventListener('change', (e) => {
    if (cropper) cropper.rotateTo(parseInt(e.target.value));
});

function obtenerRecorte() {
    if (!cropper) return;
    const canvas = cropper.getCroppedCanvas({
        imageSmoothingEnabled: true,
        imageSmoothingQuality: 'high',
    });

    const urlRecortada = canvas.toDataURL('image/png');
    const downloadLink = document.getElementById('downloadLink');
    const imagenOutput = document.getElementById('imagenOutput');

    imagenOutput.src = urlRecortada;
    downloadLink.href = urlRecortada;
    downloadLink.download = "recorte_salinastech.png";
    downloadLink.style.display = 'inline-block';
}