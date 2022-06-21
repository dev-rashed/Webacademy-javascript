// Number, String, object, boolean, undefined, null
// var, let, const
// String
// var x = "Hello World,world";
// var y = "WebAcademy";
//var y = new String("Hello World");

//let z = x.slice(-5);
// let z = x.slice(0, 5);
// let a = x.substring(0, 5);
// console.log(z);
// console.log(a);

//let z = x.replace(/World/g, "WebAcademy");
// let z = x.toUpperCase();
//let z = x.toLowerCase();
// let z = x.concat(" ", y);
//let z = x.trim();
// let z = x.split(",");
//console.log(z);

//let str = "Welcome to our webacademy, we are learning javascript on our webacademy";
// let searchResult = str.match(/webacademy/g);
// if( searchResult != null ) {
//     console.log(searchResult);
// } else {
//     console.log("Not found");
// }
//console.log(str.includes("webacademy"))
// startsWith();
//console.log(str.startsWith("to"))

// endsWith();
//console.log(str.endsWith("Welcome"))

// Template literals
// let name = "Rashed";
// let x = 12;
// let y = 13;
// let text = `Welcome to our webacademy`;
// let text1 = `Welcome 
// to 
// our 
// webacademy`;
// console.log(`The value of x is ${x} and y is ${y} and the sum is ${x+y}`);

// Array 
// let x = [1, 2, 3, 4, 5];
// let y = new Array(6, 7, 8, 9, 10);

//console.log(`Length of array x is ${x.length}`);
// x.unshift(0);
// x.unshift("new element");
//x.shift();
// x.pop();
// x.push(6);
//x[1] = 11;
//delete x[1];
//let newArray = x.slice(1, 3);
// x.splice(2, 1);
// console.log(x);

// sort();

//let x = [47, 1, 64, 6, 28, 14, 35, 5];
// let y = ["Banana", "Orange", "Apple", "Mango"];
// y.sort();
// y.reverse();

// x.sort(function(a, b){
//     return a - b;
// });
// x.reverse();
// console.log(x);

// Iteration
// forEach()

// var names = ["Rashed", "Rajib", "Ripon", "Sujon", "Sohan"];
// names.forEach(function(x, y, z) {
//     console.log("Hello " + x + " your index is " + y + " and the array is " + z);
// });

// map()
// let x = [1, 2, 3, 4, 5, 0];
// //console.log(x);
// let newArr = x.map(function(x, y, z) {
//     return `${x * 2} is at index ${y}`;
// });

// console.log(newArr);

// filter
// let x = [1, 2, 3, 4, 5, 0];
// //console.log(x);
// let newArr = x.filter(function(x, y, z) {
//     return x < 4;
// });

// console.log(newArr);
// function functionName() {

// }
// let computer = {
//     brand: "Dell",
//     model: "XPS",
//     price: 30000,
//     features: ["Graphics Card", "HDMI", "USB"],
//     specs: {
//         memory: "8GB",
//         processor: "i7",
//         storage: "1TB"
//     },
//     details: function() {
//         console.log(`The computer is a ${this.brand} Brand`);
//     }
// }

// console.log(computer.details())
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     price: 3000000,
//     color: "White",
//     specifications: {
//         engine: "V6",
//         transmission: "Automatic",
//         mileage: "10KMPL",
//         fuel: "Petrol"
//     },
//     comment: function() {
//         console.log(`The car is a ${this.brand} Brand which milege is ${this.specifications.mileage} is so cool`);
//     }
// }

// console.log(car["model"])
// console.log(car.comment())

// function 2 types: user-defined , build-in
// user-defined
// function add(...x) {
//     // x is array
//     var sum = 0;
//     x.forEach(function(x) {
//         sum = sum + x;
//     })
//     console.log(sum);
// }
// add(1,3, 4);
// let a = add(15, 20, 23);
// console.log(a);

// let add = function(...x) {
//     // x is array
//     var sum = 0;
//     x.forEach(function(x) {
//         sum = sum + x;
//     })
//     console.log(sum);
// }

// add(1,3, 4, 5, 6, 7, 8, 9, 10);

// let add = (...x) => {
//     // x is array
//     var sum = 0;
//     x.forEach(function(x) {
//         sum = sum + x;
//     })
//     console.log(sum);
// }
// add(1,3, 4, 5, 6, 7, 8, 9, 10);

// let ourCustomFun = x => {
//     console.log("Hello World " + x);
// }
// ourCustomFun("JS");

// if else
// let x = 3;
// and operator &&: true * true = true, false * true/ true * false / false * false = false
// or operator ||: true + true = true, false + true/ true + false / false + false = true
// if(x < 10 && x >5 ) {
//     alert("x is less than 10 and greater than 5");
// } else if(x == 11) {
//     alert("x is equal to 11");
// } else {
//     alert("x is greater than 11 or less than 5");
// }
// if(x> 10) {
//     alert("x is greater than 10");
// } else {
//     alert("x is less than 10");
// }

// ternary operation
// let x = 11;
// x > 10 ? alert("x is greater than 10") : (x == 10 ? alert("x is equal to 10") : alert("x is less than 10"));
// x > 10 ? console.log("x is greater than 10") : (x == 10 ? console.log("x is equal to 10") : console.log("x is less than 10"));

// return
// function add(...x) {
//     var sum = 0;
//     x.forEach(function(x) {
//         sum = sum + x;
//     })
//     return sum;
// }

// var total = add(1,3, 4, 5, 6, 7, 8, 9, 10);
// Null colscessing operator
// let x = 9;
// var y = x > 10 ?? "x is less than 10";
// if(y == true) {
//     alert("x is greater than 10");
// } else {
//     alert("x is less than 10");
// }
// console.log(y);

// Loop
// 1 - 100 for x > (greater than)
// for(initialization; condition; increment/decrement)   )
// for(i = 1; i <= 100; i++ ) {
//     console.log(i);
// }
// alert("Loop stopped")

// i = 0;
// while( i<= 10) {
//     console.log(i);
//     i= i + 2;
// }

// i = 1;
// do{
//     console.log(i);
//     i+=2;
// } while(i <= 10);


// Event :
var button = document.querySelector(".ourbtn");
button.addEventListener("click", function(){
    console.log("Button clicked");
});
button.addEventListener("mouseover", function(){
    button.style.cursor = "pointer";
    console.log("Mourse is over");
});
button.addEventListener("mouseout", function(){
    console.log("Mourse is out");
});

var inp = document.querySelector("input");
inp.addEventListener("keyup", function() {
    console.log("Input changed");
})
// onload


var ourbody = document.querySelector("body");
window.onscroll = function() {
    console.log("Scrolling");
}

var ourdiv = document.querySelector(".ourdiv");
ourdiv.addEventListener("dragenter", () => {
    ourdiv.style.backgroundColor = "red";
});

// ourdiv.addEventListener("dragenter", myFunction());

// function myFunction() {
//     ourdiv.style.backgroundColor = "red";
// }