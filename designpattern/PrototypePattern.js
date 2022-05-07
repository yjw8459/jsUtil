/**
 * prototype 디자인 패턴은 자바스크립트의 프로토타입 상속을 기반으로 만들어졌다.
 * prototype 모델은 주로 "성능이 중요한 상황에서 객체를 생성"하는데 사용된다.
 * 
 */

function Book(title, price) {
  this.title = title;
  this.price = price;
  this.printTitle = () => console.log(this.title);
}

function BookPrototype(prototype) { //함수 안에서 this는 함수 
  console.log(this);
  this.prototype = prototype;
  this.clone = () => {
    let book = new Book();
    book.title = prototype.title;
    book.price = prototype.price;
    
    return book;
  };
}

let sampleBook = new Book('JavaScript', 15);
let prototype = new BookPrototype(sampleBook);//sampleBook을 prototype으로 등록 
console.log(prototype);
let book = prototype.clone(); //등록된 prototype에 복사본 
console.log(prototype.prototype); //원본 
console.log(book);  //복사본 
book.printTitle();


/**
 * Revealing prototype Pattern
 * 
 * 객체 리터럴을 반환하여 public 및 private 멤버를 캡슐화한다.
 */

var Car = function(){
  this.corp = "kia",
  this.name = "test",
  this.ver = "2022"
}

Car.prototype = function(){
  var go = function(){
    console.log('go !');
  };
  var stop = function(){
    console.log('stop ! ');
  };
  
  var publicZone = {
    pressBrakePedal : stop,
    pressGasPedal : go
  };
  return publicZone;
}();

console.log(Car);
//prototype을 정의하고 인스턴스를 생성해야한다.
new Car().pressBrakePedal();
new Car().pressGasPedal();