// 숫자형 이넘
enum Shoes {
    Nike,
    Adidas,
}

let myShoes = Shoes.Nike // (enum member) Shoes.Nike = 0
let myShoes2 = Shoes.Adidas // (enum member) Shoes.Adidas = 1, 1씩 증가함
console.log(myShoes) // 0이 출력됨,
/**
 * enum Shoes {
    Nike = 10,
    Adidas,
}
이렇게 초기화 할 경우 10에서 1씩 증가함.
 */

// 문자형 이넘
enum Shoes2 {
    Nike = '나이키',
    Adidas ='아디다스',
}

let Nike = Shoes2.Nike // (enum member) Shoes2.Nike = "\uB098\uC774\uD0A4"
let Adidas = Shoes2.Adidas // (enum member) Shoes2.Adidas = "\uC544\uB514\uB2E4\uC2A4"

// 이넘의 활용 사례
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if(answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

// 원래는 이렇게 해야 하는데
// askQuestion('yes')
// 이렇게도 가능함.
// askQuestion('예스')
// askQuestion('Y')
// askQuestion('YES')
// 이러한 현상을 방지하기 위해 enum을 사용


askQuestion(Answer.Yes)
// askQuestion('Yes') => '"Yes"' 형식의 인수는 'Answer' 형식의 매개 변수에 할당될 수 없습니다.
