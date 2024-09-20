console.log("Hello world");
//variables
let fName = "ali";
let lName = "raza";

console.log(fName + " " + lName);
//constraints let var const
let name = "Ali Raza";
let age = 21;
let gender = true;
//type of
console.log(typeof name);
console.log(typeof age);
//object
let person = {
  name: "Ali Raza",
  age: 21,
};

person.name = "Ansari";
person["age"] = 22;

console.log(person);
//arrays
let Colors = ["red", "green"];
Colors[2] = "yellow";

console.log(Colors);
console.log(Colors[0]);
//function
function greet(fName, lName) {
  console.log("Hello " + fName + " " + lName);
}
greet("raza", "ali");

function square(num) {
  return num * num;
}
console.log(square(2));
