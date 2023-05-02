class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person("Yoo");
console.log(me); // Person { name: "Yoo" }

//** 클래스는 인스턴스를 생성하기 위한 생성자 함수다!
