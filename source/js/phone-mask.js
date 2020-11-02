'use strict';

(function () {
  var phoneMask = IMask(
    document.querySelector('#phone'), {
      mask: '+{7}(000)000-00-00'
    }
  );
})();
