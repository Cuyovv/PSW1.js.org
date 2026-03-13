function runCalculation() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    if (isNaN(a) || isNaN(b)) {
        resultElement.innerText = "Error: Enter numbers";
        return;
    }

    let result;
    switch(op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': 
            if(b !== 0) { result = a / b; } 
            else { resultElement.innerText = "Div by 0 error"; return; }
            break;
    }
    resultElement.innerText = "Result: " + result;
}

// This part shows the code at the bottom of the page
window.onload = function() {
    fetch('script.js')
        .then(response => response.text())
        .then(data => {
            document.getElementById('code-viewer').textContent = data;
        });
};
