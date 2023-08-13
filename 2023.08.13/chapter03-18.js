//p.155 2번

//사용자에게 태어난 연도를 입력받아 띠 출력하기

const year = Number(prompt('태어난 해를 입력해주세요',''))
const rest = year % 12
let animal
if      (rest===0){animal='원숭이'}
else if (rest===1){animal='닭'}
else if (rest===2){animal='개'}
else if (rest===3){animal='돼지'}
else if (rest===4){animal='쥐'}
else if (rest===5){animal='소'}
else if (rest===6){animal='호랑이'}
else if (rest===7){animal='토끼'}
else if (rest===8){animal='용'}
else if (rest===9){animal='뱀'}
else if (rest===10){animal='말'}
else    {animal='양'}

alert(`${year}에 태어났다면 ${animal}띠입니다.`)

//switch로 변경

const year = Number(prompt('태어난 해를 입력해주세요',''))
switch (year%12) {
    case 0:
        alert(`${year}에 태어났다면 원숭이띠입니다.`)
        break;
    case 1:
        alert(`${year}에 태어났다면 닭띠입니다.`)
        break;
    case 2:
        alert(`${year}에 태어났다면 개띠입니다.`)
        break;
    case 3:
        alert(`${year}에 태어났다면 돼지띠입니다.`)
        break;
    case 4:
        alert(`${year}에 태어났다면 쥐띠입니다.`)
        break;
    case 5:
        alert(`${year}에 태어났다면 소띠입니다.`)
        break;
    case 6:
        alert(`${year}에 태어났다면 호랑이띠입니다.`)
        break;
    case 7:
        alert(`${year}에 태어났다면 토끼띠입니다.`)
        break;
    case 8:
        alert(`${year}에 태어났다면 용띠입니다.`)
        break;
    case 9:
        alert(`${year}에 태어났다면 뱀띠입니다.`)
        break;
    case 10:
        alert(`${year}에 태어났다면 말띠입니다.`)
        break;
    case 11:
        alert(`${year}에 태어났다면 양띠입니다.`)
        break;
}

//방법2

const year = Number(prompt('태어난 해를 입력해주세요',''))
const rest = year%12
let animal
switch (rest) {
    case 0 : animal = '원숭이';
        break
    case 1 : animal = '닭';
        break
    case 2 : animal = '개';
        break
    case 3 : animal = '돼지';
        break
    case 4 : animal = '쥐';
        break
    case 5 : animal = '소';
        break
    case 6 : animal = '호랑이';
        break
    case 7 : animal = '토끼';
        break
    case 8 : animal = '용';
        break
    case 9 : animal = '뱀';
        break
    case 10 : animal = '말';
        break
    case 11 : animal = '양';
        break
}

alert (`${year}에 태어났다면 ${animal}띠입니다.`)



//----------------------------------//
//p.156 3번

//태어난 연도를 입력받아 둥물 이름을 쥐부터'자축인묘진사오미신유술해'로 변경> 입력한 연도의'갑을병정무기경신임계'를 계산 > 둘을 합쳐 같이 출력
//ex)1991년은 신미 년입니다.
//연도를 10으로 나눈 나머지 0,1,2,3,4,5,6,7,8,9 '경신임꼐감을병정'

const year = Number(prompt('태어난 해를 입력해주세요',''))
const rest1 = year % 12
let 띠
if      (rest1===0){띠='신'}
else if (rest1===1){띠='유'}
else if (rest1===2){띠='술'}
else if (rest1===3){띠='해'}
else if (rest1===4){띠='자'}
else if (rest1===5){띠='축'}
else if (rest1===6){띠='인'}
else if (rest1===7){띠='묘'}
else if (rest1===8){띠='진'}
else if (rest1===9){띠='사'}
else if (rest1===10){띠='오'}
else    {띠='미'}

const rest2 = year % 10
let 간
if      (rest2===0){간='경'}
else if (rest2===1){간='신'}
else if (rest2===2){간='임'}
else if (rest2===3){간='계'}
else if (rest2===4){간='갑'}
else if (rest2===5){간='을'}
else if (rest2===6){간='병'}
else if (rest2===7){간='정'}
else if (rest2===8){간='무'}
else    {간='기'}

alert(`${year}년은 ${간}${띠}년입니다.`)