//DFS / BFS , 타겟넘버

//[1,1,1,1,1] , 3 => 5
//모든 경우의 수. 특정 하나의 해결 방법의 경우가 아닌

//DFS BFS를 모르는 경우
//방법 1. +/- 에 대한 모든 경우의 수 : 2^5 = 32가지에 대해 합이 target인 경우 cnt 구하기.
    //멈줘야 될 경우가 없음. 그냥 2^n 실행 모두 해야함..

    function solution(numbers, target) {
        let answer = 0;
        
        dfs(0, 0);
        
        function dfs(index, sum) {
            if(index === numbers.length) {
                if (sum === target) {
                    answer++;
                 }
                return;
            }
            
            dfs(index + 1, sum + numbers[index]);
            dfs(index + 1, sum - numbers[index]);
        }
        
        return answer;
    }