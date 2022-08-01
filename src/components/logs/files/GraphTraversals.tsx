import Temp from './temp/Temp';

const markdown = `
### 그래프 순회
모든 Vertax와 Edge를 지정된 순서대로 순회(방문)

순회 종류
* 깊이 우선 탐색 (DFS: Depth First Search)
  1. 지정한 정점(vertax)에서 시작
  2. 간선(edge)을 따라 다음 정점으로 방문
  3. 탐색할 간선이 없을시 역추적(backtracking)을 진행, 탐색되지 않은 간선 확인
  4. 탐색 가능한 간선이 있을시 다시 간선을 따라 다음 정점 방문
  5. 모든 정점을 탐색할 때까지 반복
* 너비 우선 탐색 (BFS: Breath First Search)
  1. 레벨 0 정점에서 탐색 시작
  2. 레벨 1 정점 방문 => 레벨 2 정점 방문...
  3. 레벨을 늘리면서 모든 노드를 방문할 때까지 반복
> Graph는 Tree와 다르게 Preorder, Inorder, Postorder가 존재하지 않는다.

### 코드
~~~ javascript
// * Stack
depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};

    let currentVertex;

    visited[start] = true;

    while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              stack.push(neighbor);
            }
        });
    }

    return result;
}

// * Recursive
depthFirstRecursive(start) {
    const adjacencyList = this.adjacencyList;
    const result = [];
    const visited = {};

    (function dfs(vertex) {
        if (!vertex) return null;

        visited[vertex] = true;
        result.push(vertex);

        adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) return dfs(neighbor);
        });
    })(start);

    return result;
}

// * Queue
breadthFirst(start) {
  const queue = [start];
  const result = [];
  const visited = {};

  let currentVertex;

  visited[start] = true;

  while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
              visited[neighbor] = true;
              queue.push(neighbor);
          }
      });
  }

  return result;
}
~~~

### 복잡도
|  OP  | Adjacency List | Adjacency Matrix |
| ----:| --------------:| ----------------:|
| DFS | O(V + E) | O(V^2) |
| BFS | O(V + E) | O(V^2) |

### 시각화 자료
[Visualgo - graph](https://visualgo.net/en/dfsbfs)
`;

export default () => <Temp markdown={markdown} />;
