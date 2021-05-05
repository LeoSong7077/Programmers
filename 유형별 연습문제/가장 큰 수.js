// 정수 타입
// [6, 10, 2] -> "6210"
// [3, 30, 34, 5, 9] -> "9534330"
// [3, 30, 34, 341] -> "34330" (33430)X

//각 정수의 최고자리 숫자 비교.
//최고자리 숫자가 같을 경우.. 
    //=> 모든 경우의 수를 다 들리고, 시도마다 큰 수 갱신.. DFS
    
    //가장 큰 자리수에 맞춰서 같은 숫자로 채워 넣어서 정렬한다.

function solution(numbers) {
    var answer = [number.length];
    return answer;
}

//console.log([3, 300, 5 , 30, 9].sort((a, b) => {return a.toString() - b.toString();})); //보니까 그냥 기본 해시코드 정렬로 해도 괜찮다.. 
//숫자가 다르면 내림차순으로 정렬
//숫자가 같으면 오름차순으로 해야 알맞게 정렬

//다음숫자의 맨 앞 값을 작업 배열에 저장
//그 숫자와 다음 숫자 갚이 같으면 작업 배열에 계속 저장.
//다음 숫자와 값이 달라졌을때, 정렬하고 최종결과 배열에 더하고, 다시 작업 배열을 새롭게 다시 채운다..

let arr = [3, 30, 34, 5, 9];
arr.sort();

let result = [];
let tempArr = [arr[arr.length - 1].toString()]; //'-1'
for (let i = arr.length - 2; i >= 0; i--) {
    let firstNumber = arr[i].toString()[0];
    if (tempArr[tempArr.length - 1][0] !== firstNumber) { //달라지는 순간이 오면
        if (tempArr.length === 1) {
            result.push(tempArr[0]);
        }
        else {
            result = result.concat(tempArr.sort());
        }
        tempArr = [];
    }
    tempArr.push(arr[i].toString());
}
if (tempArr.length === 1) {
    result.push(tempArr[0]);
}
else {
    result = result.concat(tempArr.sort());
}


console.log(result);
