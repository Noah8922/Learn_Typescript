// ES2015 전에
function People(name, age) {
    this.name = name;
    this.age = age;
}

let jiyun = new People('jiyun', 200)
console.log(jiyun)

// ES2015 ES6 이후
// Syntatic sugar, 문법적으로 조금 보기 쉽게 만든 것.
class Person {
    // 클래스 로직
    // 클래스의 역할은 기본적으로 인스턴스를 만들어주는 역할이다.
    // 첫번쨰 로직으로는 construct 초기화 메소드를 사용하게 된다.
    constructor(name, age) {
        console.log('생성되었습니다.')
        this.name = name;
        this.age = age;
    }
    // 전달한 매개변수를 가지고 객체를 만들어 준다.
}

let seho = new Person('세호', 30); // 생성 되없습니다.
console.log(seho); // Person { name: '세호', age: 30 }

/** 그렇다면 Class는 왜 쓰는가, 자바스크립트 프로토타입과는 어떠한 관계가 있는지 */

// 자바스크립트의 프로토타입
// 프로토타입은 = 원형, 상위 속성, 이게 어떤 것을 상속 받았나.
// 이것의 원형은 무엇이다.