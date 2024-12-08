function runInterpreter() {
    const code = document.getElementById('codeArea').value;
    const outputDiv = document.getElementById('output');

    // Here, we're just simulating a basic output for demonstration.
    // You can modify this to include real execution logic as needed.
    try {
        const result = interpretPietImage(code);
        outputDiv.textContent = 'Output: ' + result;
    } catch (error) {
        outputDiv.textContent = 'Error: ' + error.message;
    }
}
