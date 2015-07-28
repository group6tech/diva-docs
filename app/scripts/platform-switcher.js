$(function() {
	function createCookie(name, value, days) {
		var expires = '';

		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toGMTString();
		}

		document.cookie = name + '=' + value + expires + '; path=/';
	}

	function readCookie(name) {
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nameEQ) === 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	}

  function getOS() {
  	var os = 'unknown';
  	if (navigator.appVersion.indexOf('Win') !== -1) os = 'win';
  	if (navigator.appVersion.indexOf('Mac') !== -1) os = 'mac';
  	if (navigator.appVersion.indexOf('Linux') !== -1) os = 'tux';
    return os;
  }

	function setOS(os) {
		var platformClass = 'platform-' + os;
		if ($('body').hasClass(platformClass) === false) {
			$('body')
				.removeClass('platform-mac')
				.removeClass('platform-tux')
				.removeClass('platform-win')
				.addClass('platform-' + os);
			createCookie('os', os);
		}
	}

	$('a', '.platform-switcher').click(function(e) {
		e.preventDefault();
		var platform = $(this).data('platform');
		setOS(platform);
	});

  var platform = readCookie('os');
	if (platform === null) platform = getOS();
	setOS(platform);
});
