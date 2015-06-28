(function() {
	'use strict';

	module.exports.register= function(Handlebars) {
		Handlebars.registerHelper('sidetoc', function(pages, currentPage, section, title) {
			var currentUrl = '/docs/' + currentPage.version + '/' + currentPage.section + '/' + currentPage.filename;
			var content = '<h3>' + title + '</h3>';
			content += '<ul class="nav">';

			pages = pages.sort(function(a, b) {
				if (a.data.sortOrder > b.data.sortOrder) {
					return 1;
				}

				if (a.data.sortOrder < b.data.sortOrder) {
					return -1;
				}

				return 0;
			});

			pages.forEach(function(page) {
				if (page.data.section === section && page.data.version === currentPage.version) {
					var url = '/docs/' + currentPage.version + '/' + section + '/' + page.filename;
					var _class = (currentUrl === url) ? 'active' : '';
					content += '<li class="' + _class + '">';
					content += '<a href="' + url + '">' + page.data.title + '</a>';
					content += '</li>';
				}
			});

			content += '</ul>';

			return new Handlebars.SafeString(content);
		});
	};
}).call(this);
