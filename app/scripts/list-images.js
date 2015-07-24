/*global $:true */

//
// List Images
// Display a larger version of an image when clicked
// =============================================================================

$('ol img').click(function() {
	// Delete any other open image
	$('.full-image').remove();

	// Grab the properties we need
	var $this = $(this),
			url = $this.attr('src'),
			alt = $this.attr('alt'),
			$li = $this.closest('li');

	// Declare the new image
	var $fullImage = $('<div></div>')
		.addClass('full-image')
		.append('<img src="' + url + '" alt="' + alt + '" />')
		.append('<i class="fa fa-times"></i>');

	// Close it on click
	$fullImage.click(function(e) {
		e.preventDefault();
		$(this).remove();
	});

	// Append to the list item
	$li.append($fullImage);
});
