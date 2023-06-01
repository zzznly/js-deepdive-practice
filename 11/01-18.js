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

// * 값에 의한 전달: 변수에 원시값을 갖는 변수를 할당하면 변수에는 할당되는 변수의 원시값이 복사되어 전달된다. (다른 주소, 같은 값)
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
var copy = score; // copy 변수에는 score 변수의 값 80이 복사되어 할당된다.

console.log(score, copy); // 80  80
console.log(score === copy); // true
// => score 변수와 copy 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이다!

// 11-08
var score = 80;
var copy = score;

console.log(score, copy); // 80 80
console.log(score === copy); // true

score = 100;
console.log(score, copy); // 100 80
console.log(score === copy); // false

// 11-09
var x = 10;
// 11-10
var copy = score;

// * 참조에 의한 전달: 객체를 가리키는 변수를 다른 변수에 할당하면, 원본의 참조 값(메모리공간 주소)이 복사되어 전달된다
// 변경 가능한 값 (객체)
// 11-11
var person = {
  name: "Lee",
};

// 11-12
var person = {
  name: "Lee",
};
// person 변수에 저장되어있는 참조값(주소)을 통해 실제 객체에 접근한다.
console.log(person); // {name: "Lee"}

// 11-13
var person = {
  name: "Lee",
};
person.name = "Yoo"; // 프로퍼티 값 갱신
person.job = "Developer"; // 프로퍼티 동적 생성
// => {name: "Yoo", job: "Developer"}

// 11-14
// ** 얕은 복사와 깊은 복사 - 복사로 생성된 객체는 원본과 다른 객체다! (참조값이 서로 다름)
// * 얕은 복사 - 객체가 중첩된 경우, 중첩된 객체의 참조 값을 복사
const o = { x: { y: 1 } };
const c1 = { ...o };
console.log(c1 === o); // false
console.log(c1.x === o.x); // true
// * 깊은 복사 - 객체가 중첩된 경우, 중첩된 객체까지 모두 복사해서 원시값처럼 완전한 복사본을 생성한다!
// lodash의 cloneDeep을 사용한 깊은 복사 ("npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행)
const _ = requre("lodash");
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

// 11-15
const v = 1;

// * 원시값을 할당한 변수를 다른 변수에 할당하는 것 - 깊은 복사 라고 부르기도 한다
const c3 = v;
console.log(c3 === v); // true

const o2 = { x: 1 };

// * 객체를 할당한 변수를 다른 변수에 할당하는 것 - 얕은 복사 라고 부르기도 한다
const c4 = o;
console.log(c4 === o); // true

// 11-16
var person = {
  name: "Lee",
};
// 참조값을 복사(얕은 복사)
var copy = person;
// * 두개의 식별자가 하나의 객체를 공유한다!
// => ** 원본, 사본중 하나에서 객체를 변경(프로퍼티 값 변경, 프로퍼티 추가/삭제) 하면 서로 영향 받음!!!

// 11-17
var person = {
  name: "Lee",
};

var copy = person; // 참조값을 복사 (얕은 복사)
console.log(copy === person); // true - copy 와 person은 동일한 참조값을 가진다

copy.name = "Kim"; // copy를 통해 객체 변경 (프로퍼티 갱신)
person.address = "Namyangju"; // person을 통해 객체 변경 (프로퍼티 추가)

// copy와 person은 동일한 객체를 참조하므로, 어느 한쪽에서 객체를 변경하면 서로 영향을 받는다
console.log(person); // { name: "Kim", address: "Namyangju" }
console.log(copy); // { name: "Kim", address: "Namyangju" }
