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
