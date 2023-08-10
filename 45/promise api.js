// # Promise 클래스의 5가지 정적 메서드

// # Promise.all
// 요소 전체가 프라미스인 배열을 받고 새로운 프라미스를 반환한다.
let promise = Promise.all([...promises /* ... */]);

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1)), 3000), // 1
  new Promise(resolve => setTimeout(() => resolve(1)), 3000), // 2
  new Promise(resolve => setTimeout(() => resolve(1)), 3000), // 3
]).then(alert);
// 프라미스 전체가 처리되면 result 배열 [1,2,3] 반환. 각 프라미스는 배열을 구성하는 요소가 된다.
// result 의 요소 순서는 Promise.all 에 전달되는 프로미스 순서와 상응한다.***
// 첫번째 프라미스가 가장 늦게 이행되더라도 첫번째 요소로 저장됨!

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/Violet-Bora-Lee",
  "https://api.github.com/users/jeresig",
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => {
    // 모든 응답이 성공적으로 이행되었습니다.
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // 모든 url의 응답코드가 200입니다.
    }

    return responses;
  })
  // 응답 메시지가 담긴 배열을 response.json()로 매핑해, 내용을 읽습니다.
  .then(responses => Promise.all(responses.map(r => r.json())))
  // JSON 형태의 응답 메시지는 파싱 되어 배열 'users'에 저장됩니다.
  .then(users => users.forEach(user => alert(user.name)));

//

let names = ["iliakan", "Violet-Bora-Lee", "jeresig"];

let requestArr = names.map(name =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requestArr)
  .then(responses => {
    // 모든 응답이 성공적으로 이행되었습니다.
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // 모든 url의 응답코드가 200입니다.
    }

    return responses;
  })
  // 응답 메시지가 담긴 배열을 response.json()로 매핑해, 내용을 읽습니다.
  .then(responses => Promise.all(responses.map(r => r.json())))
  // JSON 형태의 응답 메시지는 파싱 되어 배열 'users'에 저장됩니다.
  .then(users => users.forEach(user => alert(user.name)));

// Promise.all에 전달되는 프라미스 중 하나라도 거부되면, Promise.all이 반환하는 프라미스는 에러와 함께 바로 거부된다
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("에러 발생!")), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert); // Error: 에러 발생!

// # Promise.allSettled
// Promise.all은 프라미스가 하나라도 거절되면 전체를 거절해서 모 아니면 도 일때 유용하지만,
// ** Promise.allSettled는 모든 프라미스가 처리될 때까지 기다린다. 반환되는 배열은 다음과 같은 요소를 갖는다
// - 응답이 성공할 경우 : {status:"fulfilled", value:result}
// - 에러가 발생한 경우 : {status:"rejected", reason:error}

// fetch를 사용해 여러 사람의 정보를 가져오고 있을 때, 여러 요청 중 하나가 실패해도 다른 요청 결과는 여전히 필요하다
// ==> 이럴 때 Promise.allSettled 를 사용할 수 있다.

let urls2 = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/Violet-Bora-Lee",
  "https://no-such-url",
];

Promise.allSettled(urls2.map(url => fetch(url))).then(results => {
  // results =>
  // [
  //   {status: 'fulfilled', value: ...응답...},
  //   {status: 'fulfilled', value: ...응답...},
  //   {status: 'rejected', reason: ...에러 객체...}
  // ]
  results.forEach((result, num) => {
    if (result.status === "fulfilled") {
      alert(`${urls2[num]}: ${result.value.status}`);
    }
    if (result.status === "rejected") {
      alert(`${urls2[num]}: ${result.reason}`);
    }
  });
});

// # Promise.race === 경주의 승자 한명만 반환!
// Promise.race는 Promise.all과 비슷합니다. 다만 가장 먼저 처리되는 프라미스의 결과(혹은 에러)를 반환합니다.
let promise = Promise.race(iterable);

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("에러 발생")))
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert); // 1

// # Promise.resolve 와 Promise.reject
// async await 문법이 생긴 이후로 거의 쓸모 없어짐...

// # Promise.resolve
// Promise.resolve는 호환성을 위해 함수가 프라미스를 반환하도록 해야 할 때 사용
let promise = new Promise(resolve => resolve(value));

// Promise.resolve 를 반환해야하는 경우의 예시
// 1. 프로미스 체이닝 중간에 값 반환하는 경우
function fetchData() {
  return fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
      if (data.isValid) {
        return Promise.resolve(data);
      } else {
        return Promise.reject(new Error("Invalid data"));
      }
    });
}

// 2. 비동기 함수 내에서 간단한 값을 프로미스로 감싸는 경우
async function getUserData(userId) {
  const user = await fetchUserDataFromAPI(userId);
  return Promise.resolve(user);
}

// 3. 비동기 함수에서 조건부로 프로미스 반환하는 경우
async function processData(data) {
  if (isValid(data)) {
    return Promise.resolve(transform(data));
  } else {
    return Promise.resolve(defaultValue);
  }
}

// 4. 병렬 작업을 수행하고 모든 작업이 완료될때까지 기다리는 경우
async function performParallelTasks(tasks) {
  const taskPromises = tasks.map(task => doAsyncTask(task));
  return Promise.all(taskPromises);
}

// 5. 프로미스를 반환해야하지만 추가적인 비동기 작업이 필요한 경우
function fetchAndProcessData() {
  return fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => processData(data))
    .then(result => {
      // Do something with the processed result
      return Promise.resolve(result);
    });
}

// # Promise.reject
// Promise.reject(error)는 결괏값이 error인 거부 상태 프라미스를 생성
let promise = new Promise((resolve, reject) => reject(error));
// ==> 실무에서 이 메서드를 쓸 일은 거의 없다
