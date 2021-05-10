//"price=80 code=987654 time=2019062113"


function solution(code, day, data) {
    let answer = [];

    const allData = new Array(data.length); //0 : price, 1 : code, 2 : time
    for (var i = 0; i < allData.length; i++) {
        allData[i] = new Array(3);
    }

    //이중배열로 저장
    for (let i = 0; i < allData.length; i++) {
        let tempArr = data[i].split(" ");
        for(let j = 0; j < tempArr.length; j++) {
            const index = tempArr[j].indexOf("=");
            allData[i][j] = tempArr[j].substring(index + 1);
        }
    }
    allData.sort((a, b) => a[2] - b[2]);

    for (let k = 0; k < allData.length; k++) {
        if (allData[k][1] === code && allData[k][2].substring(0, allData[k][2].length - 2) === day) {
            answer.push(allData[k][0].toString());
        }
        //console.log(answer);
    }

    return answer;


}

console.log(solution("012345", "20190620", ["price=80 code=987654 time=2019062113","price=90 code=012345 time=2019062014","price=120 code=987654 time=2019062010","price=110 code=012345 time=2019062009","price=95 code=012345 time=2019062111"]));