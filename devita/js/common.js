document.addEventListener('DOMContentLoaded', function(){
	var gallery = $('#product-card .gallery');
	var preview = $('#product-card .preview');
	
	$(gallery).slick({
		vertical: true,
		centerMode: true,
		slidesToShow: 2,
		asNavFor: $(preview).find('.slider'),
		infinite: false,
		nextArrow: '<div class="next-gallery"><img src="img/arrow-down.png" alt=""></div>',
		prevArrow: '<div class="prev-gallery"><img src="img/arrow-down.png" alt=""></div>'
	})
	$(preview).find('.slider').slick({
		asNavFor: $(gallery),
		slidesToShow: 1,
		infinite: false,
		appendArrows: preview.find('.nav'),
		nextArrow: '<div class="next-preview"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev-preview"><img src="img/preview-arrow.png" alt=""></div>'
	});

	var total_slides_product = $('#product-card .preview .item');
	$('#product-card .preview .total').text(total_slides_product.length);
	$(preview).find('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('#product-card .preview .current').text(currentSlide+1);
	});

	var descr_and_rev_Slider = $('#descr-and-rev .slider');
	descr_and_rev_Slider.slick({
		fade: true
	});

	var tabs = $('#descr-and-rev .tabs li');
	tabs.click(function(e){
		var slide = $(e.currentTarget).index();
		$(descr_and_rev_Slider).slick('slickGoTo', slide);

		if($(e.currentTarget).hasClass('active')){
			return;
		}else{
			tabs.removeClass('active')
			$(e.currentTarget).addClass('active');
		}
	});

	var best_of_slider = $('#best-of .slider')
	best_of_slider.slick({
		slidesToShow: 2,
		variableWidth: true,
		appendArrows: $('#best-of .nav'),
		nextArrow: '<div class="next"><img src="img/best-of-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/best-of-arrow.png" alt=""></div>',
		dots: true
	});

	var size_list = $('#product-card .size li');
	size_list.click(function(e){
		if($(e.currentTarget).hasClass('active')){
			return;
		}else{
			size_list.removeClass('active');
			$(e.currentTarget).addClass('active');
		}
	});

	var base_price = +$('#product-card .price .num').text();
	$('#product-card .count .minus, #product-card .count .plus').click(function(e){
		var price = $('#product-card .price .num');
		var price_num = +price.text();
		var current_count = $('#product-card .count .current');
		var current_num = +current_count.text()
		var plus = $(e.currentTarget).hasClass('plus');
		var afterPrice = price_num;

		if(plus === false && current_num <= 1){
			return;
		}

		switch(plus){
			case true:
				current_count.text(current_num + 1);
				afterPrice += base_price;
			break;
			case false:
				current_count.text(current_num - 1);
				afterPrice -= base_price;
		}
		price.text(afterPrice)
	});

	var about_slider = $('#about-slider .slider');
	about_slider.slick({
		slidesToShow: 1,
		nextArrow: '<div class="next"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/preview-arrow.png" alt=""></div>'
	});

	var famous_slider = $('#famous-devita .slider');
	var total_slides_product = $('#famous-devita .slider .item');
	$('#famous-devita .total').text(total_slides_product.length);
	famous_slider.slick({
		infinite: false,
		appendArrows: $('#famous-devita .nav'),
		nextArrow: '<div class="next"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/preview-arrow.png" alt=""></div>'
	});
	famous_slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('#famous-devita .current').text(currentSlide+1);
	});

	var article_slider = $('#article .slider');
	article_slider.slick({
		infinite: false,
		dots: true,
		nextArrow: '<div class="next"><img src="img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="img/preview-arrow.png" alt=""></div>'
	});

	$('#faq .item .caption').click(function(e){
		if($(e.currentTarget).closest('li').hasClass('active') == true){
			$(e.currentTarget).closest('li').removeClass('active').find('.hidden-content').slideUp();
		}else{
			$(e.currentTarget).closest('ul').find('li').removeClass('active').find('.hidden-content').slideUp();
			$(e.currentTarget).closest('li').addClass('active').find('.hidden-content').slideDown();
		}
	});

	var sections = $('#faq .item'),
		nav = $('aside nav'),
		nav_height = nav.outerHeight(),
		wh = $(window).height();
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		var xtra_add = 0;
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

	$('aside').stick_in_parent({
		offset_top: -50
	});

	function scroll2Sec(e){
		$(e.target).closest('nav').removeClass('active');
		var link = $(e.currentTarget).attr('href');
		var section = $(link);

		var xtra_offset = -50;
		
		$('body,html').animate({
			scrollTop: $(section).offset().top + xtra_offset
		}, 1000);
		e.preventDefault();
	}

	$('aside nav a').click(scroll2Sec);
});