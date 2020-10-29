(function () {
  var phoneField = document.getElementById('phone');
  phoneField.addEventListener('focus', function () {
    phoneField.value = '+7';
  });

  var phoneMask = IMask(
  phoneField, {
    mask: '+{7}(000)000-00-00'
  });
})();
