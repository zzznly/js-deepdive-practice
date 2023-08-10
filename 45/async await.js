// # async 와 await

// # async 함수
// function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환한다
// 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환되도록 한다

async function f() {
  return 1;
}
f().then(alert); // 1

// 명시적으로 프라미스를 반환하는것도 가능하다. 결과는 동일
async function f() {
  return Promise.resolve(1);
}
f().then(alert); // 1

// # await
let value = await promise;
// 자바스크립트는 await 키워드를 만나면 프라미스가 처리될 때까지 기다린다.

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료"), 1000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result);
}

f(); // 1초 후 "완료" 출력
// 함수 호출 -> (*) 지점에서 실행 잠시 중단 -> 프로미스 처리후 실행 재개 (프로미스 객체의 result값이 변수 result 에 할당)

/*
await는 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법이다.
promise.then보다 가독성 좋고 쓰기도 쉽습니다.
*/

// async 클래스 메서드
class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter().wait().then(alert); // 1

// # 에러 핸들링
// 프라미스가 정상적으로 이행되면 await promise는 프라미스 객체의 result에 저장된 값을 반환한다
// 반면 프라미스가 거부되면 마치 throw문을 작성한 것처럼 에러가 던져진다

async function f() {
  await Promise.reject(new Error("에러"));
}

async function f() {
  throw new Error("에러");
}

// ==> 위, 아래 코드는 동일하게 동작한다.

// await가 던진 에러는 throw가 던진 에러 잡을때처럼 try catch 사용 가능
async function f() {
  try {
    let response = await fetch("http://유효하지-않은-주소");
    let user = await response.json();
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();

async function f() {
  let response = await fetch("http://유효하지-않은-주소");
}
f().catch(alert); // TypeError: failed to fetch // (*)

// async/await 는 Promise.all 과도 함께 쓸 수 있다 (여러 개의 프라미스가 모두 처리되길 기다려야 하는 상황)
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3),
  fetch(url4),
  // ...
]);

/*
****** 요약 ******
function 앞에 async 키워드를 추가하면

1. 함수는 언제나 프라미스를 반환
2. 함수 안에서 await를 사용가능

프라미스 앞에 await 키워드를 붙이면 자바스크립트는 프라미스가 처리될 때까지 대기함. 처리가 완료되면 조건에 따라 아래와 같은 동작이 이어진다
1. 에러 발생 – 예외가 생성됨(에러가 발생한 장소에서 throw error를 호출한 것과 동일함)
2. 에러 미발생 – 프라미스 객체의 result 값을 반환

async/await를 사용하면 promise.then/catch가 거의 필요 없음
하지만 가끔 가장 바깥 스코프에서 비동기 처리가 필요할 때같이 promise.then/catch를 써야만 하는 경우가 생기기 때문에, async/await가 프라미스 기반이라는 것을 알아야함
여러 작업이 있고, 이 작업들이 모두 완료될 때까지 기다리려면 Promise.all을 활용할 수 있다는 점도 알아두자
*/
