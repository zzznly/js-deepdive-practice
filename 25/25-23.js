class Person {
  // 생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me = new Person("Lee");
me.sayHi();
