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

//this keyword
const vedio = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // const self = this;
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
      //   console.log(self.title, tag);
    }, this);
  },
};

vedio.showTags();
