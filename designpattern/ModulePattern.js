/**
 * 코드에 대한 캡슐화를 제공하기 때문에 더욱 안전한 애플리케이션을 만들 수 있다.
 */

const bookModule = (function() {
  // private
  let title = 'JavaScript';
  let price = 15;
  // public
  return {
    printTitle: function () {
      console.log(title);
    }
  }
})();

bookModule.printTitle(); // JavaScript