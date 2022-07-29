
import Temp from './temp/Temp';

const markdown = `
### 해시 테이블
해시 테이블(hash table) 키(key)를 값(value))에 매핑을 구현하는 자료 구조이다.   
해시 테이블은 **해시 함수**를 사용하여 색인(index)을 생성을 생성하고, 색인의 기반한 저장을 진행하는데 이때 저장될 공간을 버킷(bucket)이나 슬롯(slot)으로 간주한다.   
해시 함수는 각 키를 고유한 버킷에 할당하지만 대부분의 해시 테이블 디자인은 불완전한 해시 함수를 사용 하므로 해시 함수가 둘 이상의 키에 대해 동일한 인덱스를 생성하는 해시 충돌이 발생할 수 있다.

충돌(Collision) 해결 방법
* ***Seprate Chaning***:
  - 충돌된 항목은 단일 연결(Linked-list)목록을 통해 함께 저장되며 고유한 검색 키로 항목 검색 및 탐색 진행
* Open Adressing
  - Linear probing
    - 충돌 발생 시 다음 빈 위치를 검색, 새 키를 삽입하며 조회는 동일한 방식으로 지정된 위치에서 시작, 일치하는 키가 있는 셀 또는 빈 셀을 찾을 때까지 테이블을 순차적으로 검색
  - Quadratic probing
  - Double hashing

### 코드
~~~ javascript
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        const WEIRD_PRIME = 31;
        let total = 0;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96; // Start 'a'
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
            }
        }

        return undefined;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index]) this.keyMap[index] = [];

        this.keyMap[index].push([key, value]);
    }

    keys() {
        let keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                  if (!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }

        return keysArr;
    }

    values() {
        let valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                  if (!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1]);
                }
            }
        }

        return valuesArr;
    }
}
~~~

### 복잡도
|  #  | Insert | Delete | Search | Access |
| ---:| ------:| ------:| ------:| ------:|
| TC | O(1) | O(1) | O(1) | |

### 시각화 자료
[Visualgo - hash table](https://visualgo.net/en/hashtable)
`;

export default () => <Temp markdown={markdown} />;
