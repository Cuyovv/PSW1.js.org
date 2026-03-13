import java.util.Scanner;

public class Calculator {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Simple Java Calculator");

        System.out.print("Enter first number: ");
        double num1 = input.nextDouble();

        System.out.print("Enter operator (+ - * /): ");
        char operator = input.next().charAt(0);

        System.out.print("Enter second number: ");
        double num2 = input.nextDouble();

        double result = calculate(num1, num2, operator);

        System.out.println("Result: " + result);
    }

    // Calculator logic under the main program
    public static double calculate(double a, double b, char op) {

        switch(op) {
            case '+':
                return a + b;

            case '-':
                return a - b;

            case '*':
                return a * b;

            case '/':
                if(b != 0) {
                    return a / b;
                } else {
                    System.out.println("Cannot divide by zero");
                    return 0;
                }

            default:
                System.out.println("Invalid operator");
                return 0;
        }
    }
}
