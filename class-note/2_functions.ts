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