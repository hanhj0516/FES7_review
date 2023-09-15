class VendingMachineFunc {
  constructor() {
      // section 1 요소 선택
      const vMachine = document.querySelector('.section1');
      this.balance = vMachine.querySelector(".bg-box p");
      this.itemList = vMachine.querySelector('.cola-list');
      this.inputCostEl = vMachine.querySelector('#input-money');
      this.btnPut = vMachine.querySelector('#input-money+.btn');
      this.btnReturn = vMachine.querySelector('.bg-box+.btn');
      this.btnGet = vMachine.querySelector('.btn-get');
      this.stagedList = vMachine.querySelector('.get-list');

      // section 2 요소 선택
      const myInfo = document.querySelector('.section2');
      this.myMoney = myInfo.querySelector('.bg-box p');

      // section3 요소 선택
      const getInfo = document.querySelector('.section3');
      this.getList = getInfo.querySelector('.get-list');
      this.txtTotal = getInfo.querySelector('.total-price');
  }

  setup() {
      this.bindEvents();
  }

  // 이벤트를 붙입니다.
  bindEvents() {
      /**
       * 1.입금 버튼 기능
       * 소지금 === 소지금 - 입금액
       * 잔액 === 기존의 잔액 + 입금액
       * 입금액이 소지금보다 많으면 "소지금이 부족합니다." 경고창을 띄웁니다.
       * 입금액 인풋창은 초기화 되어야합니다.
       */
      this.btnPut.addEventListener('click', (event) => {
          // 사용자 입력값
          const inputCost = parseInt(this.inputCostEl.value);
          // 현재 사용자의 돈
          const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
          // 현재 자판기 잔액
          const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

          // 입금액이 있고, 소지금 보다 적거나 같다면
          if (inputCost <= myMoneyVal && inputCost > 0) {

              this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';

              this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';
          } else {
              alert("소지금이 부족합니다.");
          }

      });
  }
}


export default VendingMachineFunc;