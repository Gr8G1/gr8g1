
import Temp from './temp/Temp';

const markdown = `
### 힙
힙(heap)은 완전이진트리(complete binary tree)에 기반한 최대(Max)/최소(Min) 값을 빠르게 찾아내기 위해 고안된 자료구조이다.

힙의 종류
* 최대 힙: 부모 노드 > 자식 노드
* 최소 힙: 부모 노드 < 자식 노드

힙의 배열 표현
* 부모 노드: (i - 1) / 2
* 왼쪽 자식 노드: (2 * i ) + 1
* 오른쪽 자식 노드: (2 * i) + 2

힙의 응용
1. 힙 정렬
2. 우선순위 대기열(Priority Queue)
3. Dijkstra의 최단 경로 및 Prim의 최소 스패닝 트리와 같은 그래프 알고리즘

### 코드
~~~ javascript
class MaxBinaryHeap {
    constructor() {
        this.list = [];
    }
    
    // Max <=> Min
    maxHeapify = (arr, n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];

            this.maxHeapify(arr, n, largest);
        }
    };

    insert = num => {
        const size = this.list.length;

        this.list.push(num);

        if (size !== 0) {
            for (let i = parseInt(this.list.length / 2 - 1); i >= 0; i--) {
                this.maxHeapify(this.list, this.list.length, i);
            }
        }
    };

    extractMax = () => {
        const max = this.list[0];

        this.delete(max);

        return max;
    };

    delete = num => {
      const size = this.list.length;

      let i;
      for (i = 0; i < size; i++) {
          if (num === this.list[i]) break;
      }

      [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];

      this.list.splice(size - 1);

      for (let i = Math.floor(this.list.length / 2 - 1); i >= 0; i--) {
          this.maxHeapify(this.list, this.list.length, i);
      }
    };

    getList = () => this.list;
    isEmpty = () => this.list.length === 0;
    size = () => this.list.length;
    findMax = () => this.list[0];
    deleteMax = () => this.delete(this.list[0]);
}
~~~

### 복잡도
|  #  | Insert | Delete | Search | Access |
| ---:| ------:| ------:| ------:| ------:|
| TC | O(log n) | O(log n) | O(n)| O(n) |

### 시각화 자료
[Visualgo - heap](https://visualgo.net/en/heap)
`;

export default () => <Temp markdown={markdown} />;
