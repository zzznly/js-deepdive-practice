// # 프로미스와 에러 핸들링
fetch("/article/promise-chaining/user.json")
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(
    githubUser =>
      new Promise((resolve, reject) => {
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch(error => alert(error.message));

// 위 코드의 프라미스 중 하나라도 거부되면 .catch에서 에러 잡음

// # 암시적 try...catch
// 프로미스 executor 와 프로미스 핸들러 코드 주위에는 보이지 않는 (암시적) try catch 가 있다
// ==> 예외 발생시 try ... catch 에서 예외를 잡고 이를 reject 처럼 다룬다
new Promise((resolve, reject) => {
  throw new Error("에러 발생");
}).catch(alert); // Error: 에러 발생!

new Promise((resolve, reject) => {
  reject(new Error("에러 발생!"));
}).catch(alert); // Error: 에러 발생!

// ==> 위의 코드와 아래의 코드는 동일하게 동작한다
// executor 주의의 암시적 try catch가 스스로 에러를 잡고, 에러를 거부상태의 프로미스로 변경시킨다.

// 이러한 현상은 핸들러에서도 동일하다.
// then 핸들러 안에서 throw 를 사용해 에러를 던지면, 이 자체가 거부된 프로미스를 의미하게 된다.
// 따라서 제어 흐름이 가장 가까운 에러 핸들러로 넘어간다.
new Promise((resolve, reject) => {
  resolve("OK");
})
  .then(result => {
    throw new Error("에러 발생"); // 거부된 프라미스
  })
  .catch(alert); // Error: 에러 발생

new Promise((resolve, reject) => {
  resolve("OK");
})
  .then(result => {
    blabla(); // 존재하지 않는 함수
  })
  .catch(alert); // ReferenceError: blabla is not defined
// 마지막 .catch 는 명시적인 거부뿐만 아니라 핸들러 위쪽에서 발생한 비정상 에러 또한 잡는다

// # 다시 던지기
// 일반 try ... catch 에서는 처리할 수 없는 에러라 판단되면 에러를 다시 던질때가 있다.
// 프로미스로도 유사한 일을 할 수 있다.
new Promise((resolve, reject) => {
  throw new Error("에러 발생!");
})
  .catch(function (error) {
    // (*)

    if (error instanceof URIError) {
      // 에러 처리
    } else {
      alert("처리할 수 없는 에러");

      throw error; // 에러 다시 던지기
    }
  })
  .then(function () {
    /* 여기는 실행되지 않습니다. */
  })
  .catch(error => {
    // (**)

    alert(`알 수 없는 에러가 발생함: ${error}`);
    // 반환값이 없음 => 실행이 계속됨
  });
// (*) ==> (**) 로 실행 흐름 이동
