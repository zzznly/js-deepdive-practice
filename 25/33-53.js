// ** 프로퍼티

// 33
class Person {
  constructor(name) {
    this.name = name;
  }
}

const me = new Person("Lee");
console.log(me); // Person { name: 'Lee }

// 34
class Person2 {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name; // name 프로퍼티는 Public 이다!
  }
}
const me2 = new Person2("Lee");

// name은 public 이다
console.log(me2.name); // Lee

// * 접근자 프로퍼티
// 35
const person = {
  firstName: "Jinri",
  lastName: "Yoo",

  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${person.firstName} ${person.lastName}`); // Jinri Yoo

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// * 접근자 프로퍼티 fullName 에 값을 저장하면 setter 함수가 호출
person.fullName = "Myeongmin Shin";
console.log(person); // { firstName: 'Myeongmin', lastName: 'Shin'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// * 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출
console.log(person.fullName); // Myeongmin Shin

// fullName은 접근자 프로퍼티다
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다
console.log(Object.getOwnPropertyDescriptor(person, "fullName")); // {get: ƒ, set: ƒ, enumerable: true, configurable: true}

// 36
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me3 = new Person("Jinri", "Yoo");
console.log(`${me.firstName} ${me.lastName}`); // Jinri Yoo

me3.fullName = "Haru Shin";
console.log(me); // Person { firstName: 'Haru', lastName: 'Shin' }

console.log(me3.fullName); // Haru Shin

console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName")); // {get: ƒ, set: ƒ, enumerable: false, configurable: true}
