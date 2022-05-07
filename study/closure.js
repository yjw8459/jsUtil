function outerFunc(){
  let x = 10;
  const innerFunc = function(){
    console.log('innerFunc' + x);
  }
  return innerFunc;
}

const inner = outerFunc();
inner.x = 11;
inner.y = 12;
console.log(inner);
inner();


function testOuterFunc(parameter){
  let number = parameter;
  return function(parameter2){
    number += parameter2;
    console.log(number);
  };
}

let test = testOuterFunc(10);
let test2 = testOuterFunc(20);
test(3);
