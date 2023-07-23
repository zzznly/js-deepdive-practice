// *** 실행컨텍스트 예제

function A() {
  B();
  console.log("A");
  var ash = "hi";
  const group = 20;
}

function B() {
  const fn = C();
  fn();
}

function C() {
  const cat = "cat";
  console.log(apple);
  return () => {
    console.log(cat);
  };
}
// D();
const apple = "apple";
var D = function () {};
F();
const F = () => {
  var banana = "banana";
};
A();

// Global EC: A(함수), B(함수), C(함수), apple(변수, TDZ -> "apple"), D(변수, undefined), F(변수, TDZ), banana(undefined) / outer: null
// F EC: / outer: Global EC
// A EC: ash(변수, undeined), group(변수, TDZ) / outer: Global EC
// B EC: / outer: A EC
// C EC: cat(변수, TDZ -> "cat") / outer: B EC
// EC stack => []

const obj = {
  apple: () => {},
  banana() {},
};
