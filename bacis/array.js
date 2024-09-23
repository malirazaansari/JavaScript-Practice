// // adding in Array

// const arr = [3, 4];
// //end
// arr.push(4, 5);
// //start
// arr.unshift(1, 2);
// //middle
// arr.splice(2, 0, "a", "b");
// console.log(arr);

// //finding in array
// // primitivetype
// const arr2 = [1, 2, 3, 4, 5];

// console.log(arr2.indexOf(4)); // 3
// console.log(arr2.includes(2));

// //reference type
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const course = courses.find(function (coures) {
//   return coures.name === "a";
// });
// console.log(course);

// arrow function
// const course = courses.find((coures) => coures.name === "a");
// console.log(course);

//removing elments
//pop shift splice with 2nd arugment just like adding elements

// combine Array
// let arr2 = [1, 2, 3];
// let arr3 = [7, 5, 6, 4];
// const arr4 = arr2.concat(arr3);
// console.log(arr4);

//slice
// const arr5 = [1, 2, 3, 4, 5, 6, 7];
// arr5.slice(2, 2);
// console.log(arr5);

//spread
// const arr6 = [...arr2, ...arr3];
// console.log(arr6);

//iterating the array
// for (let key of arr6) {
//   console.log(key);
// }

//forEach
// arr6.forEach((key, index) => console.log(index, key));

// join
// console.log(arr6.join(",,"));

//split
// let name = "my name is ali raza";
// const parts = name.split(" ");
// console.log(parts);
// const combined = name.join("-");
// console.log(combined);

//sort
// arr6.sort();
//reverse
// arr6.reverse();
// console.log(arr6);

// const coursess = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScript" },
// ];

// coursess.sort(function (a, b) {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });
// console.log(coursess);

//mapping and filtering
// const numbers = [1, 2, 4, 3];
// const arr = numbers.filter((n) => n >= 0);
// console.log(arr);
// const arr7 = arr.map((n) => {
//   const obj = { value: n };
//   return obj;
// });
// console.log(arr7);

// //reduce
// let sum = 0;
// for (let n of numbers) sum += n;
// console.log(sum);
// const arr8 = numbers.reduce((a, currentValue) => a + currentValue, 0);
// console.log(arr8);
