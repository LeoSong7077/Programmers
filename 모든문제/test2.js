//즉, 손님이 리프트 탑승장에 도착한 후 
//바로 다음으로 탑승장에 들어오는 리프트 번호가
// 해당 손님이 탑승장에 도착한 시각입니다.

//도착한 시각(리프트 번호)과 등급이 같을 경우에는 아이디 값이 작은 손님이 먼저 탑승합니다.

//각 손님의 도착 시각(리프트 번호)을 저장한 배열 t
//그 손님의 등급을 저장한 배열 r
// 탑승하는 손님의 순서를 return 


//[0,1,3,0]	[0,1,2,3] => [0, 1, 3, 2]

function solution(t, r) {
    var answer = [];

    const maxtime = Math.max(...t);
    //console.log(maxtime);
    let wait = [];

    for (let time = 0; time <= maxtime; time++) {

        for (let i = 0; i < t.length; i++) {
            if (t[i] === time) { 
                wait.push(i);
            }
        }
        wait.sort(function(a, b) {
            if (r[a] > r[b]) { 
                return 1;
            }
            else if (r[a] === r[b]) {
                if (t[a] > t[b]) {
                    return 1;
                }
                else if (t[a] === t[b]) {
                    if (a > b) {
                        return 1;
                    }
                    else if (a === b) {
                        return 0;
                    }
                    else if (a < b) {
                        return -1;
                    }
                }
                else if (t[a] < t[b]) {
                    return -1;
                }
            }
            else if (r[a] < r[b]) {
                return -1;
            }
        });
        if (wait.length !== 0)
            answer.push(wait.shift());
    }
    return answer;
}

console.log(solution([0,1,3,0], [0,1,2,3]));
console.log(solution([7,6,8,1], [0,1,2,3]));
console.log(solution([13,6,8,1], [0,1,2,3]));