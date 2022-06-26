var x = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,65];
x.shift();
x.unshift("i am unshift");
x.pop();
x.push("i am push");
x[4] = "i am waltanet";
delete x[2];
var newArray = x.slice(5, 10);

console.log(x);

newArray.splice(1, 3)
console.log(newArray);