// 12-34
// ** 즉시 실행 함수 : 함수 정의와 동시에 실행되는 함수. 단 한번만 호출 가능. 일반적으로 익명 함수 사용
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();


// 12-35
// ** 기명 즉시 실행 함수 -> 함수 선언문 아닌 함수 리터럴로 평가됨.
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();
foo(); // ReferenceError: foo is not defined
// => * 즉시 실행 함수를 다시 호출 불가! 함수 이름은 함수 몸체 내에서만 참조 가능한 식별자이므로


// 12-36
function () {
    // SyntaxError: Function statements require a function name
    // ...
} ();
// => 함수 정의가 함수 선언문의 형식에 맞지 않기 때문에 에러 발생. (이름 생략 불가)


// 12-37
// 기명함수를 정의해 그룹 연산자 없이 즉시 호출
function foo() {
    // ...
} (); // SyntaxError: Unexpected Token ')'
// => 함수 코드의 닫는 중괄호 뒤에 암묵적으로 ; 이 붙기 때문에 에러 발생


// 12-38
function foo() { } (); // function foo() {}; ();
// => 함수 호출 뒤의 (...) 는 함수 호출 연산자가 아니라 그룹 연산자로 해석되고,
// 그룹 연산자에 피연산자가 없기 떄문에 에러 발생


// 12-39
(); // SyntaxError: Unexpected token ')'
// 그룹 연산자의 피연산자는 값으로 평가되므로
// 기명 또는 무명 함수를 그룹 연산자로 감싸면, 함수 리터럴로 평가되어 함수 객체가 됨.


// 12-40
console.log(typeof (function f() { })); // function
console.log(typeof (function () { })); // function


// 12-41
// 즉시 실행 함수도 일반 함수처럼 값 반환, 인수 전달 가능
(function () {
    // ...
}());
(function () {
    // ...
})();
!function () {
    // ...
}();
+function () {
    // ...
}();


// 12-42
// 즉시 실행 함수도 값 반환 가능
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
})();
console.log(res); // 15

// 즉시 실행 함수도 인수 전달 가능
res = (function (a, b) {
    return a * b;
}(3, 5));
console.log(res); // 15


// ** 재귀 함수 : 자기 자신을 호출하는(재귀호출) 함수
// 12-43
// countdown 함수 - 반복문 사용
function countdown(n) {
    for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10); // 10, 9, 8, 7, ... , 1

// 12-44
// countdown 함수 - 재귀함수 사용
function countdown2(n) {
    if (n < 0) return;
    console.log(n);
    countdown2(n - 1);
}
countdown2(10);

// 12-45
// 팩토리얼(계승) - 재귀함수 사용
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
factorial(3); // 6 

// 12-46
// 함수 표현식
var factorial = function foo(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// 12-47
function factorial(n) {
    if (n <= 1) return 1;

    var res = n;
    while (--n) res *= n;
    return res;
}
console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120


// ** 중첩 함수 (=내부 함수) : 자신을 포함하는 외부함수를 돕는 헬퍼 함수 역할. 외부 함수 내에서만 호출 가능
// 12-48
function outer() {
    var x = 1;

    // 중첩 함수
    function inner() {
        var y = 2;
        console.log(x + y); // 3 // 외부함수의 변수 참조 가능
    }
    
    inner();
}
outer();



// ** 콜백 함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
// * 고차 함수 : 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수

// 12-49
function repeat(n) { // n번만큼 i를 출력하는 함수
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}
repeat(5); // 0 1 2 3 4

// 12-50
function callback() {
    console.log(i);
}
function repeat(n, f) {
    for (var i = 0; i < n; i++) f();
}
repeat(5, callback());

// 12-51
function repeat(n, f) {
  for (var i = 0; i < n; i++) f(i);
}
const logAll = (i) => {
  console.log(i); // 0, 1, 2, 3, 4
}
repeat(5, logAll);

const logOdds = (i) => {
    if(i % 2) console.log(i)
}
repeat(5, logOdds); // 1, 3

// 12-52
// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달
// 익명 함수 리터럴은 repeat 함수 호출할 때마다 평가되어 함수 객체 생성
repeat(5, (i) => {
    if (i % 2) console.log(i);
}); // 1 3

// 12-53

// 12-54
document.getElementById('myButton').addEventListener('click', function () {
    console.log('myButton clicked');
});
// 콜백 함수를 사용한 비동기 처리
setTimeout(function () { console.log('1초 경과') }, 1000); // 1초 후에 메시지 출력

// 12-55
var res = [1, 2, 3].map((item) => {
    return item * 2;
});
console.log(res); // [2,4,6]


// * 순수함수, 비순수 함수
// 12-56
// * 순수 함수 : 동일한 인수 전달시 언제나 동일한 값 반환하는 함수
var count = 0;

// 순수 함수 increase는 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2


// 12-57
// * 비순수 함수 : 외부 상태에 의존하거나 변경하는 함수

var count = 0;

// 비순수 함수
function increase() {
  return ++count;
}
increase();
console.log(count); // 1

increase();
console.log(count); // 2