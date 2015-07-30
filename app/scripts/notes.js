$('.note__title', '.note--collapse').click(function() {
  var $note = $(this).parent(),
      $noteBody = $('.note__body', $note),
      isIn = $note.hasClass('in');

  if (isIn) {
    $note.removeClass('in');
    $noteBody.velocity('slideUp', { duration: 'fast' });
  } else {
    $note.addClass('in');
    $noteBody.velocity('slideDown', { duration: 'fast' });
  }
});
