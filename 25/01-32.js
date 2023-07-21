// * 프로토타입 기반 객체지향 언어는 클래스가 필요 없는 객체지향 언어다.
// 사실 클래스는 함수이며, 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할수 있도록 만든 문법적 설탕!

// 01
// ES5 에서는 클래스 없이도 다음과같이 생성자함수, 프로토타입을 통해 객체지향 언어의 상속을 구현할 수 있다
var Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHi = function () {
    console.log("Hi! My name is " + this.name);
  };

  return Person; // 생성자 함수 반환
})();

// 인스턴스 생성
var me = new Person("Lee");
me.sayHi(); // Hi! My name is Lee

// 02
// 클래스 선언문
class Person {}

// 03
// 클래스를 표현식으로 정의할 수 있다 (클래스는 값으로 사용가능한 일급객체다)
// *일급객체 특징: 1. 무명의 리터럴로 생성 가능(런타임에 생성 가능), 2. 변수나 자료구조에 저장, 3. 함수 매개변수로 사용, 4. 함수 반환값으로 사용
const Person = class {}; // 익명 클래스 표현식

const Person = class MyClass {}; // 기명 클래스 표현식

// => 클래스는 함수다!!

// 04
// 클래스 선언문
class Person {
  // 1. 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public 하다
  }

  // 2. 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 3. 정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}

// 인스턴스 생성
const me = new Person("Lee");

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee

// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee

// 정적 메서드 호출
Person.sayHello(); // Hello!

// 05
// * 클래스 호이스팅
class Person {}
console.log(typeof Person); // function

// 06
console.log(Person); // ReferenceError: Cannot access 'Person' before initialization

class Person {}
// => 클래스 호이스팅이 발생하지 않는것처럼 보이나, 아니다! (let,const처럼 TDZ에 빠짐)

// 07
const Person = "";

{
  console.log(Person);

  class Person {}
}

// 08
class Person {}

// 인스턴스 생성
const me1 = new Person();
console.log(me); // Person {}

// 09
class Person {}
const me2 = Person(); // 클래스를 new 연산자 없이 호출하면 에러발생!
// TypeError: Class constructor Person cannot be invoked without 'new'

// 10
// 클래스 표현식으로 정의된 클래스의 경우, 식별자 이름이 아닌 클래스 이름을 사용해 객체 생성하면 에러!
const Person = class MyClass {};

const me3 = new Person(); // (O)

console.log(MyClass); // ReferenceError: MyClass is not defined

const you = new MyClass(); // (X) ReferenceError: MyClass is not defined

// ** 메서드

// 11
class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }
}

// 12
// 클래스는 함수다!
console.log(typeof Person); // function
console.dir(Person);

// 13
// 인스턴스 생성
const me = new Person("Lee");
console.log(me);

// 14
class Person {
  // 생성자
  constructor(name) {
    this.name = name; // 인스턴스 생성, 초기화
  }
}

// 생성자 함수
function Person(name) {
  this.name = name; // 인스턴스 생성, 초기화
}

// 15
class Person {
    constructor() {}
    constructor() {}
} // 2개 이상의 constructor 포함하면 문법에러!
// SyntaxError: A class my only have one constructor

// 16
class Person { }

// 17
class Person {
    constructor() {} // constructor 생략하면 암묵적으로 빈 constructor 정의됨 
}

const me = new Person(); // 빈 객체 생성
console.log(me) // Person {}

// 18
class Person {
    constructor() {
        // 고정값으로 인스턴스 초기화
        this.name = 'Lee';
        this.address = 'Seoul';
    }
}
const me = new Person();
console.log(me); // Person {name: 'Lee', address: 'Seoul'}

// 19
class Person {
    constructor(name, address) {
        // 인수로 인스턴스 초기화
        this.name = name;
        this.address = address;
    }
}
// 인수로 초기값 전달 (Lee, Seoul), 초기값은 constructor에 전달된다
const me = new Person('Lee', 'Seoul'); 
console.log(me); // Person {name: 'Lee', address: 'Seoul'}

// 20
class Person {
    constructor(name) {
        this.name = name;

        // 명시적으로 객체를 반환하면 암묵적인 this 반환 무시된다
        return {}
    }
}

const me4 = new Person('Lee');
console.log(me4); // {}

// 21
class Person {
    constructor(name) {
        this.name = name;

        // 명시적으로 원시값 반환하면 원시값 반환은 무시되고 암묵적으로 this 반환
        return 100;
    }
}
const me5 = new Person('Lee');
console.log(me5); // Person { name: 'Lee' }

// 22
// 생성자 함수
function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}`);
};

const me6 = new Person('Lee');
me.sayHi(); // Hi! My name is Lee

// 23
class Person {
  // 생성자
  constructor(name) {
    this.name = name; // 인스턴스 생성 및 초기화
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const me7 = new Person("Lee");
me7.sayHi(); // Hi! My name is Lee

// ** 24
// me7 객체의 프로토타입은 Person.prototype이다
console.log(Object.getPrototypeOf(me7) === Person.prototype); // true
console.log(me7 instanceof Person); // true

// Person.prototype의 프로토타입은 Object.prototype 이다
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true
console.log(me7 instanceof Object); // true

// ** me7 객체의 contructor는 Person 클래스다
console.log(me7.constructor === Person); // true

// 25
// 생성자 함수
function Person1(name) {
    this.name = name;
}

// 정적 메서드
Person1.sayHi = function () {
    console.log('Hi!');
}

// 정적 메서드 호출
Person1.sayHi(); // Hi!

// 26, 27
class Person2 {
    // 생성자
    constructor(name) {
        this.name = name;
    }

    // 정적 메서드
    static sayHi() {
        console.log('Hi!')
    }
}

// * 정적 메서드는 클래스로 호출한다!
// * 정적 메서드는 인스턴스 없이도 호출 가능하다!
Person2.sayHi(); // Hi!

// 28
// 인스턴스 생성
const me8 = new Person2('Lee');
me8.sayHi(); // TypeError: me8.sayHi is not a function


// 29
class Square {
    // 정적 메서드
    static area(width, height) {
        return width * height;
    }
}
console.log(Square.area(10, 10)); // 100

// 30
class Square2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // 프로토타입 메서드
    area() {
        return this.width * this.height
    }
}
const square = new Square2(10, 10);
console.log(square.area()); // 100

// 31
// 표준 빌트인 객체의 정적 메서드
Math.max(1, 2, 3); // 3
Number.isNaN(NaN); // true
JSON.stringify({ a: 1 }) // "{ "a": 1 }"
Object.is({}, {}); // ** // false
Reflect.has({ a: 1 }, 'a') // ** // true

// 32
class Person3 {
    constructor(name) {
      // 1. 암묵적 인스턴스 생성, this에 바인딩됨
      console.log(this); // Person {}
      console.log(Object.getPrototypeOf(this) === Person3.prototype) // true

        // 2. this에 바인딩되어 있는 인스턴스 초기화
        this.name = name;
        
        // 3. 완성된 인스턴스가 바인딩된 this 암묵적 반환
  }
}
