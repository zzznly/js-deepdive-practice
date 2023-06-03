// 함수 호출
// 12-16
function add(x, y) {
  return x + y;
}
var result = add(1, 2);
console.log(result); // 3

// 12-17
function add(x, y) {
  console.log(x, y); // 2 5
  return x + y;
}
add(2, 5);

// 12-18
// 인수가 할당되지 않은 매개변수의 값은 undefined!
function add(x, y) {
  return x + y;
}
console.log(add(2)); // 2 + undefined = NaN

// * 초과된 인수는 무시된다. (=> 사실 암묵적으로 arguments 객체의 프로퍼티로 보관됨)
// 12-19
function add(x, y) {
  console.log(ar);
  return x + y;
}
console.log(add(2, 5, 10)); // 7
// 12-20
function add(x, y) {
  console.log(arguments); // { [Iterator] 0: 2, 1: 5, 2: 10 }
  return x + y;
}
console.log(add(2, 5, 10)); // 7
