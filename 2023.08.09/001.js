/*사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 

나이가 18세 이상이면 "안녕하세요!"를 출력하고, 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 출력하며, 10세 미만이면 “부럽다…” 를 출력합니다.*/

const x = prompt("나이를 입력해주세요");
if ( x>=18 ) { console.log("안녕하세요!")
} else if ( x>=10 ) {console.log("안녕! 반가워 꼬마친구!")
} else{console.log("부럽다..")
}



/*사용자로부터 입력받은 성적에 따라 등급을 출력하는 프로그램을 작성하세요. 
성적이 90점 이상이면 "A", 80점 이상이면 "B", 70점 이상이면 "C", 60점 이상이면 "D", 그 외에는 “강해져서 돌아와라”를 출력합니다. */

// let score = Number(prompt("성적을 입력해주세요")); > 숫자로 바꿔줌


//if문
const score = parseInt(prompt("성적을 입력해주세요")); > //소수점 없는 숫자로 바꿔줌 숫자 뒤의 문자열은 없애줌

if (score>=90) {console.log("A")}
else if(score>=80) {console.log("B")}
else if(score>=70) {console.log("C")}
else if(score>=60) {console.log("D")}
else{console.log("강해져서 돌아와라")}


//

let score = prompt("성적을 입력해주세요");

const grade = score >=90 ?"A" : score>= 80 ? "B" : score>=70 ? "C" : score>=60 ? "D" : "강해져서 돌아와라"


//switch문


const score = parseInt(prompt('점수를 입력하세요'));

switch (true) {
    case score >= 90 : 
        console.log("A");
        break;
    case score >= 80 : 
        console.log("B");
        break;
    case score >= 70 : 
        console.log("C");
        break;
    case score >= 60 : 
        console.log("D");
        break;
    default:
        console.log("강해져서 돌아와라");
}
