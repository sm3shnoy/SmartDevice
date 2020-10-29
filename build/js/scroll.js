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
