$.fn.scrollTo = function(offset) {
  if (offset === undefined) {
    offset = 0;
  }

  return this.each(function() {
    $('html, body').animate({
      scrollTop: $(this).offset().top - offset
    }, 100);
  });
}
