// 18. 함수와 일급 객체

// 18-01
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

const auxs = { increase, decrease };

function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// 18-02
function square(number) {
  return number * number;
}
console.dir(square);

// 18-03
function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/*
{
  length: {value: 1, writable: false, enumerable: false, configurable: true},
  name: {value: "square", writable: false, enumerable: false, configurable: true},
  arguments: {value: null, writable: false, enumerable: false, configurable: false},
  caller: {value: null, writable: false, enumerable: false, configurable: false},
  prototype: {value: {...}, writable: true, enumerable: false, configurable: false}
}
*/

// __proto__는 square 함수의 프로퍼티가 아니다.
console.log(Object.getOwnPropertyDescriptors(square, "__proto__")); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.
console.log(Object.getOwnPropertyDescriptors(Object.prototype, "__proto__")); // { get: f, set: f, enumerabel: false, configurable: true}

// 18-04
// * arguments 객체 - 함수 호출시 전달된 인수들의 정보를 담고있는 이터러블 유사 배열 객체이며,
// 함수 내에서 지역변수처럼 사용된다
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// 18-05
function multiply(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  console.log(iterator.next()); // { value: 1, done: false}
  console.log(iterator.next()); // { value: 2, done: false}
  console.log(iterator.next()); // { value: 3, done: false}
  console.log(iterator.next()); // { value: undefined, done: true}

  return x * y;
}

multiply(1, 2, 3);

// 18-06
// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할때 유용하다
function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// 18-07
function sum() {
  const array = Array.prototype.slice.call(arguments); // arguments 객체를 배열로 변환
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15

// 18-08
// ES6 rest parameter
function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 3

// 18-09
function foo(func) {
  return func();
}

function bar() {
  return "caller : " + bar.caller;
}

// 브라우저에서의 실행한 결과
console.log(foo(bar)); // caller : function foo(func) {...}
console.log(bar()); // caller : null

// 18-10
// 함수의 lengh 프로퍼티 - 함수 정의할때 선언한 매개변수의 개수
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2

// 18-11
// 기명함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); // foo

// 익명함수 표현식
var anonymousFunc = function () {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 갖는다.
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문
function bar() {}
console.log(bar.name); // bar

// 18-12
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메서드는 Object.prototype의 메서드다.
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); // false

// 18-13
// prototype 은 생성자 함수로 호출할수 있는 함수 객체만이 소유하는 프로퍼티!

// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log(function () {}.hasOwnProperty("prototype")); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다
console.log({}.hasOwnProperty("prototype")); // false
