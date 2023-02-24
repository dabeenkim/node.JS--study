Express.js

Node.js로 서버를 빠르고 간편하게 만들 수 있게 도와주는 웹 프레임워크

웹서버와의 차이점은 Express.js는 웹서버 자체가 아닌 Node.js를 위한 웹 프레임워크로

웹서버를 구현하기 위해 사용되는 것이 Express.js 프레임워크다

 

포트가 사용중이라 실행이 되지않을때 해결법
netstat이란 명령어를 통해서 현재 컴퓨터와 연결된 네트워크 정보를 확인 할수 있다.

여기서 포트정보를 가져와서 

cmd창을 열어 " netstat -ano | find 원하는 포트번호 " 를 찾고

해당 포트를 사용하는 PID를 찾아서 종료시킨다

taskkill /f /pid 포트번호

 

API Client

개발단계에서 우리가 작성한 API의 요청을 확인하거나 테스팅할 때 도움을 주는 툴
API Client를 사용함으로써 개발 속도를 높이거나 치명적인 에러를 예방하는데 도움을 받을 수 있다.
Postman, Insomnia 등 여러 API Client가 있지만 이번에는 Thunder Client를 사용
Routing, Router

Routing은 클라이언트의 요청조건(메서드 , 주소등)에 대응해 응답하는 방식

Router는 클라이언트의 요청을 쉽게 처리 할 수 있게 도와주는 Express.js기본 기능중 하나

일반적인 Router의 구조

router.METHOD{PATH, HANDLER);
router : express의 라우터를 정의하기 위해 사용한다
METHOD : HTTP Method를 나타낸다.(ex: get, post, put, delete ...)
PATH : 실제 서버에서 API를 사용하기 위한 경로를 나타낸다.
HANDLER : 라우트가 일치할 때 실행되는 함수
Router사용

router폴더를 생성해 goods.js 파일을 생성
express에서 제공되는 Router함수를 사용해 Router를 생성한다.

```
// routes/goods.js

const express = require('express');
const router = express.Router();


예시의 엔드포인트
// routes/goods.js

// localhost:3000/api/ GET
router.get("/", (req, res) => {
  res.send("default url for goods.js GET Method");
});

// localhost:3000/api/about GET
router.get("/about", (req, res) => {
  res.send("goods.js about PATH");
});


작성한 Router를 app.js에서 사용하기 위해 하단에 내보내주는 코드를 작성

// routes/goods.js

module.exports = router;

Router 미들웨어를 사용하기위해 작성

// app.js

const goodsRouter = require("./routes/goods");

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);
http://localhost:3000/뒤에 /api로 시작되는 주소는 routes/goods.js에 있는 Router미들웨어를 통해 처리된다
```
 

미들웨어(Middle ware)

웹 서버에서 요청을 받을때 모든 요청에 대해 공통적인 처리를 하고싶을 경우에 사용한다.

미들웨어를 사용하여 웹서버의 요청/응답에 대해 공통적으로 관리가 가능하다.

위의 app.use에서 use를 통해서 전역으로 사용할때 등록이 가능하다.

 

app.use("api", [goodsRouter, userRouter]);

두개이상의 js파일을 가져오려면 배열처럼 작성할 수 있다.

 

module의 이해

Module은 분리된 자바스크립트 파일이고 각 파일은 특정한 기능을 가진 여러 개의 함수와 변수들의 집합이다.
Module을 만들면 다른 프로그램에서 해당 모듈을 재사용 할 수 있다.
그 자체로도 하나의 프로그램이면서 다른 프로그램의 부품으로도 사용할 수 있다.
보통 1개의 파일이 1개의 모듈이 된다.
Module사용법

export 명령어를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근할 수 있다.
import, require 명령어를 사용하면 외부 모듈의 기능을 가져올 수 있다.
import, require 구분방법
자바스크립트는 대표적으로 COMMONJS, ES6(ES2015)방식으로 모듈 시스템을 관리한다.
- require는 현재 학습하고 있는 CommonJS로 모듈 시스템을 관리할때 사용
- import는 ES6(ES2015)로 모듈시스템을 관리할 때 사용
modules.exports를 사용할 때에는 add라는 함수 자체를 바로 내 보내줄 수 있다.

 

