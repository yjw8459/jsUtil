// state : "pending", result : undefined
// new Promise 호출 시 내부 콜백 실행된다.
let promise = new Promise(function(resolve, reject){    // new Promise(executor)
    // resolve, reject 자바스크립트에서 자체 제공하는 콜백 
    console.log(resolve);
    console.log(reject);
    console.log('execute');
});

//이행
// state: "fulfulled", result: "완료"
promise = new Promise(function(resolve, reject) {
    // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.
  
    // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 됩니다.
    setTimeout(() => resolve("완료"), 1000);
});

//거절
// state: "rejected", result: Error 객체
promise = new Promise(function(resolve, reject) {
    // 1초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보냅니다.
    setTimeout(() => reject(new Error("에러 발생!")), 1000);
});


// 이행, 거절된 Promise는 처리된(Settled) Promise라고 부른다.
// 또, 반대되는 Promise로 대기(pending) 상태의 Promise가 있다.

