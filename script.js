// console.log() stement
console.log("\n");
console.log("Hello World!");
// Variablles and Data types in JS
let fullName = "Deva nand";
let age = 21;
let isResult = true;
let Variables;
console.log(
  "My Name is " +
    fullName +
    "\nand my age is " +
    age +
    "\nand I am " +
    isResult +
    " in my exams."
);
console.log(
  `My Name is ${fullName} and my age is ${age} and I am ${isResult} in my exams.`
);
console.log(Variables); // Undefined variable
const PI = 3.14; // Constant variable
// Data types in JS
let name = "Deva nand"; // String
let x = null; // Null
let y = undefined; // Undefined
console.log(typeof name, typeof age, typeof isResult, typeof x, typeof y); // String
// Objects in JS
let person = {
  "Full name": "Deva nand", // key name with space
  age: 21,
  cgpa: 9.0,
  isPass: true,
};
console.log(person); // Object
console.log(person["Full name"]); // Correct way to access
console.log(person.age); // Correct way to access
person.age = person.age + 1; // Update value
person.cgpa = 9.5; // Update value
person.salary = "10M $"; // Add new key value pair
console.log(person);
// Creating a Constant Object
const student = {
  name: "Abhay",
  age: 21,
  cgpa: 8.0,
};
student.cgpa = 7.0; // Update value of Constant Object
student.isPass = true; // Add new key value pair
console.log(student); // constant Object

let a = "var";
a = a + 1; // String concatenation
console.log(a); // String concatenation

const product = {
  name: "Parker Jotter Standard CT Ballpoint Pen",
  color: "Black",
  rating: 4.0,
  price: 270,
};

// Operators in JS
let x1 = 10;
let y1 = 20;
console.log("x1 + y1 =", x1 + y1); // Addition
console.log("2^3 =", 2 ** 3); // Exponentiation
let no1 = 5; // Number
let no2 = "5"; // String --> number 5 in string format
console.log("no1 =", no1, "no2 = ", no2);
console.log("no1 == no2", no1 == no2); // Loose equality (==) - checks value only
console.log("no1 === no2", no1 === no2); // Strict equality (===) - checks value and type

// conditionals in JS
{
  // if statement
  let age = 14;
  // if else statement
  if (age > 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
  // if else if statement
  let marks = 90; // Number
  if (marks >= 90) {
    console.log("Grade A+");
  } else if (marks >= 80) {
    console.log("Grade A");
  } else if (marks >= 70) {
    console.log("Grade B+");
  } else if (marks >= 60) {
    console.log("Grade B");
  } else if (marks >= 50) {
    console.log("Grade C+");
  } else if (marks >= 40) {
    console.log("Grade C");
  } else {
    console.log("Fail");
  }
  // ternary operator
  let no = 10; // Number
  let result = no % 2 == 0 ? "Even" : "Odd"; // Even or Odd
  console.log("The number is ", result); // Even or Odd
}

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

// let Name = prompt("Enter your name: "); // Prompt user for input
// alert("Hello " + Name); // Alert user with name

// Loops
{
  for (let i = 1; i <= 5; i++) {
    console.log("Hello World " + i); // Print Hello World 5 times
  }
  let count = 1; // Number
  while (count <= 5) {
    console.log(count); // Print 1 to 5
    count++; // Increment count
  }
  console.log("\n");
  do {
    console.log(count);
    count++; // Increment count
  } while (count <= 5);
  console.log("\n");

  // for of loop
  let size = 0;
  for (const element of "Deva nand") {
    console.log(element); // Print each character of string
    size++; // Increment size
  }
  console.log("Size of string is ", size); // Print size of string

  console.log("\n");
  // for in loop
  for (const key in person) {
    const element = person[key]; // Access each key value pair of object
    console.log(key, ":-", element); // Print each key value pair of object
  }
}
