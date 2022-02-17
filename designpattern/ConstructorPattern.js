// Using {} to create empty objects:
//let person = {};

// Using Object() to create empty objects:
//let person = new Object();

// Using function constructor:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.showName = () => console.log(this.name?? 'test');
}
let person = new Person('Amy', 28);
let person2 = new Person();
person.showName();
console.log(person2);
person2.showName()