
//140p 4번

//사용자에게 숫자를 입력받아 양수, 0, 음수를 구분하는 프로그램을 만들어

const a = Number(prompt('숫자를 입력해주세요',''));

if (a > 0) {alert(`입력한 숫자는 양수입니다.`)
} else if (a === 0) { alert(`입력한 숫자는 0입니다.`)
} else {alert(`입력한 숫자는 음수입니다.`)
}


//-----------------------------------------------------

//140p 5번

//사용사에게 숫자를 입력받아 홀수와 짝수를 구분하는 프로그램을 만들어

const a = Number(prompt('숫자를 입력해주세요',''))

if (a%2===0) {alert(`입력한 숫자는 짝수입니다.`)
} else {alert(`입력한 숫자는 홀수입니다.`)}


//-----------------------------------------------------

//141p 6번

//현재가 몇 월인지 확인하고, 계절을 구분하는 프로그램을 만들어

const a = parseInt(prompt('월을 입력해주세요',''))

if (a>=3 && a<=5) {alert(`${a}월은 봄입니다.`)
} else if (a>=6 && a<=8) {alert(`${a}월은 여름입니다.`)
} else if (a>=9 && a<=11) {alert(`${a}월은 가을입니다.`)
} else if (a===12 ||a===1 || a===2 ) {alert(`${a}월은 겨울입니다.`)
} else {alert`다시 입력해주세요.`}


//-----------------------------------------------------

//155p 2번

//태어난 연도를 입력받아 띠 출력

const 