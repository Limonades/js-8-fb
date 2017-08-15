	$("[data-fancybox]").fancybox({
		loop: true,
		protect: true,
			thumbs : {
				autoStart : true
			}
			
	});


	// $.fancybox.open('<div class="message"><h2>Hello!</h2></div>');




	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  // use filter function if value matches
	  filterValue = filterValue;
	  $('.grid').isotope({ filter: filterValue });
	});

