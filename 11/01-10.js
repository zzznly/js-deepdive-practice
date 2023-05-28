// 11-01
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시값(상수)은 변경할 수 없다.
o.a = 1; // 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.

console.log(o); // { a: 1 }

// 11-02
var str1 = "";
var str2 = "Hello";

// 11-03
var str = "Hello";
str = "world";
console.log(str); // world

// 11-04
var str = "string";

// 문자열은 유사배열이므로 각 문자에 접근 가능
console.log(str[0]); // s

// 원시 값인 문자열이 객체처럼 동작
console.log(str.length); // 6
console.log(str.toUpperCase()); // STRING

// 11-05
var str = "string";

str[0] = "S";
console.log(str); // string

// 11-06
var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // 80

// 11-07
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); // true

// 11-08
var score = 80;
var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

score = 100;
console.log(score, copy); // 100 80
console.log(score === copy); // false

// 값에 의한 전달
// 11-09
