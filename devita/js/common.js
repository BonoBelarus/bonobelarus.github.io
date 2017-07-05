document.addEventListener('DOMContentLoaded', function(){
	var gallery = $('#product-card .gallery');
	var preview = $('#product-card .preview');
	
	$(gallery).slick({
		vertical: true,
		centerMode: true,
		slidesToShow: 2,
		asNavFor: $(preview).find('.slider'),
		infinite: false,
		nextArrow: '<div class="next-gallery"><img src="../img/arrow-down.png" alt=""></div>',
		prevArrow: '<div class="prev-gallery"><img src="../img/arrow-down.png" alt=""></div>'
	})
	$(preview).find('.slider').slick({
		asNavFor: $(gallery),
		slidesToShow: 1,
		infinite: false,
		appendArrows: preview.find('.nav'),
		nextArrow: '<div class="next-preview"><img src="../img/preview-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev-preview"><img src="../img/preview-arrow.png" alt=""></div>'
	});

	var total_slides = $('#product-card .preview .item');
	$('#product-card .preview .total').text(total_slides.length);
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
		nextArrow: '<div class="next"><img src="../img/best-of-arrow.png" alt=""></div>',
		prevArrow: '<div class="prev"><img src="../img/best-of-arrow.png" alt=""></div>',
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
});