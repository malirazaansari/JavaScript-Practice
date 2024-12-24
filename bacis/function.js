//arguments
// function sum() {
//   let total = 0;
//   for (let vlaue of arguments) {
//     total += vlaue;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//rest operator
// function sums(...arrs) {
//   return arrs.reduce((a, b) => a + b);
// }

// console.log(sums(1, 2, 3, 4, 6, 7, 8, 9, 10));

//default parameter
// function interest(principle, rate = 3.5, years = 5) {
//   return ((principle * rate) / 100) * years;
// }
// console.log(interest(10000));

// const person = {
//   fName: "ali",
//   lName: "raza",
//   get fullName() {
//     return `${person.fName} ${person.lName}`;
//   },
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("Value in not a string");
//     const part = value.split(" ");
//     if (part.length != 2) throw new Error("enter both first and last name");
//     this.fName = part[0];
//     this.lName = part[1];
//   },
// };
// try {
//   person.fullName = "";
// } catch (e) {
//   console.log(e);
//   //   alert(e);
// }
// //getter setter
// console.log(person.fullName);

// //this keyword
// const vedio = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     // const self = this;
//     this.tags.forEach((tag) => {
//       console.log(this.title, tag);
//       //   console.log(self.title, tag);
//     }, this);
//   },
// };

// vedio.showTags();

// Factory Functions
// function createFunction(radius) {
//   return {
//     radius,
//     draw() {
//       console.log(`Drawing circle with radius ${this.radius}`);
//     },
//   };
// }

// const circle1 = createFunction(10);
// circle1.draw();
// function CreateFunction(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log(`Drawing circle with radius ${this.radius}`);
//   };
// }

// const circle4 = new CreateFunction(15);
// circle4.draw();

// function Stopwatch() {
//   let startTime,
//     running,
//     endTime,
//     duration = 0;
//   this.start = function () {
//     if (running) {
//       throw new Error("Stopwatch is already running");
//     }
//     running = true;
//     startTime = new Date();
//   };
//   this.end = function () {
//     if (!running) {
//       throw new Error("Stopwatch is not running");
//     }
//     running = false;
//     endTime = new Date();

//     const seconds = (endTime.getTime - startTime.getTime) / 1000;
//     return (duration = +seconds);
//   };
//   this.reset = function () {
//     running = false;
//     startTime = null;
//     endTime = null;
//     duration = 0;
//   };
//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }

// function morning(hour) {
//   if (hour < 12 && hour > 6) {
//     console.log("Good Morning");
//   } else if (hour > 1 && hour < 4) {
//     console.log("Good Afternoon");
//   } else {
//     console.log("Good Evening");
//   }
// }

// morning(10);
// morning(3);

// for (i = 0; i < 5; i++) {
//   console.log("value of I is, Helllo world from for loop", i);
// }

// let value = 5;
// while (value < 10) {
//   console.log("hello world from while loop", value);
//   value++;
// }

// let done = 10;
// do {
//   console.log("hello world from do loop", done);
//   done++;
// } while (done < 15);
