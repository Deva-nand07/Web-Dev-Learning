// This is tutorial for arrays in JS
// Addvised to use this js file in HTML file for better understanding

console.log("\n");
// Array is a collection of items
// Array is a data structure that can store multiple values in a single variable
let avengers = ["Ironman", "Thor", "Hulk", "Black Widow", "Captain America"];
console.log(avengers); // ["Ironman", "Thor", "Hulk", "Black Widow", "Captain America"]
console.log("Length of avengers: " + avengers.length); // 5 arrays property
const marks = [90, 68, 45, 99, 78, 39, 85];
let info = ["Dev", "Anand", 22, true, null, undefined]; //arrays with different data types but not recommended
console.log("Type of arrays: " + typeof info); // object

// Arrays indices
console.log("My Favorite Avenger: " + avengers[1]); // Thor
console.log("Out of bound index: " + avengers[10]); // undefined
avengers[3] = "Black Panther"; // update value
console.log("Updated avengers: " + avengers); // ["Ironman", "Thor", "Hulk", "Black Panther", "Captain America"]

// Looping over an array
console.log("Looping over an array:");
// for of loop (Recommended)
for (let avenger of avengers) {
  console.log(avenger.toUpperCase());
}
// for loop
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
  console.log(marks[i]);
}
console.log(`Average Marks:  ${totalMarks / marks.length}`); // 72
// for in loop
for (let index in info) {
  console.log(`Index: ${index} and value: ${info[index]}`);
}
// we can also use for each, while, and do while loops

// Practice
{
  let prices = [250, 645, 300, 900, 50];
  console.log(`Prices before discount: ${prices}`);
  // apply 10% discount on all prices
  for (let i = 0; i< prices.length; i++) {
    prices[i] = prices[i] * 0.9;
  }
  console.log(`Prices after discount: ${prices}`);
}

// Array Methods

// 1. push() - add element at end of array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits before push: " + fruits); // ["Apple", "Banana", "Mango"]
fruits.push("Orange", "Grapes"); // add element at end of array
console.log("Fruits after push: " + fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// 2. pop() - remove last element of array
let deletedFruit = fruits.pop(); // remove last element of array
console.log("Fruits after pop: " + fruits); // ["Apple", "Banana", "Mango", "Orange"]
console.log("Deleted fruit: " + deletedFruit); // Grapes

// 3. toString() - convert array to string
console.log("Fruits as string: " + fruits.toString()); // Apple,Banana,Mango,Orange

// 4. join() - joins array element with separator
console.log(fruits.join(" and "));

// 5. shift() - removes first element and return it 
let landAnimals = ["Dog", "cat", "lion", "tiger"];
console.log(landAnimals.shift());

// 6. unshift() - adds element to array at begining and return length
console.log(landAnimals.unshift("dog"));

// 7. delete - deletes array element, it is an operator
delete landAnimals[3];
console.log(landAnimals);

// 8. concat() - joins multiple arrays
let waterAnimal = ["whale", "sharks", "starFish"];
let animals = landAnimals.concat(waterAnimal);
console.log(animals);

// 9. sort() - sorts elements 
animals.sort();
console.log(animals);

// 10. slice() - retruns slice of array
console.log(animals.slice(4));
console.log(animals.slice(4, 6));

// 11. splice() - used to add, delete or replace elements from an array
let numbers = [1, 2, 3, 4, 5, 6, 7];
// add
numbers.splice(3, 0, 45);
console.log(numbers);
// delete
numbers.splice(4, 1);
console.log(numbers);
// replace
numbers.splice(3, 2, 404, 505);
console.log(numbers);

// 12. reverse
animals.reverse();
console.log(animals);