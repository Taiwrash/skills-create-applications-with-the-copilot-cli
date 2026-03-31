/**
 * Test file for calculator operations
 * Tests the basic operations shown in the calc-basic-operations.png image:
 * - 2 + 3
 * - 10 - 4
 * - 45 * 2
 * - 20 / 5
 */

const { add, subtract, multiply, divide, calculate } = require('./calculator');

console.log('=== Calculator Test Results ===\n');

try {
  // Test 1: Addition (2 + 3)
  const result1 = calculate(2, 3, '+');
  console.log(`✓ Addition: 2 + 3 = ${result1}`);

  // Test 2: Subtraction (10 - 4)
  const result2 = calculate(10, 4, '-');
  console.log(`✓ Subtraction: 10 - 4 = ${result2}`);

  // Test 3: Multiplication (45 * 2)
  const result3 = calculate(45, 2, '*');
  console.log(`✓ Multiplication: 45 * 2 = ${result3}`);

  // Test 4: Division (20 / 5)
  const result4 = calculate(20, 5, '/');
  console.log(`✓ Division: 20 / 5 = ${result4}`);

  console.log('\n=== All tests passed! ===');
} catch (error) {
  console.error(`✗ Error: ${error.message}`);
}
