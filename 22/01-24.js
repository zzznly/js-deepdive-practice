// 01
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.radius;
  },
};

console.log(circle.getDiameter()); // 10

// 02
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};

const circle1 = new Circle(5);
console.log(circle1); // { radius: 5 }

// 03
const circle2 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
console.log(circle2.getDiameter()); // 10

// 04
function Circle(radius) {
  this.radius = radius; // this = 생성자 함수가 생성할 인스턴스
}
Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};

const c1 = new Circle(5);
console.log(circle.getDiameter()); // 10

// 05
console.log(this); // window(전역 객체)

function square(num) {
  console.log(this); //this - 일반함수에서 this는 전역 객체 가리킴 (window)
  return num * num;
}
square(2);

const person = {
  name: "Lee",
  getName() {
    console.log(this); // this - 호출한 객체 person 을 가리킨다 // { name: 'Lee', getName() }
    return this.name;
  },
};

console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  console.log(this); // this - 생성할 인스턴스를 가리킨다 // Person { name: 'Lee' }
}

const me = new Person("Lee");

// 06
// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다
const foo = function () {
  console.dir(this);
};

// 1. 일반 함수
foo(); // window

// 2. 메서드
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드
const bar = { name: "bar" };

foo.call(bar); // bar
foo.apply(bar); // bar
foo.bind(bar); // bar

// 07
function foo() {
  console.log("foo's this", this); // window

  function bar() {
    console.log("bar's this", this); // window
  }
  bar(); // bar() 도  foo() 함수 내에서 호출되었으므로 this는 여전히 window를 가리킨다
}
foo();

// 08
function foo() {
  "use strict";

  console.log("foo's this: ", this); // undefined

  function bar() {
    console.log("bar's this: ", this); // undefined
  }

  bar();
}
foo();

// 09
var value = 1; // var 키워드로 선언한 전역변수는 전역 객체의 프로퍼티다 (const 는 전역객체의 프로퍼티가 아니다!)

const obj1 = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: f}
    console.log("foo's this.value: ", this.value); // 100

    function bar() {
      console.log("bar's this: ", this); // window
      console.log("bar's this.value: ", this.value); // 1
    } // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩!

    bar();
  },
};

obj1.foo();

// 10
var value = 1;

const obj2 = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // {value: 100, foo: ƒ}
    // 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
    setTimeout(function () {
      console.log("callback's this: ", this); // window
      console.log("callback's this.value: ", this.value); // 1
    }, 100);
  },
};

obj2.foo();

// 11
var value = 1;

const obj3 = {
  value: 100,
  foo() {
    // this 바인딩(obj3)을 변수 that에 할당
    const that = this;

    // 콜백 함수 내부에서 this 대신 that을 참조
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};

obj3.foo();

// 12
var value = 1;

const obj4 = {
  value: 100,
  foo() {
    // 콜백 함수에 명시적으로 this를 바인딩한다.
    setTimeout(
      function () {
        console.log(this.value); // 100
      }.bind(this),
      100
    );
  },
};

obj4.foo();
