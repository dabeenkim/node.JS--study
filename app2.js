const jwt = require("jsonwebtoken");

const payloadData = {
    myPayloadData: 1234
}

//jwt 생성
const token = jwt.sign(payloadData, "mysecretKey");
console.log(token)

//jwt의 payload 데이터를 복호화(아날로그 신호를 디지털단위로 변경한것을 부호화라고 하는데 그걸 다시 되돌리는것을 복호화라고함)
const decodedValue = jwt.decode(token);
console.log("복호화한 token입니다.", decodedValue)

//jwt를 만들었을 때 사용한 비밀키가 일치하는지 검증
const decodedValueByVerify = jwt.verify(token, "mysecretKey");
console.log("decodedValueByBerify:",  decodedValueByVerify)

//jwt를 만들었을 때 사용한 비밀키가 일치하는지 검증을 하지만 에러발생
const decodedValueByVerifytoError = jwt.verify(token, "다른비밀키");
console.log("decodedValueByVerifytoError:",  decodedValueByVerifytoError)  //invalid signature 입력값이 시그니쳐에 일치하지않는다