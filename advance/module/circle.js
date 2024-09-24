//implementation detail
const _radius = new WeakMap();
//publice interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  draw() {
    console.log("cricle with radius: " + _radius.get(this));
  }
}

module.exports = Circle;
