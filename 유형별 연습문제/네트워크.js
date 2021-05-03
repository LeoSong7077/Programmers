// n:3 , n:3
// [
// [1, 1, 0] [1, 1, 0]
// [1, 1, 0] [1, 1, 1]
// [0, 0, 1] [0, 1, 1]
// ]	
// => 2 , 1 네트워크 개수.

//같은 경우:1 , 좌우 대칭
//순회한다..
//네트워크 개수를 구해야 한다 > 연결된데로 쭉간다.

//배열 적으로 생각하기 보다. 노드 이미지 적으로 생각.

function solution(n, computers) {
    let answer = 0;
    let isVisited = new Array(n).fill(false);
  
    for (let i = 0; i < n; i++) {
      if (!isVisited[i]) {
        isVisited[i] = true;
        dfs(n, computers, isVisited, i);
        answer++;
      }
    }
  
    return answer;
  }
  
  function dfs(n, computers, isVisited, index) {
    isVisited[index] = true;
  
    for (let i = 0; i < n; i++) {
      if (computers[index][i] === 1 && !isVisited[i]) {
        dfs(n, computers, isVisited, i);
      }
    }
  }

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));

