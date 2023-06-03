// 함수 호출
// 12-16
function add(x, y) {
  return x + y;
}
var result = add(1, 2);
console.log(result); // 3

// 12-17
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}
add(2, 5);

// 12-18
// 인수가 할당되지 않은 매개변수의 값은 undefined!
function add(x, y) {
  return x + y;
}
console.log(add(2)); // 2 + undefined = NaN

// 12-19
// 초과된 인수는 무시된다. (사실은 arguments 에 보관됨)
function add(x, y) {
  console.log(ar);
  return x + y;
}
console.log(add(2, 5, 10)); // 7
// 12-20
// * 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관됨 (초과된 인수도)
function add(x, y) {
  console.log(arguments); // { [Iterator] 0: 2, 1: 5, 2: 10 }
  return x + y;
}
console.log(add(2, 5, 10)); // 7

// 12-21, 12-22
function add(x, y) {
  return x + y;
}
console.log(add(2)); // 2 + undefined => NaN
console.log(add("a", "b")); // 'ab'
// 위의 코드가 잘 실행되는 이유:
// 1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다
// 2. 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다

// 따라서 자바스크립트의 경우 함수 정의시 적절한 인수가 전달되었는지 확인할 필요가 있다

// 12-23
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
  }

  return x + y;
}
console.log(add(2)); // TypeError: 인수는 모두 숫자값이어야 합니다
console.log(add("a", "b")); // TypeError: 인수는 모두 숫자값이어야 합니다

// 12-24
function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6
console.log(add(1, 2)); // 3
console.log(add(1)); // 1
console.log(add()); // 0

// 12-25
// ES6 - 매개변수 기본값
function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

// 반환문
// 12-27, 12-28
function multiply(x, y) {
  return x * y; // 반환문
  console.log("실행되지 않는다"); // 반환문 이후의 문은 실행되지 않고 무시된다.
}
var result = multiply(3, 5);
console.log(result); // 15

// 12-29, 12-30
function foo() {
  return;
}
console.log(foo()); // undefined
// => ** 반환문은 생략 가능하다. 이때 함수는 마지막 문까지 실행후 암묵적 undefined 반환한다

// 12-31
function multiply(x, y) {
  // return 키워드와 반환값 사이에 줄바꿈이 있으면
  return; // 세미콜론 자동 추가됨!
  x * y;
}
console.log(multiply(3, 5)); // undefined

// 12-32 : 반환문은 함수 몸체 내부에서만 사용 가능.
// <!DOCTYPE html>
// <html>
// <body>
//   <script>
//     return; // SyntaxError: Illegal return statement
//   </script>
// </body>
// </html>

// ** 12-33
// 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";

  console.log(primitive); // 150
}
var num = 50;
var person = { name: "Lee" };

console.log(num); // 50
console.log(person); // { name: 'Lee' }

// 원시값은 값 자체가 복사되어 전달(50), 객체는 참조값({ name: 'Lee' })이 복사되어 전달
changeVal(num, person);

// 원시 타입 인수 - 값 자체가 복사되어 매개변수에 전달, 원본 훼손되지 않음
console.log(num); // 50

// 객체 타입 인수 - 참조 값이 복사되어 매개변수에 전달, 원본 훼손
console.log(person); // { name: "Kim" }
