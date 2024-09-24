//classes
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.draw = function () {
//       console.log("draw");
//     };
//   }
// this is a instance method
//   move() {
//     console.log("move");
//   }
// static method
// static parse(str){}
// }
// const c = new Circle(1);
// console.log(c.draw());
// console.log(c.move());

// //static method only accessed by class by self not by and object
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   //instance method
//   draw() {}
//   // static method
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }
// //like Math is a class and his functoins are static methods
// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);

// // this keyword
// const Circle = function () {
//   this.draw = function () {
//     console.log(this);
//   };
// };

// const c = new Circle();
// //method call here we get fuction of obhext (this= this object new)
// c.draw();

// const draw = c.draw;
// //function call here we get objext of windows (this= golbal)
// draw();

// // private function or porperty using SYMBOL
// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }
//   [_draw]() {}
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

// //Weakmaps for private valee
// const _radius = new WeakMap();
// const _move = WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//     _move.set(this, () => {
//       //with arrow function we can access this value
//       console.log("move", this);
//     });
//   }
//   [_draw]() {
//     _move.get(this)(); //private move function called
//     console.log("draw");
//   }
// }

// const c = new Circle(1);

// // get and set
// const _radius = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(value) {
//     if (value <= 0) throw new Error("invalid radis");
//     _radius.set(this, value);
//   }
// }
// const c = new Circle(1);

// // inheritance
// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   move() {
//     console.log("move");
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }
//   draw() {
//     console.log("draw");
//   }
// }
// const c = new Circle("red", 1);
// c.draw();
// c.move();

//method overriding
class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("circle move");
  }
}
const c = new Circle("red", 1);
