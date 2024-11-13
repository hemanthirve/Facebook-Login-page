// String 
let str = "Hello world";
console.log(str);


console.log(str.slice(4,7));
console.log(str.replace("Hello", "Hi"));
console.log(str.repeat(3));

// Array 
// An array is a way to represent object, picture, or numbers in rows and columns.
// An array is a data structure that stores multiple pieces of data of the same type in contiguous memory location.
// Arrays are useful for working with multiple values of the same data stype.


// Creating an array

let students = ["aman", "shraddha", "krish", "priya", "payal", "rohan"];

students;
students.unshift("rohit", "lucky");
students.shift("aman", "shraddha");
students.shift("krish", "priya");
students.pop("rohan");

students.indexOf("krish");
students.includes("payal");
console.log(students);

// Objects 

let primory = {
    name: "aman",
    age: 24,
    course: "B.tech",
    contactNumber: "9987845621",
    attendence: "true",
}

let secondary = {
    name: "Rohot",
    age: 23,
    course: "BBA",
    contactNumber: "9685461265",
    attendence: "false",
}

console.log(primory);
console.log(secondary); 


secondary.age;

// add a value in object

primory.class = "first";
secondary.class = "second";
console.log(secondary);




// Function
// A function is a block of code that perform a specific task when its called

function mul() {
    let a,b;
    let mul = a * b;
}
console.log(mul(2,4));


// Higher order function

// Higher order function are functions that can accept other functions as arguments, return funtions or both. 
// They enable abstraction and flexibility in code, allowing you to create reusable and modular function for
// complex operations, making them essential in functional programming 


function multipleGreet(func, count) {
    for(let i=0; i<=count; i++) {
        func();
    }
    let greet = function() {
        console.log("Hello");
    }
    multipleGreet(greet, 2);
}

// try & catch

// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block

try {
    console.log(a);
} catch {
    console.log("varaible a doesn't")
}


// Arrow function 

const sum = (a,b) => {
    console.log(a+b);
}
sum(13,34);


// SetTimeout 

// setTimeout(function,timeout)


console.log("hello there!");

setTimeout( () => {
    console.log("Apna college");
}, 4000);
console.log("welcome to");


// setInterval

// setInterval(function,timeout)

setInterval( () => {
    console.log("Hello...");
}, 2000);
console.log("Namaste");
clearInterval(4)

