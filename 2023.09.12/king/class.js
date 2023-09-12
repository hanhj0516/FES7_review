function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function() {
    console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
  };
}

const myCar = new Car('Toyota', 'Camry', 2022);
myCar.drive(); // 출력: "Driving the 2022 Toyota Camry"


//위의 함수를 클래스문법으로 써보세요.

class Car {
constructor(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
}

drive (){
  console.log(`Driving the ${this.year} ${this.make} ${this.model}`);
}
}

const myCar = new Car('Toyota', 'Camry', 2022);
myCar.drive();



// Animal" 클래스를 생성하세요. 이 클래스는 "name"이라는 속성을 가지며, "speak"라는 메서드를 가져야 합니다. "speak" 메서드는 해당 동물의 소리를 출력해야 합니다.

// "Dog" 클래스를 "Animal" 클래스로부터 상속받아 생성하세요. "Dog" 클래스는 "breed"라는 추가적인 속성을 가지며, "speak" 메서드를 오버라이드하여 "Woof!"를 출력해야 합니다.

// "Cat" 클래스도 "Animal" 클래스로부터 상속받아 생성하세요. "Cat" 클래스는 "color"라는 추가적인 속성을 가지며, "speak" 메서드를 오버라이드하여 "Meow!"를 출력해야 합니다.

// "Animal", "Dog", "Cat" 클래스의 객체를 각각 하나씩 생성하고, 각 객체의 속성과 "speak" 메서드를 호출하여 결과를 출력하세요.


class Animal {
  constructor(name){
    this.name = name;
  }
    speak (){
      console.log('speak')
  }
}



// 문제: 은행 계좌 클래스문제 풀이

// BankAccount 클래스를 만들어 보세요.

// BankAccount 클래스는 다음 속성을 가집니다.

// owner (계좌 소유자의 이름)
// balance (계좌 잔액)
// BankAccount 클래스는 다음 메서드를 가집니다.

// deposit(amount) 메서드: 계좌 잔액에 주어진 양(amount)을 입금합니다.
// withdraw(amount) 메서드: 계좌 잔액에서 주어진 양(amount)을 출금합니다. 단, 잔액보다 많은 금액을 출금할 수 없습니다.
// getBalance() 메서드: 현재 계좌 잔액을 반환합니다.
// BankAccount 클래스의 인스턴스를 생성하고 다음 작업을 수행해 보세요.

// 계좌 소유자의 이름과 초기 잔액을 설정합니다.
// 일정 금액을 입금합니다.
// 일정 금액을 출금합니다.
// 현재 잔액을 출력합니다.
// 이 문제를 풀면서 클래스를 정의하고 메서드를 호출하는 방법을 연습할 수 있을 것입니다.

class BankAccount {
  constructor(owner, balance){
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount){
    return this.balance += amount ;
  }

  withdraw(amount){
    // if (this.balance > amount){
    // return this.balance -= amount
    // }
    return this.balance >= amount ? this.balance -= amount : alert(`잔액이 부족합니다.`);
  }

  getBalance(){
    return this.balance ;
  }
}

const hyeji = new BankAccount('혜지',50000);
hyeji.deposit(5000);
hyeji.withdraw(3000);
hyeji.getBalance();

////

class BankAccount {
  constructor(name, money){
  this.owner = name
  this.balance = money
  }

  deposit(입금액){
      return this.balance += 입금액;
  }

  withdraw(출금액) {
      if (this.balance >= 출금액) {
          this.balance -= 출금액;
      } else {
          alert('잔액이 부족합니다!');
      }
  }

  getBalance() {
      return this.balance;
  }
}

let adams = new BankAccount('adam', 3000)

adams.deposit(1000); //입금~

adams.withdraw(500); //출금~

console.log(`현재 잔액: ${adams.balance}`); //현재 잔액: 3500