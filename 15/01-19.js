// 15. let,const 키워드와 블록 레벨 스코프

// 15-01
var x = 1;
var y = 1;

// * var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언 허용!

// 변수 선언문의 초기화문 유무에 따라 다르게 동작
var x = 100; // 1) 초기화문 있음 - 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼(할당문처럼?) 동작 (x = 100)
var y; // 2) 초기화문 없음 - 무시됨

console.log(x); // 100
console.log(y); // 1

// 함수 레벨 스코프
// 15-02
// 함수 외부에서 var 로 선언한 변수는 코드블록 내에서 선언해도 전역변수 이다!
var x = 1;
if (true) {
  var x = 10;
}
console.log(x); // 10;

// 15-03
var i = 10;
for (var i = 0; i < 5; i++) {
  // for문에서 선언한 i는 전역 변수! 이미 선언된 전역 변수 i가 있으므로 중복 선언됨
  console.log(i); // 0 1 2 3 4
}
console.log(i); // 5

// * var 변수 호이스팅 : 선언문 이전에 참조 가능. 단, 선언 이전에 참조시 항상 undefined 반환
// 15-04
// 1. 이 시점에 변수 호이스팅에 의해 이미 foo 변수가 선언됨 (1. 선언 단계)
console.log(foo); // 2. 변수 foo는 undefined 로 초기화됨 (2. 초기화 단계)

foo = 123; // 3. 변수에 값 할당 (3. 할당 단계)
console.log(foo); // 123

var foo;

// 15-05
// * let 키워드
var fooo = 123;
var fooo = 456;

let bar = 123; // let - 중복선언 불가!
let bar = 456;

// 15-06
// 블록 레벨 스코프
let foo = 1; // 전역 변수
{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}
console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

// 15-07
console.log(foo); // ReferenceError: foo is not defined
let foo;

// * var 키워드 - 암묵적으로 선언과 초기화 단계가 한번에 진행
// * let 키워드 - 선언과 초기화 단계가 분리되어 진행

// 15-08 // var 키워드
console.log(foot); // undefined - 선언과 초기화 동시에 실행 (런타임 이전)

var foot;
console.log(foot); // undefined

foot = 1; // 할당
console.log(foot); // 1

// 15-09 // let 키워드
// 선언 단계 실행 (런타임 이전)
// 초기화 이전의 일시적 사각 지대 (TDZ) 에서는 변수 참조 불가
console.log(food); // ReferenceError: food is not defined

let food; // 초기화 단계 실행 (undefined)
console.log(food); // undefined

food = 1; // 할당문에서 할당 단계가 실행된다.
console.log(food); // 1

// 15-10
let fool = 1; // 전역 변수
{
  console.log(fool); // ReferenceError: Cannot access 'fool' before initialization
  let fool = 2; // 지역 변수
}
// ** let 변수에도 호이스팅이 발생하기때문에 참조에러가 발생한다.
// 호이스팅이 발생하지 않는다면 전역변수 fool 의 값 1이 출력되어야함

// 15-11
// 이 예제는 브라우저 환경에서 실행해야 한다.
var x = 1; // 전역 변수
y = 2; // 암묵적 전역
function foo() {} // 전역 함수

// * var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
console.log(window.x); // 1
// * 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(x); // 1

// * 암묵적 전역은 전역 객체 window의 프로퍼티다.
console.log(window.y); // 2
console.log(y); // 2

// * 함수 선언문으로 정의한 전역 함수는 전역 객체 window의 프로퍼티다.
console.log(window.foo); // ƒ foo() {}
// 전역 객체 window의 프로퍼티는 전역 변수처럼 사용할 수 있다.
console.log(foo); // ƒ foo() {}

// 15-12
// 이 예제는 브라우저 환경에서 실행해야 한다.
let x = 1;
// * let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1


// ** const 키워드
// 15-13
const foo = 1; // const 는 선언과 초기화 무조건 동시에 해야함

// 15-14
const foo; // SyntaxError: Missing initializer in const declaration

// 15-15
{
  // const 도 let 처럼 변수 호이스팅이 발생하지 않는 것처럼 동작한다
    // (선언됨)
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    //-------- TDZ-----------
  const foo = 1; // (초기화)
  console.log(foo); // 1
}
// 블록 레벨 스코프를 갖는다.
console.log(foo); // ReferenceError: foo is not defined

// 15-16
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
// => const 로 선언한 변수는 재할당 금지!

// 15-17, 15-18
const TAX_RATE = 0.1; // 상수 선언! 대문자로
let preTaxPrice = 100;

// let afterTaxPrice = preTaxPrice + (preTaxPrice * 0.1);
// => 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이므로 상수 선언하자

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);
console.log(afterTaxPrice); // 110

// 15-19
// const 변수에 객체를 할당한 경우, 값을 변경할 수 있음
const person = {
    name: 'Yoo'
};
person.name = 'Lee';
console.log(person); // {name: 'Lee}