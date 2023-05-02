class Person {
  constructor(name) {
    this.name = name;

    return {}; // 명시적으로 객체 반환하면, 암묵적인 this 반환이 무시된다.
  }
}

// constructor에서 명시적으로 반환한 빈 객체가 반환된다.
const me = new Person("Lee");
console.log(me);
