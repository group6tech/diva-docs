$(function() {
  function navbarContentToggle() {
    $('.navbar__content').toggleClass('is-closed').toggleClass('is-open');
  }

  $('.navbar__toggler').click(function() { navbarContentToggle(); });
  $('.navbar__content__close').click(function() { navbarContentToggle(); });
});
