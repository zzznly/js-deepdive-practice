// # 콜백
function loadScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
}

loadScript("my/script.js"); // script.js 내부에 function newFunction() {...} 존재
// 아래 코드 ...

newFunction(); // 에러: 함수가 존재하지 않는다!

// 브라우저가 스크립트 읽어올 시간을 충분히 확보하지 못했기 때문에 에러가 발생한다.
// 하지만 현재로서는 loadScript 에서 스크립트 로딩 완료 여부 알수없다.

// => 그래서 스크립트 로딩 끝난후 실행될 콜백함수를 loadScript의 두번째 인자로 추가해본다
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script); // script 로드된후 callback 실행
  document.head.append(script);
}

loadScript("https://...js", script => {
  alert(`${script.src}가 로드되었습니다`);
  alert(_);
});

// # 콜백 속 콜백
// 스크립트가 여러 개 있는 경우, 어떻게 해야 순차적으로 불러올 수 있을까?
loadScript("/my/script.js", function (script) {
  alert(`${script.src}을 로딩했습니다. 이제 다음 스크립트를 로딩합시다.`);

  loadScript("/my/script2.js", function (script) {
    alert("두번째 스크립트 로딩 성공");

    loadScript("/my/script3.js", function (script) {
      alert("세번째 스크립트 로딩 성공");

      // ...
    });
  });
});

// # 에러 핸들링
// loadScript 함수 에러 추적 가능하게 개선 :
// 스크립트 로딩에 성공하면 callback(null, script)을, 실패하면 callback(error)을 호출
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`${src}를 불러오던중 에러 발생`));

  document.head.append(script);
}

// 개선된 loadScript 사용법
loadScript("/my/script.js", function (error, script) {
  if (error) {
    // 에러 처리
  } else {
    // 스크립트 로딩이 성공적으로 끝남
  }
});

// # 멸망의 피라미드 - 연속된 비동기동작이 많아질경우...
loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript("3.js", function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });
      }
    });
  }
});

// => 독립적 함수로 완화
loadScript("1.js", step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("3.js", step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
  }
}
loadScript("1.js", step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("3.js", step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // 모든 스크립트가 로딩되면 다른 동작을 수행합니다. (*)
  }
}

// => 멸망의 피라미드 (콜백 헬)을 피하는 가장 좋은 방법은 Promise를 사용하는 것이다! **
