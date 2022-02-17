function Newsletter() {
    this.observers = [];
  }
  
  Newsletter.prototype = {  //prototype에서 this 바인딩은 prototype 대상 객체를 가리킨다.
    subscribe: function (observer) {
      console.log(this);
      this.observers.push(observer);
    },
    unsubscribe: function(observer) {
      console.log(this);
      this.observers = this.observers.filter(ob => ob !== observer);
    },
    notify: function() {
      this.observers.forEach(observer => console.log('Hello ' + observer.toString()));
    }
  }
  
  let subscriber1 = 'Subscriber 1';
  let subscriber2 = 'Subscriber 2';
  let newsletter = new Newsletter();
  
  newsletter.subscribe(subscriber1);
  
  newsletter.subscribe(subscriber2);
  newsletter.notify(); 
  
  newsletter.unsubscribe(subscriber2);
  newsletter.notify(); 