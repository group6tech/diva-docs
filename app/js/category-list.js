$(function() {
  $('.category-list__open').click(function(e) {
    e.preventDefault();
    $(this).closest('.category-list').addClass('is-open');
  });

  $('.category-list__close').click(function(e) {
    e.preventDefault();
    $(this).closest('.category-list').removeClass('is-open');
  });

  $('.category-list__link').click(function(e) {
    e.preventDefault();

    if ($(this).parent().hasClass('active') !== true) {
      $('.active', $(this).closest('.category-list')).removeClass('active');
      $(this).parent().addClass('active');
    }

    var target = $(this).attr('href');
    $(target).scrollTo(72);

    $(this).closest('.category-list').removeClass('is-open');
  });
});
