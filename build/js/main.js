
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

'use strict';

(function () {
  var overlay = document.querySelector('.overlay');
  var link = document.querySelector('.header__call-btn');

  var popup = document.querySelector('.popup');
  var popupCloseBtn = document.querySelector('.popup__close');

  var form = document.querySelector('.popup__feedback-form');
  var username = document.querySelector('#popup-name');
  var tel = document.querySelector('#popup-phone');
  var comment = document.querySelector('#popup-question');

  var isStorageSupport = true;
  var storageUsername = '';
  var storageTel = '';
  var storageComment = '';

  var ESC_KEYCODE = 27;


  try {
    storageUsername = localStorage.getItem('username');
    storageTel = localStorage.getItem('tel');
    storageComment = localStorage.getItem('comment');
  } catch (err) {
    isStorageSupport = false;
  }

  if (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      document.querySelector('body').style.overflow = 'hidden';
      if (popup) {
        popup.classList.add('active');
        overlay.classList.add('active');
      }


      if (username) {
        username.value = storageUsername;
        username.focus();
      }
      if (tel) {
        tel.value = storageTel;
      }
      if (comment) {
        comment.value = (storageComment === null ? '' : storageComment);
      }
    });
  }


  if (popupCloseBtn) {
    popupCloseBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('active');
      overlay.classList.remove('active');
      document.querySelector('body').style.overflow = 'auto';
    });
  }

  if (form) {
    form.addEventListener('submit', function (evt) {
      if (!username.value || !tel.value || !comment.value) {
        evt.preventDefault();
        return false;
      } else {
        if (isStorageSupport) {
          localStorage.setItem('username', username.value);
          localStorage.setItem('tel', tel.value);
          localStorage.setItem('comment', comment.value);
        }
      }

      return false;
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      if (popup.classList.contains('active')) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('body').style.overflow = 'hidden';
      }
    }
  });

  if (overlay) {
    overlay.addEventListener('click', function () {
      if (popup.classList.contains('active')) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.querySelector('body').style.overflow = 'auto';
      }
    });
  }

  if (tel) {
    /* eslint-disable no-unused-vars */
    var popupPhoneMask = new window.IMask(
        tel, {
          mask: '+{7}(000)000-00-00'
        }
    );
    /* eslint-disable no-unused-vars */
  }
})();

'use strict';

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

  var moveTo = new window.MoveTo({
    ease: 'easeInQuad'
  }, easeFunctions);
  var triggers = document.querySelectorAll('.js-scroll');
  if (triggers) {
    for (var i = 0; i < triggers.length; i++) {
      moveTo.registerTrigger(triggers[i]);
    }
  }
})();

'use strict';

(function () {
  var footerToggle = document.querySelectorAll('.footer__toggle');
  var spoilerNoJs = document.querySelectorAll('.spoiler--nojs');

  for (var i = 0; i < spoilerNoJs.length; i++) {
    spoilerNoJs[i].classList.remove('spoiler--nojs');
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
