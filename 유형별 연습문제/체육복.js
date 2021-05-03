// greedy, 체육복
// O
// greedy 란 ? 아직 특별한 방식에 대해서는 모르겠다.

//전체학생 n : 2 ~ 30
//5, [2, 4], [1, 3, 5] => 5

function solution(n, lost, reserve) {
    let res = reserve.filter(function(val) {
        return lost.indexOf(val) == -1;
    });
    let los = lost.filter(function(val) {
        return reserve.indexOf(val) == -1;
    });
    let count = n - los.length;
    for (let i = 0; i < los.length; i++) {     
        for (let j = 0; j < res.length; j++) {
            if ( los[i] - 1 === res[j] || los[i] + 1 === res[j] ) {
                count++;
                res[j] = -1; // 다시 사용 불가능하게 바꿈
                break;
            }
        }
    }
    return count;
}

console.log(solution(3, [3], [1])); // output : 2
console.log(solution(5, [2, 4], [3])); // output : 4
console.log(solution(5, [4, 5], [3, 4])); // output : 4
console.log(solution(5, [2, 4], [1, 3, 5])); // output : 5
console.log(solution(5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // output : 5