//파라미터에 타입을 정의해 줄수 있다.
// function sum(a:number,b:number) {
//     return a+b
// }

sum(1.,20) //마우스 호버시 sum(a: number, b: number): number <- VS자체적으로 숫자를 더해서 리턴을 하게 되면 숫자가 될 것이라고 말해주는 것

//함수의 반환값에 타입을 정의하는 방식
function add() : number {
    return 10
}

// 함수의 타입을 정의하는 방식 정리
function sum(a:number,b:number): number {
    return a+b
}

sum(10,20) //이상적인 상태, 파라미터가 적어도 안되고 많아도 안됨.
// sum(10,20,30,40) 
// 오류가 나는 상태 : 2개의 인수가 필요한데 4개를 가져왔습니다.

//함수의 옵셔널 파라미, 인자의 개수를 자유롭게 하고 싶을 때, 필요에 따라 인자를 넘길수도 있고 아닐수도 있다.
function log(a:string, b?:string) {

}
log("asd")
log('asd', "asd")
