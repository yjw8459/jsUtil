Vue

setup() -> data() -> created() 


data()
새로운 컴포넌트 인스턴스를 생성하기 위해 data 함수를 호출한다.

data() 함수는 하나의 객체만 반환한다.
Vue는 반응형 시스템으로 객체를 감싸서 컴포넌트 인스턴스에 $data로 저장한다.
Vue는 컴포넌트 인스턴스를 통해 자체 내장 API를 노출할때, $를 접두사로 사용한다.
Template 에서 data() 반환 객체의 프로퍼티를 접근한다.


setup()
Vue3 문법
**setup이 실행될 때, 컴포넌트 인스턴스는 생성되지 않은 상태이다.**
setup() 내부의 this는 현재 활성화된 인스턴스에 대한 참조가 아니다.
하나의 return 객체 안에 있는 프로퍼티들은 Vue 인스턴스로 등록된다.(this 접근 가능)

1. props
2. context
두가지 전달인자를 가진다.

props
반응성이 있고, 새로운 props가 전달되면 업데이트된다.

context 
반응성 없음.



methods()
컴포넌트 인스턴스에 메서드를 추가하려면 methods 옵션을 사용해야한다.
methods 옵션은 사용할 메서드들을 담은 하나의 객체이어야 한다.

Vue는 methods 안에서 컴포넌트 인스턴스를 항상 참조할 수 있도록 this 값을 자동으로 바인딩한다.
(메서드가 이벤트 리스너나 콜백으로 사용될 때, 올바른 this 값을 유지하게 된다.)

애로우펑션을 사용하여 methods의 method를 정의하면 적절한 this 값을 바인딩하지 못하므로 주의 

methods도 template 내부에서 접근할 수 있음.
<button @click="increment">Up vote</button>


라이프 사이클 훅 

beforeCreate

타입: Function

상세:

인스턴스가 초기화 된 직후, 데이터 관찰 및 이벤트/감시자(watcher) 설정 전에 동기적으로 호출됩니다.


created

타입: Function

상세:

인스턴스가 생성된 후 동기적으로 호출됩니다. 이 단계에서 인스턴스는 data 관찰, computed 속성, methods, watch/이벤트 콜백 등의 설정이 준비되었음을 의미하는 옵션 처리를 완료합니다. 그러나 마운트 단계가 시작되지 않았으며, $el 속성을 사용할 수 없습니다.


beforeMount

타입: Function

상세:

마운트가 시작되기 직전에 호출됩니다. render 함수가 처음으로 호출됩니다.

이 훅은 서버측 렌더링 중 호출되지 않습니다.



mounted

타입: Function

상세:

인스턴스가 마운트된 후 호출되며, 여기서 Vue.createApp({}).mount()로 전달된 엘리먼트는 새로 생성된 vm.$el로 대체됩니다. 루트 인스턴스가 문서 내의 엘리먼트에 마운트되어 있으면, mounted가 호출될 때 vm.$el도 문서에 포함(in-document)됩니다.

mounted는 모든 자식 컴포넌트가 마운트되었음을 보장하지 않습니다. 전체 화면내용이 렌더링될 때까지 기다리려면, mounted 내에서 vm.$nextTick를 사용합니다:

```javascript
mounted() {
  this.$nextTick(function () {
    // 전체 화면내용이 렌더링된 후에 아래의 코드가 실행됩니다.
  })
}
```
이 훅은 서버측 렌더링 중 호출되지 않습니다.


beforeUpdate

타입: Function

상세:

DOM이 패치되기 전에 데이터가 변경될 때 호출됩니다. 이 훅은 업데이트 전에 기존 DOM에 접근 (예: 수동으로 추가된 이벤트 리스너를 제거)할 수 있는 좋습니다.

초기 렌더링만 서버측에서 수행되기 때문에, 이 훅은 서버측 렌더링 중 호출되지 않습니다.


updated
타입: Function

상세:

데이터가 변경되어 가상 DOM이 다시 렌더링되고 패치된 후에 호출됩니다.

updated가 호출될 때 컴포넌트의 DOM이 업데이트되므로, 여기에서 DOM의 종속적인 연산(DOM-dependent operations)을 할 수 있습니다. 그러나 대부분의 경우 훅 내부에서 상태를 변경하지 않아야 합니다. 상태 변경에 반응하기 위해, 일반적으로 computed property 속성이나 watcher를 사용하는 것이 더 좋습니다.

updated는 모든 하위 컴포넌트가 다시 렌더링되었음을 보장하지 않습니다. 전체 화면이 재렌더링 될 때까지 기다리려면, updated 내부에서 vm.$nextTick를 사용합니다:

```javascript
updated() {
  this.$nextTick(function () {
    // 전체 화면내용이 다시 렌더링된 후에 아래의 코드가 실행됩니다. 
  })
}
```
이 훅은 서버측 렌더링 중 호출되지 않습니다.



