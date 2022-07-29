
import Temp from './temp/Temp';

const markdown = `
### 우선순위 큐
우선순위 큐에서, 선입 선출(FIFO, First in first out)의 처리 방식이 아닌 높은 우선순위(priority)의 요소가 선처리된다.    
만약 두 요소가 같은 우선순위를 가진다면 그들은 큐에서 나열된 순서대로 처리된다.
> 이진 힙을 활용한 구현 가능

### 코드
~~~ javascript
class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue = (element, priority) => {
        let qNode = new Node(element, priority);
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (qNode.priority > this.items[i].priority) {
                this.items.splice(i, 0, qNode);

                added = true;
                break;
            }
        }

        if (!added) this.items.push(qNode);
    };

  dequeue = () => this.items.shift();

  front = () => this.items[0];
  rear = () => this.items[this.items.length - 1];
  isEmpty = () => this.items.length == 0;
  size = () => this.items.length;

  print = () => {
      for (let i = 0; i < this.items.length; i++) {
          console.log(\`\${this.items[i].element} - \${this.items[i].priority}\`);
      }
  };
}
~~~

### 복잡도
|  #  | Insert | Delete | Search | Access |
| ---:| ------:| ------:| ------:| ------:|
| TC | O(n) | O(1) | O(n)| O(N) |

### 시각화 자료
[Visualgo - heap](https://visualgo.net/en/heap)
`;

export default () => <Temp markdown={markdown} />;
