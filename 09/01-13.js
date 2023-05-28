// ** 암묵적 타입 변환

// 09-01
var x = 10;
var str = x.toString();
console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10

// 09-02
var x = 10;
var str = x + "";
console.log(typeof str, str); // string 10

// 09-03
console.log("10" + 2); // '102'
console.log(5 * "10"); // 50
console.log(!0); // true
if (1) {
} // 1 은 true

// * 문자열 타입으로 변환
// 09-04
console.log(1 + "2"); // '12'
// 09-05
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

// 09-06
// 숫자 타입
console.log(0 + ""); // '0'
console.log(-0 + ""); // '0'
console.log(1 + ""); // '1'
console.log(1 + ""); // '-1'
console.log(NaN + ""); // 'NaN'
console.log(Infinity + ""); // 'Infinity'
console.log(-Infinity + ""); // '-Infinity'
// 불리언
console.log(true + ""); // 'true'
console.log(false + ""); // 'false'
// null
console.log(null + ""); // 'null'
// undefined
console.log(undefined + ""); // 'undefined'
// ** Symbol
console.log(Symbol() + ""); // TypeError:  Cannot convert a Symbol value to a string
// ** 객체 타입
console.log({} + ""); // [object Object]
console.log(Math + ""); // [object Math]
console.log([] + ""); // ''
console.log([10, 20] + ""); // '10,20'
console.log(function () {} + ""); // "function(){}"
console.log(Array + ""); // ** function Array() { [native code] }

// *숫자 타입으로의 변환
// 09-07
// * 숫자 타입으로 변환 (산술 연산자)
console.log(1 - "1"); // 0
console.log(1 * "10"); // 10
console.log(1 / "one"); // NaN

// 09-08
// 숫자 타입으로 변환 ('1' -> 1)
console.log("1" > 0); // true

// 09-09
// 피연산자의 타입을 숫자로 암묵적 변환 (단항 연산자 +, -)
// 문자열 타입
console.log(+""); // 0
console.log(+"0"); // 0
console.log(+"1"); // 1
console.log(+"string"); // NaN
// 불리언 타입
console.log(+true); // 1
console.log(+false); // 0
// null 타입
console.log(+null); // 0
// undefined 타입
console.log(+undefined); // NaN
// 심벌 타입
console.log(+Symbol()); // -> TypeError: Cannot convert a Symbol value to a number
// 객체 타입
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+[10, 20]); // NaN
console.log(+function () {}); // NaN

// 불리언 타입으로 변환
// 09-11
if ("") console.log("1");
if (true) console.log("2"); // 2
if (0) console.log("3");
if ("str") console.log("4"); // 4
if (null) console.log("5");

// 09-12
// * Falsy 한 값: false, undefined, null, 0, NaN, ''
// Truthy 한 값: Falsy 한 값 이외의 모든 값
if (!false) console.log(false + "is falsy value");
if (!undefined) console.log(false + "is falsy value");
if (!null) console.log(false + "is falsy value");
if (!0) console.log(false + "is falsy value");
if (!NaN) console.log(false + "is falsy value");
if (!"") console.log(false + "is falsy value");

// 09-13
// Falsy 값이면 true, Truthy 값이면 false 반환
function isFalsy(v) {
  return !v;
}
function isTruthy(v) {
  return !!v;
}
// 모두 true 반환
isFalsy(false);
isFalsy(undefined);
isFalsy(NaN);
isFalsy("");
isFalsy(0);
isFalsy(null);
// 모두 true 반환
isTruthy(true);
isTruthy("0"); // 빈 문자열이 아닌 문자열이므로 Truthy
isTruthy({});
isTruthy([]);
