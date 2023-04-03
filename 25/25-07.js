const Person = "";

{
  console.log(Person); // ReferenceError: Cannot access 'Person' before initialization

  // 클래스 선언
  class Person {}
}

// ** 클래스 선언문도 let, const 로 선언한 변수처럼 호이스팅 발생한다. (호이스팅 O, 할당 X)
// 따라서 클래스 선언 이전에 TDZ에 걸리기때문에 호이스팅 발생 안하는것처럼 동작한다.
