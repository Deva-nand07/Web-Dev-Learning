// Tutorial on Stirng Manipulation

console.log("\n")

//practise qns
{
  // let fullName = prompt("Enter your Full Name without spaces");
  // alert(`@${fullName}${fullName.length}`);
}
// Two method to create string
let str1 = "Hello World!"; // Using double quotes
let str2 = 'Hello India!'; // Using single quotes

// length of string
console.log("Length of str1: " + str1.length); // 12
console.log("Length of str2: " + str2.length); // 12

// Accessing string character using index
console.log("First character of str1: " + str1[0]); // H
console.log("Second character of str2: " + str2[1]); // e
console.log("Last character of str1: " + str1[str1.length - 1]); // !
console.log("Out of range character of str2: " + str2[20]); // undefined

// Template Literals
const item = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};
console.log(
  `Item name is ${item.name} of brand ${item.brand} and price  is ${item.price} rupees.`
); // Item name is Laptop of brand Dell and price is 50000 rupees.

// String name with double quotes
const str3 = "Hello \"World\"!"; // Hello "World"!
let str4 = `Hello  "India"!`;
console.log(str3); // Hello "World"!
console.log(str4); // Hello  "India"!

// String Interpolation

// String Methods
let brand = "  Dell  ";
console.log(brand.length); // 8
console.log(brand.toUpperCase()); // "  DELL  "
console.log(brand.toLowerCase()); // "  dell  " 
console.log(brand.trim()); // "Dell" trim() removes extra spaces from start and end of string
let firstName = "Deva nand";
let lastName = "Kumar";
console.log(firstName.slice(0, 4));
console.log(firstName.concat(" ", lastName)); // "Deva nand Kumar"
let fullName = firstName + " " + lastName;
console.log("another way to concat: " + fullName); // "Deva nand Kumar"
console.log(fullName.replace("a nand", " Anand")); // "Deva Anand Kumar"
console.log(fullName.charAt(8)); // "d"
console.log(fullName.indexOf("a")); // 3
console.log("Type of string: " + typeof fullName); // string