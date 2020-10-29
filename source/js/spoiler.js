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
