// 중요도 높습니다!
// push - 배열의 뒤에 값을 추가한다
// 반환값: undefined
// pop - 뒤에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// unshift - 배열의 앞에 값을 추가한다
// 반환값: 배열의 길이
// shift - 앞에서 값을 꺼내고 반환
// 반환값: 꺼낸 값

// 문제
// push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요.
// 입력값: [10, 20, 30, 40]
// 출력값: [10, 100, 20, 30, 50]

let arr = [10,20,30,40]
arr.pop(40)
arr.push(50)
arr.shift(10)
arr.unshift(100)
arr.unshift(10)

// arr.splice(start, deleteCount, item1, item2, ...)
let arr = [10, 20, 30]
arr.splice(1, 0, 100) // 1번째에, 0개를 지우고, 100을 넣어라
