// //inhertiance in prototypical inheritance
//in this appraoch consturctor property goes out
// function Shape() {}
// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle(radius, coloe) {
// Shape.call(this, color)calling super consturctor
//   this.radius = radius;
// }

// // Circle.prototype = Object.create(Object.prototype);1st is like this and now on lower line
// Circle.prototype = Object.create(Shape.prototype);

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// function Square(size) {
//   this.size = size;
// }
//intermidate function inheritance
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// extend(Circle, Shape);

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Circle;

// const s = new Shape();
// const c = new Circle(1,"red");

//reseting the constructor
// Circle.prototype.constructor = Circle;

// //Method Overrriding
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }
// function Shape() {}
// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle() {}
// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//   Shape.prototype.duplicate.call(this); // call super method
//   console.log("duplicate circle");
// };
// //CHILD function run 1st because it comes 1st in ojectbase loop
// const c = new Circle();

// c.duplicate();

// //polymorphism
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }
// function Shape() {}
// Shape.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Circle() {}
// extend(Circle, Shape);

// Circle.prototype.duplicate = function () {
//   console.log("duplicate circle");
// };
// function Square() {}
// extend(Square, Shape);
// Square.prototype.duplicate = function () {
//   console.log("duplicate square");
// };

// const shapes = [new Circle(), new Square()];
// for (let shape of shapes) {
//   shape.duplicate();
// }

// //Mixins
// function mixin(target, ...sources) {
//   Object.assign(target, ...sources);
// }

// const canEat = {
//   eat: function () {
//     console.log("eat");
//   },
// };

// const canWalk = {
//   walk: function () {
//     console.log("walk");
//   },
// };

// const canSwim = {
//   swim: function () {
//     console.log("swim");
//   },
// };

// function Person() {}
// mixin(Person.prototype, canEat, canWalk);
// // const person = Object.assign({}, canEat, canWalk);
// // Object.assign(Person.prototype, canEat, canWalk);
// const person = new Person();
// console.log(person);

// function Goldfish() {}
// mixin(Goldfish.prototype, canEat, canSwim);
// // Object.assign(Person.prototype, canEat, canSwim);
// const goldfish = new Goldfish();
// console.log(goldfish);
