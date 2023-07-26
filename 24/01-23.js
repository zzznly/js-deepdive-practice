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

// 자바스크립트의 모든 함수는 상위 스코프를 기억하므로 이론적으로 모든 함수는 클로저다

// 06
function foo() {
  const x = 1;
  const y = 2;

  // 일반적으로 클로저라고 하지 않는다.
  function bar() {
    const z = 3;

    debugger;
    // 상위 스코프의 식별자를 참조하지 않는다. -> 상위 스코프 기억하지 않는다 (참조하지 않는 식별자를 기억하면 메모리 낭비!)
    console.log(z); // 3
  }

  return bar;
}

const bar = foo();
bar();

// 07
function foo2() {
  const x = 1;

  // 상위 스코프의 식별자 참조하므로 클로저다!
  // bar 함수는 클로저였지만 곧바로 소멸한다.
  function bar2() {
    debugger;
    // 상위 스코프의 식별자를 참조한다.
    console.log(x);
  }
  bar2();
}
// 외부함수 foo2 외부로 중첩함수 bar2가 반환되지 않음 => bar2 의 생명주기가 foo2 보다 짧음
// => 클로저가 아님

foo2();

// 08
// 클로저
// 중접함수 bar3은 외부 함수 foo3 보다 생명주기 길고, 상위 스코프 식별자를 참조
function foo3() {
  const x = 1;
  const y = 2;

  function bar3() {
    console.log(x); // 1
  }
  return bar3;
}
const bar3 = foo3();
bar3();

// 09
let num = 0;

const increase = function () {
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// 10
const increase2 = function () {
  let num = 0;

  return ++num;
};

console.log(increase2()); // 1
console.log(increase2()); // 1
console.log(increase2()); // 1

// 11
const increase3 = (function () {
  let num = 0;

  return function () {
    return ++num;
  };
})();

console.log(increase3()); // 1
console.log(increase3()); // 2
console.log(increase3()); // 3

// => 클로저는 상태가 의도치 않게 변하는 것을 막기 위해 안전하게 은닉하는 용도로 사용!

// 12
const counter = (function () {
  let num = 0;

  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
