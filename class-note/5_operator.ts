// 연산자를 이용한 타입 정의
// Union Type (유니온 타입)

/** 유니온 타입 안쓴경우 */
function logMessage(value : string) {
    console.log(value);
}
logMessage("hello")
/** logMessage(100) // string이 아니기 때문에 에러남 */

/** 유니온 타입 쓴경우 */
function showmessage(value : string | number) {
    console.log(value)
}
showmessage('hello')
showmessage(100)
