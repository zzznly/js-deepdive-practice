const Person = class MyClass {};

// 클래스를 가리키는 식별자(=Person)로 인스턴스를 생성해야 한다.
const me = new Person();

// 클래스 이름 MyClass 는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자다
console.log(MyClass); // ReferenceError: MyClass is not defined

const you = new MyClass(); // ReferenceError: MyClass is not defined
