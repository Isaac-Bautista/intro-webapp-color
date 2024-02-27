document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('color');
    const redRange = document.getElementById('red');
    const greenRange = document.getElementById('green');
    const blueRange = document.getElementById('blue');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorPreview = document.querySelector('.color-preview');
    const hexCode = document.querySelector('.hex-code');

    function updateColorPreview() {
        const colorValue = colorInput.value;
        const redValue = parseInt(colorValue.substr(1, 2), 16);
        const greenValue = parseInt(colorValue.substr(3, 2), 16);
        const blueValue = parseInt(colorValue.substr(5, 2), 16);

        redInput.value = redValue;
        greenInput.value = greenValue;
        blueInput.value = blueValue;

        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        colorPreview.style.backgroundColor = rgbColor;

        const hexColor = colorValue.toUpperCase();
        hexCode.textContent = `Hex: ${hexColor}`;
    }

    colorInput.addEventListener('input', function() {
        updateColorPreview();
    });

    redRange.addEventListener('input', function() {
        redInput.value = redRange.value;
        updateColorInput();
    });

    greenRange.addEventListener('input', function() {
        greenInput.value = greenRange.value;
        updateColorInput();
    });

    blueRange.addEventListener('input', function() {
        blueInput.value = blueRange.value;
        updateColorInput();
    });

    function updateColorInput() {
        const redValue = redInput.value;
        const greenValue = greenInput.value;
        const blueValue = blueInput.value;

        const hexColor = rgbToHex(redValue, greenValue, blueValue);
        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        colorInput.value = hexColor;
        colorPreview.style.backgroundColor = rgbColor;
        hexCode.textContent = `Hex: ${hexColor}`;
    }

    function rgbToHex(r, g, b) {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    updateColorPreview();
});
