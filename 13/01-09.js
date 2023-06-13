// 13. 스코프

// 13-01
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}
add(2, 5);
console.log(x, y); // ReferenceError: x is not defined - 매개변수는 함수 몸체 내부에서만 참조 가능

// 13-02
// * 스코프: 식별자가 유효한 범위!
var var1 = 1; // 코드 가장 바깥 영역에서 선언한 변수 - 지역변수

if (true) {
  var var2 = 2; // 코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var var4 = 4; // 함수 내에서 선언한 변수

  function bar() {
    var var5 = 5; // 중첩 함수 내에서 선언한 변수
  }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined

// 13-03
var x = "global";

function foo() {
  var x = "local";
  console.log(x); // (1) - local
}

foo();

console.log(x); // (2) - global

// * 다른 스코프에는 같은 이름의 식별자를 사용할 수 있다. 즉, 스코프는 네임스페이스다!

// 13-04
// * var 변수는 같은 스코프 내에서 중복 선언 가능!
function foo() {
  var x = 1;
  var x = 2;
  console.log(x); // 2
}
foo();

// 13-05
// * let, const 변수는 같은 스코프 내에서 중복 선언 불가!
function bar() {
  let x = 1;
  let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
bar();

// 13-06
// 스코프 체인에 의한 함수 검색=
function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }

  foo();
}

bar(); // local function foo

// 13-07
// ** 함수 레벨 스코프 : var 로 선언된 변수는 함수의 코드블록(함수 몸체)만을 지역 스코프로 인정한다
var x = 1; // 전역 변수 x

if (true) {
  var x = 10; // 전역 변수 x 중복 선언 (코드블록 내에서 선언되었지만, var 변수의 특성떄문에 전역변수로 취급)
  // => 변수 x의 값이 변경되는 부작용 발생
}
console.log(x); // 10

// 13-08
var i = 10;

// * var - for문에 선언된 i 는 전역변수다! (함수 레벨 스코프) => i가 중복 선언됨
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

// * let, const - for문에 선언된 i는 지역변수다! (블록 레벨 스코프)
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

console.log(i); // 5

// ** 렉시컬 스코프
// * 동적 스코프: 함수의 호출 위치에 따라 상위 스코프 결정
// * 렉시컬(정적) 스코프: 함수의 정의 위치에 따라 상위 스코프 결정
// - 자바스크립트는 렉시컬(정적) 스코프를 따른다!

// 13-09
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
