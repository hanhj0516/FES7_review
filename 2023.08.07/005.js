// map
// 면접 질문에서도 많이 나옵니다!
// 교과서에서 보는 map의 용도와
// 실무에서 사용하는 map의 용도가 조금 다릅니다.

// map의 형태
[1, 2, 3].map((value, index, arr)=> {
    console.log(value, index, arr)
    return value
})

// 교재에는 주로 아래와 같이 써있습니다.
[1, 2, 3].map(v=> {
    return v ** 2
})

[1, 2, 3, 4].map(v => {
    return v * 3
})

// forEach와 차이점
// 1. forEach는 return이 없습니다.
// 2. map은 원본을 수정하여 새로운 배열을 만들고, forEach는 원본 배열을 변경하지 않습니다.

// forEach의 경우 1부터 100까지 더하는 코드
let sum = 0
Array(100).fill(0).forEach((v, i) => {
    sum += i + 1
})
console.log(sum)

// map을 사용해서 1부터 100까지 더하는 코드
let sum = 0
Array(100).fill(0).map((v, i) => i)


[1, 2, 3, 4].map(v => 'hello world')
// 1. v는 1, 2, 3, 4입니다. index, arr는 들어가지 않았습니다.
// 2. return은 'hello world'
// ['hello world', 'hello world', 'hello world', 'hello world']

[1, 2, 3, 4].map(v => 'hello world')
// ['hello1', 'hello2', 'hello3', 'hello4']

[1, 2, 3, 4].map(v => 'hello' + v)
// ['hello1', 'hello2', 'hello3', 'hello4']

let data = [1, 2, 3, 4]
data.map(v => 'hello' + v)
data // 원본은 수정되지 않습니다!

[1, 2, 3, 4].map(v => 'hello' + v)
// ['hello1', 'hello2', 'hello3', 'hello4']