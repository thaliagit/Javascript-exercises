class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape){
    if (shape instanceof Square){
      const result = shape.side * shape.side;
      return result;
    };
    if(shape instanceof Rectangle){
      const result = shape.width * shape.height;
      return result;
    }
    if(shape instanceof Circle){
      const result = Math.PI * shape.radius * shape.radius;
      return result;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));