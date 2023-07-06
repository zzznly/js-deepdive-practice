// 19-23, 24
/** 이 객체 리터럴이 평가되면 추상 연산 OrdinaryObjectCreate 에 의해
 * Objetct 생성자함수와, Object.prototype 과, 객체 obj 사이의 연결이 만들어짐*/
const obj = { x: 1 };

// 객체 리터럴에 의해 생성된 obj 객체는 Object.prototype를 상속받는다.
console.log(obj.constructor === Object); // true
console.log(obj.hasOwnProperty("x")); // true

// 19-25, 26
const obj1 = new Object();
obj1.x = 1;

console.log(obj1.constructor === Object); // true
console.log(obj1.hasOwnProperty("x")); // true

// 19-27
// 생성자 함수에 의해 생성되는 객체의 프로토타입은 생성자함수의 prototype 프로퍼티에 바인딩되어있는 객체다
function Person(name) {
  this.name = name;
}
const me = new Person("Lee");

// 19-28, 29, 30, 31, 32, 33, 34
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
// 프로토타입 Person.prototype에 프로퍼티 추가하여 자식 객체가 상속받을 수 있도록 구현
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me2 = new Person("Lee");
const you = new Person("Kim");

me2.sayHello(); // Hi! My name is Lee
you.sayHello(); // Hi! My name is Kim

// hasOwnProperty는 Object.prototype의 메서드다.
console.log(me2.hasOwnProperty("name")); // true

// 30
// me 객체의 프로토타입은 Person.prototype 이다!
console.log(Object.getPrototypeOf(me2) === Person.prototype); // true
// 31
// Person.prototype 의 프로토타입은 언제나 Object.prototype 이다!
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true

// 32
// hasOwnProperty 는 Object.prototype 의 메서드다
// me2 객체는 프로토타입 체인을 따라 hasOwnProperty 메서드를 검색해 사용한다
console.log(me2.hasOwnProperty("name")); // true

// 33
Object.prototype.hasOwnProperty.call(me2, "name");

// 34
console.log(me2.foo); // undefined

// 35
console.log(me2.hasOwnProperty("name")); // true

// 36, 37
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
  };

  return Person;
})();

// 생성차 함수로 객체 생성
const me3 = new Person("Lee");

// 인스턴스에 메서드 추가
me3.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

/**
 * 인스턴스 메서드 sayHello 가 프로토타입 메서드 sayHello를 오버라이딩,
 * 상속관계에 의해 프로토타입 메서드 sayHello는 가려진다
 * => 프로퍼티 섀도잉
 * */

me3.sayHello();

// 37
delete me3.sayHello; // 인스턴스 메서드 삭제
me3.sayHello(); // Hi! My name is Lee
// => 인스턴스에 sayHello 메서드 삭제되어 없으므로 프로토타입 메서드 호출

// 38
delete me3.sayHello; // 프로토타입 체인을 통해 프로토타입 메서드 삭제되지 않음
me3.sayHello(); // Hi My name is Lee

// ** 하위 객체를 통해 프로토타입의 프로퍼티를 변경/삭제하는것은 불가능하다!
// (= 하위 객체를 통한 get 액세스는 허용하나 set 액세스는 허용되지 않는다)

// 39
// 프로토타입 메서드 변경
Person.prototype.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};
me3.sayHello(); // Hey! My name is Lee

// 프로토타입 메서드 삭제
delete Person.prototype.sayHello;
me3.sayHello(); // TypeError: me3.sayHello is not a function

// 프로토타입의 교체 **
// 40, 41, 42
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // (1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
  // 프로토타입에 객체 리터럴 할당
  Person.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  return Person;
})();

const me4 = new Person("Lee");

// 41
// 프로토타입을 교체해서, constructor 프로퍼티와 생성자 함수간의 연결 파괴됨!
console.log(me4.constructor === Person); // false

