/**
 * prototype을 이용한 상속
 */

//더클라스 크락포드가 소개한 자바스크립트 객체를 상속하는 방법
function create_object(obj){
  function F() {};
  F.prototype = obj;  //prototype으로 객체 등록
  return new F();     //자식 함수 반환
}


let person = {
  name : "test",
  getName : function(){
    return this.name;
  },
  setName : function(arg){
    this.name = arg;
  }
} 

//const child = create_object(person);
const child = Object.create(person);  //파라미터 인스턴스의 자식 인스턴스 생성 
console.log(child.prototype);
child.setName("유종원");
console.log(child.getName());

/**
 * 복사를 이용한 상속
 */

function extend(obj, prop){
  if( ! prop ){ prop = obj; obj = this; }
  for( let i in prop ){
    obj[i] = prop[i];
  } 
  console.log(obj);
  return obj; 
}

let student = Object.create(person);
let added = {
  setAge : function(arg){
    this.age = arg;
  },
  getAge : function(){
    return this.age;
  }
};

extend(student, added);

console.log(student);
student.setAge(28);
console.log(student.getAge());

/**
 * 클래스를 이용한 상속
 */

function Person(arg){
  this.name = arg;
};

Person.prototype.setName = function(value){
  this.name = value;
};

Person.prototype.getName = function(){
  return this.name;
};

function Student(arg){

};

let you = new Person("testName");
Student.prototype = you;

let me = new Student("Student");
me.setName("유종원");
console.log(me.getName());

/**
 * 위의 Student에 생성자로 전달하여도 Person 인스턴스를 생성할 때 전달한 값으로 객체가 생성된다.
 */

//상속에 최적화된 함수
let inherit = function(){
  let F = function() {};
  return function(Parent, Child){
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
  };
}();

let test = inherit(Person, Student);
test.setName("유종원");
console.log(test.getName());