exports.add를 하게되면 객체로 밖으로 내보내준다.

 
```
//math.js


function add(a, b) {
	return a+ b;
}

module.exports = add;
//module.exports = add를 통해서 내보냈더니 


//run.js

//const add함수를 가지고 오게된다.
//require을 사용해서 상대경로("./")로 가져오기때문에
//현재폴더인 run.js의 상위폴더인 modules폴더의 위치에서 math.js를 가져오게된다.
const add = require("./math.js");

//콘솔로그로 add함수를 실행하고 그 안에 값을 10, 30을 넣어준다.
console.log(add(10, 30));  //40

-------------------------------------------------------------------------------------
//함수 하나하나를 밖으로 내보내주는 식으로 구현
// module.exports로도 하나씩 보내줄 수 있긴하지만 export로 해봣다.

//math.js

//익명함수를 통해서 내보내줄 수 있게된다.
export.add = function(a, b) {
	return a + b; 
}

//원래 위에서 썻던 run파일을 그대로 쓸려고하면 실행이안된다.
//exports.add로 보내주게되면 함수가 아닌 객체로 보내주게된다.

//run.js

const add = require("./math.js");
console.log(add.add(10, 30));

//위처럼 add.add()로 써야 사용을 할 수 있게된다.

//객체구조분해할당
//run.js

const {add} = require("./math.js");

console.log(add(10, 30));
```

Request와 Response

 

Request란 클라이언트가 서버에게 전달하려는 정보나 메시지를 담는 객체(req)

Reponse란 서버에서 클라이언트로 응답 메시지를 전송시켜주는 객체(res)

 

서버 모듈

Node.js 의 서버모듈에는 대표적으로 http모듈과 Express모듈이 존재한다.
Express모듈은 http 모듈을 확장하여 제공
기존 http 모듈의 메서드도 사용할 수 있지만 Express에서 추가제공하는 메소드나 속성들을 사용할 수 있다.
req객체

req.body: Request를 호출할 때 body로 전달된 정보가 담긴 객체
express.json() Middleware를 이용하여야 해당 객체를 사용할 수 있습니다.
req.params: 라우터 매개 변수에 대한 정보가 담긴 객체
req.query: Request를 호출할 때 쿼리 스트링으로 전달된 정보가 담긴 객체 ★
req.cookies: Request를 호출할 때 Cookie 정보가 담긴 객체.
cookie-parser Middleware를 이용하여야 해당 객체를 사용할 수 있다
res객체

res.status(코드) : Response에 HTTP 상태 코드를 지정
res.send(데이터) : 데이터를 포함하여 Response를 전달
res.json(JSON) : JSON 형식으로 Response를 전달 ★
자바스크립트 개체 형식처럼 사용하는 파일형식
API와 REST API의 개념

API
어플리케이션끼리 연결해주는 매개체이자 약속
API를 작성한다는 의미
- 웹 어플리케이션(프론트엔드)에서 원하는 기능을 수행하는 URL과 인터페이스를 제공한다는 의미
- 원하는 데이터를 받아 데이터베이스에 데이터를 저장하고 저장되어있는 데이터를 읽어서 우베 어플리케이션
   (프론트엔드)에 데이터를 제공하는 행위를 통해 사용자가 원하는 목적을 이루게 해야함
REST API는 어떤 의미를 갖는가
- REST(Representational State Transfer)는 월드 와이드 웹같은 분산 하이퍼미디어 시스템을 위한
소프트웨어 아키텍쳐의 한 형식이다.
- URL, Header, Method 등 네트워크 표현 수단을 사람이 봐도 이해하기 쉬운 표현으로 정의
- REST아키텍쳐는 사람이 봐도 쉽게 이해할 수 있도록 자원을 정의하고 이 자원을 중심으로 표현을 구성하는 원칙을 제시함

REST API는 REST 아키텍쳐라는 규칙을 따르는  API이다.

 

REST API의 구성

자원(Resource) - URL
우리가 만들 소프트웨어가 관리하는 모든 것을 자원으로 표현할 수 있다.
행위 -HTTP method
GET, POST등등으로 해당 자원에 대한 행위를 표현할 수 있다. GET 메소드는 해당 자원의 조회
POST 메소드는 해당 자원의 생성
이렇게 나누어진 것들을 보통 CRUD라고 한다. 자원의 생성/조회/수정/삭제를 메소드로 나눠놓은것
 
Create : 생성(POST)
Read : 조회(GET)
Update : 수정(PUT),(PATCH)
Delete : 삭제(DELETE)

 

표현

해당 자원을 어떻게 표현할지에 대한 설명
보통 JSON, XML같은 형식을 이용해서 자원을 표현함

HTTP에서는 Content-Type 이라는 헤더를 통해 표현 방법을 서술한다.
