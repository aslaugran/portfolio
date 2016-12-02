$(document).ready(function() {

	// toggle hamburger menu
	$('.hamburger-menu').click(function() {
		$('.bar').toggleClass('animate');
		$('.nav').toggleClass( 'display' );
	});


	// Hide div on Scroll
	$(window).scroll(function() {

	 	if ($(this).scrollTop()>0) {
			$('.name').fadeOut() && $('.bottom').fadeOut();
		} else {
		 	$('.name').fadeIn() && $('.bottom').fadeIn();
		}
	});

});
