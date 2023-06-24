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
function Circle3(radius) {
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
function Circle3(radius) {
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
