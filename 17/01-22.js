// 17-01
const person = new Object();

person.name = "Yoo";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name); // Hi! My name is Yoo
};

console.log(person); // {name: 'Lee', sayHello: function}
person.sayHello();

// 17-02
// String 생성자 함수로 String 객체 생성
const strObj = new String("Lee");
console.log(typeof strObj); // object
console.log(strObj); // String {"Lee"}

// Number 생성자 함수로 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // Number {123}

// Boolean 생성자 함수로 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // Boolean {true}

// Function 생성자 함수로 Function 객체 (함수) 생성
const func = new Function("x", "return x + x");
console.log(typeof func); // function
console.dir(func);

// Array 생성자 함수로 Array 객체 (배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [1, 2, 3]

// RegExp 생성자로 RegExp 객체 (정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i

// Date 생성자 함수로 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date); // Sat Jun 24 2023 23:44:21 GMT+0900 (Korean Standard)

// 17-03
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 + this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20

// 17-04
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const c1 = new Circle(5); // 반지름이 5인 c1 객체 생성
const c2 = new Circle(10); // 반지름이 10인 c2 객체 생성

console.log(c1.getDiameter()); // 10
console.log(c2.getDiameter()); // 20

// 17-05
function foo() {
  console.log(this);
}

// 일반함수로서 호출
foo(); // window(브라우저), global(node.js)

// 메서드로서 호출
const obj = { foo };
obj.foo(); // { foo }

// 생성자 함수로서 호출
const inst = new foo(); // foo {}

// 17-06
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle3 = Circle(15); // new 연산자 빠짐! 생성자 함수로 동작 X

console.log(circle3); // undefined

// 일반함수로 호출된 Circle 내의 this는 전역 객체 (window) 를 가리킨다
console.log(radius); // 15

// 17-07
function Circle(radius) {
  console.log(this); // Circle {}

  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle4 = new Circle(5); // 반지름이 5인 Circle 객체 생성

// 17-08
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고, this 에 바인딩된다.
  console.log(this); // Circle {}

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 17-09
function Circle2(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 17-10
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 앞으로 생성될 객체가 바인딩된 this 가 암묵적으로 반환
}
// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this 반환
const circle11 = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: f}

// 17-11
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적인 this 반환
  // => 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다
  return {};
}
// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체 {}를 반환한다
const circle5 = new Circle(1);
console.log(circle5); // {}

// 17-12
function Circle(radius) {
  // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this를 반환한다.
  // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
  return 100;
}

// 인스턴스 생성. Circle 생성자 함수는 명시적으로 반환한 객체를 반환
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}

// 17-13
function func() {} // 함수는 객체다
func.prop = 10; // 함수는 객체이므로 프로퍼티 소유 가능

func.method = function () {
  console.log(this.prop);
}; // 함수는 객체이므로 메서드 소유 가능

func.method(); // 10

// 17-14
function f() {}

f(); // 일반 함수로서 호출. [[ Call ]] 호출

new f(); // 생성자 함수로서 호출. [[ Construct ]] 호출

// 17-15
function foo() {} // 함수 선언문
const bar = function () {}; // 함수 표현식
const baz = {
  x: function () {}, // 프로퍼티 x의 값으로 할당된것은 일반 함수! 메서드로 인정하지 않음
  sayHi() {
    // 메서드 축약 표현 (es6)
    console.log("Hi");
  },
};

/**
 * 함수를 프로퍼티 값으로 사용하면 일반적으로 메서드로 통칭한다.
 * 하지만 es6에서 메서드란 메서드 축약 표현만을 의미한다.
 * 다시 말해 함수가 어디에 할당되어 있는지가 아닌 함수 정의 방식에 따라 constructor, non-constructor를 구분한다
 * */

// - constructor : 일반 함수(함수 선언문, 함수 표현식)
// - non-constructor : 화살표 함수, 메서드 축약 표현

new foo(); // foo {}
new bar(); // bar {}
new baz.x(); // x {}

const arrow = () => {};
new arrow(); // TypeError: arrow is not a contsructor

// 메서드 정의 : es6 메서드 축약만을 메서드로 인정한다
const obj1 = {
  method() {},
};

new obj1.method(); // TypeError: obj1.method is not a constructor

// 17-16
function foo() {}

// 일반함수로 호출 - [[Call]] 이 호출됨.
foo(); // undefined 를 리턴한다

// 생성자 함수로 호출 - [[Contruct]] 가 호출됨.
new foo(); // 빈 객체 {} 를 리턴한다

// 17-17
function add(x, y) {
  // 생성자 함수로서 정의하지 않은 일반 함수
  return x + y;
}

let inst1 = new add();
console.log(inst1); // { }

function createUser(name, role) {
  // 객체를 반환하는 일반 함수
  return { name, role };
}
let inst2 = new createUser("Lee", "admin");
console.log(inst2); // {name: 'Lee', role: 'admin}

// 17-18
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle22 = Circle(5); // new 연산자 없이 생성자 함수 호출하면 -> 일반 함수로서 호출된다
console.log(circle22); // undefined

console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TypeError: Cannot read property 'getDiameter' of undefined

// 17-19
function Circle(radius) {
  // new.target - 생성자함수로서 호출될때 함수 자신을 가리킴
  if (!new.target) {
    // new 연산자와 함께 호출되지 않을 경우 -> new.target은 undefined 이다
    return new Circle(radius); // 생성자 함수를 재귀 호출하여 생성된 인스턴스 반환
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle33 = Circle(5);
console.log(circle33.getDiameter()); // 10

// 17-20
function Circle(radius) {
  if (!(this instanceof Circle)) {
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter()); // 10
