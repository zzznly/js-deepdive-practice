// 01
var x;
x = 1;

// 02
const x = 1;
const y = 2;

function foo(a) {
  const x = 10;
  const y = 20;

  // 메서드 호출
  console.log(a + x + y); // 130
}

foo(100); // 함수 호출

// 메서드 호출
console.log(x + y); // 3

// 03
const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }

  bar();
}

foo(); // 6

// 04, 08
var x2 = 1;
const y2 = 2;

function foo(a) {
  var x2 = 3;
  const y2 = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x2 + y2 + z);
  }

  bar(10);
}

foo(20); // 42

// 05
window.toString();

console.log(
  window.__proto__.__proto__.__proto__.__proto__ === Object.prototype
); // true

// 06
var x3 = 1;
const y3 = 2;

function foo(a) {
  // ...
}

// 07
let foo = 1; // 전역 변수

{
  // let 키워드로 선언한 변수도 호이스팅이 발생하기 때문에 참조 에러(ReferenceError)가 발생

  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2; // 지역 변수
}

// 10
console.hasOwnProperty("log"); // true

// 11
// 실행컨텍스트에서의 블록 레벨 스코프
let x = 1;

if (true) {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // 1
