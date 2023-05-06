// 07-01

    // 1. 산술 연산자
    5 * 4 // 20

    // 2. 문자열 연결 연산자
    'My name is ' + 'Lee'; // 'My name is Lee'

    // 3. 할당 연산자
    color = 'red' // 'red'

    // 4. 비교 연산자
    3 > 5 // false

    // 5. 논리 연산자
    true && false // false

    // 6. 타입 연산자
typeof 'Hi' // string
    

// 07-03
var x = 1;

x++;
console.log(x);

x--;
console.log(x);

// 07-04
var x = 5, result;

// 선할당 후증가
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당
result = --x;
console.log(result, x); // 5 5


// 07-06
// *단항연산자 (+) : 숫자로 타입 변환한다
var x = '1';

console.log(+x); // 1
console.log(x); // 1

x = true;
console.log(+x); // 1
console.log(x); // true

x = false;
console.log(+x); // 0
console.log(x); // false

x = 'Hello';
console.log(+x); // NaN
console.log(x); // Hello


// 07-07
// *단항연산자 (-) : 숫자로 타입 변환한다
console.log(-(-10)); // 10
console.log(-'10') // -10
console.log(-true); // -1
console.log(-'Hello'); // NaN // 문자열은 숫자로 타입 변환 불가


// 07-08
// 문자열 연결 연산자
console.log('1' + 2); // 12
console.log(1 + '2'); // 12

// 산술 연산자
console.log(1 + 2); // 3

// true는 1로 타입 변환된다.
console.log(1 + true); // 2

// false는 0으로 타입 변환된다.
console.log(1 + false); // 1

// null은 0으로 타입 변환된다.
console.log(1 + null); // 1

// * undefined는 숫자로 타입 변환되지 않는다.
console.log(+undefined); // NaN
console.log(1 + undefined); // NaN


// 07-09
x = 10;
console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 5;
console.log(x); // 10

x *= 5;
console.log(x); // 50

x /= 5;
console.log(x); // 10

x %= 5;
console.log(x); // 0

var str = 'My name is ';
str += 'Lee';
console.log(str); // My name is Lee


// 07-10
var x;
// 할당문은 표현식인 문이다.
console.log(x = 10); // 10


// 07-11
var a, b, c;
a = b = c = 0; // 연쇄 할당. 오른쪽에서 왼쪽으로 진행

console.log(a, b, c); // 0 0 0


// 07-12
// * 동등 비교 연산자(==): 암묵적 타입 변환을 통해 타입을 일치시킨 후 값 비교.
console.log(5 == 5); // true
console.log(5 == '5'); // true 


// 07-13
// * 동등 비교 연산자 (==): 결과를 예측하기 어려움 => 사용하지 않는것이 좋다
console.log('0' == ''); // false
console.log(0 == ''); // true
console.log(0 == '0'); // true
console.log(false == 'false'); // false
console.log(false == '0'); // true
console.log(false == 0); // true
console.log(false == null); // false // *** TODO: false 인 이유 알아내기
console.log(false == undefined); // false


// 07-14
// * 일치 비교 연산자 (===): 값과 타입 모두 같은 경우에만 true
console.log(5 === 5); // true
console.log(5 === '5'); // false


// 07-15
// * NaN은 자기자신과 일치하지 않는 유일한 값이다
console.log(NaN === NaN); // false

// 07-16
// 숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN 사용
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10)); // false
console.log(Number.isNaN(1 + undefined)); // true


// 07-17
// 음의 0, 양의 0 은 일치/동등 비교시 모두 true
console.log(0 === -0); // true
console.log(0 == -0); // true


// 07-18 // *** TODO: Object.is() 찾아보기
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true


// 07-19
// 부동등 비교 (!=)
console.log(5 != 8); // true
console.log(5 != 5); // false
console.log(5 != '5'); // false

// 불일치 비교 (!==)
console.log(5 !== 8); // true
console.log(5 !== 5); // false
console.log(5 !== '5'); // true


// 07-20
// 대소 비교
console.log(5 > 0); // true
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true


// 07-21
// var x = 2;

// // 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
// var result = x % 2 ? '홀수' : '짝수';
// console.log(result); // '짝수'


// 07-22
// var x = 2, res;

// if (x % 2) res = '홀수';
// else res = '짝수';

// console.log(res); // '짝수'


// 07-23
// var x = 10;

// var res = if (x % 2) {
//     res = '홀수';
// } else {
//     res = '짝수'
// }; // => if... else 문은 표현식이 아닌 문이다. 값처럼 사용 불가


// 07-24
var x = 10;

var res = x % 2 ? '홀수' : '짝수';
console.log(res); // 짝수


// 07-25
// 논리 연산자
// - 논리 합 (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// - 논리 곱 (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// - 논리 부정 (!)
console.log(!true); // false
console.log(!false); // true


// 07-26
// 암묵적 타입 변환
console.log(!0); // true
console.log(!'Hello'); // false


// 07-27
// *** 단축 평가
console.log('Cat' && 'Dog'); // Dog // TODO: 이거 왜 Dog 인지 알아내기 (9.4장 - 단축평가)


// 07-28
// 드 모르간의 법칙
console.log(!(x || y) === (!x && !y));
console.log(!(a && b) === (!a || !b));


// 07-29
// 쉽표 연산자
// var x, y, z;
// x = 1, y = 2, z = 3;


// 07-30
// 그룹 연산자
10 * (2 + 3)


// 07-31
// typeof 연산자
console.log(typeof ''); // string
console.log(typeof 1); // number
console.log(typeof NaN); // number ***
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object *** // * 이것은 자바스크립트의 첫번째 버그다! 아직 수정되지 않았다.
// 값이 null 인지 확인할때: value === null (일치연산자 사용)
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
console.log(typeof /test/gi); // object ***
console.log(typeof function () { }); // function

// 07-32
// typeof null
var foo = null;
console.log(typeof foo === null); // false
// console.log(typeof foo); // object
console.log(foo === null); // true


// 07-33
console.log(typeof undeclared); // undefined


// 07-34
// 지수 연산자
console.log(2 ** 2); // 4
console.log(2 ** 2.5); // 5.6568...
console.log(2 ** 0); // 1
console.log(2 ** -2); // 0.25

// 07-35
console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(2, 2.5)); // 5.6568...
console.log(Math.pow(2, 0)); // 1
console.log(Math.pow(2, -2)); // 0.25

// 07-36
console.log(2 ** (3 ** 2)); // 512
console.log(Math.pow(2, Math.pow(3, 2))); // 512

// 07-37
console.log(-5 ** 2); // syntaxError
console.log((-5) ** 2); // 25

// 07-38
var n = 5;
n **= 2;
console.log(n); // 25

// 07-39
// * 지수 연산자는 이항 연산자 중에서 가장 우선순위가 높다!
console.log(2 * 5 ** 2); // 2 * 25 = 50
