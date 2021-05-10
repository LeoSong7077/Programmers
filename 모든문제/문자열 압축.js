
//문자열 압축, 2020 KAKAO BLIND RECRUITME


//1부터 길이/2 (내림) 개 까지

//"aabbaccc" => ("2a2ba3c") 7
//"ababcdcdababcdcd" => ("2ababcdcd") 9

const s = "aabbaccc";

for (let size = 1; size < s.length/2; size++) {
    
    for (let i = 0; i < s.length - (size -1); i++) {
        const tempArr = [];
        for (let j = i; j < s.length - (size -1);) {
            tempArr.push(s.substring(j, j + size));
            j =+ size;
        }
        
    }

}