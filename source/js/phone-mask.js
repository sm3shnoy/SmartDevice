
'use strict';

(function () {
  var phone = document.querySelector('#phone');

  if (phone) {
    /* eslint-disable no-unused-vars */
    var phoneMask = new window.IMask(
        phone, {
          mask: '+{7}(000)000-00-00'
        }
    );
    /* eslint-disable no-unused-vars */
  }
})();
