
import Temp from './temp/Temp';

const markdown = `
### 큐
큐는 먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)의 형태로 되어있다.   
나중에 집어 넣은 데이터가 먼저 나오는 선형구조(LIFO - Last In First Out) 스택과는 반대되는 개념이다.

### 코드
~~~ javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        let temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}
~~~

### 복잡도
|  #  | Insert | Delete | Search | Access |
| ---:| ------:| ------:| ------:| ------:|
| TC | O(1) | O(1) | O(n) | O(n) |

### 시각화 자료
[Visualgo - list](https://visualgo.net/en/list)
`;

export default () => <Temp markdown={markdown} />;
