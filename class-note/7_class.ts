class Person {
    private name : string; // 외부에서 접근 불가한 변수
    public age : number ; // 외부에서 접근 가능
    readonly log : string // 값 변경 불가, 읽기만 가능  

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}