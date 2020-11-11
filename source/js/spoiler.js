'use strict';

(function () {
  var spoilerToggle = document.querySelectorAll('.footer__toggle');
  var spoilerNoJs = document.querySelectorAll('.spoiler--nojs');

  for (var i = 0; i < spoilerNoJs.length; i++) {
    spoilerNoJs[i].classList.remove('spoiler--nojs');
  }

  function closeAllSpoilers() {
    for (var j = 0; j < spoilerToggle.length; j++) {
      var spoiler = spoilerToggle[j].nextElementSibling;
      spoiler.classList.remove('spoiler--opened');
    }
  }

  for (var g = 0; g < spoilerToggle.length; g++) {
    spoilerToggle[g].addEventListener('click', function () {
      var spoiler = this.nextElementSibling;

      if (spoiler.classList.contains('spoiler--opened')) {
        spoiler.classList.remove('spoiler--opened');

        return false;
      }

      closeAllSpoilers();

      spoiler.classList.add('spoiler--opened');

      return true;
    });
  }
})();
