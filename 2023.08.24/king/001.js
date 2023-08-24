//문제 1
/*  1-1. 배열 내 모든 객체의 이름을 추출하여 새로운 배열 생성
    1-2. 배열 내 객체 중 나이 30세 이상의 조건을 만족하는 객체를 추출
*/
    var people = [
	{ name: "John", age: 30 },
	{ name: "Jane", age: 25 },
	{ name: "Michael", age: 40 },
]; 

    const arr1 = people.map(obj => obj.name) //obj를 obj.name 값으로 대체해서 새로운 배열(map)반환 >문자열 반환
    console.log(arr1)

    const arr2 = people.filter(obj => obj.age >=30) //obj를 obj.age가 30이상인 객체들을 필터링 하겠다 > 객체들 반환
    console.log(arr2)



let people2 = people.map((item) => {
    return item.name;
})

console.log(people2);


//------------------------------------------------------------------

//문제2
const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
    }
    
    //Q. 그냥 프린트 함수- 출력하기
    
    //1: 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.

    function print1(hero) {const text = `1: ${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;console.log(text);}


    //--------------------------------------------------------------

//문제3
//// 주어진 객체 data는 각 학생의 이름을 키로 하고, 점수를 밸류로 갖습니다.

// 가장 높은 점수를 가진 학생의 이름을 찾아 반환하세요.
// 가장 높은 점수를 가진 학생의 점수를 반환하세요.
// 객체에서 점수가 특정 값 이상인 학생들을 찾아 이름과 점수를 포함한 배열로 반환하세요.

const data = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 92,
    "David": 65,
    "Ella": 78
    };


    //다은님답
    function name(data) {
        return Object.entries(data).sort((a, b) => b[1] - a[1])[0][0];
        //sort로 a,b 객체의 1번째 인덱스 비교해서 큰 값을 앞으로 보냄
        //그렇게 정렬된 배열의 0번째 인덱스는 Charlie:92이고 그 객체의 0번째 인텍스는 Charlie
    }
    
    function grade(data) {
        return Object.values(data).sort((a, b)=> b - a)[0];
        //sort로 큰 값부터 정렬한 후 0번째 인덱스
    }
    
    
    function nameGrade(data) {
        return Object.entries(data).sort((a, b) => b[1] - a[1])[0];
    }


    function nameGrade(data, num) {
        return Object.entries(data).filter(e => e[1] >= num);
    }
    // data를 Object.entries로 배열로 만들고 그 배열을 필터링하는데 여기서 e는 각 배열["Alice": 85]을 넣어서 1번째 인덱스가 num 이상인 배열을 필터링

    //혜지
    let bestStu.sort




    const bestStuSco = Object.values(data);
    bestStuSco.sort();
    console.log(bestStuSco[bestStuSco.length -1]);

    let x = 80;
    const best = Object.entries(data);
    const bestFilterd = best.filter(best => best[1]>x);
    console.log(bestFilterd);
