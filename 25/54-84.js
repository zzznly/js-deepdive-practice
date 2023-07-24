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

// 54
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return "eat";
  }

  move() {
    return "move";
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

// 55 - 꼭 안보고 짜볼것!
var Animal = (function () {
  function Animal(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  Animal.prototype.eat = function () {
    return "eat";
  };

  Animal.prototype.move = function () {
    return "move";
  };

  return Animal;
})();

// 56
// super(베이스/부모) 클래스
class Base {}

// 서브(파생/자식) 클래스
class Derived extends Base {}

// 57
function Base(a) {
  // 생성자 함수
  this.a = a;
}

// 생성자 함수를 상속받는 서브클래스
class Derived extends Base {}

const derived = new Derived(1);
console.log(derived); // Derived {a: 1}

// 58
function Base1() {}

class Base2 {}

let condition = true;

// 서브클래스 - 조건에 따른 동적 상속
class Derived extends (condition ? Base1 : Base2) {}

const derived2 = new Derived(1); // Derived {}

console.log(derived2 instanceof Base1); // true
console.log(derived2 instanceof Base2); // false


// 59
constuctor() { }

// 60
// * 서브클래스에서 constructor를 생략하면 아래와같은 constructor가 암묵적으로 정의된다.
// args는 new 연산자와 함께 클래스를 호출할 때 전달한 인수의 리스트다.
constructor(...args) { super(...args); }

// 61
// 수퍼클래스
class Base { }
// 서브클래스
class Derived extends Base { };


// 62
// 61번 예제의 클래스에는 다음과 같이 암묵적으로 constructor가 정의된다

// 수퍼 클래스
class Base {
  constructor() {}
}

// 서브 클래스
class Derived extends Base {
  constructor(...args) { super(...args); }
}

const derived3 = new Derived();
console.log(derived3); // Derived {}


/** super 키워드:
 * 1. super 를 호출하면 수퍼클래스의 constructor 를 호출한다.
 * 2. super 를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
 */

// 1. super 호출:

// 63
// 수퍼 클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
// 서브 클래스
class Derived extends Base {
  // 암묵적으로 constructor 정의
  // constructor(...args) { super(...args) }
}

const derived4 = new Derived(1, 2);
console.log(derived4); // Derived {a: 1, b: 2}


// 64
class Base2 {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

class Derived2 extends Base2 {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const derived5 = new Derived2(1, 2, 3);
console.log(derived5); // Derived2 {a: 1, b: 2, c: 3}

// 65
class Base3 { }

// 01) 서브클래스에서 constructor를 생략하지 않는 경우, 서브클래스의 constructor 에서는 반드시 super 호출해야함!!
class Derived3 extends Base3 {
    constructor() {
        console.log('constructor call');
    }
}

const derived6 = new Derived();

// 66
class Base4 { }

// 02) 서브클래스의 constructor에서 super 를 호출하기 전에는 this 참조 불가!!
class Derived4 extends Base4 {
    constructor() {
        this.a = 1; 
        super();
    }
}
const derived7 = new Derived4(1);

// 67
// 03) super는 반드시 '서브클래스의' constructor 에서만 호출한다.
class Base5 {
    constructor() {
      super(); // SyntaxError: 'super' keyword unexpected here
    }
}

function Foo() {
  super(); // SyntaxError: 'super' keyword unexpected here
}

// 2. super 참조
// 68
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 01) 서브클래스의 프로토타입 메서드 내에서 super.sayHi 는 수퍼클래스의 프로토타입 메서드 sayHi를 가리킨다
class Derived extends Base {
  sayHi() {
    return `${super.sayHi()}. How are you doing?`;
  }
}

const derived8 = new Derived("Jinri");
console.log(derived8.sayHi()); // Hi! Jinri. How are you doing?


// 69 - 68과 동일하게 동작.
class Base2 {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi! ${this.name}`;
    }
}

class Derived2 extends Base2 {
    sayHi() {
        const __super = Object.getPrototypeOf(Derived2.prototype); // Base2.prototype
        return `${__super.sayHi.call(this)}. How are you doing?`; // this 는 Derived2 객체
    }
}

const derived9 = new Derived2('Haru');
console.log(derived9.sayHi()); // Hi! Haru. How are you doing?

// 70
/*
[[HomeObject]]는 메서드 자신을 바인딩하고 있는 객체를 가리킨다.
[[HomeObject]]를 통해 메서드 자신을 바인딩하고 있는 객체의 프로토타입을 찾을 수 있다.
예를 들어, Derived 클래스의 sayHi 메서드는 Derived.prototype에 바인딩되어 있다.
따라서 Derived 클래스의 sayHi 메서드의 [[HomeObject]]는 Derived.prototype이고
이를 통해 Derived 클래스의 sayHi 메서드 내부의 super 참조가 Base.prototype으로 결정된다.
따라서 super.sayHi는 Base.prototype.sayHi를 가리키게 된다.
*/

// super = Object.getPrototypeOf([[HomeObject]])

// 71
const obj = {
    foo() { }, // ES6 메서드 축약 표현으로 정의한 메서드. [[HomeObject]]를 갖는다.
    
    bar: function () {} // 일반 함수. [[HomeObject]]를 갖지 않는다.
}

// 72
const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    sayHi() {
        return `${super.sayHi()}. How are you doing?`
    }
}

console.log(derived.sayHi()); // Hi! Lee. How are you doing?


// 02) 서브클래스의 정적 메서드 내에서 super.sayHi 는 수퍼클래스의 정적메서드 sayHi 를 가리킨다.
// 73
class Base3 {
    static sayHi() {
        return 'Hi!'
    }
}

class Derived3 extends Base3 {
    static sayHi() {
        return `${super.sayHi()} how are you doing?`;
    }
}

console.log(Derived3.sayHi()); // Hi! How are you doing?

