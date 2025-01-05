Certainly! Here's the entire README content in a single block for easy copying:

---

## React Calculator

This project is a simple calculator application built with React. The calculator can perform basic arithmetic operations and follows the BODMAS rule to ensure correct order of operations. It has an intuitive user interface with a single input field and 16 buttons for interacting with the calculator.

### Features

- **Basic Arithmetic**: Supports addition, subtraction, multiplication, and division.
- **BODMAS Rule**: Ensures expressions follow the correct order of operations.
- **Clear Function**: Clears the input field and result when the "C" button is pressed.
- **Error Handling**: Displays "Error" for invalid expressions, "NaN" for 0/0, and "Infinity" when dividing by zero.
- **User-Friendly Interface**: Responsive design with easy-to-use buttons and input field.

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Ishwanku/calculator.git
   cd calculator
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

### Usage

To use the calculator, simply click on the buttons to input numbers and operators. The input field will display the current expression. Click the "=" button to evaluate the expression and see the result displayed below the input field. Click the "C" button to clear the input field and result.

### Components

- **Calculator Component**: Main component that maintains the state, including the input expression and the result.
  - Handles button clicks, clearing the input field, and evaluating expressions using `mathjs`.
- **Button Component**: Reusable component for each button in the calculator.
- **Input Component**: Represents the input field where users see their typed expressions.
- **Result Component**: Displays the calculation result just below the input field.

### Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.
