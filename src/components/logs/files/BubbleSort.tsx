import Temp from './temp/Temp';

const markdown = `
### 버블 정렬
인접 요소를 왼쪽/오른쪽 비교하여 순서가 잘못된 경우 교체, 이 과정을 모든 요소가 정렬될 때까지 반복한다.

### 코드 - ES5
~~~ javascript
function bubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}
~~~

### 코드 - ES6
~~~javascript
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;

        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }

        if(noSwaps) break;
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
