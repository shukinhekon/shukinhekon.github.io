$(document).ready(function () {
  $('.tos-control').click(function() {
    if ($(this).hasClass('active-mode')) {
      return;
    }
    if ($(this).hasClass('tos-day-mode')) {
      $('body').addClass('day-mode');
      $('.active-mode').removeClass('active-mode');
      $(this).addClass('active-mode');
    } else {
      $('body').removeClass('day-mode');
      $('.active-mode').removeClass('active-mode');
      $(this).addClass('active-mode');
    }
  });
});
