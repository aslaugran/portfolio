$(document).ready(function() {

	// To delay page load with PreLoader
	// setTimeout(function(){
	// 	$('#loader').fadeOut('slow', function() {
	// 	$('#overlay').fadeOut('slow');
	// }, 3000);

	// toggle hamburger menu
	$('.hamburger-menu').click(function() {
		$('.bar').toggleClass('animate');
		$('.nav').toggleClass( 'display' );
	});

	// Hide div on Scroll
	$(window).scroll(function() {

	 	if ($(this).scrollTop()>0) {
			$('.bottom').fadeOut();
		} else {
		 	$('.bottom').fadeIn();
		}

		// Nav background turns white on scroll
		if ($(this).scrollTop()>400) {
			$('.header-bg').fadeIn();
		} else {
		 	$('.header-bg').fadeOut();
		}

		// Left sidebar scroll and then fixed
		// if ( $(this).scrollTop() >= $(window).height() ){
		// menu.removeClass('case-study-1').addClass('fixed-sidebar');
		// } else {
		// menu.removeClass('fixed-sidebar').addClass('case-study-1');
		// }

	});



	// Left nav scroll to content

	$("#chapter-1-button").click(function() {
		$('html, body').animate({
				scrollTop: $("#chapter-1").offset().top
		}, 2000);
	});

	$("#chapter-2-button").click(function() {
		$('html, body').animate({
				scrollTop: $("#chapter-2").offset().top
		}, 2000);
	});

	$("#chapter-3-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#chapter-3").offset().top
    }, 2000);
	});

});
