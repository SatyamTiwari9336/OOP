'use strict';
const Person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};
//1.a new {} is created
//2.function is called , this ={}
//3.{} linked to prototype
//4. function automatically return {}
const satyam = new Person('satyam', 2003);
console.log(satyam);
