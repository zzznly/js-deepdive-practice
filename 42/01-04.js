// 02
function sleep(func, delay) {
  const delayUntil = Date.now() + delay;

  while (Date.now() < delayUntil);
  func();
}

function foo() {
  console.log("foo"); // foo
}

function bar() {
  console.log("bar"); // bar
}

sleep(foo, 3 * 1000);
// bar 함수는 sleep 함수의 실행이 종료된 이후에 호출되므로, 3초 이상 블로킹!
bar(); // (3초 이상 경과 후) foo 호출 -> bar 호출

// => 이처럼 현재 실행 중인 태스크가 종료될때까지 다음 태스크가 대기하는 방식이 동기처리!

// 03 - 위 예제를 setTimeout 사용하여 수정
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

// 타이머 함수 setTimeout은 일정 시간 경과후 콜백함수 foo 호출
// 타이머 함수 setTimeout은 bar 함수를 블로킹하지 않는다. (비동기)
setTimeout(foo, 3 * 1000);
bar();
// => bar 호출 -> 3초 후 foo 호출

// 04 - 이벤트 루프
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

setTimeout(foo, 0); // 0초(실제는 4ms) 후에 foo 함수가 호출된다.
bar();
