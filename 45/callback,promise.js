// ** loadScript 예시

// callback 사용
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("error"));

  document.head.append(script);
}

// promise 사용
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("error"));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise.then(
  script => alert(`${script.src}를 불러왔습니다`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert("또다른 핸들러..."));

// # 과제 : 두번 resolve 하기
let promise = new Promise((resolve, reject) => {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1 출력 - 첫번째 resolve/reject만 고려 대상이므로

// # 프라미스로 지연 만들기
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
delay(3000).then(() => alert("3초 후 실행"));
