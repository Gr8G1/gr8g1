
import Temp from './temp/Temp';

const markdown = `
### 트리 순회
트리 구조에서 각각의 노드를 정확히 한 번만, 체계적인 방법으로 방문하는 과정을 말한다.   
이때 노드를 방문하는 순서에 따라 분류가 나뉜다.   
이진 탐색 트리를 기반으로 코드를 구현하나 다른 모든 트리에서도 일반화될 수 있다.

전위 순회(preorder)
1. 노드 방문(print)
2. 왼쪽 서브 트리를 전위 순회
3. 오른쪽 서브 트리를 전위 순회
> 전위 순회는 깊이 우선 순회(depth-first traversal)라고도 한다.

중위 순회(Inorder)
1. 왼쪽 서브 트리를 중위 순회
2. 노드를 방문(print)
3. 오른쪽 서브 트리를 중위 순회
> 중위 순회는 대칭 순회(symmetric)라고도 한다.

후위 순회(postorder)
1. 왼쪽 서브 트리를 후위 순회
2. 오른쪽 서브 트리를 후위 순회
3. 노드 방문(print)

레벨 순서 순회(level-order)
1. 모든 노드를 낮은 레벨부터 차례대로 순회한다.
> 레벨 순서 순회는 너비 우선 순회(BFS, breadth-first traversal)라고도 한다.

~~~
이진 탐색 트리
     F
   B   G
 A   D   I
    C E   H

전위 순회: F, B, A, D, C, E, G, I, H (root, left, right)
중위 순회: A, B, C, D, E, F, G, H, I (left, root, right)
후위 순회: A, C, E, D, B, H, I, G, F (left, right, root)
레벨 순서 순회: F, B, G, A, D, I, C, E, H
~~~

### 코드
~~~ javascript
preOrder() {
    const traverse = node => {
      const results = [];

      (function t(n) {
        results.push(n.value);
        if (n.left) t(n.left);
        if (n.right) t(n.right);
      })(node);

      return results;
    };

    return traverse(this.root);
}

inOrder() {
    const traverse = (node) => {
      const results = [];

      (function t(n) {
        if (n.left) t(n.left);
        results.push(n.value);
        if (n.right) t(n.right);
      })(node);

      return results;
    };

    return traverse(this.root);
}

postOrder() {
  const traverse = (node) => {
    const results = [];

    (function t(n) {
      if (n.left) t(n.left);
      if (n.right) t(n.right);
      results.push(n.value);
    })(node);

    return results;
  };

  return traverse(this.root);
}

BFS() {
    var node = this.root,
        data = [],
        queue = [];

    queue.push(node);

    while (queue.length) {
        node = queue.shift();

        data.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return data;
}
~~~
`;

export default () => <Temp markdown={markdown} />;
