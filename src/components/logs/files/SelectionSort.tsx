import Temp from './temp/Temp';

const markdown = `
### 선택 정렬
전체 값에서 최솟값 요소를 선택한 후 맨 앞으로 위치 시키고 이후 해당 행위를 반복하면서
이전에 배치된 최솟값의 오른쪽 요소로 배치, 모든 요소가 정렬될 때까지 반복한다.

### 코드 - ES5
~~~ javascript
function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;

        for(var j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) lowest = j;
        }

        if (i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return arr;
}
~~~

### 코드 - ES6
~~~javascript
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) lowest = j;
        }

        if (i !== lowest) swap(arr, i, lowest);
    }

    return arr;
}
~~~

### 복잡도
|    | Best | Average | Worst |
| --:| ----:| -------:| -----:|
| TC | O(n^2) | O(n^2) | O(n^2) |
| SC |      |        | O(1) |

### 시각화 자료
[Visualgo - sorting](https://visualgo.net/en/sorting)
`;

export default () => <Temp markdown={markdown} />;
