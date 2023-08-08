let promise = new Promise(function (resolve, reject) {
  // executor - Promise 에 전달되는 함수
  // 결과를 즉시 얻든 늦게 얻든 인수로 넘겨준 콜백 resolve, reject 중 하나 반드시 호출해야함
});

// fulfilled promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료"), 1000);
});

// rejected promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("에러 발생")), 1000);
});

// # 후속처리 메서드 - then, catch, finally

// # then()
promise.then(
  function (result) {
    // resolve() - 결과(result)를 다룸
  },
  function (error) {
    // reject() - 에러(error)를 다룸
  }
);

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료"), 1000);
});
// resolve 함수는 then의 첫번째 인수(함수) 실행
promise.then(
  result => alert(result), // 1초 후 완료 출력
  error => alert(error) // 실행되지 않음
);

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("에러 발생")), 1000);
});
// reject 함수는 then의 두번째 인수(함수) 실행
promise.then(
  result => alert(result), // 실행되지 않음
  error => alert(error) // 1초 후 "Error: 에러 발생" 을 출력
);

let promise = new Promise(resolve => {
  setTimeout(() => resolve("완료"), 1000);
});
// 작업이 성공적으로 처리된 경우만 다루고 싶다면 .then에 인수를 하나만 전달
promise.then(alert);

// # catch()
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("에러 발생")), 1000);
});
// .catch(f)는 promise.then(null, f)과 동일하게 작동!
promise.catch(alert);

// # finally() - 결과가 어떻든 마무리 필요할때
new Promise((resolve, reject) => {
  // 시간이 걸리는 어떤 일 수행하고, 그후 resolve, reject 호출
})
  .finally(() => console.log("로딩 중지"))
  .then(result => console.log("result 와 err 보여줌 => err 보여줌"));

/*
    1. finally 핸들러엔 인수가 없습니다. finally에선 프라미스가 이행되었는지, 거부되었는지 알 수 없습니다.
        finally에선 절차를 마무리하는 ‘보편적’ 동작을 수행하기 때문에 성공·실패 여부를 몰라도 됩니다.
    2. finally 핸들러는 자동으로 다음 핸들러에 결과와 에러를 전달합니다.
*/

new Promise((resolve, reject) => {
  setTimeout(() => resolve("결과"), 2000);
})
  .finally(() => alert("프라미스가 준비되었습니다."))
  .then(result => alert(result)); // <-- .then에서 result를 다룰 수

new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .finally(() => alert("프라미스가 준비되었습니다."))
  .catch(err => alert(err)); // <-- .catch에서 에러 객체를 다룰 수 있음
