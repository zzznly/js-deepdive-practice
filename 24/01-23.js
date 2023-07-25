// 클로저

// 01, 02
const x = 1;

function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x); // 10
  }

  innerFunc();

  // innerFunc2();
}

outerFunc();

// function innerFunc2() {
//     console.log(x); // 1
// }

/**
 * 렉시컬 환경의 'Outer'에 저장할 값(상위 스코프에 대한 참조)은
 * 함수가 평가되는 시점에 함수가 정의된 위치에 의해 결정되는데,
 * 이것이 "렉시컬(정적) 스코프!"
 */

// * Lexical scope는 함수를 정의하는 시점, Dynamic scope는 함수가 실행되는 시점에 스코프가 결정

// 03
const x2 = 1;

function foo() {
  const x2 = 10;
  bar();
}

function bar() {
  console.log(x2); // 1
}

foo(); // 1
bar(); // 1

// 04
const x3 = 1;
function foo2() {
  const x3 = 10;

  // 상위스코프는 함수 정의 위치에 따라 결정
  // 함수 호출 위치와 상위스코프는 전혀 무관!
  bar();
}

function bar2() {
  console.log(x3); // 1
}

foo2(); // 1
bar2(); // 1

// 클로저와 렉시컬 환경
// 05 ***
const x4 = 1;

// (1)
function outer() {
  const x4 = 10;
  const inner = function () {
    console.log(x4);
  }; // (2)

  return inner;
}

// outer 호출하면 중첩 함수 inner 반환
// 그리고 outer 함수의 실행 컨텍스트는 스택에서 팝, 제거
const innerFunc = outer(); // (3)
innerFunc(); // (4) 10

// => 이처럼 외부함수보다 중첩 함수가 더 오래 유지되는 경우, 중첩 함수가 이미 종료됐을때 외부 함수의 변수 참조 가능
// => 이러한 중첩 함수를 "클로저" 라고 한다! ***
