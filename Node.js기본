자바스크립트

동적인 것들을 만들기 위해 나온것

 

V8엔진

구글에서 만든것으로 기존에 자바스크립트가 브라우저 내에서만 작동하던것을

브라우저가 없어도 작동하도록 만든것이다.

 

Node.js

자바스크립트가 브라우저없이 컴퓨터에서 돌아가게 만들어주는 환경

논 블로킹(Non-blocking) I/O, 싱글 쓰레드(Single Thread), 이벤트루프(Event Loop)의 특성이있다.

 

논블로킹 : 함수가 실행되는 중에도 다른 작업을 동시에 진행할 수 있는 장점이있다.
비동기 작업을 할 때 더 효율적으로 할 수 있는 특성이다.
싱글 쓰레드 : 쓰레드 하나를 사용하는것으로 동시에 하나의 작업만을 할 수 있다.
->쓰레드란 프로그램이 동작할 때 CPU 또는 프로세서를 사용하는 단위이다
일반적으론 1개의 프로그램은 1개의 쓰레드만 사용가능하다.
이벤트루프 : 자바스크립트가 가지고 있던 싱글 쓰레드의 약점을 극복하고 효율적으로 작업하기 위해 나온 특성
REPL

입력받은 코드를 읽어(Read)들여 메모리를 저장하고 평가(Evaluate)된 값을 출력(Print)한다.

특정 신호를 받기 전까지 위과정을 반복(Loop)한다

비주얼스튜디오에서 터미널을 이용하면 디버깅을 하는데 도움이된다.

동기(Sync) & 비동기(Async)

 

동기
먼저 실행된 코드의 결과가 나올때까지 대기하는 것을 만한다.
비동기
실행된 순서와 관계없이 결과가 나오는 것을 만한다.
Blocking Model & Non-Blocking Model

Blocking Model
코드의 실행이 끝나기 전까지 실행 제어권을 다른곳에 넘기지 않아 다른 작업을 하지 못하고 대기하는것
Non-Blocking Model
코드의 실행이 끝나지 않아도 실행 제어권을 다른곳에 넘겨 다음 코드가 실행될 수 있는 것
동기, 비동기와 차이
제어권을 넘기면 (Non-blocking)다른 코드도 실행될 수 있으므로 비동기 처리가 가능
제어권을 넘기지않으면(Blocking)비동기 처리가 가능한 환경이어도 비동기 처리가 불가능
자바스크립트는 Async + Non-blocking Model을 채용해 현재 실행중인 코드가 끝나지 않아도 다음 코드를 호출
자바스크립트는 각 명령들이 순서대로 실행될 수 있긴 하지만 Non-blocking Model에 의해 명령이 아닌
모든 함수는 비동기적으로 실행된다.
Promise

 executor

함수만 올 수 있으며 인자로는 resolve, reject가 주입된다.
Promise의 실행 함수라고 불리고 Promise가 만들어질 때 자동으로 실행된다.
연산을 언제 종료하는지는 상관하지 않고 resolve, reject 중 하나를 무조건 호출한다.
new Promise(executor);

new Promise((resolve, reject) => {
              성공     실패
});
 

생성자(Constructor)

   자바스크립트에서 원시타입(String, Boolean)등을 제외한 대부분의 타입이 객체(Object)로 구성

   일반적으로 객체를 생성하는 함수를 생성자함수라고 부른다.

   Promise도 객체로 구성되어 있기 때문에 생성자 함수를 이용해 선언할 수 있다.

 

Promise의 상태

3가지를 지니며 대기 상태가 아니라면 Promise의 연산이 이미 끝난 상태이다.

대기(Pending) : 이행하거나 거부되지 않은 초기 상태
이행(Fulfilled) : 연산이 성공적으로 완료됨
거부(Rejected) : 연산이 실패함
Promise.then

resolve가 fulfilled상태가 되었을 때 실행되는 구문이다.

Promise.catch

Promise안에서 에러가 throw가 되거나 reject가 실행되면 catch메서드에 작성된 함수가 실행

 

비동기 함수

특징
비동기 함수는 일반 함수나 화살표 함수와 비슷하지만 두가지가 다르다
1. 비동기 함수의 결과 값은 항상 Promise객체로 resolve된다
2. 비동기 함수 안에섬ㄴ await 연산자를 사용할 수 있다.
이 두가지 특징을 제외하면 기존처럼 일반 함수나 화살표 함수처럼 사용할 수 있다. 
// 비동기 일반 함수
async function 함수이름( ) {
// 명령문
}

// 비동기 + 익명 함수
async function ( ) {
// 명령문
}

//비동기 + 화살표 함수
async ( ) => {
//명령문
}
실제 값을 넣은 상태로 보면 이렇게 나온다.

function 함수이름() {
	return Promise.resolve('값');
}

// 위와 아래의 함수는 같은 동작을 보여준다.

async function 함수이름2() {
	return '값';
}

함수이름();
// Print: Promise { '값' }

함수이름2();
// Print: Promise { '값' }
비동기 함수를 사용하는 이유

await 연산자를 비동기 함수 안에서만 사용할 수 있는데 이것을 활용하면 문법이 간결해진다.
new Promise(executor)코드로 Promise를 직접 생성하면 executor가 바로 실행되는것과 달리
비동기 함수는 함수가 실행되기 전까지 Promise를 생성하지 않는다.
await 연산자

await 연산자를 사용하면 Promise가 fulfill상태가 되거나 rejected가 될 때까지 함수의 실행을 중단하고 기다릴수있다.
Promise의 연산이 끝나면 함수에서 반환한 값을 얻을 수 있다.
await 연산자는 async 즉 비동기함수 안에서만 사용이 가능하다.
const result = await 값;


"값" 에는 Promise가 아닌 다른 값도 들어갈 수 있습니다. 아래처럼요!
Promise가 아니라면 기다리지 않고 해당 값 자체를 그대로 반환합니다.


async function 함수이름() {
	const result = await 'Test!';
	console.log(result);
}

함수이름();
// Print: 'Test!';
