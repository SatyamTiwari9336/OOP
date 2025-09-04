'use strict';
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
