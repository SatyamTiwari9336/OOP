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
/////////////////////////////////////////////////////////////////
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

////////////////////////////////////////
//challenge 2
class Carcl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  brake() {
    this.speed -= 5;
    console.log(`the car is running at ${this.speed} mp/h`);
  }
  accelerate() {
    this.speed += 10;
    console.log(`the car is running at ${this.speed} mp/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Carcl('ford', 100);
console.log(ford);
console.log(ford.speedUS); //getter
ford.speedUS = 120; //setter
console.log(ford);
ford.brake();
ford.brake();
ford.brake();
console.log(ford);
/////////////////////////////////////
//classes inheritence : functions constructor


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Students = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// console.log(mike);
//linking prototypes
Students.prototype = Object.create(Person.prototype);
Students.prototype.introduce = function () {
  console.log(
    `my name is ${this.firstName} and i am ${
      2025 - this.birthYear
    } years old and studying in ${this.course}`
  );
};
const mike = new Students('mike', 2020, 'CSE');

mike.introduce();
mike.calcAge(); // this works only because of Students.prototype = Object.create(Person.prototype);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike instanceof Students);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Students.prototype.Constructor = Students;
console.dir(Students.prototype.Constructor);

////////////////////////////////////////////////
//Challenge - 3

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
car.prototype.caris = function () {
  console.log(`the car is ${this.make} and drives at ${this.speed}`);
};
car.prototype.accelerate = function () {
  this.speed += 10;
};
const EV = function (make, speed, Battery) {
  car.call(this, make, speed);
  this.Battery = Battery;
};
EV.prototype = Object.create(car.prototype);
EV.prototype.chargeTo = function (chargeTo) {
  this.Battery = chargeTo;
};
//example of polymorphism
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.Battery -= 1;
  console.log(
    `The car is moving at the speed of ${this.speed} an the battery is ${this.Battery}`
  );
};

const EVcar = new EV('tata', 100, 72);
console.log(EVcar);
EVcar.accelerate();
EVcar.chargeTo(100);
console.log(EVcar);
EVcar.caris();
////////////////////////////////////////////////
//inheritence  in es6 classes

class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
}

class Ev extends car {
  constructor(make, speed, Battery) {
    super(make, speed);
    this.Battery = Battery;
  }
  introduce() {
    console.log(`The car is ${this.make} and is cahrged ${this.Battery}`);
  }
  accelerate() {
    this.speed += 20;
  }
}
const newev = new Ev('Tesla', 200, 30);
console.log(newev);
newev.introduce();
newev.accelerate();
console.log(newev); // speed is increased by 20 nd not 10 as child overrite parent methods
////////////////////////////////////
//inheritence between clsses using object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study in ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Civil Engineering');
jay.introduce();
jay.calcAge();

///////////////////////////////////////
// class example using bankist accounts

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for creating an account ${owner}`);
  }
  //public interface
  deposit(val) {
    this.movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved ');
    }
  }
}
const acc1 = new Account('jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(400);
// console.log(acc1);
// not a good idea to interact with properties directly , we should create methods to do this

acc1.deposit(250);
acc1.withdrawal(100); //abstraction example
console.log(acc1);
acc1.requestLoan(1000);
console.log(acc1);
acc1.approveLoan(1000); //we can access this but it should be only accesesd by the request loan method this is why we need ENCAPSULATION!!!!.

*/

////////////////////////////////////////////////////////////
//Encapsulation :  Private Class fields and Methods

// 1. Public fields
// 2. private fileds
// 3. public methods
// 4. private methods
// Static versions of all these

class Account {
  locale = navigator.language; //public
  Bank = 'BANKIST'; //public
  #movements = []; //private
  #pin; //private
  //above fields are in every instance of this class

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.locale = navigator.language;

    console.log(`Thanks for creating an account ${owner}`);
  }
  //public interface (API)
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  } //private method
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved ');
      return this;
    }
  }
  getmovements() {
    return this.#movements;
  } //public methods
}

const acc1 = new Account('jonas', 'EUR', 1111);
console.log(acc1);
const acc2 = new Account('Satyam', 'RUP', 2323);
console.log(acc2);

acc1.deposit(200);
acc1.withdrawal(100);
console.log(acc1);
// console.log(acc1.#movements); //this showws error as #movements  is private now
// acc1.#approveLoan(32); //private method
acc1.requestLoan(120);
console.log(acc1);
/////////////////////////////

//chaining of methods
const movements1 = acc1
  .deposit(50)
  .deposit(60)
  .withdrawal(70)
  .requestLoan(80)
  .getmovements(); //it gets things so it should be in end only
console.log(acc1);

console.log(movements1);
