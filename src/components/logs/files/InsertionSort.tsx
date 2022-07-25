import Temp from './temp/Temp';

const markdown = `
### 삽입 정렬
하나의 값을 취해서 올바른 위치에 삽입하는데 이때 주어진 값의 첫 번째 요소는 정렬된 부분으로 간주한다.
두 번째 값부터 정렬 시작, 이때 첫 번째 요소와 비교 후 필요하면 위치를 변경한다.
이후 선택된 값이 올바른 위치에 있는지 확인하며 정렬을 진행하고 전체 요소가 정렬될 때까지 반복한다.

### 코드
~~~ javascript
function insertionSort(arr) {
    let currentVal;
    let i, j;

    for (i = 1; i < arr.length; i++){
        currentVal = arr[i];

        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}
~~~

### 복잡도
|    | Best | Average | Worst |
| --:| ----:| -------:| -----:|
| TC | O(n) | O(n^2) | O(n^2) |
| SC |      |        | O(1) |

### 시각화 자료
[Visualgo - sorting](https://visualgo.net/en/sorting)
`;

export default () => <Temp markdown={markdown} />;
