// [1, 5, 2, 6, 3, 7, 4]  /  [[2, 5, 3], [4, 4, 1], [1, 7, 3]]  /  [5, 6, 3]

function solution(array, commands) {
    var answer = [];

    for (let i = 0; i < commands.length; i++) {
        const start = commands[i][0];
        const end = commands[i][1];
        const target = commands[i][2];

        let tempArr = array.slice(start - 1, end).sort(function(a, b)  {
            return a - b;
          });
        console.log(tempArr.toString());
        answer.push(tempArr[target - 1]);
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]));