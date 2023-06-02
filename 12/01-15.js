// 12-01
function add(x, y) {
    return x + y;
}
console.log(add(2, 5));

// 12-02
function add(x, y) {
    return x + y;
}

// 12-03
var res = add(2, 5); // 함수 호출
console.log(res); // 7

// 12-04
// ** 함수 리터럴 : 함수는 식별자 없이 함수 그 자체를 객체 타입의 값으로 리터럴로 생성이 가능.
// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
}

// 12-05
// ** 함수 선언문 : 함수 리터럴과 형태가 동일. But 함수 리터럴은 함수이름 생략 가능하나, 함수 선언문은 함수 이름을 생략할 수 없다.
function add(x, y) {
    return x + y;
}
console.dir(add);
console.log(add(2, 5)); // 7

// 12-06
// * 함수 선언문은 함수 이름을 생략할 수 없다.
function (x, y) {
    return x + y;
} // SyntaxError: Function statements require a function name

// 12-07
// * 함수 선언문은 표현식이 아닌 문! 변수에 할당할 수 없다
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
var add = function add(x, y) {
    return x + y;
}
console.log(add(2, 5)); // 7


// 12-08
// ** 기명 함수 리터럴은 코드의 문맥에 따라 다르게 해석된다!
// 1. 함수리터럴을 피연산자로 사용하지 않는 경우 - 함수 선언문으로 해석
// 2. 함수 리터럴을 변수에 할당하거나 피연산자로 사용하는 경우 - 함수 리터럴 표현식으로 해석

function foo() { // * 함수 선언문
  console.log("foo");
}
foo();

(function bar() { console.log("bar") }); // * 함수 리터럴 표현식 - 함수 리터럴 표현식에서는 함수 이름 생략 가능하다
bar(); // ReferenceError: bar is not defined
// bar()는 그룹연산자 ()의 피연산자로 사용됨


// 12-09
// ** 자바스크립트 엔진은 함수 선언문을 평가해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다
var add = function add(x, y) {
    return x + y;
}
console.log(add(2, 5));
// ** 함수는 함수 이름으로 호출하는 것이 아니라, 함수 객체를 가리키는 식별자로 호출한다!!!
// => 결론적으로, 자바스크립트 엔진은 "함수 선언문을 함수 표현식으로 변환해 함수 객체를 생성한다" 고 볼 수 있다.


// 12-10
// ** 함수 표현식 :
// - 함수는 일급 객체다. 일급 객체란 함수를 값처럼 자유롭게 사용 가능하다는 의미이다.
// - 따라서 함수는 함수 리터럴로 생성한 함수 객체를 변수에 할당 가능하고, 이러한 함수 정의 방식을 함수표현식이라 한다!
var add = function (x, y) {
    return x + y;
}
console.log(add(2, 5));


// 함수 이름은 함수 몸체 내부에서만 유효한 식별자이므로, 함수 이름으로 호출할 수 없다.
// * 함수를 호출할 때는 함수 객체를 가리키는 식별자를 사용한다!

// * 함수 리터럴의 함수 이름은 생략할 수 있다. (= 익명 함수)
// * 함수 표현식의 함수 리터럴은 함수 이름을 생략하는 것이 일반적이다.


// 12-11
// * 기명 함수 표현식
var add = function foo(x, y) {
    return x + y;
}

console.log(add(2, 5)); // 7
console.log(foo(2, 5)); // ReferenceError: foo is not defined

// * 함수 선언문 : 표현식이 아닌 문
// * 함수 표현식 : 표현식인 문


// 12-12
// 함수 참조
console.dir(add);
console.dir(sub);

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 표현식
var sub = function (x, y) {
    return x - y;
}

    // * 함수 선언문 - 함수 선언문 이전에 호출 가능
    // - 런타임 이전에 함수 객체가 생성되어 식별자에 할당됨
    // - 따라서 함수 선언문 이전에 함수 참조 가능, 호출 가능! => ** 함수 호이스팅!

    // * 함수 표현식 - 함수 표현식 이전에 호출 불가
    // - 함수 표현식은 변수에 할당되는 값이 함수 리터럴인 문이다
    // - 함수 표현식은 ** 변수 호이스팅 ** 된다!


    // ** 변수 호이스팅 vs 함수 호이스팅 :
    // ( 공통점 ) 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행되어 식별자를 생성한다.
    // ( 차이점 )
    // * 변수 호이스팅 :
    // - 변수 선언(var) 이 런타임 이전에 실행되어 undefined 로 초기화된다.
    // * 함수 호이스팅 :
    // - 변수 할당문의 값은 할당문이 실행되는 런타임에 평가되므로
    // - 함수 표현식의 리터럴은 런타임에 평가되어 함수 객체 로 초기화된다. => 호출 가능!


// 12-13
// Function 생성자 함수 (new 생략 가능)
var add = new Function('x', 'y', 'return x + y');
console.log(add(2, 5)); // 7


// 12-14
var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    }
}());
console.log(add1(1, 2)); // 13

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y');
}());
console.log(add2(1, 2)); //ReferenceError: a is not defined

// => 함수 선언문, 함수 표현식으로 생성한 함수와 Function 생성자 함수로 생성한 함수는 동일하게 동작하지 않음 **


// 12-15
// 화살표 함수 
// - 항상 익명 함수로 정의
// - 생성자 함수로 사용 불가
// - 기존 함수와 this 바인딩 방식이 다름
const add = (x, y) => x + y;
console.log(add(2, 5)); // 7