activated

타입: Function

상세:

keep-alive 컴포넌트가 활성화될 때 호출됩니다.

이 훅은 서버측 렌더링 중 호출되지 않습니다.


deactivated

타입: Function

상세:

keep-alive 컴포넌트가 비활성화될 때 호출됩니다.

이 훅은 서버측 렌더링 중 호출되지 않습니다.


beforeUnmount

타입: Function

상세:

컴포넌트 인스턴스가 마운트 해제(unmounted) 되기 직전에 호출됩니다. 이 단계에서 인스턴스는 여전히 완전하게 작동합니다.

이 훅은 서버측 렌더링 중 호출되지 않습니다.


unmounted

타입: Function

상세:

컴포넌트 인스턴스가 마운트 해제(unmounted)된 후 호출됩니다. 이 훅이 호출되면, 컴포넌트 인스턴스의 모든 디렉티브가 바인딩 해제되고, 모든 이벤트 리스너가 제거되며, 모든 자식 컴포넌트 컴포넌트도 마운트 해제(unmounted)됩니다.

이 훅은 서버측 렌더링 중 호출되지 않습니다.



errorCaptured

타입: (err: Error, instance: Component, info: string) => ?boolean

상세:

자손 컴포넌트의 에러가 포착(capture)될 때 호출됩니다. 이 훅은 세 가지 전달인자(에러 자체(err), 에러를 발생시킨 컴포넌트 인스턴스(instance), 그리고 에러가 포착된 위치에 대한 정보가 들어있는 문자열(info))를 받습니다. 이 훅은 false를 반환하여 에러가 더 전파되지 않도록 할 수 있습니다.

TIP

이 훅에서 컴포넌트 상태를 수정할 수 있습니다. 하지만 에러가 포착되었을 때, 템플릿이나 렌더 함수 안에서 다른 내용을 더 이상 실행시키지 않는 조건을 가지는 것이 중요합니다. 그렇지 않다면, 컴포넌트가 무한루프에 빠질 것입니다.

에러 전파 규칙

기본적으로, 모든 에러는 정의된 경우에 전역 config.errorHandler로 보내지므로, 에러들은 계속 한 곳에서 분석 서비스에 보고될 수 있습니다.

여러 개의 errorCaptured 훅들이 컴포넌트의 상속 체인이나 부모 체인에 존재하면, 모두 동일한 에러로 호출됩니다.

errorCaptured 훅 자체에서 에러가 발생하면, 이 에러와 원래 포착된 에러가 모두 전역 config.errorHandler로 보내집니다.

errorCaptured 훅은 에러가 더 전파되지 않도록 false를 반환할 수 있습니다. 이는 본질적으로 "이 에러는 처리되었으므로 무시해야 합니다."라는 의미입니다. 이 에러에 대해 어떠한 추가적인 errorCaptured 훅이나 전역 config.errorHandler가 호출되지 않도록 합니다.



renderTracked

타입: (e: DebuggerEvent) => void

상세:

가상 DOM의 재렌더링이 추적될 때 호출됩니다. 이 훅은 debugger event를 전달인자로 받습니다. 이 이벤트는 어떤 작업이 컴포넌트를 추적했는지와 해당 작업의 대상 객체 및 키를 알려줍니다.

사용법:

<div id="app">
  <button v-on:click="addToCart">Add to cart</button>
  <p>Cart({{ cart }})</p>
</div>

```javascript
const app = Vue.createApp({
  data() {
    return {
      cart: 0
    }
  },
  renderTracked({ key, target, type }) {
    console.log({ key, target, type })
    /* 컴포넌트가 최초로 렌더링될 때 출력됩니다:
    {
      key: "cart",
      target: {
        cart: 0
      },
      type: "get"
    }
    */
  },
  methods: {
    addToCart() {
      this.cart += 1
    }
  }
})

app.mount('#app')
```


renderTriggered

타입: (e: DebuggerEvent) => void

상세:

가상 돔의 재렌더링이 트리거 될 때 호출됩니다. renderTracked와 유사하게 debugger event를 전달인자로 받습니다. 이 이벤트는 어떤 작업이 재렌더링을 트리거한 작업과 해당 작업의 대상 객체 및 키를 알려줍니다.

사용법:

<div id="app">
  <button v-on:click="addToCart">Add to cart</button>
  <p>Cart({{ cart }})</p>
</div>

```javascript
const app = Vue.createApp({
  data() {
    return {
      cart: 0
    }
  },
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type })
  },
  methods: {
    addToCart() {
      this.cart += 1
      /* renderTriggered 호출이 발생합니다
        {
          key: "cart",
          target: {
            cart: 1
          },
          type: "set"
        }
      */
    }
  }
})

app.mount('#app')
```




  export 
  다른 곳에서 모듈을 사용하기 위한 내보내기 
  default 
  하나의 컴포넌트만 

 Ionic Framework 
 고품질의 크로스 플랫폼 앱을 제작하기 위한 UI 컴포넌트의 모음이 핵심인 오픈소스 프레임워크


 타입 단언 : as
 TS 컴파일러가 추론이 가능한 타입 추론 기능


