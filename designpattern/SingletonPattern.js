  /**
   * SingletonPattern
   * ()()를 객체에 할당하면 객체를 객체()로 호출하지 않아도 리턴 값으로 자동 할당
   * 
   */

const utils = (function () {
    let instance;
    
    function initialize() {
      return {
        sum: function (a, b) {
          return a + b;
        }
      };
    }
    return {
      getInstance: function () {
        if (!instance) {
          instance = initialize();
        }
        return instance;
      }
    };
  })();
  console.log(utils.getInstance);
  let sum = utils.getInstance().sum(3, 5); // 8
  console.log(sum);


