//"1924" / 2 / "94"

//k개를 제거해서 만들수 있는 가장 큰 수.

function solution(number, k) {
    const length = number.length - k;
    let number_arr = number.split('');
    number_arr.sort((a, b) => {return b - a});
    //let result = new Array(number.length - k);
    var answer = '';

    for (let i = 0; i < length; i++) {
        answer += number_arr[i];
    }
    return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));