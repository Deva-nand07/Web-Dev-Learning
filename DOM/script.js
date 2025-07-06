// Run all this js in console window of the browser one by one

// Interacting with the DOM
// let age = prompt("Enter your age");
// let check=confirm("You must be above 18");
// if (check) {
//     alert("Welcome");
// }
// else {
//     alert("You are below 18 years old");
// }

// Window Object
window;
window.document;
console.dir(document);
console.log(window.document);
console.log(document.body);

// Accessing elements in the DOM
let head = document.getElementById("heading");
console.dir(head);
let box = document.getElementsByClassName("container");
console.dir(box);
// Using querySelector
let firstElement = document.querySelector("p");
let allElements = document.querySelectorAll("p");
console.dir(firstElement);
console.dir(allElements);

// Properies of the DOM
firstElement.style.color = "red";
firstElement.style.backgroundColor = "yellow";
firstElement.style.fontSize = "20px";
firstElement.tagName;
firstElement.innerText;
firstElement.innerHTML;
firstElement.textContent;

// Child Nodes
// Note try to run all these commands in the console window one by one
document.body.childNodes; // This will give you all child nodes of the body
document.body.childNodes[0].nodeName; // This will give you the name of the
document.body.childNodes[0];
document.body.childNodes[3];
document.body.childNodes[3].childNodes; // This will give you all child nodes of the 4th child node of the body
document.body.firstElementChild; // This will give you the first child element of the body
document.body.lastElementChild; // This will give you the last child element of the body

// DOM Manipulation
// Selecting with ID
document.getElementById("heading").style.color = "blue";
// Selecting with class
document.getElementsByClassName("container")[0].style.backgroundColor =
  "lightgray";
// Selecting with tag name
document.getElementsByTagName("p")[0].style.fontSize = "18px";
// Selecting with querySelector
document.querySelector(".container").style.border = "2px solid black";

console.log(document.querySelectorAll(".box")); // This will give you all elements with class 'box'
// document.querySelectorAll(".box").style.color = "green"; // This will not work as querySelectorAll returns a NodeList, not a single element
document.querySelectorAll(".box").forEach((element) => {
  element.style.backgroundColor = "#ffaa10d6";
});

// Attribute Methods
let h1 = document.querySelector("h1"); // ✅ selects the first <h1> element
let val = h1.getAttribute("id"); // This will get the value of the 'id' attribute of the h1 element
let val2 = h1.getAttribute("class"); // This will get the value of the 'class' attribute of the h1 element
console.log(val); // This will log the value of the 'id' attribute
console.log(val2); // This will log the value of the 'class' attribute
h1.hasAttribute("id"); // This will check if the h1 element has an 'id' attribute, returns true or false
h1.setAttribute("id", "head1");// id value changed from heading to head1
h1.attributes; // This will give you all attributes of the h1 element

// Inserting Elements Methods
let newElement = document.createElement("p"); // This will create a new <p> element
newElement.className = "para";
newElement.innerHTML = "<b>New Paragraph</b>"; // This will set the inner HTML of the new element
let arr = document.querySelectorAll("p");
arr[1].after(newElement); // This will append the new element to the second <p> element
// Removing Elements Methods
let elementToRemove = document.querySelector(".para"); // This will select the first element with
elementToRemove.remove(); // This will remove the selected element from the DOM

// Insert Adjacent Methods
let newElement2 = document.createElement("p");  
newElement2.className = "para2";
newElement2.innerHTML = "<b>New Paragraph 2</b>"; // This will set the inner HTML of the new element
arr[0].insertAdjacentElement("afterend", newElement2); // This will insert the new element after the first <p> element
