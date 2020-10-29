(function () {
  var easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    }
  };

  var moveTo = new MoveTo ({
    ease: 'easeInQuad'
  }, easeFunctions);
  var triggers = document.getElementsByClassName('js-scroll');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
})();

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
  var phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });
})();