// 프로토타입 체인을 따라 Object.prototype 의 constructor 프로퍼티가 검색됨!
console.log(me4.constructor === Object); // true

// 42
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
  Person.prototype = {
    constructor: Person, // constructor 프로퍼티와 생성자 함수 간의 연결 설정
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };

  return Person;
})();

const me5 = new Person("Lee");

console.log(me5.constructor === Person); // true
console.log(me5.constructor === Object); // false

// 43
function Person(name) {
  this.name = name;
}

const me6 = new Person("Lee");

// 프로토타입으로 교체할 객체
const parent = {
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

// (1) me 객체의 프로토타입을 parent 객체로 교체한다
Object.setPrototypeOf(me6, parent);
// me.__proto__ = parent ( 위 코드와 동일 )

me6.sayHello(); // Hi! My name is Lee

// 44
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false

// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다.
console.log(me.constructor === Object); // true

// 45
function Person(name) {
  this.name = name;
}

const me7 = new Person("Yoo");

const parent7 = {
  constructor: Person,
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

Object.setPrototypeOf(me7, parent);

me7.sayHello();

console.log(me7.constructor === Person); // true
console.log(me7.constructor === Object); // false

console.log(Person.prototype === Object.getPrototypeOf(me7)); // true

// => 이처럼 프로토타입 교체를 통해 객체 간의 상속관계를 동적으로 변경하는것은 꽤나 번거롭다. 프로토타입 직접교체보다는 직접상속이 더 편리하고 안전하다.

// 46
function Person(name) {
  this.name = name;
}

const me8 = new Person("Yoo");

console.log(me8 instanceof Person); // true
console.log(me8 instanceof Object); // true

// 47
function Person(name) {
  this.name = name;
}

const me9 = new Person("Yoo");

const parent9 = {}; // 프로토타입으로 교체할 객체

Object.setPrototypeOf(me9, parent); // 프로토타입의 교체

console.log(Person.prototype === parent); // false
console.log(parent.constructor === Person); // false

console.log(me9 instanceof Person); // false
console.log(me9 instanceof Object); // true

// 48
function Person(name) {
  this.name = name;
}

const me10 = new Person("Yoo");

const parent10 = {}; // 프로토타입으로 교체할 객체

Object.setPrototypeOf(me10, parent10); // 프로토타입의 교체

console.log(Person.prototype === parent10); // false
console.log(parent10.constructor === Person); // false

Person.prototype = parent10;

console.log(me10 instanceof Person); // true
console.log(me10 instanceof Object); // true

// 49
function isInstanceOf(instance, constructor) {
  const prototype = Object.getPrototypeOf(instance);

  // 프로토타입이 null 이면, 프로토타입 체인의 종점에 다다른 것이다
  if (prototype === null) return false;

  // instance의 prototype이 생성자함수의 프로토타입에 바인딩되어있다면 true,
  // 아니라면 재귀호출로 prototype의 프로토타입(상위 프로토타입)으로 타고 올라가서 또 확인
  return (
    prototype === constructor.prototype || isInstanceOf(prototype, constructor)
  );
}

console.log(isInstanceOf(me10, Person)); // true
console.log(isInstanceOf(me10, Object)); // true
console.log(isInstanceOf(me10, Array)); // false

// 50
const Person = (function () {
  function Person(name) {
    this.name = name;
  }

  // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
  // => constructor 프로퍼티(me.constructor)와 생성자 함수(Person) 간의 연결 파괴
  Person.prototype = {
    sayHello() {
      console.log(`Hi My name is ${this.name}`);
    },
  };

  return Person;
})();

const me11 = new Person("Lee");

// constructor 프로퍼티와 생성자 함수 간의 연결은 파괴되어도 instanceof는 아무런 영향을 받지 않는다.
console.log(me11); // { name: 'Lee' }
console.log(me11.constructor === Person); // false

console.log(me11 instanceof Person); // true
console.log(me11 instanceof Object); // true
