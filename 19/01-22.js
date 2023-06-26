// 19-01
// 이름과 주소 속성을 갖는 객체
const person = {
  name: "Lee",
  address: "Seoul",
};

console.log(person); // {name: "Lee", address: "Seoul"}

// 19-02
const circle = {
  radius: 5,

  getDiameter() {
    return 2 * this.radius;
  },

  getPerimiter() {
    return 2 * Math.PI * this.radius;
  },

  getArea() {
    return Math.PI * this.radius ** 2;
  },
};
console.log(circle); // {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}

console.log(circle.getDiameter()); // 10
console.log(circle.getPerimiter()); // 31.41592...
console.log(circle.getArea()); // 78.53981...

// 19-03
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

/** 생성자함수 Circle은 인스턴스를 생성할때마다
 * 동일한 동작을 하는 getArea 메서드를 중복 생성하고, 모든 인스턴스가 getArea 메서드를 중복 소유
 * => getArea 메서드를 하나만 생성해 모든 인스턴스가 공유하는게 효율적!
 * */

console.log(circle1.getArea() === circle2.getArea()); // false **
console.log(circle1.getArea()); // 1파이 (3.141592...)
console.log(circle2.getArea()); // 2파이 (12.56637...)

// 19-04
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를 공유할수있도록 프로토타입에 추가!
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1.getArea === c2.getArea); // true **
console.log(c1.getArea()); // 1pi
console.log(c2.getArea()); // 2pi

// 19-05
// 크롬 브라우저 콘솔에서 출력해볼것
const person1 = {
  name: "Lee",
};
person1;
/**
 * __proto__ : {
 * ...
 * }
 */

// 19-06
const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로토타입을 취득
console.log(obj.__proto__); // {}

// setter 함수인 set __proto__ 가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.__proto__); // { x : 1 }

console.log(obj.x); // 1

// 19-07
const person2 = { name: "Lee" };

// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype 의 프로퍼티다
console.log(person.hasOwnProperty("__proto__")); // false

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// { get: f, set: f, enumberable: false, configurable: true }

// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다
console.log({}.__proto__ === Object.prototype); // true

// 19-08
const parent1 = {};
const child1 = {};

child1.__proto__ = parent1; // child 의 프로토타입을 parent로 설정
parent1.__proto__ = child1; // parent 의 프로토타입을 child로 설정 // TypeError: Cyclic __proto__ value

// 서로가 서로의 프로토타입이 되는 비정상적인 프로토타입 체인 (순환 참조)

// 19-09
const obj = Object.create(null);
console.log(obj); // {}
console.log(obj.__proto__); // undefined - obj는 Object.prototype 상속받을 수 없다!

// 코드 내에서 직접 __proto__ 사용하는 대신 Object.getPrototypeOf() 사용 권장!
console.log(Object.getPrototypeOf(obj)); // null

// 19-10
const obj = {};
const parent2 = { x: 1 };

Object.getPrototypeOf(obj); // obj.__proto__
Object.setPrototypeOf(obj, parent2); // obj.__proto__ = parent; (동일)

console.log(obj.x); // 1

// 19-11
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다!
(function () {}).hasOwnProperty("prototype"); // true
({}).hasOwnProperty("prototype"); // false

// 19-12
const Person = name => {
  // 화살표 함수는 non-constructor
  this.name = name;
};

// non-constructor 는 prototype 프로퍼티를 소유하지 않음
console.log(Person.hasOwnProperty("prototype")); // false

// non-constructor 는 프로토타입을 생성하지 않음
console.log(Person.prototype); // undefined

const obj = {
  foo() {}, // es6의 메서드 축약으로 정의한 메서드는 non-constructor다
};

// non-constructor 는 prototype 프로퍼티 소유하지 않음
console.log(obj.foo.hasOwnProperty("prototype")); // false

// non-constructor 는 프로토타입을 생성하지 않는다
console.log(obj.foo.prototype); // undefined

// 19-13
function Person(name) {
  // 생성자 함수
  this.name = name;
}

// 생성자 함수로 생성한 인스턴스
const me = new Person("Lee");

// Person.prototype과 me.__proto__ 는 결국 동일한 프로토타입을 가리킨다
console.log(Person.prototype === me.__proto__); // true

// 19-14
function Person(name) {
  this.name = name;
}

const me1 = new Person("Lee");

// me1 객체의 constructor (생성자 함수)는 Person 이다!
console.log(me1.constructor === Person); // true

// 19-15
const obj = new Object();
console.log(obj.constructor === Object); // true

const add = new Function("a", "b", "return a + b");
console.log(add.constructor === Function); // true

function Person(name) {
  this.name = name;
}

const me2 = new Person("Lee");
console.log(me2.constructor === Person); // true

// 19-16, 17

// obj 객체는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했다.
const obj = {}; // 객체 리터럴

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수다.
console.log(obj.constructor == Object); // true

const add2 = function (a, b) {
  return a + b;
}; // 함수 리터럴

const arr = [1, 2, 3]; // 배열 리터럴

const regExp = /is/gi; // 정규표현식 리터럴

// 19-18
// 2. Object 함수에 의한 객체 생성
let obj = new Object();
console.log(obj); // {}

class Foo extends Object {}
new Foo(); // Foo {}

// 3. 인수가 전달될 경우에는 인수를 객체로 반환
// Number 객체 생성
obj = new Object(123);
console.log(obj); // Number {123}

// String 객체 생성
obj = new Object("123");
console.log(obj); //String {"123"}

// 19-19
function foo() {} // foo 함수는 함수 선언문으로 생성함

// BUT, constructor 프로퍼티를 확인해보면 foo의 생성자 함수는 Function 생성자함수이다!!
console.log(foo.constructor === Function); // true

// 리터럴 표기법으로 생성된 객체도 생성자 함수와 연결되어있다

// 19-19
function foo() {} // foo 함수는 함수 선언문으로 생성함

// BUT, constructor 프로퍼티를 확인해보면 foo의 생성자 함수는 Function 생성자함수이다!!
console.log(foo.constructor === Function); // true

// 프로토타입과 생성자 함수는 언제나 쌍으로 존재!! (단독 불가)

// 19-20
// constructor의 함수정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성!
console.log(Person.prototype); // {constructor: f}

function Person(name) {
  // 생성자 함수 (constructor)
  this.name = name;
}

// 19-21
// 화살표함수는 non-constructor
const Person = name => {
  this.name = name;
};

// non-constructor는 프로토타입 생성 안된다
console.log(Person.prototype); // undefined

// 19-22
// 전역 객체 window는 브라우저에 종속적이므로 이 코드는 브라우저에서 실행해야한다
// 빌트인 객체인 Object 는 전역 객체 window의 프로퍼티다
console.log(window.Object === Object); // true
