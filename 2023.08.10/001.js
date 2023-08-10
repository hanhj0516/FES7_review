// 전달받은 객체의 키와 벨류값을 모두 출력하는 for문을 만들어보세요.

const person = {
    name: ‘재현’,
    age: 20,
    gender: 'male'
  };

  for (let index = 0; index < person.length; index++) {
    const element = person[index];
    console.log(`${key} : ${value}`);
  }
  

  let input;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");




//사용자가 입력한 메뉴 번호에 따라 해당하는 메뉴 이름과 가격을 출력합니다. 만약 종료 번호를 누르면 ‘종료합니다’ 를 콘솔에 출력합니다.
    const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];




const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];

let input = 0;

while (input !== -1) {
    input = parseInt(prompt(' 메뉴를 선택해주세요 : 아메리카노 : 1 / 카페라떼 : 2 / 카페모카 : 3 / 핫초코 : 4 / 과일주스 : 5 / 종료하기 : -1 '));

    switch (input) {
        case 1:
            console.log(`${menu[0].name} : ${menu[0].price}`);
            break;
        case 2:
            console.log(`${menu[1].name} : ${menu[1].price}`);
            break;
        case 3:
            console.log(`${menu[2].name} : ${menu[2].price}`);
            break;
        case 4:
            console.log(`${menu[3].name} : ${menu[3].price}`);
            break;
        case 5:
            console.log(`${menu[4].name} : ${menu[4].price}`);
            break;
        case -1:
            console.log(`종료합니다.`);
            break;
        default:
            console.log('잘못된 입력입니다.');
    }
}


///////////////////

const student = [
    {
        id: 1, product: '연필', stock: 10
    },
    {
        id: 2, product: '지우개', stock: 33
    },
    {
        id: 3, product: '체육복', stock: 2
    },
    {
        id: 4, product: '만연필', stock: 5
    },
    {
        id: 5, product: '책받침', stock: 100
    }
];

student.sort(function (a , b) {
    if (a.product < b.product) {
        return -1;
    } else if (a.product > b.product) {
        return 1;
    } else (a.product < b.product) {
        return 0;
    }
}

)


////////////////////////
const studentList = [
    {
        id: 1, name: '원범', score: 'great'
    },
    {
        id: 2, name: '김진', score: 'so cute'
    },
    {
        id: 3, name: '혜원', score: 'good good'
    },
    {
        id: 4, name: '재현', score: 'too cool for school'
    }
]

studentList.forEach (function (item) {
    console.log(item.name);
});

const scores = studentList.map((value) => `${value.score}❤`);
console.log(scores);


//////////////////////////
//로또만들기 배열로 중복없이 함수로


// Math.random()*45 + 1

let lotto = [];
for( let i=0 ; i<6 ; i++) {
    let lottoNum = parseInt(Math.random()*45 + 1);
    lotto.push(lottoNum);
}
console.log(lotto)