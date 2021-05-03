//알파벳 개수 26개
//A : 아스키 65
//B C D E F G H I J K L M N : 1 ~ 13
//O P Q R S T U V W X Y Z : 12 ~ 1

//str.charCodeAt(index)

//"JEROEN"
//"JAN"

function solution(name) {
    var answer = 0;

    let flag = 0;
    for (let i = 0; i < name.length; i++) {
        const aCode = name.charCodeAt(i);

        const move = function() {
            const forwardMove = i - flag;
            const backwardMove = name.length - i + flag;

            if (forwardMove <= backwardMove) {
                answer += forwardMove;                
            }
            else {
                answer += backwardMove;
            }
        }

        if (aCode >= 66 && aCode <= 78) { 
            move();
            //문자 변환
            answer += (aCode - 65);
            //변환 위치 저장
            flag = i;
        }
        else if (aCode >= 79) {
            move();
            //문자 변환
            answer += (90 - aCode + 1);
            //변환 위치 저장
            flag = i;
        }
    }
    
    return answer;
}

console.log(solution("JAN"));

//length : 6
// i : 0 1 2 3 4 5
//forwardCnt : (A가 아니면) 0 1 2 3 4 5
//backwardCnt : 