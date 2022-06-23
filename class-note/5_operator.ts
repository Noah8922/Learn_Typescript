// 연산자를 이용한 타입 정의
// Union Type (유니온 타입)

/** 유니온 타입 안쓴경우 */
function logMessage(value : string) {
    console.log(value);
}
logMessage("hello")
/** logMessage(100) // string이 아니기 때문에 에러남 */

/** 유니온 타입 쓴경우 */
/** 파라미터에 한가지 이상의 타입을 쓰고 싶을 때 사용 */
let seho : string | number | boolean;
function showmessage(value : string | number) {
    console.log(value)
}
showmessage('hello')
showmessage(100)

/** 유니온 타입의 장점 */
/** 타입에 따른 API들을 바로 사용 할 수 있다. */
/** 타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정 */

function filterType(value : string | number) {
    if (typeof value === 'string') {
        value.toString()
    }
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    throw new TypeError('Type must be string or number')
}