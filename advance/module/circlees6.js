const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("cricle ES6 with radius: " + _radius.get(this));
  }
}
