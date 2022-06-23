/** 인터페이스 : 상호간의 약속 */
interface User {
    age : number;
    name : string;
}

// 변수에 인터페이스 활용
let seho:User = {
    /** seho라는 변수는 User라는 인터페이스 타입으로 정의 되었다. */
    age : 33,
    name : '세호'
}

// 함수에 인터페이스 활용
function getUser(user:User) {
    console.log(user);
}

const capt = {
    name : "capt",
    age : 100
}

getUser(capt)