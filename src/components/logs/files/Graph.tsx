import Temp from './temp/Temp';

const markdown = `
### 그래프
그래프는 정점(vertex)과 간선(edge)으로 구성된 한정된 자료구조를 의미한다.

* 인접 행렬(Adjacency matrix)
  - 2차원 구조의 중첩 배열로 표현 (항상 X)
    - 불린 행렬(Boolean Matrix): matrix[i][j] = true || fasle (간선 표현)
    - 정수 행렬(Integer Matrix): matrix[i][j] = 0 || 1 (간선 표현)
* **인접 리스트(Adjacency list)**
  - 모든 정점(vertex)의 인접 정점을 배열 또는 해시테이블을 이용하여 표현
    ~~~javascript
        [
      0    [2, 3],
      1    [1, 3],
      2    [1, 2]
        ]
      {
        A: ['B', 'C'],
        B: ['A', 'C'],
        C: ['A', 'B']
      }
    ~~~

일상 생활속 그래프의 사용처
1. SNS(Social Network Service)
2. 지도(Google Map...) 방향 안내, 길 찾기...
3. Routing(Network)

### 코드
~~~ javascript
class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1,vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();

            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }
}
~~~

### 복잡도
|  OP  | Adjacency List | Adjacency Matrix |
| ----:| --------------:| ----------------:|
| addVertex | O(1) | O(V^2) |
| removeVertex | O(V + E) | O(V^2) |
| addEdge | O(1) | O(1) |
| removeEdge | O(E) | O(1) |
| Query | O(V + E) | O(1) |
| Storage | O(V + E) | O(V^2) |

### 시각화 자료
[Visualgo - graph](https://visualgo.net/en/graphds)
[Music Map](https://musicmap.info/)
`;

export default () => <Temp markdown={markdown} />;
