function calculate() {
    const num1 = parseFloat(prompt("Enter first number:"));
    const operator = prompt("Enter operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter second number:"));
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        default:
            alert("Invalid operator");
            return;
    }

    alert("Result: " + result);
    document.getElementById('display').innerText = "Last Result: " + result;
}

// Automatically start the calculator when the page loads
calculate();
