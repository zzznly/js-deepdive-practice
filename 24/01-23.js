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

// 13
const Counter = (function () {
  let num = 0;

  function Counter() {
    // this.num = 0;
  }

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
})();

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0

// 14
// 함수를 인수로 전달받고 함수 반환하는 고차함수
// 이 함수는 카운트 상태 유지를 위한 자유변수 counter를 기억하는 클로저 반환!
function makeCounter(aux) {
  let counter = 0;

  return function () {
    counter = aux(counter);
    return counter;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// 15
// 함수 counter2는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 "클로저" 반환!
const counter2 = (function () {
  let counter = 0;

  return function (aux) {
    counter = aux(counter);
    return counter;
  };
})();

// 보조함수
function increase2(n) {
  return ++n;
}
function decrease2(n) {
  return --n;
}

console.log(counter2(increase2)); // 1
console.log(counter2(increase2)); // 2

console.log(counter2(decrease2)); // 1
console.log(counter2(decrease2)); // 0

// 16
function Person(name, age) {
  this.name = name; // public
  let _age = age; // private - 생성자 함수 외부에서 참조 불가

  // 인스턴스 메서드
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
  };
}

const me = new Person("Lee", 20);
me.sayHi(); // Hi! My name is Lee. I am 20.

console.log(me.name); // Lee
console.log(me._age); // undefined

const you = new Person("Yoo", 29);
you.sayHi(); // Hi! My name is Yoo. I am 29.

console.log(you.name); // Yoo
console.log(you._age); // undefined

// 17
function Person2(name, age) {
  this.name = name; // public
  let _age = age; // private - 생성자 함수 외부에서 참조 불가
}

Person2.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}. I am ${_age}`);
  // Person 생성자 함수의 지역 변수 _age 참조 불가! (생성자 함수 외부이므로)
};

// 18, 19
// 그래서 Person 생성자 함수와 Person.prototype.sayHi를 하나의 함수(즉시 실행 함수) 안에 모아보자
const Person3 = (function () {
  let _age = 0; // private;

  function Person(name, age) {
    this.name = name; // public
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age} years old.`);
  };

  return Person;
})();

const me3 = new Person3("Lee", 22);
me3.sayHi(); // Hi! My name is Lee. I am 22 years old.
console.log(me3.name); // Lee
console.log(me3._age); // undefined

const you3 = new Person3("Kim", 30);
you3.sayHi(); // Hi! My name is Kim. I am 30 years old.
console.log(you3.name); // Kim
console.log(you3._age); // undefined

// _age 변수 값이 변경된다!
me3.sayHi(); // Hi! My name is Lee. I am 30.

// 생성자함수 Person 과 sayHi 는 클로저
// => js는 완전한 정보 은닉을 지원한지 않는다

// 20 - 자주 발생하는 실수 ***
var funcs = []; // 먼저, 배열 funcs를 선언합니다.

for (var i = 0; i < 3; i++) {
  // 반복문을 사용하여 i 변수를 0부터 2까지 증가시킵니다.
  funcs[i] = function () {
    return i; // ** 여기서 주의해야 할 점은 함수가 i를 참조하는 것이지 i의 값을 복사하는 것이 아니다!
  }; // (1)
}

/**
 * var 키워드로 선언된 변수 i는 함수 레벨 스코프를 갖습니다. 따라서 반복문에서 선언된 함수들이 모두 같은 i를 참조하게 됩니다.
 * 그리고 반복문이 종료된 이후에도 클로저가 유지되며(클로저), 함수들이 호출될 때 i의 최종 값인 3을 반환합니다.
 */

console.log(funcs); // 반복문이 끝난 후 funcs 배열에는 세 개의 함수가 들어있다. // [function () { return i; }, function () { return i; }, function () { return i; }]
// 이때, i 의 값은 이미 3이 되었다.

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // (2) - 3, 3, 3
}

// 21 - 20번 예제를 올바르게 수정
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]()); // 0, 1, 2
}

// 22
const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]()); // 0 1 2
}

// 23
// 배열의 요소로 추가된 함수들은 모두 클로저!
const funcs2 = Array.from(new Array(3), (_, i) => {
  () => i;
}); // (3) [f,f,f]

funcs2.forEach(f => console.log(f())); // 0 1 2
