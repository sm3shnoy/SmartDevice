(function () {
  var footerToggle = document.querySelectorAll('.footer__toggle');
  var nojs = document.querySelectorAll('.spoiler--nojs');

  for (var i = 0; i < nojs.length; i++) {
    nojs[i].classList.remove('spoiler--nojs');
  }

  var addClickListener = function (button) {
    button.addEventListener('click', function () {
      var spoiler = button.parentNode.nextElementSibling;
      if (spoiler.classList.contains('spoiler')) {
          spoiler.classList.toggle('spoiler--opened');
      }
    });
  }

  for (var j = 0; j < footerToggle.length; j++) {
    addClickListener(footerToggle[j]);
  }
})();
