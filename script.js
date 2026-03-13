function runCalculation() {
    // Get values from the HTML inputs
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    // Validation
    if (isNaN(a) || isNaN(b)) {
        resultElement.innerText = "Please enter valid numbers";
        return;
    }

    let result;

    // This is the JS version of your Java Switch logic
    switch(op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if(b !== 0) {
                result = a / b;
            } else {
                resultElement.innerText = "Cannot divide by zero";
                return;
            }
            break;
        default:
            resultElement.innerText = "Invalid operator";
            return;
    }

    // Display the result on the screen
    resultElement.innerText = "Result: " + result;
}
