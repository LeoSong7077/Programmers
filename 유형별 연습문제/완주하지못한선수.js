//["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
//["eden", "kiki", "eden"]	["eden", "kiki"]	"eden"

function solution(participant, completion) {
    let answer = '';
    let result = [];
    completion.forEach(function(value) {
        const index = participant.indexOf(value);
        result.push(index);
    });
    let count = 0;
    result.sort();
    //console.log(result.toString());
    for (let i = 0; i < participant.length; i++) {
        if (count !== result[i]) {
            answer = participant[count];
            break;
        }
        count++;
    }
    return answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
// 
