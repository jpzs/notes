(function () {
  var Promise=function(){

  };

  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return Promise;
    });
  } else {
    (function () {
      return this || (0, eval)('this');
    }()).Promise = Promise;
  }
})();