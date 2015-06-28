(function() {
	'use strict';

	module.exports.register= function(Handlebars, options) {
		Handlebars.registerHelper('indexsection', function(pages, version, section, title) {
			var content = '<div class="category">';
			content += '<h2>' + title + '</h2>';
			content += '<div class="row">';

			pages.sort(function(a, b) {
				if (a.data.sortOrder > b.data.sortOrder) {
					return 1;
				}

				if (a.data.sortOrder < b.data.sortOrder) {
					return -1;
				}

				return 0;
			});

			pages.forEach(function(page) {
				if (page.data.section === section && page.data.version === version) {
					var url = '/docs/' + version + '/' + section + '/' + page.filename;
					content += '<div class="col-md-6 col-lg-4">';
					content += '<h4><a href="' + url + '">' + page.data.title + '</a></h4>';
					content += page.data.desc;
					content += '</div>'; // col
				}
			});

			content += '</div>'; // row
			content += '</div>'; // category

			return new Handlebars.SafeString(content);
		});
	};
}).call(this);
