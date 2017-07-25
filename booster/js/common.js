document.addEventListener('DOMContentLoaded', function(){
	$('.aside-wrap').stick_in_parent({
		offset_top: -50
	});

	$('.to-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});


	$('.country-label-content .items').slick({
		nextArrow: '<div class="slick-next"></div>',
		prevArrow: '<div class="slick-prev"></div>',
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000
	})

	if($('#top-index').length > 0){
		$('#top-index .slider').slick({
			nextArrow: '<div class="slick-next"></div>',
			prevArrow: '<div class="slick-prev"></div>',
			autoplay: true,
			autoplaySpeed: 5000
		});
	}

	var sections = $('main section'),
		nav = $('.aside-wrap'),
		nav_height = nav.outerHeight(),
		wh = $(window).height();
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		var xtra_add = wh/2;
		if($(window).width() < 1024){
			xtra_add = -60
		}
		sections.each(function() {
			var top = $(this).offset().top - nav_height + xtra_add,
			bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {

				nav.find('li').removeClass('active');
				sections.removeClass('active');
				
				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').closest('li').addClass('active');
			}

		});
	});

	function scroll2Sec(e){
		$(e.target).closest('nav').removeClass('active');
		var link = $(e.currentTarget).attr('href');
		var section = $(link);

		var xtra_offset = 0;
		
		$('body,html').animate({
			scrollTop: $(section).offset().top + xtra_offset
		}, 1000);
		e.preventDefault();
	}
	$('nav a').click(scroll2Sec);

	$('#brands .slider').slick({
		slidesToShow: 4,
		arrows: false,
		dots: true
	});

	$('#product .gallery').slick({
		vertical: true,
		slidesToShow: 4,
		asNavFor: $('#product .preview'),
		prevArrow: '<div class="prev-arrow"><img src="img/arrow.png"></div>',
		nextArrow: '<div class="next-arrow"><img src="img/arrow.png"></div>'
	});

	$('#product .preview').slick({
		slidesToShow: 1,
		arrows: false
	});
});