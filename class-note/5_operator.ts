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

interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

// 유니온 타입 - or Type, 공통된 속성만 사용이 가능하다. 둘중에 한 타입만 만족시키면 된다.
function askSomeone(someone : Developer | Person) {
    // someone.name
}

askSomeone({name: '디벨로퍼', skill:'웹 개발'})
askSomeone({name: '캡틴',age:100})

// intersection type, 모든 속성을 모두 사용 가능하다. 두 타입 모두를 만족시켜야 한다.
function pickSomeone(someone : Developer & Person) {
    // someone.age;
    // someone.name;
    // someone.skill;
}
// pickSomeone({name:'디벨로퍼', skill:'웹 개발'})
// 에러 발생
// 이렇게 작성하면 Developer는 만족시키지만 Person은 만족시키지 못한다.
// '{ name: string; skill: string; }' 형식의 인수는 'Developer & Person' 형식의 매개 변수에 할당될 수 없습니다. 'age' 속성이 '{ name: string; skill: string; }' 형식에 없지만 'Person' 형식에서 필수입니다.
// 실무에서는 유니온에서 더 많이 사용한다. 왜?
// 유니온 타입과 인터섹션 타입의 차이점

