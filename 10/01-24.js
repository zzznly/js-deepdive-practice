// 10-01
var person = {
    name: 'Lee',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}`)
    }
};

console.log(typeof person); // object
console.log(person); // { name: 'Lee', sayHello: function () {...} }


// 10-02
var empty = {}; // 빈 객체
console.log(typeof empty); // object

// 10-03
var person = {
    name: 'Lee',
    age: 20,
};

// 10-04
var person = {
    firstName: 'Jinri', // 식별자 네이밍 준수
    'last-name': 'Yoo', // 식별자 네이밍 준수하지 않음
}
console.log(person);

// 10-05
var person = {
    firstName: 'Jinri',
    last-name: 'Yoo', // SyntaxError: Unexpected Token
}

// 10-06
var obj = {};
var key = 'hello';

obj[key] = 'world'; // ES5: 프로퍼티 키 동적 생성

console.log(obj); // {hello: 'world'}

// 10-07
var foo = {
    '': '' // 빈 문자열도 프로퍼티 키로 사용 가능
};
console.log(foo); // { 0: 1, 1: 2, 2: 3 }

// 10-08
var foo = {
    0: 1,
    1: 2,
    2: 3,
};
console.log(foo); // { 0: 1, 1: 2, 2: 3 }

// 10-09
var foo = {
    var: '',
    function: '',
};
console.log(foo); // { var: "", function: "" }

// 10-10
var foo = {
    name: "Lee",
    name: 'Kim',
}
console.log(foo); // { name: 'Kim' }

// 10-11
var circle = {
    radius: 5, // 프로퍼티

    // 원의 지름 구하는 메서드
    getDiameter: function () {
        return 2 * this.radius;
    }
}
console.log(circle.getDiameter()); // 10

// 10-12
// 프로퍼티 접근법
var person = {
    name: 'Lee',
};
console.log(person.name); // 마침표 표기법
console.log(person['name']); // 대괄호 표기법

// 10-13
var person = {
    name: 'Lee',
}
console.log(person[name]); // ReferenceError: name is not defined
console.log(person['name']); // Lee -> 따옴표로 감싸진 문자열을 사용해야함

// 10-14
var person = {
    name: 'Lee',
}
console.log(person.age); // undefined

// * 10-15
var person = {
    'last-name': 'Lee',
    1: 10,
};

console.log(person.'last-name'); // SyntaxError: Unexpected string
console.log(person.last-name);
// * Node.js 환경 = ReferenceError: name is not defined
// * 브라우저 환경 = undefined - '' (산술연산 - 숫자타입으로 변환 시도) = NaN
console.log(person[last-name]); // ReferenceError: last is not defined
console.log(person['last-name']); // Lee

// * 프로퍼티 키가 숫자로 이루어진 문자열인 경우 따옴표 생략 가능!
console.log(person.1); // SyntaxError: Unexpected number
console.log(person.'1'); // SyntaxError: Unexpected string
console.log(person[1]); // 10 : person[1] -> person['1']
console.log(person['1']); // 10

// 10-16
var person = {
    name: 'Lee',
};

person.name = 'Kim';
console.log(person); // { name: "kim" }

// 프로퍼티 동적 생성
// 10-17
var person = {
    name: 'Lee',
};
person.age = 20;
console.log(person); // { name: "Lee", age: 20 }

// 10-18
var person = {
    name: 'Lee',
}
person.age = 20;
delete person.age; // ok
delete person.address; // person 객체에 address 프로퍼티 존재 X. 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생 X
console.log(person); // { name: "Lee" }

// 10-19
var x = 1, y = 2;
var obj = {
    x: x,
    y: y,
} // ES5
console.log(obj); // { x: 1, y: 2 }

// 10-20
let x = 1, y = 2;
const obj = { x, y }; // ES6: 프로퍼티 축약
console.log(obj); // {x: 1, y: 2}

// 계산된 프로퍼티 이름
// 10-21
var prefix = 'prop';
var i = 0;
var obj = {};
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 10-22
const prefix = 'prop';
let i = 0;

const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};
console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 10-23
var obj = {
    name: 'Lee',
    sayHi: function () {
        console.log('Hi! ' + this.name);
    }
};
obj.sayHi(); // Hi! Lee

// 10-24
const obj = {
    name: 'Lee',
    sayHi() { // 메서드 축약
        console.log('Hi! ' + this.name);
    }
}
obj.sayHi(); // Hi! Lee