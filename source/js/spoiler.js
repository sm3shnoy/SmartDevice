'use strict';

(function () {
  var footerToggle = document.querySelectorAll('.footer__toggle');
  var noJSStyles = document.querySelectorAll('.spoiler--nojs');

  for (var i = 0; i < noJSStyles.length; i++) {
    noJSStyles[i].classList.remove('spoiler--nojs');
  }

  var spoilerClick = function (button) {
    button.addEventListener('click', function () {
      var spoiler = button.parentNode.nextElementSibling;
      if (spoiler.classList.contains('spoiler')) {
        spoiler.classList.toggle('spoiler--opened');
      }
    });
  };

  for (var j = 0; j < footerToggle.length; j++) {
    spoilerClick(footerToggle[j]);
  }
})();
