// * 직접상속
// 19-51
// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다.
console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj -> Object.prototype -> null
// obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj -> Object.prototype -> null
// obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
// 위 코드는 다음과 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = "Lee";
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

// 52
const obj = { a: 1 };
obj.hasOwnProperty("a"); // true
obj.propertyIsEnumerable("a"); // true

// 53
const obj = Object.create(null); // 프로토타입이 null 인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체 생성
obj.a = 1;

console.log(Object.getPrototypeOf(obj) === null); // true

// obj는 Object.prototype의 빌트인 메서드 사용 불가
console.log(obj.hasOwnProperty("a")); // TypeError: obj.hasOwnProperty is not a function

// 54
const obj = Object.create(null);
obj.a = 1;

console.log(Object.prototype.hasOwnProperty.call(obj, "a")); // true

// 객체 리터럴 내부에서 __proto__ 에 의한 직접 상속
// 55
const myProto1 = { x: 10 };

const obj = {
  y: 20,
  __proto__: myProto1,
};

console.log(obj.x, obj.y); // 10 20
console.log(Object.getPrototypeOf(obj) === myProto1); // true

// 정적 프로퍼티/메서드 : 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드
// 56
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

Person.staticProp = "staticProp"; // 정적 프로퍼티

Person.staticMethod = function () {
  // 정적 메소드
  console.log("staticMethod");
};

const me = new Person("Lee");

Person.staticMethod(); // staticMethod

me.staticMethod(); //  TypeError: me.staticMethod is not a function

// 57
const obj = Object.create({ name: "Lee" }); // Object.create는 정적 메서드

obj.hasOwnProperty("name"); // false - Object.prototype.hasOwnProperty는 프로토타입 메서드다

// 58
function Foo() {}

Foo.prototype.x = function () {
  console.log("x");
};

const foo = new Foo(); // 프로토타입 메서드 호출을 위해 인스턴스 생성
foo.x(); // x

Foo.x = function () {
  console.log("x");
};

Foo.x(); // x - 정적 메서드는 인스턴스 생성 안해도 호출 가능

// 59
const person = {
  name: "Lee",
  address: "Seoul",
};

console.log("name" in person); // true
console.log("address" in person); // true
console.log("age" in person); // false

// 60
// * in 연산자는 대상 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인한다!
console.log("toString" in person); // true
// toString 은 Object.prototype의 메서드다

// 61
// Reflect.has 메서드 - in 연산자와 동일하게 동작
const person1 = { name: "Lee" };

console.log(Reflect.has(person, "name")); // true
console.log(Reflect.has(person, "toString")); // true

// 62
console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("age")); // false
// 63
console.log(person1.hasOwnProperty("toString")); // false -> 대상객체의 고유 프로퍼티가 아니므로

// 64
const person2 = {
  name: "Lee",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
// name: Lee
// address: Seoul

// 65
const person3 = {
  name: "Lee",
  address: "Seoul",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}
// name: Lee
// address: Seoul

console.log("toString" in person3); // true
// toString은 열거할 수 없도록 정의된 프로퍼티이므로 for ... in 문에서 열거되지 않는다!

// 66
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
// { value: f, writable: true, enumerable: false, configurable: true }

// 67
const person4 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}
// name: Lee
// address: Seoul
// age: 20

// 68
const sym = Symbol();

const obj = {
  a: 1,
  [sym]: 10,
};

for (const key in obj) {
  console.log(key + ": " + obj[key]);
} // a : 1

// 69
const person11 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};
for (const key in person11) {
  if (!person11.hasOwnProperty(key)) continue;
  console.log(key + ": " + person11[key]);
}

// name: Lee,
// address: Seoul

// 70
const obj1 = {
  2: 2,
  3: 3,
  1: 1,
  b: "b",
  a: "a",
};

for (const key in obj1) {
  if (!obj1.hasOwnProperty(key)) continue;
  console.log(key + ": " + obj1[key]);
}
/*
1: 1
2: 2
3: 3
b: b
a: a
*/

// 71
const arr = [1, 2, 3];
arr.x = 10;

for (const i in arr) {
  console.log(arr[i]); // 1, 2, 3, 10
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3
}

arr.forEach(v => console.log(v)); // 1, 2, 3

for (const value of arr) {
  console.log(value); // 1, 2, 3
}

// 72
const person12 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};
console.log(Object.keys(person12)); // ["name", "address"]

// 73
console.log(Object.values(person12)); // ["Lee", "Seoul"]

// 74
console.log(Object.entries(person12)); // [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person12).forEach(([key, value]) => console.log(key, value));
