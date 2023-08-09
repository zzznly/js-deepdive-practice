// # 프로미스 체이닝
// 순차적인 작업 처리

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result); // 1
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result * 2;
  });

// # 프로미스 반환하기
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result); // 1

    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(result * 2), 1000)
    );
  })
  .then(function (result) {
    alert(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    alert(result); // 4
  });

// # loadScript 예제 개선
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("error"));

    document.head.append(script);
  });
}

loadScript("/article/promise-chaining/one.js")
  .then(function (script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function (script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function (script) {
    // 불러온 스크립트 안에 정의된 함수를 호출해 실제로 스크립트들이 정상 로드되었는지 확인
    one();
    two();
    three();
  });

loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/one.js"))
  .then(script => loadScript("/article/promise-chaining/one.js"))
  .then(script => {
    // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출 가능
    one();
    two();
    three();
  });

// # fetch 체이닝 응용하기
let promise = fetch(url);

fetch("/article/promise-chaining/user.json")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    alert(text); // {"name": "Violet-Bora-Lee", "isAdmin": true}
  });

fetch("/article/promise-chaining/user.json")
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); // **
    }, 3000);
  });

// => 재사용 가능한 함수 단위로 분리
function loadJson(url) {
  return fetch(url).then(response => response.json());
}

function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`).then(response =>
    response.json()
  );
}

function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

// 함수를 이용하여 다시 동일 작업 수행
loadJson("/article/promise-chaining/user.json")
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
// ...

// # 과제
// 두 코드는 동일하게 동작할까요? => 다르게 동작한다!

promise.then(f1).catch(f2); // f1에서 에러가 발생하면 아래 코드에서는 .catch에서 에러가 처리

promise.then(f1, f2); // 에러 처리 못함

// ==> 첫 번째 코드엔 catch가 있지만 두 번째 코드엔 이어지는 체인이 전혀 없기 때문에 에러가 발생한 경우 이 에러를 처리하지 못한다
