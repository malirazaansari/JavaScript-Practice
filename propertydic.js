// property descriptor
// const person = { name: "Ali" };
// console.log(person);
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(descriptor);

// Object.defineProperty(person, "name", {
//   writable: false,
//   configurable: false,
//   enumerable: true,
// });
// person.name = "jon";
// delete person.name;

//consrtuctor property
// Object.getPrototypeOf(myobj);
// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype;
// const circle = new Circle(4);
// console.log(circle);

//property vs instance members
//instance mehtod
function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}
//prototype method
Circle.prototype.draw = function () {
  console.log("draw" + this.radius); // it will add a propototype means in his parent so we can acces it from there just like toSttring methong
};
// this values of prototype methods will overwrite objectbase values
const c1 = new Circle(1);
const c2 = new Circle(1);
//keys only return instance(own) members not prototype that we declare
console.log(Object.keys(c1));
// for in loop return all members
for (let keys in c1) console.log(keys);
