//6 [7, 10] --> 28

const solution = (n, times) => {
    let answer = Infinity;
  
    times.sort((a, b) => {
      return a - b;
    });
    let left = 1;
    //가장 최대의 시간
    let right = times[times.length - 1] * n;
  
    //가장 최소의 시간을 찾을때까지 계속 탐색한다.
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      let cnt = 0;
      for (let i = 0; i < times.length; i++) {
        cnt += parseInt(mid / times[i]);
        if (cnt >= n) {
          answer = Math.min(answer, mid);
        }
      }
      if (cnt >= n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return answer;
  };

console.log(solution(6, [7,10]));