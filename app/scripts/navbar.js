$(function() {
  function navbarContentToggle() {
    $('.navbar__content').toggleClass('is-closed').toggleClass('is-open');
  }

  function navbarSearchToggle() {
    $('.navbar__search').toggleClass('is-open');
  }

  $('.navbar__toggler').click(function() { navbarContentToggle(); });
  $('.navbar__content__close').click(function() { navbarContentToggle(); });

  $('.navbar__button--search').click(function() { navbarSearchToggle(); });
  $('.navbar__search__close').click(function() { navbarSearchToggle(); });
});
