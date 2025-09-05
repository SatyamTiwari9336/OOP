'use strict';
/**/

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

// console.log(satyam.__proto__);
console.log(satyam.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(satyam));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
//.prototypeoflinkedobjects

Person.prototype.species = 'homo sapiens'; //not own property as declared using prototype but usable for all objects created using Person
console.log(satyam.species, jonas.species);
console.log(satyam.hasOwnProperty('firstname'));
console.log(satyam.hasOwnProperty('species'));
console.log(satyam.__proto__); //person
console.log(satyam.__proto__.__proto__); //object
console.log(satyam.__proto__.__proto__.__proto__); //null
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 3, 5, 2, 9, 2];
console.log(arr.__proto__); // all comes from Array prototype inbuilr in js
console.log(arr.__proto__ === Array.prototype); //true

//adding new method to prototype property of Arrays in JS
//not good for bigger projects
Array.prototype.unique = function () {
  return [...new Set(this)];
};
//now any array in this script can use this function
console.log(arr.unique());

console.dir(x => x + 1);
