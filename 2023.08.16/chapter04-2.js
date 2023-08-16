//반복문

//for in 반복문

for (const 반복 변수(인덱스) in 배열 또는 객체){
    문장
}

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']
    for (const i in todos) {
        console.log(`${i}번째 할 일 : ${todos[i]}`)
        }


//for of 반복문

for (const 반복 변수(요소의 값) of 배열 또는 객체){
    문장
}

const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업']
    for (const todo of todos) {
        console.log(`오늘의 할 일 : ${todo}`)
    }


//for 반복문

for (let i = 0; i < 반복 횟수; i++){
    문장
}

for (let i = 0; i < 5; i++) {
    console.log(`${i}번째 반복입니다.`)
}
/*>0번째 반복입니다.
>1번째 반복입니다.
>2번째 반복입니다.
>3번째 반복입니다.
>4번째 반복입니다.*/



//1~100까지 더하기

let output = 0
for (let i = 1; i <=100; i++1) {
    output += i
}
console.log(`1~100까지 숫자를 모두 더하면 ${output}입니다.`)