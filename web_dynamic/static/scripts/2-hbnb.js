$('document').ready(function () {
  let amenities = {};
  $('input[type="checkbox"]').on('change', function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
        delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status_code) {
        if (data.status === 'OK') {
	  $('div#api_status').addClass('available');
	} else {
	    $('div#api_status').removeClass('available');
	}
  })
});
