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
console.log(c1.getDiameter()); // 10

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
// * 중첩함수를 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다
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

// 13
var value = 1;

const obj5 = {
  value: 100,
  foo() {
    // 화살표 함수의 this는 상위 스코프의 this를 가리킴
    setTimeout(() => console.log(this.value), 100); // 100
  },
};

obj5.foo();

// 14
const person1 = {
  name: "Lee",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 person
console.log(person1.getName()); // Lee

// 15
const anotherPerson = {
  name: "Kim",
};
anotherPerson.getName = person1.getName;

console.log(anotherPerson.getName()); // Kim

const getName = person1.getName;

console.log(getName()); // 일반함수로 호출
// window.name - '' // Node.js - undefined

// 16
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me2 = new Person("Lee");

console.log(me2.getName()); // Lee

Person.prototype.name = "Kim";

console.log(Person.prototype.getName()); // Kim

// 17
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const c2 = new Circle(5);
const c3 = new Circle(10);

console.log(c2.getDiameter()); // 10
console.log(c3.getDiameter()); // 20

// 18
const c4 = Circle(15); // new 연산자와 함께 호출되지 않음

console.log(c4); // undefined
console.log(radius); // 15

// 19
function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

console.log(getThisBinding()); // window
console.log(getThisBinding.apply(thisArg)); // {a : 1}

// 20
function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg1 = { a: 1 };

console.log(getThisBinding.apply(thisArg1, [1, 2, 3])); // Arguments(3) [1,2,3] // { a : 1 }
console.log(getThisBinding.call(thisArg1, 1, 2, 3)); // Arguments(3) [1,2,3] // { a : 1 }

// 21
function convertArgsToArray() {
  console.log(arguments);

  // ** Array.prototype.slice 를 인수 없이 호출하면 배열의 복사본 생성!
  const arr = Array.prototype.slice.call(arguments);

  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3); // [1,2,3]

// 22
function getThisBinding() {
  return this;
}

const thisArg2 = { a: 1 };

/** bind() 메서드는 첫번째 인수로 전달한 thisArg 로 this 바인딩이 교체된
 * getThisBinding 함수를 새롭게 생성해 반환한다 */
console.log(getThisBinding.bind(thisArg)); // getThisBinding
console.log(getThisBinding.bind(thisArg)()); // { a : 1 }

// 23
const person2 = {
  name: "Lee",
  foo(callback) {
    setTimeout(callback, 100);
  },
};

person2.foo(function () {
  console.log(`Hi my name is ${this.name}`); // window.name
});

// 브라우저 환경 ('') - Hi my name is
// Node.js 환경 (undefined) - Hi my name is undefined

// 24
const person3 = {
  name: "Lee",
  foo(callback) {
    setTimeout(callback.bind(this), 100); // this 는 person3 객체
  }, // bind() 메서드가 person3이 this인 callback 함수를 새롭게 생성해 반환
};

person3.foo(function () {
  console.log(`Hi my name is ${this.name}`); // person3.name // Hi my name is Lee
});
