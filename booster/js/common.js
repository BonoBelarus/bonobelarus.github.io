document.addEventListener('DOMContentLoaded', function(){
	$('.aside-wrap').stick_in_parent({
		offset_top: -50
	});

	$('.country-label-content .items').slick({
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000
	})

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
});