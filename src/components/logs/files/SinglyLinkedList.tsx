import Temp from './temp/Temp';

const markdown = `
### 단일 연결 리스트
가장 기본적인 자료구조 형태이며, 일반적으로 데이터를 저장한 단위 메모리가 연결되어 있는 형태를 나타낸다.   
이 연결방식에 따라 단일 연결 리스트와 이중 연결 리스트로 나뉜다.   
머리(head)에서 마지막 노드(tail)까지 한 방향으로만 이동하며 데이터를 조회하고 각 요소들은 다음(next) 요소릴 가리키는 포인터를 갖고있다.

### 코드
~~~ javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;

        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        newNode.next = this.head;

        this.head = newNode;
        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;

        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;

        previousNode.next = removed.next;

        this.length--;

        return removed;
    }

    reverse() {
        let next,
            prev = null,
            node = this.head;

        this.head = this.tail;
        this.tail = node;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        let current = this.head,
            arr = []

        while (current) {
            arr.push(current.val);
            current = current.next;
        }
    }
}
~~~

### 복잡도
|  #  | Insert | Delete | Search | Access |
| ---:| ------:| ------:| ------:| ------:|
| TC  | O(1) | O(1) / O(n) | O(n) | O(n) |


### 시각화 자료
[Visualgo - list](https://visualgo.net/en/list)
`;

export default () => <Temp markdown={markdown} />;
