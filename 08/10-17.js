// ** for 문 : 조건식이 거짓으로 평가될때까지 코드 블록을 반복 실행
// 08-10
// for (var i = 0; i < 2; i++) {
//     console.log(i);
// }

// 08-11
// for (var i = 1; i >= 0; i--) {
//     console.log(i);
// }

// 08-12
// * for 문 무한루프 - for 문 안에 변수 선언문, 조건식, 증감식 모두 생략시
// for (; ;) { console.log('loop') }

// 08-13
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`); // [1,5], [2,4], [3,3], [4,2], [5,1]
  }
}

// ** while 문 : 주어진 조건식의 평가 결과가 참이면 코드블록 반복 실행
// 08-14
// * for 문 - 반복 회수가 명확할 때 주로 사용
// * while 문 - 반복 횟수가 불명확할 떄 사용

var count = 0;

// count 가 3보다 작을 때까지만 코드블록 반복 실행
while (count < 3) {
  console.log(count); // 0, 1, 2
  count++;
}

// 08-15
// * while 문 무한루프 - 탈출하려면 코드블록 내에 if 문으로 탈출 조건을 만들고 break 문으로 코드 블록 탈출!
while (true) {
  console.log("loop");
}
// 08-16
var num = 0;
while (true) {
  console.log(num); // 0, 1, 2
  num++;
  if (num === 3) break; // 탈출!
}

// ** do ... while 문 : 코드 블록을 먼저 실행하고 조건식을 평가. 따라서 코드 블록은 무조건 한번 이상 실행됨
// 08-17
var dowhile = 0;

do {
  console.log(dowhile); // 0 1 2
  dowhile++;
} while (dowhile < 3);
