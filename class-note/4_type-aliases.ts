/** 타입 별칭 코드, 타입에 변수이름줘서 그 변수 이름으로 사용하기 */

/** interface */
// interface Person {
//     name : string;
//     age : number;
// }

/** Type */
type Person = {
    name : string;
    age : number;
}

let seho : Person = {
    name : 'seho',
    age : 25
}
/** interface를 이용했을 때
 * '{}' 형식에 'Person' 형식의 name, age 속성이 없습니다.
 */

/** Type 별칭을 사용했을 때
 * type Person = {
    name: string;
    age: string;
}
타입에 대한 모습을 바로 볼 수 있다.
 */

type Mystring = string;
let str : Mystring = 'hello'

type Todo = {id:string, title:string, done:boolean}
function getTodo(Todo : Todo) {

}

/**
 *function getTodo({id:string, title:string, done:boolean}) {
    // 이렇게 넣게 되면 코드가 길어지고 가독성이 떨어짐.
} 
 */