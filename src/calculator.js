/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {number} a - First number
 * @param {number} b - Second number to subtract
 * @returns {number} Difference of a minus b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides two numbers
 * @param {number} a - Dividend (numerator)
 * @param {number} b - Divisor (denominator)
 * @returns {number} Result of a divided by b
 * @throws {Error} If b is zero (division by zero)
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Main calculator function that performs operations based on operator
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @param {string} operator - Operation to perform (+, -, *, /)
 * @returns {number} Result of the calculation
 */
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
    case '×':
      return multiply(a, b);
    case '/':
    case '÷':
      return divide(a, b);
    default:
      throw new Error(`Invalid operator: ${operator}. Supported operators are: +, -, *, /`);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};
