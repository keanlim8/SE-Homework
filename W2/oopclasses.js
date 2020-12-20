// Week 3 Homework 2: Classes
/*
OOP: Classes

Let's create shaped objects

1. Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
- Write a function called circle_area that returns the area of the object.
- Write a function total_sides that returns the number of sides of the object.
*/
class Circle {
  constructor(radius, side) {
    this.radius = radius;
    this.side = side;
  }
  circle_area() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
  total_sides() {
    return this.side;
  }
};

const circle1 = new Circle(3.5, 1);
console.log(circle1.circle_area());
console.log(circle1.total_sides());
/*===================================================================================================
2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
- Write a function called rectangle_area that returns the area of the given object.
- Write a function total_sides that returns the number of sides of the object.
*/
class Rectangle {
  constructor(height, width, side) {
    this.height = height;
    this.width = width;
    this.side = side;
  }
  rectangle_area() {
    return this.height * this.width;
  }
  total_sides() {
    return this.side;
  }
};

const rectangle1 = new Rectangle(10, 4, 4);
console.log(rectangle1.rectangle_area());
console.log(rectangle1.total_sides());
/*===================================================================================================
3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
- Write a function called square_area that returns the area of the given object.
- Write a function total_sides that returns the number of sides of the object.
*/
class Square {
  constructor(length, side) {
    this.length = length;
    this.side = side;
  }
  rectangle_area() {
    return Math.pow(this.length, 2);
  }
  total_sides() {
    return this.side;
  }
};

const square1 = new Square(5, 4);
console.log(square1.rectangle_area());
console.log(square1.total_sides());
