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

person.hey = function () {
  console.log('hey there 👋');
  console.log(this);
};
person.hey();

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
//challenge 1
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new car('BMW', 100);
const mercedes = new car('mercedes', 80);
console.log(bmw);
console.log(mercedes);
car.prototype.acceleration = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
bmw.acceleration();
bmw.acceleration();
mercedes.brake();
mercedes.acceleration();
mercedes.acceleration();
*/
//es6 classes

//class expression
// const personcl = class {};
//class declaration
class personcl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }

  //setting a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert('Not a full name  ');
  }
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey there 👋');
  }
}

const jonas = new personcl('jonas smedmat', 1975);
const walter = new personcl('walter white', 2001); //should always have space in calling the class made here
console.log(walter);
console.log(walter.fullName);
console.log(jonas);
// personcl.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
jonas.greet();
personcl.hey();
// jonas.hey();//as hey() is static function it wont run

console.log(jonas.age); // for getter

jonas.calcAge(); //for metho0d

//1. classes are not hoisted ...even when declared
//2. classes are also first class citizens
//3. classes are only executed in strict mode
//getter and setter

const accounts = {
  owner: 'jonas',
  movements: [20, 30, 40, 10],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(accounts.latest);
accounts.latest = 100;
console.log(accounts.movements);

//Array.from()  coverts all the array like things to array
const example = Array.from(document.querySelectorAll('h1'));
console.log(example);

//.from is static attached to Array namespace
// [1, 2, 3, 4].from();

console.log(Number.parseFloat(2.123));

//.create for OOP in JS
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstname, birthyear) {
    this.firstname = firstname;
    this.birthYear = birthyear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'steven';
steven.birthYear = 2022;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

console.log(steven);
const sarah = Object.create(PersonProto);

sarah.init('sarah', 1979);
sarah.calcAge();
console.log(sarah);
