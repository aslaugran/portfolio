$(document).ready(function() {

	// To delay page load with PreLoader
	setTimeout(function(){
		$('#loader').fadeOut('slow', function() {
		$('#overlay').fadeOut('slow');
	});
}, 5000);

	// toggle hamburger menu
	// $('.hamburger-menu').click(function() {
	// 	$('.bar').toggleClass('animate');
	// 	$('.nav').toggleClass( 'display' );
	// });

	// Hide div on Scroll
	$(window).scroll(function() {

	 	if ($(this).scrollTop()>0) {
			$('.bottom').fadeOut();
		} else {
		 	$('.bottom').fadeIn();
		}

		// Nav background turns white on scroll
		if ($(this).scrollTop()>480) {
			$('.header-bg').fadeIn();
		} else {
		 	$('.header-bg').fadeOut();
		}

	});

	// Sticky-kit
	$(function() {
	  $(".sidebar").stick_in_parent({
	    offset_top: 80
	  });
	});

	// Left nav scroll to content
	$("#chapter-1-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".case-study-1").offset().top
			}, 'slow');
	});

	$("#chapter-2-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".case-study-2").offset().top
			}, 'slow');
	});

	$("#chapter-3-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".case-study-3").offset().top
			}, 'slow');
	});

});
