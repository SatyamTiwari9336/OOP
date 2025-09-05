'use strict';
/*
const Person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;

  //never do this
  //   this.Calcage = function () {
  //     console.log(2037 - this.birthyear);
  //   };
};
//1.a new {} is created
//2.function is called , this ={}
//3.{} linked to prototype
//4. function automatically return {}

const satyam = new Person('satyam', 2003);
console.log(satyam);
const jonas = new Person('jonas', 1975);
const matilda = new Person('matilda', 2004);
console.log(matilda, jonas);

//satyam is an instance of Person
console.log(satyam instanceof Person);
// never create a method inside a constructor function

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

satyam.calcAge();

console.log(satyam.__proto__);
console.log(satyam.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(satyam));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
//.prototypeoflinkedobjects

Person.prototype.species = 'homo sapiens'; //not own property as declared using prototype but usable for all objects created using Person
console.log(satyam.species, jonas.species);
console.log(satyam.hasOwnProperty('firstname'));
console.log(satyam.hasOwnProperty('species'));
*/
