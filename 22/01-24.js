// 01
const circle = {
  radius: 5,
  getDiameter() {
    return 2 * circle.radius;
  },
};

console.log(circle.getDiameter()); // 10

// 02
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};

const circle1 = new Circle(5);
console.log(circle1); // { radius: 5 }

// 03
const circle2 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};
console.log(circle2.getDiameter()); // 10

// 04
function Circle(radius) {
  this.radius = radius; // this = 생성자 함수가 생성할 인스턴스
}
Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};

const c1 = new Circle(5);
console.log(circle.getDiameter()); // 10

// 05
console.log(this); // window(전역 객체)

function square(num) {
  console.log(this); //this - 일반함수에서 this는 전역 객체 가리킴 (window)
  return num * num;
}
square(2);

const person = {
  name: "Lee",
  getName() {
    console.log(this); // this - 호출한 객체 person 을 가리킨다 // { name: 'Lee', getName() }
    return this.name;
  },
};

console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  console.log(this); // this - 생성할 인스턴스를 가리킨다 // Person { name: 'Lee' }
}

const me = new Person("Lee");
