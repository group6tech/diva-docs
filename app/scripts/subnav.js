//
// Subnav
// =============================================================================

$('.subnav__toggle').click(function(e) {
  e.preventDefault();

  var target = $(this).attr('href');
  var $element = $(target);

  if (($element).hasClass('in')) {
    $(this).velocity({ rotateZ: '0deg' }, 'fast');
    $element.velocity('slideUp', { duration: 'fast' }).removeClass('in');
  } else {
    $(this).velocity({ rotateZ: '180deg' }, 'fast');
    $element.velocity('slideDown', { duration: 'fast' }).addClass('in');
  }
});
