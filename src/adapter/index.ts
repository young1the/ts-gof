import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

export { Animal, Cat, Dog, Tiger, TigerAdapter }

/*

Adapter 패턴은 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할 때 적용할 수 있는 패턴입니다.


클래스의 코드를 변경하기 어려운 경우

 - 처음부터 코드가 제공되지 않는 클래스의 경우
 - 이미 많은 프로그램에서 사용되는 공용 클래스로써 공용 클래스가 변경되면 영향을 받는 다른 프로그램의 코드가 너무 많이 변경되는 경우
 - 어떤 클래스가 버전업된 경우 하위버전의 클래스도 지원해야 하는 경우

*/