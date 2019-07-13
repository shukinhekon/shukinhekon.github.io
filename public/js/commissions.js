$(document).ready(function() {
  $('.js-button-contact').click(function(e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
    }
  });
  $('#terms').change(function() {
    if ($(this).is(':checked')) {
      $('.js-button-contact').removeClass('disabled');
    } else {
      $('.js-button-contact').addClass('disabled');
    }
  });
});