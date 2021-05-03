function solution(answers) {
    let answer = [];
    let answerCnts = [];
    //길이에 따라서 다시 도돌이표..
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    
    let first_i = 0,
        second_i = 0,
        third_i = 0;
    let first_answer_cnt = 0,
        second_answer_cnt = 0,
        third_answer_cnt = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (first[first_i] === answers[i]) {
            first_answer_cnt++
        }
        if (second[second_i] === answers[i]) {
            second_answer_cnt++
        }
        if (third[third_i] === answers[i]) {
            third_answer_cnt++
        }
        first_i++;
        second_i++;
        third_i++;
        if (first_i === first.length) {
            first_i = 0;
        }
        if (second_i === second.length) {
            second_i = 0;
        }
        if (third_i === third.length) {
            third_i = 0;
        }
    }
    answerCnts.push(first_answer_cnt);
    answerCnts.push(second_answer_cnt);
    answerCnts.push(third_answer_cnt);
    
    const max = Math.max(...answerCnts);
    for (let i = 0; i < answerCnts.length; i++) {
        if (answerCnts[i] === max)
            answer.push(i + 1);
    }
    
    return answer;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));