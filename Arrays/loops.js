// looping through array

// foreach loop
let arr = [1, 2, 67, 99, 34, 0];
console.log("V i arrray");
arr.forEach((val, indx, array) => {
    console.log(val, indx, array);
});

// map - it creates a new array
let newArr = arr.map((val) => {
    return val * 2;
});
console.log("new array is ...");
console.log(newArr);

// filter
let evenArr = arr.filter((val) => {
    return val % 2 == 0;
});
console.log("Even array is ", evenArr);

// reduce
let sum = arr.reduce((res, val) => {
    return res+val;
});
console.log("sum of array is", sum);

// Array.from()
let strArray = Array.from("Deva nand");
console.log(strArray);

