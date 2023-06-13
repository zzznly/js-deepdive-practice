// 14. 전역 변수의 문제점

// 14-01
function foo() {
  var x = "local";
  console.log(x); // local
  return x;
}

foo();
console.log(x); // ReferenceError: x is not defined
// => 함수 내의 지역변수는 함수 호출시 생성되고, 함수 종료시 소멸된다

// ** 14-02
var x = "global";
function foo() {
  console.log(x); // undefined - 지역변수 x는 이미 선언되었고, undefined 로 초기화됨 (호이스팅)
  var x = "local";
}
foo();
console.log(x); // global

// 14-03
var x = 1;

var x = 100; // 변수의 중복 선언. 기존 변수에 값을 재할당
console.log(x); // 100

// 14-04
(function () {
  var foo = 10; // 즉시 실행 함수의 지역 변수
  // ...
})();
console.log(foo); // ReferenceError: foo is not defined

// 14-05
var MYAPP = {};
MYAPP.name = "Lee";
console.log(MYAPP.name); // Lee

// 14-06
var NAMESPACE = {};
NAMESPACE.person = {
  name: "Yoo",
  address: "Seoul",
};
console.log(NAMESPACE.person.name); // Yoo

// 14-07
// 모듈 패턴
var Counter = (function () {
  var num = 0; // private 변수

  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// 14-08
// es6 모듈
{
  /* <script type="module" src="lib.mjs"></script>
<script type="module" src="app.mjs"></script> */
}
