// 12-34
// 즉시 실행 함수 : 함수 정의와 동시에 실행되는 함수. 단 한번만 호출 가능. 일반적으로 익명 함수 사용
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();

// 12-35
// ** 기명 즉시 실행 함수 -> 함수 선언문 아닌 함수 리터럴로 평가됨.
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();

foo(); // ReferenceError: foo is not defined
// => * 즉시 실행 함수를 다시 호출 불가! 함수 이름은 함수 몸체 내에서만 참조 가능한 식별자이므로