? 선택적 프로퍼티
ev?: InfiniteScrollCustomEvent
ev 프로퍼티의 값을 생략할 수 있음.

Promise
비동기 작업이 완료 또는 실패 결과

.then(), .catch() 를 처리 후 다시 Promise를 반환하므로 체이닝이 가능하다.(순차적 작업 처리)

Promise 생성자
새로운 Promise 객체를 생성
Promise를 지원하지 않는 함수를 감쌀 때 사용


.catch()
Promise에 거부 처리기 콜백을 추가하고,
콜백이 호출될 경우 그 반환 값으로 이행하며 호출되지 않을 경우,
즉 이전 Promise가 이행하는 경우 이행한 값을 그대로 사용해 이행하는 새로운 Promise를 반환한다.

.then()
Promise에 이행과 거부 처리기 콜백을 추가하고,
콜백이 호출될 경우 그 반환값으로 이행하며 호출되지 않을 경우(onFulfilled, onRejected 중 상태에 맞는 콜백이 함수가 아닐 경우)
처리된 값과 상태 그대로 처리되는 새로운 Promise를 반환한다.

.finally()
Promise의 이행과 거부 여부에 상관없이 처리될 경우 항상 호출되는 처리기 콜백을 추가하고,
이행한 값 그대로 이행하는 새로운 Promise를 반환한다.

.all()
순회 사능한 객체에 주어진 모든 Promise가 이행된 후, 혹은 Promise가 주어지지 않았을 때, 이행하는 Promise를 반환한다.
주어진 Promise 중 하나가 거부하는 경우, 거부한 프로미스의 이유로 모두 거부한다.



## Vue 문법

### 뷰 디렉티브
HTML 태그 안에 v-접두사를 가지는 모든 속성을 의미
화면의 요소를 더 쉽게 조작하기 위해 사용하는 기능으로 뷰의 데이터 값이 변경되었을 때 화면의 요소들이 변경된 데이터 값에 따라 갱신된다.
화면의 요소를 직접 제어할 필요없이 뷰의 디렉티브를 활용해 화면 요소를 조작한다.

v-bind

```javascript 
const data = { idA: 10 } 
<p v-bind:id="idA">ID binding</p> -> <p id="10">ID binding</p>
//간소화
<p :id="idA">ID binding</p>
```

v-model 
data()의 반환 객체의 데이터


computed
데이터 연산들을 정의하는 영역
data 속성 값의 변화에 따라 자동으로 다시 연산한다.
caching: 동일한 연산을 반복해서 하지 않기 위해 연산의 결과 값을 미리 저장하고 있다가 필요할 때 불러오는 동작(종속 대상)

methods vs computed (캐싱을 하느냐 안하느냐 차이)
복잡 연산일 경우 computed를 사용하는 것이 효과적


watch 
데이터 변화를 감지해 자동으로 특정 로직을 수행한다.
데이터 호출과 같이 시간이 상대적으로 많이 소모되는 비동기 처리에 적합하다.


## 이벤트 처리

```javascript

<div id="app">
  <button v-on:click="clickBtn">클릭</button>
</div>
var vm = new Vue({
  el: '#app',
  methods: {
    clickBtn: function(){
      alert('clicked');
    }
  }
});


<div id="app">
  <button v-on:click="clickBtn(10)">클릭</button>
</div>
var vm = new Vue({
  el: '#app',
  methods: {
    clickBtn: function( num ){
      alert('clicked' + num );
    }
  }
});

<div id="app">
  <button v-on:click="clickBtn">클릭</button>
</div>
var vm = new Vue({
  el: '#app',
  methods: {
    clickBtn: function( event ){
      console.log(event);
    }
  }
});
```



## 라우터 Router

.push()
URL 이동, History 스택에 추가되므로 뒤로가기 버튼 동작 시 이전 URL로 이동

.replace()
URL 이동. 현재 URL을 대체하기 때문에 히스토리 스택 쌓지 않음.

.go()
숫자만큼 뒤로가기 또는 앞으로 가기( 음수: back, 양수: forward)


## Axios 
Vue.js 에서 API 호출 시 사용 모듈 

## Async - Await
async는 현재 사용할 함수를 비동기로 처리하겠다는 선언자.            (함수)
await은 비동기로 순차 처리하기 위해서 수행할 API에 붙이는 선언자.   (API)

async와 await은 반복문에서 데이터가 꼬이기 때문에 반복문 사용 시 
reduce()를 사용해야 한다.


## Vuex

Vue.js의 상태 관리 패턴 + 라이브러리
애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 한다.

### 상태 관리 패턴 

공통 상태의 여러 컴포넌트가 하나의 상태를 바라본다.
