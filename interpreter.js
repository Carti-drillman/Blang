function runInterpreter() {
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('output');

    if (fileInput.files.length === 0) {
        outputDiv.textContent = 'Please upload an image file.';
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const context = canvas.getContext('2d');
            context.drawImage(img, 0, 0);

            // Get image data
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let currentColor = null;

            // Process each pixel and log color values
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const index = (y * canvas.width + x) * 4;
                    const red = data[index];
                    const green = data[index + 1];
                    const blue = data[index + 2];
                    const alpha = data[index + 3];

                    const color = `rgb(${red}, ${green}, ${blue})`;

                    // Log the color for debugging
                    console.log(`Pixel at (${x}, ${y}): ${color}`);

                    // Update current color logic (simplified example)
                    if (currentColor !== null && currentColor !== color) {
                        console.log(`Color change detected from ${currentColor} to ${color}`);
                        currentColor = color;
                    } else if (currentColor === null) {
                        currentColor = color;
                    }
                }
            }

            outputDiv.textContent = 'Image processed. Check the console for debug info.';
        };
        img.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
}
