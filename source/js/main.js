'use strict';

(function () {
  var footerToggle = document.querySelectorAll('.footer__toggle');
  var nojs = document.querySelectorAll('.spoiler--nojs');

  nojs.forEach(function (item) {
    item.classList.remove('spoiler--nojs');
  });

  footerToggle.forEach(function (item) {
    var spoiler = item.parentNode.nextElementSibling;
    if (spoiler.classList.contains('spoiler')) {
      item.addEventListener('click', function () {
        spoiler.classList.toggle('spoiler--opened');
      });
    }
  });
})();

(function () {
  const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      t /= d;
      return -c * t* (t - 2) + b;
    }
  }

  const moveTo = new MoveTo({
    ease: 'easeInQuad'
  }, easeFunctions);
  const triggers = document.getElementsByClassName('js-scroll');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
})();
