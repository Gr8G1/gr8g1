import Temp from './temp/Temp';

const markdown = `
### 합병 정렬 or 병합 정렬
[분할 정복 알고리즘(Divide and conquer algorithm)](https://ko.wikipedia.org/wiki/%EB%B6%84%ED%95%A0_%EC%A0%95%EB%B3%B5_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
원칙에 따라 각각 하나의 요소만 포함하는 n개의 부분 리스트로 분할하고(재귀 이동) 이후 부분 리스트가 하나만 남을 때까지 반복(Stack-Out), 병합하며 정렬된 리스트를 생성한다.

### 코드
~~~ javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2) {
    let results = [];
    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}
~~~

### 복잡도
|    | Best | Average | Worst |
| --:| ----:| -------:| -----:|
| TC | O(n log n) | O(n log n) | O(n log n) |
| SC |      |        | O(n) |

### 시각화 자료
[Visualgo - sorting](https://visualgo.net/en/sorting)
`;

export default () => <Temp markdown={markdown} />;
