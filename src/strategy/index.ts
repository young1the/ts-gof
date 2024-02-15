import GaussSumStrategy from "./GaussSumStrategy";
import LoopSumStrategy from "./LoopSumStrategy";
import sumPrint from "./sumPrint";

export {GaussSumStrategy, LoopSumStrategy, sumPrint}

/*

Iterator 패턴은 배열이나 Linked-List, Tree처럼 다른 데이터 구조를 갖는,
Aggregator의 구성 항목을 표준화된 공통 API로 접근할 수 있습니다.

데이터 구조가 다른 Aggregator일지라도 구성항목을 표준화 된 공통 API로 접근할 수 있음으로
하나의 공통된 알고리즘으로 처리할 수 있습니다.

*/