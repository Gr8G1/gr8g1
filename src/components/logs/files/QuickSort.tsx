import Temp from './temp/Temp';

const markdown = `
### 퀵(빠른) 정렬
[분할 정복 알고리즘(Divide and conquer algorithm)](https://ko.wikipedia.org/wiki/%EB%B6%84%ED%95%A0_%EC%A0%95%EB%B3%B5_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
리스트 가운데서 하나의 피벗(요소)를 고른 후
선택된 피벗 앞으로 값이 작은 모든 요소를 위치시키고, 뒤로는 값이 큰 모든 요소를 위치시켜 분할하고
분할된 두 개의 작은 리스트에 대해 재귀(Recursion)적으로 이 과정을 반복한다.

### 코드
~~~ javascript
function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);

    return swapIdx;
}
~~~

### 복잡도
|    | Best | Average | Worst |
| --:| ----:| -------:| -----:|
| TC | O(n log n) | O(n log n) | O(n^n) |
| SC |      |        | O(log n) |

### 시각화 자료
[Visualgo - sorting](https://visualgo.net/en/sorting)

`;

export default () => <Temp markdown={markdown} />;
