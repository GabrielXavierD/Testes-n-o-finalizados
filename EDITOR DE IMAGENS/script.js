// Carregar a imagem para o canvas
function loadImageToCanvas(canvas, imageUrl) {
    fabric.Image.fromURL(imageUrl, function (img) {
        canvas.clear();
        canvas.add(img);
    });
}

// Aplicar brilho à imagem
function applyBrightness(canvas, value) {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.filters.push(new fabric.Image.filters.Brightness({ brightness: value }));
        activeObject.applyFilters();
        canvas.renderAll();
    }
}

// Aplicar contraste à imagem
function applyContrast(canvas, value) {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.filters.push(new fabric.Image.filters.Contrast({ contrast: value }));
        activeObject.applyFilters();
        canvas.renderAll();
    }
}

// Aplicar saturação à imagem
function applySaturation(canvas, value) {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        activeObject.filters.push(new fabric.Image.filters.Saturation({ saturation: value }));
        activeObject.applyFilters();
        canvas.renderAll();
    }
}

// Salvar a imagem editada
function saveImage(canvas) {
    const editedDataURL = canvas.toDataURL();
    // Implemente a lógica para salvar a imagem (por exemplo, enviar para o servidor ou fazer o download)
}

// Inicializar o canvas
const canvas = new fabric.Canvas('imageCanvas');

// Event listener para carregar imagem
const imageInput = document.getElementById('imageInput');
imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        loadImageToCanvas(canvas, reader.result);
    };

    reader.readAsDataURL(file);
});

// Event listeners para os botões de filtro
document.getElementById('applyBrightness').addEventListener('click', function () {
    const brightnessValue = parseFloat(prompt('Digite o valor de brilho (-1 a 1):'));
    applyBrightness(canvas, brightnessValue);
});

document.getElementById('applyContrast').addEventListener('click', function () {
    const contrastValue = parseFloat(prompt('Digite o valor de contraste (0 a 2):'));
    applyContrast(canvas, contrastValue);
});

document.getElementById('applySaturation').addEventListener('click', function () {
    const saturationValue = parseFloat(prompt('Digite o valor de saturação (-1 a 1):'));
    applySaturation(canvas, saturationValue);
});

// Event listener para salvar imagem
document.getElementById('saveImage').addEventListener('click', function () {
    saveImage(canvas);
});
