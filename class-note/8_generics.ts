// function logText(text) {
//     console.log(text);
//     return text
// }

// logText(10)
// logText('하이')
// logText(true)
// 현재 logText의 타입을 정의하지 않았기 때문에, 어떠한 것도 다 들어올 수 있다.

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;    
// }
// logText<string>('하이')

// 타입이 여러가지인 경우 제너릭을 쓰지 않으면 타입마다 함수를 만들어 줘야 한다. 
// 이게 동작상에는 큰 문제는 없지만
// 유지보수 관점에서는 좋지 않다.

function logText(text:string) {
    console.log(text);
    return text
}

function logNumber(number:number) {
    console.log(number);
    return number
}

logText('a') // 이건 가능한데
//logText(10) // 이건 불가능, 이렇게 타입이 달라서 안될떄는 새로운 함수를 만들어 준다. logNumber
logNumber(10) // 이렇게 하면 가능함.

// 근데 이건 유지보수 관점에서 보면 좋지 않음, 단순히 타입이 다르다는 이유로 함수를 중복선언하는 것은 좋지 않음 그래서 유니온 타입으로 작성해 보면

function logTxt(text: string | number) {
    console.log(text);
    // text.  
    return text
}

// function logTxt(text: string | number): string | number
logTxt('하이') // 이것도 가능
logTxt(10) // 이것도 가능

// 근데, 이렇게 하면 또 어떤 문제가 있는고 하면, API를 확인해보면 string과 number과 동시에 사용 가능한 API만 볼수 있다.  
// 그리고 추가적인 문제는 return 값으로 받은 것도 두가지 타입 모두를 갖는다. 예를들어 숫자를 넣어도 string의 속성을 갖고 있는 것으로 확인한다.
let num = logTxt(20) // let num: string | number

// 타입이 다르다고 여러가지 함수를 중복 선언하는 것은 유지보수 관점에서 좋지 않고
// 그래서 타입 선언에서 유니온 방식을 쓰자니, return 값에서 타입을 확정짓지 못하고 있다. 

// 그래서 등장한게 제네릭이다.

function logSentace<T>(text:T):T {
    console.log(text);
    return text
}

let a = logSentace<string>('a')
logSentace<number>(10)
const login = logSentace<boolean>(true)

// 이게 무슨 말인고 하면, 매개변수로 a와 10을 넘겨주듯, 타입을 파라미터로 넘겨주게 되고 그것을 변수와 return 타입으로 사용하겠다.
// 이것이 제너릭이다.

// 인터페이스에서 제너릭 사용하는 법
interface Dropdown<T> {
    value : T;
    selected : boolean;
}

const obj:Dropdown<string> = { value : 'abc', selected : false}

// 제너릭의 타입 제한
// function logTextLength<T>(text : T[]): T[] {
//     console.log(text.length)
//     return text
// }

// logTextLength<string>(['hi', 'abc'])

// 제너릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length : number;
}

// 들어갈 속성들을 상속할 수 있다.
function logTextLength<T extends LengthType>(text:T): T {
    text.length;
    return text
}

logTextLength('a')
// logTextLength(10) // 'number' 형식의 인수는 'LengthType' 형식의 매개 변수에 할당될 수 없습니다.

//  제너릭 타입 제한 3 - keyof
interface ShoppingItem {
    name : string;
    price : number;
    stock : number;
}

// shoppingItem중 하나의 키워드로 배정된 타입을 사용하겠다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption : T):T {
    return itemOption
}

// getShoppingItemOption(10);
// getShoppingItemOption('abc')

getShoppingItemOption('name')