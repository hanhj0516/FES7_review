// 문제 1
// 주소 : https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 문제 : 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
    return
}

Array(10)
// (10) [empty × 10]
Array(10).fill()
// (10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
Array(10).fill(0)
// (10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Array(10).fill(0).map((v, i) => i)
// (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Array(10).fill(0).map((_, i) => i + 1)
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array(10).fill(0).map((_, i) => i + 1).filter(v => v % 2 === 0)
// (5) [2, 4, 6, 8, 10]
// 아래처럼 개행해주시면 좀 더 편하게 보실 수 있습니다.
Array(10)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(v => v % 2 === 0)
// (5) [2, 4, 6, 8, 10]

Array(10)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(v => v % 2 === 0)
    .reduce((a, c) => a + c, 0)


function solution(n) {
    return Array(n).fill(0).map((_, i) => i + 1).filter(v => v % 2 === 0).reduce((a, c) => a + c, 0)
}

// 문제 2
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120585
// 문제 : 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

let result = 0
[149, 180, 192, 170].forEach(v => {
    if (v > 168) result++
})
result

// 확인 요망
let result = 0;
[149, 180, 192, 170].forEach(v => {
    v > 168 ? result++ : null;
})
result

// 확인요망
let result = 0
[149, 180, 192, 170]

// 확인요망
let result = 0;
[149, 180, 192, 170]

let result = 0;
let data = [149, 180, 192, 170];
data.forEach(v => {
    v > 168 ? result++ : null;
})
result;

[149, 180, 192, 170].filter(v => v > 168).length

function solution(array, height){
    return array.filter(v => v > height).length
}