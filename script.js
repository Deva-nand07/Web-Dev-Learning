// Functions in JS
{
  // Default functions
  console.log("\n");

  console.log("deva nand".toUpperCase()); // Convert string to uppercase

  array = [1, 2, 3, 4];
  array.push(5); // Add 5 to array
  console.log(array); // Print array
}

{
  // User defined functions
  // function syntax
  console.log("\n");
  function name(params) {}
  function greeting(Name) {
    console.log("Hello " + Name); // Print Hello + Name
  }
  greeting("Deva nand"); // Call function with name Deva nand
  greeting("Lalit"); // Call function with name Lalit

  function add(a, b) {
    return a + b; // Return sum of a and b
  }
  sum = add(10, 20); // Call function with a = 10 and b = 20
  console.log("Sum is ", sum); // Print sum

  function sub(a, b) {
    return a - b; // Return difference of a and b
  }
  subtraction = sub(20); // Call function with a = 20 and b = 10
  console.log("Subtraction is ", subtraction); // Print subtraction
  // NaN is not a number

  function Exponentiation(base, exponent) {
    let result = base ** exponent; // Exponentiation
    return result; // Return result
  }
  console.log("Exponentiation of 2^3 is ", Exponentiation(2, 3)); // Call function with base = 2 and exponent = 3

  // Arrow function
  const Addition = (a, b) => {
    return a + b; // Return sum of a and b
  };
  console.log("Value of Addition (arrow function) =", Addition(18, 22)); // Call function with a = 18 and b = 22

  // functiojn with optional parameters
  function salaryIncrement(salary, increment = 5000) {
    return salary + increment; // Return salary + increment
  }
  console.log("Previous Salart of Deva nand = ", 100000, "$"); // Print salary of Deva nand
  console.log("Updated Salary  of Deva nand", salaryIncrement(100000), "$"); // Call function with salary = 1000 and increment = 500
}
