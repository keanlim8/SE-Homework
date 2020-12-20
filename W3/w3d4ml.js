// Week 3 Day 4 Morning Lab
/*OOP - Inheritance

Create a class called Fish
Define a method Swim( )
Create a class Nemo that inherits from Fish
Define an attribute color
Create a Nemo object. Can it swim?
Find the difference between abstract class and an interface
Which of the two can have implementation of a method in the class?*/

class Fish {
  constructor(color){
    this.color = color
  }
  Swim(){
    console.log("I can swim!");
  }
}

class Nemo extends Fish {
  constructor(color){
    super(color);
  }
}

const nemo = new Fish(['orange','white stripes']);

nemo.Swim();

console.log(nemo);
