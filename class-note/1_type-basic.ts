//JS 문자열 선언 방식
// var str = 'hello'

//TS 문자열 선언
let str:string = 'hello' // str이라고 하는 변수는 문자열 타입으로 간주하겠다.

//TS 숫자
let num:number = 10

//TS 배열
let arr:Array<number> = [1,2,3] // arr은 배열 타입이고 안에 number만 들어갈 수 있다.
let items : number[] = [1,2,3] // 위와 같은 말임,좀더 편한 방법
let heroes:Array<string> = ['Capt', 'Thor', "Hulk", '10'] //숫자 10일경우 에러 표시 됨

//TS 튜플, 배열의 특정 순서에서 순서의 타입까지 정의 하는 것
let address : string[] = ['gangnam', 'pangyo']
let position : [string, number] = ['gangnam', 123] 

//TS 객체
let obj:object = {}
// 기본적인 객체 선언 방법
let person : object = {
    name : 'capt',
    age : 100   
}
// 객체를 구체적으로 정의하고 싶을 때 쓰는 방법
let people : {name : string, age : number} = {
    name : 'thor',
    age : 1000
}

// TS 진위값
let show : boolean = true;