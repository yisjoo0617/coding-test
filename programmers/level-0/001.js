/**
 * 문제 설명
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ end_num ≤ start_num ≤ 50

입출력 예
start_num	end_num	    result
10	        3	        [10, 9, 8, 7, 6, 5, 4, 3]

입출력 예 설명
입출력 예 #1

10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.
 */


function solution(start, end_num) {
    var answer = [];
    let value = start;

    while (value >= end_num) {
        answer.push(value)
        value--
    }

    return answer;
}

// best
// const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);

console.log(solution(10, 3));