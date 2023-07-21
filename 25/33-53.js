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

const me4 = new Person("Jinri", "Yoo");
console.log(`${me.firstName} ${me.lastName}`); // Jinri Yoo

me.fullName = "Haru Shin";
console.log(me4); // Person { firstName: 'Haru', lastName: 'Shin' }

console.log(me4.fullName); // Haru Shin

console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName")); // {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 37
console.log(Object.getOwnPropertyNames(me4)); // ['firstName', 'lastName']
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(me4))); // ['constructor', 'fullName']

// 38 - JAVA , 생략

// 39, 40
// * 클래스 필드 - 클래스가 생성할 인스턴스의 프로퍼티
class Person3 {
  // 클래스 필드 정의!
  name = "Lee";
}

const me = new Person3("Lee");
const me1 = new Person3();
console.log(me1); // Person { name: 'Lee' }

// 41
class Person4 {
  // this에 클래스 필드를 바인딩해서는 안된다.
  this.name = ''; // SyntaxError: Unexpected token '.'
}

// 42
class Person5 {
  name = "Lee";

  constructor() {
    console.log(name); // ReferenceError: name is not defined
  }
}

new Person5();

// 43
class Person6 {
    name; // 클래스 필드를 초기화하지 않으면 undefined를 갖는다.
}

const me = new Person6();
console.log(me); // Person {name: undefined}

// 44
class Person7 {
    name;

    constructor(name) {
        this.name = name; // 클래스 필드 초기화
    }
} // 클래스 외부 값으로 필드를 초기화해야한다면 constructor에서 클래스 필드 초기화

const me = new Person('Lee');
console.log(me); // Person {name: 'Lee'}

// 45
class Person {
    constructor(name) {
        this.name = name;
    }
}

const me = new Person('Lee');
console.log(me); // Person {name: 'Lee'}

// 46
class Person {
    // 클래스 필드에 문자열 할당
    name = 'Lee';

    // 클래스 필드에 함수 할당 (화살표 함수도 가능)
    getName = function () {
        return this.name;
    }
}
const me4 = new Person();
console.log(me4); // Person {name: 'Lee', getName: f}
console.log(me4.getName()); // Lee

// 48
class Person {
    constructor(name) {
        this.name = name; // 인스턴스 프로퍼티는 기본적으로 public
    }
}
// 인스턴스 생성
const me5 = new Person('Lee');
console.log(me5.name); // Lee

// 49
class Person {
    name = 'Lee'; // 클래스 필드도 기본적으로 public
}

// 인스턴스 생성
const me = new Person();
console.log(me.name); // Lee

// 50
class Person {
  // private 필드 정의
  #name = "";

  constructor(name) {
    this.#name = name; // private 필드 참조
  }
}

const me6 = new Person("Lee");
console.log(me6.#name); // private 필드 #name 은 클래스 외부에서 참조 불가!
// SyntaxError: Private field '#name' must be declared in an enclosing class

// 51
class Person {
    #name = ''; // private 필드 정의

    constructor(name) {
        this.#name = name;
    }

    get name() { // name 은 접근자 프로퍼티
        return this.#name.trim(); // private 필드를 참조하여 trim 한 다음 반환
    }
}
const me = new Person(' Lee ');
console.log(me.name); // Lee

// 52
// private 필드는 클래스 몸체에서 정의되어야한다!
class Person {
    constructor(name) {
        this.#name = name; // SyntaxError: Private field '#name' must be declared in an enclosing class
    }
}

// 53
class MyMath {
  static PI = 22 / 7;

  static #num = 10;

  static increment() {
    return ++MyMath.#num;
  }
}
console.log(MyMath.PI); // 3.14285714...
console.log(MyMath.increment()); // 11
