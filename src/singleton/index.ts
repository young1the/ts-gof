export default class King {
    private constructor() { }
    private static instance: King | undefined;

    static getInstance() : King {
        if (!this.instance) {
            this.instance = new King();
        }
        return this.instance;
    }

    public sayHello() {
        console.log("i am only one");
    }
}

/**
 * Singletone 패턴은 정 클래스의 인스턴스가 오직 한 개만 존재한다는 것을 보장합니다.
 * 
 * Singleton 패턴이 적용된 클래스의 인스턴스는 미리 생성해 놓거나 사용될 때 생성하는 것이 가능합니다.
 */