/**
 * 코드에 대한 캡슐화를 제공하기 때문에 더욱 안전한 애플리케이션을 만들 수 있다.
 * 
 * 특정 구성요소를 다른 구성요소와 독립적으로 유지하는데 가장 널리 사용되는 디자인 패턴.
 * 잘 구조화된 코드를 지원하기 위해 느슨한 결합을 제공한다.
 * "모듈"은 자바스크립트의 "클래스"이다.
 * 클래스의 많은 장점 중 하나는 캡슐화이다.
 * 상태 및 동작을 다른 클래스에서 엑세스하지 못하도록 보호한다.
 * 모듈 패턴은 public, private 접근 권한 설정을 가능하게 한다. 
 * 
 * 모듈은 변수와 메서드를 보호하는 클로저처럼 private를 허용하고 객체를 반환해야 한다.
 */

const bookModule = (function() {
  // private
  let title = 'JavaScript';
  let price = 15; //즉 모듈 패턴을 사용하면 접근할 수 없음 !! private Zone
  // public
  return {  //접근할 수 있음 !! public Zone
    printTitle: function () {
      console.log(title);
    }
  }
})(); //객체를 생성해서 return 하므로 parameter를 전달할 수 없

bookModule.printTitle(); // JavaScript

console.dir(bookModule);



const bookModule2 = (function(param1, param2) {
  // private
  let title = 'JavaScript';
  let price = 15;
  // public
  return {
    printTitle: function (param3, param4) {
      console.log(param1);
      console.log(param2);
      console.log(param3);
      console.log(param4);
      console.log(title);
    }
  }
})(1, 2);
console.log(bookModule2.printTitle(3, 4));



const testModule = ( () => {

  //계산 식에 수치에는 접근할 수 없음 
  const mul = 2;  
  const div = 3;
  const add = 10;
  const min = 3;

  return {
    multiple : ( target ) => {
      return target * mul;
    },
    division : ( target ) => {
      return target / div;
    },
    plus : ( target ) => {
      return target + add;
    },
    minus : ( target ) => {
      return target - min;
    }
  }
})();

console.log(testModule.plus(10));
console.log(testModule.minus(10));
console.log(testModule.multiple(10));
console.log(testModule.division(10));

console.log(testModule.mul);  //private Zone에는 접근 불가 ! undefined

/**
 * Revealing Module 패턴 
 * 
 * 모듈 패턴의 변형이다.
 * 이 패턴의 목적은 캡슐화를 유지하고 객체 리터럴에서 반환된 특정 변수와 메서드들을 
 * 잘 나타내기 위한 것.
 */

const reveaingModule = (() => {
  let privateValiable = 10;
  
  var privateMethod = () => {
    console.log('내부 정보입니다.');
    privateValiable++;  //내부 정보 열람 카운트 +1
  };
  var methodToExpose = () => {
    console.log('내부 정보입니다2.');
  };
  var methodToExpose2 = () => {
    privateMethod();
  };

  return {
    first : methodToExpose, //내부 정보를 외부로 공개하고 호출할 순 있지만 직접 값을 전달할 수는 없음.
    second : methodToExpose2
  };
})();
reveaingModule.first();
reveaingModule.second();
console.log(reveaingModule.first);
console.log(reveaingModule.second);