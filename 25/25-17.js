class Person {
  // constructor를 생략하면 다음과 같이 빈 constructor가 암묵적으로 정의된다.
  constructor() {}
}

const me = new Person();
console.log(me); // Person {} - 빈 객체 생성
