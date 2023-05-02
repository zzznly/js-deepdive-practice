class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person("Lee");

// me 객체의 프로토타입은 Person.prototype 이다
console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(me instanceof Person);

// Person.prototype의 프로토타입은 Object.prototype이다.

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(me instanceof Object);

// me 객체의 constructor는 Person 클래스다.
console.log(me.constructor === Person);
