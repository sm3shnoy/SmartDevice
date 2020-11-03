'use strict';

(function () {
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
      }

      if (username) {
        username.value = storageUsername;
        username.focus();
      }
      if (tel) {
        tel.value = storageTel;
      }
      if (comment) {
        comment.value = storageComment;
      }
    });
  }


  if (popupCloseBtn) {
    popupCloseBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('active');
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
        document.querySelector('body').style.overflow = 'hidden';
      }
    }
  });

  if (tel) {
    /* eslint-disable no-unused-vars */
    /* eslint new-cap: [2, {"capIsNewExceptions": ["IMask"]}] */
    var popupPhoneMask = window.IMask(
        tel, {
          mask: '+{7}(000)000-00-00'
        }
    );
    /* eslint-disable no-unused-vars */
  }
})();
