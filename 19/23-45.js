// 19-23, 24
/** 이 객체 리터럴이 평가되면 추상 연산 OrdinaryObjectCreate 에 의해
 * Objetct 생성자함수와, Object.prototype 과, 객체 obj 사이의 연결이 만들어짐*/
const obj = { x: 1 };

// 객체 리터럴에 의해 생성된 obj 객체는 Object.prototype를 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

// 19-25, 26
const obj1 = new Object();
obj1.x = 1;

console.log(obj1.constructor === Object); // true
console.log(obj1.hasOwnProperty("x")); // true

// 19-27
// 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자함수의 prototype 프로퍼티에 바인딩되어있는 객체다
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");

// 19-28, 29, 30, 31, 32, 33, 34
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
// 프로토타입 Person.prototype에 프로퍼티 추가하여 자식 객체가 상속받을 수 있도록 구현
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me2 = new Person("Lee");
const you = new Person("Kim");

me2.sayHello(); // Hi! My name is Lee
you.sayHello(); // Hi! My name is Kim

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me2.hasOwnProperty("name")); // true

// 30
// me 객체의 프로토타입은 Person.prototype 이다!
console.log(Object.getPrototypeOf(me2) === Person.prototype); // true
// 31
// Person.prototype 의 프로토타입은 언제나 Object.prototype 이다!
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

// 32
// hasOwnProperty 는 Object.prototype 의 메서드다
// me2 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색해 사용한다
console.log(me2.hasOwnProperty("name")); // true

// 33
Object.prototype.hasOwnProperty.call(me2, "name");

// 34
console.log(me2.foo); // undefined

// 35
console.log(me2.hasOwnProperty("name")); // true
