age = 25;
let year = 2024;

age = 30;

console.log(age, year);

const points = 100;
// points = 50;
console.log(points);

//String
let personName = "Clavan Dsouza";
console.log(personName);

//String concat
let firstName = "Clavan";
let lastName = "Dsouza";

let fullName = firstName + " " + lastName;
console.log(fullName);

//get charcter

console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());

console.log(fullName.lastIndexOf("a"));

///slice
console.log(fullName.slice(3, 6));

//substring
console.log(fullName.substring(4, 6));

//replace
let result = fullName.replace("C", "b");
console.log(result);

//Array

let ninjas = ["shaun", "ryu", "clavan"];

ninjas[1] = "Dsouza";
console.log(ninjas[1]);

// strict and loose
let n = 5;

console.log("5" == n); // returns true loose comparison

console.log("5" === n); // returns false tight comparison

//type conversion
