$('.fault__title').click(function() {
  var $fault = $(this).parent(),
    $faultBody = $('.fault__body', $fault),
    $chevron = $('.fault__title i', $fault),
    isOpen = $fault.hasClass('fault--open');

  if (isOpen) {
    $chevron.velocity({ rotateZ: '0deg' }, { duration: 'fast' });
    $faultBody.velocity('slideUp', { duration: 'fast' });
    $fault.removeClass('fault--open');
  } else {
    $chevron.velocity({ rotateZ: '180deg' }, { duration: 'fast' });
    $faultBody.velocity('slideDown', { duration: 'fast' });
    $fault.addClass('fault--open');
  }
});
