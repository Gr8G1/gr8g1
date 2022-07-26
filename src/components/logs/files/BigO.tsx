import Temp from './temp/Temp';

const markdown = `
## 알고리즘(algorithm)
수학과 컴퓨터과학, 언어학 또는 엮인 분야에서 어떠한 문제를 해결하기 위해 정해진 일련의 절차이다.   
계산을 실행하기 위한 단계적 절차를 의미하기도 하며 문제 풀이에 필요한 계산절차 또는 처리과정의 순서 또는 프로그램명령어의 집합을 의미하기도 한다.

## 알고리즘의 효율성을 측정하려면?
아래 두 가지를 고려해야 한다.
* 시간 복잡도(Time Complexity): 연산을 실행하는 데 시간이 얼마나 걸리는지?
* 공간 복잡도(Space Complexity): 연산에서 얼마나 많은 추가 공간이 필요한지?

## 복잡성은 어떻게 계산되는가?
시간 복잡도는 입력 크기와 알고리즘 솔루션의 두 가지 요소를 고려하여 결정되며 복잡성을 계산하는 일반적인 방법은 다음과 같다.

1. 모든 기본 작업(연산) 나열
2. 각각이 실행되는 연산 횟수를 표기
3. n(입력값)의 관점에서 방정식을 얻기 위해 모든 연산 횟수를 합산

## Big O 정의
알고리즘을 분석할 때 컴퓨터 과학에서 매우 일반적으로 사용되는 점근 표기법중에 하나이며 Big O는 입력 크기에 비해 **최악(상한)의 시나리오**에서 알고리즘이 얼마나 효율적인지를 보여주는 표준 수학 표기법이다.

## Big O 시각화 자료
아래 이미지에서 X축은 알고리즘이 처리할 요소의 수이고 Y축은 복잡성을 나타낸다

<p class="image">
  <img src="/assets/images/BigOComplexityChart.png" alt="BigOComplexityChart" />
</p>

<center>
from <a href="https://www.bigocheatsheet.com/">BigOCheatSheet</a>
</center>

## Big O 복잡성 표기
입력(연산) 크기가 n일 경우 Big O를 사용하여 나타낸다.

* O(1): 상수 - n에 크기와 상관없이 일정한 실행시간
* O(log n): 대수 - log n에 비례한 실행시간
* O(n): 선형 - n에 비례하는 실행시간
* O(n log n): 선형 대수 - n*(log n)에 대략 비례할 수 있는 실행시간
* O(n^2): 2차 - n^2 비례하는 실행시간
* O(2^n): 지수 - 2^n의 크기에 따라 기하급수적으로 늘어나는 실행시간
* O(n!): 계승 - n x (n - 1) x (n - 2) ... 같은 꼴의 실행시간 ([순열](https://ko.wikipedia.org/wiki/%EC%88%9C%EC%97%B4))
`;

export default () => <Temp markdown={markdown} />;
