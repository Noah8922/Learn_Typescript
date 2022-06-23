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

// 함수의 스펙(구조)에 인터페이스를 활용
// 미리 큰 틀을 만들어 놓고 그 안에 맞추는 방향으로 먼저 만들어 놓는 것.
interface sumFunction {
    (a:number, b:number) : number
}

let sum : sumFunction;
sum = function(a:number, b:number) :number {
    return a+b;
}

// 인터페이스의 인덱싱 : 원래는 속성을 주고 타입을 정의했다면, 속성이름은 정해져 있지 않고 임의로 그 이름을 부여하여 사용하는 방식.
interface StringArray {
    [index : number] :string // 왼쪽에 들어오는 속성의 이름을 index라고 하겠다. index는 숫자이고 반환되는 값은 문자열이다.
}

let arr = ['a','b','c']
//arr[0] = 10; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key:string] : RegExp
}

let obj : StringRegexDictionary = {
    // sth : /abc/,
    //cssFile : 'css'
    cssFile : /\.css$/,
    jsFile : /\.js$/,
}

// obj['cssFile'] ='a' // 'string' 형식은 'RegExp' 형식에 할당할 수 없습니다.

Object.keys(obj).forEach((value) => {})

// 인터페이스 확장 (상속) : 인터페이스를 상속받아 기존에 있었던 더 확장해서 사용할 수 있는 것. 
interface Person {
    name : string;
    age : number;
}

interface Developer extends Person {
    language : string;
}

// Developer가 가지고 있는 속성을 다른 인터페이스에서도 갖고 있다고 하면, 갖고 있는 속성과 타입을 상속 받아 확장할 수 있다.

let newB :Developer = {
    language : 'TS',
    name : 'Noah',
    age : 100
}
