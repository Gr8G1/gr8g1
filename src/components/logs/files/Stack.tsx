import Temp from './temp/Temp';

const markdown = `
### 스택
스택은 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형 구조(LIFO - Last In First Out)으로 되어 있다.   
스택(stack)은 제한적으로 접근할 수 있는 나열 구조로 언제나 목록의 끝에서만 접근이 가능하다.   
먼저 집어 넣은 데이터가 먼저 나오는 FIFO(First In First Out)로 형태의 큐(Queue)의 반대되는 개념이다.

### 코드
~~~ javascript
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  push(val) {
      let newNode = new Node(val);

      if (!this.first) {
          this.first = newNode;
          this.last = newNode;
      } else {
          var temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }

      return ++this.size;
  }

  pop() {
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
|    | Insertion | removal | Searching | Access |
| --:| ---------:| -------:| ---------:| ------:|
| TC | O(1) | O(1) | O(n) | O(n) |
| SC | | | | |

### 시각화 자료
[Visualgo - list](https://visualgo.net/en/list)
`;

export default () => <Temp markdown={markdown} />;
