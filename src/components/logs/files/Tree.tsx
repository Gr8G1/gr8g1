import Temp from './temp/Temp';

const markdown = `
### 트리
컴퓨터 과학 자료구조에서의 그래프의 일종으로, 한 노드에서 시작해서 다른 정점들을 순회하여 자기 자신에게 돌아오는 순환이 없는 연결 그래프이다.   
트리 구조 최상위 노드는 루트 노드(root node - 부모가 없는 노드), 노드 A => B를 가리킬 때 A를 B의 부모 노드(parent node) B는 A의 자식 노드(child node)라고 한다.   
자식 노드가 없는 경우 잎 노드(leaf node) 또는 말단 노드 (terminal node)라고 하고 잎 노드가 아닌 노드를 내부 노드(internal node)라고 한다.   
노드에는 항상 하나의 부모만 있지만 여러 자식을 가질 수 있고 순환(A => B => root)을 형성을 하지 않는다.

### 일상 생활속 트리의 사용처
1. AI(Artificial Intelligence)
2. HTML DOM
3. 네트워크 라우팅
4. 컴퓨터 폴더 구조/파일 시스템
5. 데이터 베이스

### 이진 트리
이진 트리(binary tree)는 각각의 노드가 ***최대 두 개***의 자식 노드를 갖는다.

### 이진 탐색 트리
이진 탐색 트리는 트리가 ***항상 정렬***되도록 삽입 및 삭제를 수행하는 특수한 종류의 이진 트리이다.   
이진 검색 트리의 핵심은 '왼쪽 자식이 부모 노드보다 작고 오른쪽 자식이 부모 노드보다 크다' 이다.

### 코드
~~~ javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        }

        let newNode = new Node(value);
        let current = this.root;

        while (true) {
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }

                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;

        let current = this.root,
            found = false;

        while (current && !found) {
            if (value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else found = true;
        }

        return !found ? undefined : current;
    }
}
~~~

### 복잡도
|  #  | Insert | Delete | Search | Access |
| ---:| ------:| ------:| ------:| ------:|
| TC | O(log n) / NG | O(log n) / NG | O(log n) / NG | O(N) |

### 시각화 자료
[Visualgo - tree](https://visualgo.net/en/bst)
`;

export default () => <Temp markdown={markdown} />;
