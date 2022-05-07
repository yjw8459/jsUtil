function Person(arg){
  this.name = arg;

  this.getName = function(){
    return this.name;
  };

  this.setName = function(arg){
    this.name = arg;
  }
};

/**
 * Person 객체를 3개 생성할 경우, 
 * 각 인스턴스 별로 getName, setName 함수도 생성되어 메모리를 낭비할 수 있다. 
 * 인스턴스 별로 공통 함수가 있을 경우 prototype에 정의하는 것이 메모리에 효율적이다.
 * 
 * 더글라스 크락포드는 함수를 생성자로 사용하여 프로그래밍 하는 것을 추천하지 않는다.
 * 생성된 함수는 new를 통해 호출할 수 있고, 직접 호출도 가능하기 때문이다.
 * 또 직접 호출할 경우와 new를 통해 호출할 경우 this 바인딩이 달라진다.
 * 이러한 문제 때문에, 생성자로 사용되는 함수의 경우는 첫 글자를 대문자로 할 것을 권장한다.
 */
var person1 = new Person("test1");
var person2 = new Person("test2");
var person3 = new Person("test3");


/**
 * prototype을 이용한 메모리 개선 
 */
Function.prototype.method = function(name, func){
  console.log(this);
  this.prototype[name] = func;
};

//생성자로 사용될 함수는 함수 첫 글자를 대문자로 한다.
function SolutionPerson( arg ){
  console.log(this);
  this.name = arg;
}

SolutionPerson.method( "setName", function(value){
  this.name = value;
});

SolutionPerson.method( "getName", function(){
  return this.name;
} );
console.log(SolutionPerson.prototype);
person1 = new SolutionPerson("solution1");
person2 = new SolutionPerson("solution2");
person3 = new SolutionPerson("solution3");

console.log(person1.getName());
console.log(person2.getName());
console.log(person3.getName());

SolutionPerson('this'); //직접 호출의 경우 this : window 
new SolutionPerson('this'); //생성자를 통한 호출의 경우 this : SolutionPerson


