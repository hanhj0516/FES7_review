//재귀 함수를 사용하여 숫자를 원소로하는 배열의 모든 요소를 합하는 함수를 만들어 보세요!


function add(n) {
    if(n.lenght <=1){
        return n
    }
    return n + add(n-1)
}

let arr=[1,2,3]
console.log(n)


function addEle(){

    addEle();
}





// 클로저
const person = function () {
    let age = 15;

    return {
        name: 'jaehyun',

        getAge() {
            return age;
        },

        setAge(val) {
            age = val
        }
    }
}

const man = person();



const outer = function () {
    let a = 1;

    const inner = function () {
        let b = 5;
        let c = 6;
        a = a + b + c;

        console.log(a);
    }

    return inner;
}

const newInner = outer();

newInner();

//person이 return되면 person이라는 함수는 사라진다.
//하지만 age는 어딘가 메모리에 남아있다.
//이유는 내부 매서드에서 age를 참조하고 있기 때문이다.
//age에 대한 접근 권한은 return 객체에만 있다.
//getAge를 통해서만 접근하고
//setAge를 통해서만 수정 가능하다.
//안전하다.



const Info = function (name) {
    let Address = "한국";
    return {
      name: name,
      getAddress() {
        return Address;
      },
      setAddress(string) {
        Address = string;
      },
    };
  };
  
  const myInfo = Info("지현");
  myInfo.setAddress("부평");
  
  console.log(myInfo);

  //기본값을 한국으로 하고 주소를 새로 설정하는 코드로 바꿔봤어요! 이제 주소는 비공개여서 console에선 나오지 않도록 했습니다!ㅎㅎ