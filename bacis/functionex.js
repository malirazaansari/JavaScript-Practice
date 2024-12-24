//1st ex
// function sum(...arr) {
//   return arr.reduce((a, b) => a + b);
//   //   if (arr.isArray([])) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// //2nd ex
// const cricle = {
//   radius: 2,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// console.log(cricle.area);

//3rd ex

// person = {
//   firstName: "Ali",
//   lastName: "Raza",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     let parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = "Raza Ansari";

// console.log(person.fullName);

let numbers = [1, -1, 2, 3, -4, 5];

// let positiveNumbers = numbers.filter((n) => n > 0);
// console.log(positiveNumbers);

let items = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));
console.log(items);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (let n of arr) sum += n;
console.log(sum);

let sum2 = arr.reduce((sum, n) => sum + n);
console.log(sum2);
