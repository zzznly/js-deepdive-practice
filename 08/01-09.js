// 08-01
// 블록문
{
  var foo = 10;
}

// 제어문 - 반복문, 조건문
// 조건문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 08-02
// if 문
var num = 2;
var kind;

if (num > 0) {
  kind = "양수";
}
console.log(kind); // 양수

// 08-03
// if... else 문
if (num > 0) {
  kind = "양수";
} else if (num < 0) {
  kind = "음수";
} else {
  kind = "영";
}
console.log(kind);

// 08-04
var x = 2;
var result;

if (x % 2) {
  result = "홀수";
} else {
  result = "짝수";
}

console.log(result);

// 08-05
var x = 2;

var result = x % 2 ? "홀수" : "짝수";
console.log(result);

// 08-06
var num = 2;

var kind = num ? (num > 0 ? "양수" : "음수") : "영";
console.log(kind);

// * 08-07
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
  case 2:
    monthName = "February";
  case 3:
    monthName = "March";
  case 4:
    monthName = "April";
  case 5:
    monthName = "May";
  case 6:
    monthName = "June";
  case 7:
    monthName = "July";
  case 8:
    monthName = "August";
  case 9:
    monthName = "September";
  case 10:
    monthName = "October";
  case 11:
    monthName = "November";
  case 12:
    monthName = "December";
  default:
    monthName = "Invalid month";
}

console.log(monthName); // Invalid Month ***
// -> Fall Through(폴스루)됨. switch문 빠져나가지 못하고 모든 case, default 문까지 실행됨

// * 08-08
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November
// -> break문이 있으므로 11에서 switch 문 탈출

// * 08-09
// 윤년인지 판별해서 2월의 일수를 계산하는 예제
// switch 문에 break 없는 Fall Through 가 유용한 경우도 있다!
var year = 2000; // 2000년은 윤년으로 2월이 29일까지 있음
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 연도가 4로 나누어떨어지는 해
    // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어떨어지지 않는 해
    // 3. 연도가 400으로 나누어떨어지는 해
    days = (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(days); // 29
