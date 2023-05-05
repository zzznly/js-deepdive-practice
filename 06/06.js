// 06-01
var integer = 10;
var double = 10.12;
var negative = -20;

// 06-02
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;
console.log(binary);
console.log(octal);
console.log(hex);
console.log(octal === binary);
console.log(octal === hex);

// 06-03
console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);

// 06-04
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "string"); // NaN

// 06-05
var x = NaN;
var y = nan;

// 06-07
var string = hello;
console.log(hello);

// 06-08
var template = `Template literal`;
console.log(template);

// 06-11
var template = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template);

// 06-17
var foo;
console.log(foo); // undefined

// 06-18
var foo = "Lee";
foo = null; // 이전 참조 제거. foo 변수는 더이상 'Lee' 참조하지 않음.
// => 유용한 방법은 아님. 변수 스코프를 좁혀 변수 자체를 빨리 소멸시키는 방식이 나음

// 06-19
// 함수가 유효한 값을 반환할 수 없는 경우: null
var element = document.querySelector(".myClass");
console.log(element); // null

// 06-20
// 심벌 값 생성
var key = Symbol("key");
console.log(typeof key); // symbol

// 06-23
var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = "Hello";
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object ***

foo = Symbol();
console.log(typeof foo); // symbol

foo = {};
console.log(typeof foo); // object

foo = [];
console.log(typeof foo); // object ***

foo = function () {}; // 함수
console.log(typeof foo); // function ***
