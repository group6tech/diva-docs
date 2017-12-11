$(function() {
  $('#homeSearch').keypress(function(e) {
    if (e.which === 13) {
      return false;
    }
  });

  $('#searchField').on('keyup paste', function(e) {
    var query = $('#searchField').val();

    var $results = $('.home__search--results');
    $results.hide().empty();

    if (query.length < 3) {
      return;
    }

    $.ajax({
      url: 'https://api.swiftype.com/api/v1/public/engines/suggest?q=' + query + '&engine_key=Gbki8CUy_fPQKt2Nyea7',
      dataType: 'jsonp',
      success: function(data) {
        $results.empty();

        if (data.record_count > 0) {
          $.each(data.records.page, function(i, result) {
            $results.append('<li><a href="' + result.url + '">' + result.title + '</a></li>')
          });
        } else {
          $results.append('<li>No results</li>')
        }

        $results.show();
      }
    });
  });
});
