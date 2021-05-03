// [7, 4, 5, 6]kg인 트럭이 순서대로

//stack/queue

// shift() , push(val)

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;

    let bridge = new Array(bridge_length);
    let currentWeight = 0;
    let passCnt = 0;
    const truckNumber = truck_weights.length;
    while (true) {
        answer++;
        let passed = bridge.shift();
        if (passed !== undefined) { //나온게 트럭인 경우 현재 무게 덜기
            currentWeight -= passed;
            passCnt++;
        }
        if (passCnt === truckNumber) {
            break;
        } 
        console.log("passCnt", passCnt);
        //add 상황
        if (currentWeight + truck_weights[0] <= weight) {
            const nextTruck = truck_weights.shift();
            currentWeight += nextTruck;
            bridge.push(nextTruck);
        }
        else {
            bridge.push(undefined);
        }
        //console.log("answer: " + answer + ", bridge: " + bridge.toString() + ", truck_weights: " + truck_weights.toString());          
    }
    return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));