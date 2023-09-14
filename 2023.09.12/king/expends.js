// 주어진 코드를 수정하여 도형(Shape) 클래스를 상속받는 여러 하위 클래스를 만들어 보세요. 각 하위 클래스는 도형의 속성을 상속받으면서, 추가로 다음과 같은 메서드들을 구현해야 합니다.

// getArea 메서드: 해당 도형의 넓이를 반환합니다.
// getPerimeter 메서드: 해당 도형의 둘레를 반환합니다.
// 도형의 종류와 각 도형의 속성은 다음과 같습니다:

// 직사각형(Rectangle): 가로(w)와 세로(h) 길이를 가집니다.
// 원(Circle): 반지름(radius)을 가집니다.
// 삼각형(Triangle): 세 변(a, b, c)의 길이를 가집니다.
// 이러한 클래스들을 만들고, 각 클래스의 인스턴스를 생성하여 다음 코드가 동작하도록 수정하세요.

// 클래스 상속을 사용하여 각 도형 클래스를 만듭니다.
// 각 도형 클래스에서 getArea와 getPerimeter 메서드를 구현합니다. 도형마다 넓이와 둘레를 계산하는 방법이 다를 것입니다.

class Shape {
  getArea(넓이){
    return 넓이;
  };
  getPerimeter(둘레){
    return 둘레;
  };
}

class Rectangle extends Shape {
  constructor(가로, 세로){
    super();
    this.w = 가로 ;
    this.h = 세로 ;
  };
  getArea(w,h){
    console.log(`직사각형의 넓이는 ${this.w * this.h}입니다.`);
  };
  getPerimeter(w,h){
    console.log(`직사각형의 둘레는 ${(this.w + this.h)*2}입니다.`);
  };
}

const 직사각형1 = new Rectangle(2,3);
직사각형1.getArea();
직사각형1.getPerimeter();

class Circle extends Shape {
  constructor(반지름){
    super();
    this.r = 반지름 ;
  };
  getArea(r){
    console.log(`원의 넓이는 ${(this.r**2)*Math.PI}입니다.`)
  };
  getPerimeter(r){
    console.log(`원의 둘레는 ${this.r*2*Math.PI}입니다.`)
  };
}

const 원1 = new Circle(2);
원1.getArea();
원1.getPerimeter();