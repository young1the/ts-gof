import CaptionDisplay from "./CaptionDisplay";
import Display from "./Display";
import Draft from "./Draft";
import SimpleDisplay from "./SimpleDisplay";

/*

Bridge 패턴은 기능 계층과 구현 계층을 분리합ㄴ디ㅏ.

새로운 기능을 추가할 때는 기능 꼐층을 확장하고 새로운 구현을 추가 할 때는 구현 계층을 확장함으로써 복잡도를 효과적으로 낮출 수 있습닌다.

기능 계층과 구현 계층은 서로 위임을 통해서 통신합니다.

클래스들간의 관계는 단순하게 만들어 주는 것이 좋은데 Bridge 패턴은 기능 계층과 구현 계층을 분리함으로써 클래스들 간의 관계를 단순하게 유지시켜 줍니다.

기능계층 : Draft, CharacterCount
구현계층 : Display

*/