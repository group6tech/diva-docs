$(function() {
  $('.category-list__open').click(function(e) {
    e.preventDefault();
    $(this).closest('.category-list').addClass('is-open');
  });

  $('.category-list__close').click(function(e) {
    e.preventDefault();
    $(this).closest('.category-list').removeClass('is-open');
  });

  $('.category-list__link').click(function() {
    $(this).closest('.category-list').removeClass('is-open');
  });
});
