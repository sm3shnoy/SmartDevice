(function () {
  var link = document.querySelector('.header__call-btn');

  var popup = document.querySelector('.popup');
  var close = document.querySelector('.popup__close');

  var form = popup.querySelector('.popup__feedback-form');
  var username = document.querySelector('[name=popupName]');
  var tel = document.querySelector('[name=popupPhone]');
  var comment = document.querySelector('[name=popupQuestion]');

  var isStorageSupport = true;
  var storageUsername = '';
  var storageTel = '';
  var storageComment = '';

  try {
    storageUsername = localStorage.getItem('username');
    storageTel = localStorage.getItem('tel');
    storageComment = localStorage.getItem('comment');
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('active');
    username.focus();

    if (username) {
      username.value = storageUsername;
    }
    if (tel) {
      tel.value = storageTel;
    }
    if (comment) {
      comment.value = storageComment;
    }
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('active');
  });

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
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('active')) {
        popup.classList.remove('active');
      }
    }
  });

  var popupPhoneMask = IMask(
    document.getElementById('popupPhone'), {
      mask: '+{7}(000)000-00-00'
    }
  );
})();

