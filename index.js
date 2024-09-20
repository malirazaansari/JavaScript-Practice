// console.log("Hello world");
// //variables
// let fName = "ali";
// let lName = "raza";

// console.log(fName + " " + lName);
// //constraints let var const
// let name = "Ali Raza";
// let age = 21;
// let gender = true;
// //type of
// console.log(typeof name);
// console.log(typeof age);
// //object
// let person = {
//   name: "Ali Raza",
//   age: 21,
// };

// person.name = "Ansari";
// person["age"] = 22;

// console.log(person);
// //arrays
// let Colors = ["red", "green"];
// Colors[2] = "yellow";

// console.log(Colors);
// console.log(Colors[0]);
// //function
// function greet(fName, lName) {
//   console.log("Hello " + fName + " " + lName);
// }
// greet("raza", "ali");

// function square(num) {
//   return num * num;
// }
// console.log(square(2));

// operater

//Arithmetic ope
// +,-,*,/,%,**,++,--

//Assingment ope
//= and (= with all arithmetic operator)

//Comparsion opr
//Relational >,<,=<,=>
//Equailty ===(both value and tupe of varible should be same),==,!==,!=

// //terniary and conditional
// let points = 110;
// let type = points > 100 ? "gold" : "silver";
// console.log(type);

// //logical ope
// //AND(&&), OR(||), NOT(!)
// // logical operator without booleen
// //falsy values (undefined, Null, 0 , false(booleen flase), ''(empty string), NaN)
// let usercolor = "red"; //(if undefined then blue will show)
// let defaulatcolor = "blue";
// let color = usercolor || defaulatcolor;

// console.log(color);

// //Bitwise operators
// // | , & ... for bit work 00000001, 00000010 etc

// //excercie
// //value swap
// let a = "red";
// let b = "blue";

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// //conditional statement
// let role = "admin";

// switch (role) {
//   case "admin":
//     console.log("admin");
//     break;
//   case "moderator":
//     console.log("moderator");
//     break;
//   default:
//     console.log("user");
// }

// if (role === "admin") console.log("admin");
// else if (role === "moderator") console.log("moderator");
// else console.log("user");

// // for..in and for..of loops
// const person = {
//   name: "ali",
//   age: 21,
// };

// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// const Colors = ["yellow", "blue", "red"];

// for (let color of Colors) {
//   console.log(color);
// }
