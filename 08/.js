// break 문 : 레이블문, 반복문(for, for...in, for...of, while, do...while), switch 문의 코드블록 탈출
// 08-18
// if (true) {
//     break; // Uncaught SyntaxError: Illegal break statement - 조건문은 안됨!
// }

// 08-19
foo: console.log("foo"); // 레이블 문

// 08-20
foo: {
  console.log(1);
  break foo;
  console.log(2);
}

console.log("Done!");

// 08-21
// outer 라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}
console.log("Done!");

// 08-22
// string 에서 search 문자으 ㅣ개수 구하기
var string = "Hello World.";
var search = "l";
var index;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break;
  }
}
console.log(index); // 2
console.log(string.indexOf(search)); // 2

// * continue 문: 반복문의 코드 실행을 현지점에서 중단하고, 반복문의 증감식으로 실행 흐름을 이동시킨다.
// 08-23
var string = "Hello World";
var search = "l";
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue; // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}
console.log(count); // 3

// 동일하게 동작하는 코드
const regExp = new RegExp(search, "g");
console.log(string.match(regExp).length); // 3

// 08-24
// 23번의 for 문은 다음과 동일하게 동작한다
for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    count++;
  }
}

console.log(count); // 3
