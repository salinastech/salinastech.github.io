const hexInput = document.getElementById('hexInput');
const visualizador = document.getElementById('visualizador');
const errorMsg = document.getElementById('error-msg');
const rgbText = document.getElementById('rgbText');

// Funciona al presionar Enter
hexInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verColor();
});

function verColor() {
    let hex = hexInput.value.trim();
    
    // Auto-completar '#'
    if (hex.length > 0 && !hex.startsWith('#')) {
        hex = '#' + hex;
        hexInput.value = hex;
    }
    
    // Validación Hexadecimal
    const regex = /^#([A-Fa-f0-9]{3}){1,2}$/;
    
    if (regex.test(hex)) {
        errorMsg.style.display = 'none';
        visualizador.style.backgroundColor = hex;
        
        // Conversión a RGB (Enteros)
        const rgb = hexToRgb(hex);
        rgbText.innerText = `RGB: (${rgb.r}, ${rgb.g}, ${rgb.b})`;
        
        // Ajustar borde si es muy claro
        const brillo = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        visualizador.style.borderColor = brillo > 230 ? '#eee' : '#fff';
    } else {
        errorMsg.style.display = 'block';
    }
}

function hexToRgb(hex) {
    let h = hex;
    if (h.length === 4) {
        h = "#" + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
    }
    const r = parseInt(h.slice(1, 3), 16);
    const g = parseInt(h.slice(3, 5), 16);
    const b = parseInt(h.slice(5, 7), 16);
    
    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}