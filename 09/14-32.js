// ** 명시적 타입 변환 : 개발자의 의도에 따라 명시적으로 타입 변환

// * 문자열 타입으로 변환하는 방법 3가지:
// 1. String 생성자 함수를 new 연산자 없이 호출
// 2. Object.prototype.toString 메서드 사용
// 3. 문자열 연결 연산자를 이용

// 09-14
// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(String(Infinity)); // "Infinity"
console.log(String(true)); // "true"
console.log(String(false)); // "false"

// 2. Object.prototype.toString 메서드 사용
console.log((1).toString()); // "1"
console.log(NaN.toString()); // "NaN"
console.log(Infinity.toString()); // "Infinity"
console.log(true.toString()); // "true"
console.log(false.toString()); // "false"

// 3. 문자열 연결 연산자 사용
console.log(1 + ""); // "1"
console.log(NaN + ""); // "NaN"
console.log(Infinity + ""); // "Infinity"
console.log(true + ""); // "true"
console.log(false + ""); // "false"

// * 숫자 타입으로 변환
// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 2. parseInt, parseFloat 함수를 사용하는 방법 (문자열 -> 숫자 만 가능)
// 3. + 단항 산술 연산자를 이용하는 방법
// 4. * 산술 연산자를 이용하는 방법 ()

// 09-15
console.log(Number("0")); // 0
console.log(Number("-1")); // -1
console.log(Number("10.53")); // 10.53
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(parseInt("0")); // 0
console.log(parseInt("-1")); // -1
console.log(parseInt("10.53")); // 10.53

console.log(+"0"); // 0
console.log(+"-1"); // -1
console.log(+"10.53"); // 10.53
console.log(+true); // 1
console.log(+false); // 0

console.log("0" * 1); // 0
console.log("-1" * 1); // -1
console.log("10.53" * 1); // 10.53
console.log(true * 1); // 1
console.log(false * 1); // 0

// * 불리언 타입으로 변환
// 1. Boolean 생성자 함수를 new 연산자 없이 호출
// 2. ! 부정 논리 연산자를 두번 사용

// 09-16
// 1. Boolean 생성자 함수
console.log(Boolean("x")); // true
console.log(Boolean("")); // false
console.log(Boolean("false")); // true

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // * true

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean({})); // true
console.log(Boolean([])); // true

// 2. ! 부정 논리 연산자
console.log(!!"x"); // true
console.log(!!""); // false
console.log(!!"false"); // true

console.log(!!0); // false
console.log(!!1); // true
console.log(!!NaN); // false
console.log(!!Infinity); // true

console.log(!!null); // false
console.log(!!undefined); // false

console.log(!!{}); // true
console.log(!![]); // true

// 단축 평가
// 09-17
console.log("Cat" && "Dog"); // 'Dog'
// 09-18
console.log("Cat" || "Dog"); // 'Cat'

// 09-19
// 논리합(||) 연산자
console.log("Cat" || "Dog"); // 'Cat'
console.log(false || "Dog"); // 'Dog'
console.log("Cat" || false); // 'Cat'

// 논리곱(&&) 연산자
console.log("Cat" && "Dog"); // 'Dog'
console.log(false && "Dog"); // false
console.log("Cat" && false); // false

// 09-20
// 논리곱 연산자(&&) 로 if문 대체 - 조건이 Truthy 한 값일때
var done = true;
var message = "";

if (done) message = "완료";

message = done && "완료";
console.log(message); // '완료'

// 09-21
// 논리합 연산자 (||) 로 if 문 대체 - 조건이 Falsy 한 값일때
var done = false;
var message = "";

if (!done) message = "미완료";

message = done || "미완료";
console.log(message); // '미완료'

// 09-22
// 삼항 연산자로 if else 문을 대체
var done = true;
var message = "";

if (done) message = "완료";
else message = "미완료";
console.log(message); // '완료'

message = done ? "완료" : "미완료";
console.log(message); // '완료'

// * 옵셔널 체이닝(.?) 과 null 병합 연산자 (??)
// 09-23
var elem = null;
var value = elem?.value;
// 09-24
var elem = null;
var value = elem && elem.value;
// 09-25
function getStringLength(str) {
  str = str || "";
  return str.length;
}
console.log(getStringLength("")); // 0
console.log(getStringLength("hi")); // 2

// * 옵셔널 체이닝: 좌항이 null 또는 undefined 인 경우 그것을 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어감
// 09-26
var elem = null;
var value = elem?.value;
console.log(value); // undefined

// 09-27
var elem = null;
var value = elem && elem.value;
console.log(value); // null

// 09-28
var str = "";
var length = str && str.length;
console.log(length); //empty string

// 09-29
var str = "";
var length = str?.length;
console.log(length); // 0

// * null 병합 연산자: 좌항의 피연산자가 null, undefined 인 경우 우항의 피연산자 반환하고, 그렇지 않으면 좌항의 피연산자 반환
// 09-30
var foo = null ?? "default string";
console.log(foo); // default string

// 09-31
// Falsy 값인 0이나 ''도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.
var foo = "" || "default string";
console.log(foo); // default string

// 09-32
// * 좌항의 피연산자가 Falsy 값이어도 null 또는 undefined가 아니면 좌항의 피연산자를 반환
var foo = "" ?? "default string";
console.log(foo); // ''
