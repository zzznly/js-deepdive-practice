// 07-40
var x;

x = 1;
console.log(x); // 1

x++;
console.log(x); // 2

var o = { a: 1 };

delete o.a; // delete 연산자는 객체 프로퍼티를 삭제하는 부수 효과가 있다. 이는 o 객체 사용하는 다른 코드에 영향 준다
console.log(o);

// 07-41
console.log(10 * (2 + 3)); //50
