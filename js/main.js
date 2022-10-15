$(document).ready(function(){
	$('.book-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: false,
	  asNavFor: '.book-slider-nav',
	  arrows: true,
	});
  $('.book-slider-nav').slick({
  	asNavFor: '.book-slider',
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
  	focusOnSelect: true,
  	arrows: false,
  });
});