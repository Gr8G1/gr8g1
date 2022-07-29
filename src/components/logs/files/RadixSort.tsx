import Temp from './temp/Temp';

const markdown = `
### 기수 정렬
앞서 정리한 정렬 알고리즘들(Bubble, Insertion, Selction, Quick, Merge...)은 비교 기반으로 동작하는데 반해 기수 정렬의 경우 기수(정수, 낱말등 유한한 범위의 값 또는 열거/나열 가능한 값)에 따라 요소를 [버킷(bucket)](https://ko.wikipedia.org/wiki/%EB%B2%84%ED%82%B7_%EC%A0%95%EB%A0%AC)에 집어 넣기 때문에 비교가 불필요하다.   
단점으로는 공간 복잡도(O(n + k))와 정렬 방식의 특수성 때문에 적용가능한 범위가 한정적인 것이다.

### 코드
~~~ javascript
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i],k);

            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}
~~~

### 복잡도
|    | Best | Average | Worst |
| --:| ----:| -------:| -----:|
| TC | O(k·(b + n)) | O(k·(b + n)) | O(k·(b + n)) |
| SC |      |        | O(n + k) |

### 시각화 자료
[Visualgo - sorting](https://visualgo.net/en/sorting)
`;

export default () => <Temp markdown={markdown} />;
