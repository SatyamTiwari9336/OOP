'use strict';
const Person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};

const satyam = new Person('satyam', 2003);
console.log(satyam);
